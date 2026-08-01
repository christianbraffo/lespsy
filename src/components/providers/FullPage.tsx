"use client";

import {
  Children,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Header } from "@/components/layout/Header";

export const SECTION_IDS = [
  "top",
  "manifeste",
  "savoir-faire",
  "selection",
  "approche",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

type FullPageContextValue = {
  index: number;
  sectionId: SectionId;
  count: number;
  isAnimating: boolean;
  goTo: (target: number | SectionId) => void;
  next: () => void;
  prev: () => void;
};

const FullPageContext = createContext<FullPageContextValue | null>(null);

export function useFullPage() {
  const ctx = useContext(FullPageContext);
  if (!ctx) {
    throw new Error("useFullPage must be used within FullPage");
  }
  return ctx;
}

export function useFullPageOptional() {
  return useContext(FullPageContext);
}

const ease = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.95;

function resolveIndex(target: number | SectionId) {
  if (typeof target === "number") return target;
  const i = SECTION_IDS.indexOf(target);
  return i >= 0 ? i : 0;
}

export function FullPage({ children }: { children: ReactNode }) {
  const panels = Children.toArray(children);
  const count = panels.length;
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animatingRef = useRef(false);
  const touchY = useRef<number | null>(null);
  const wheelLock = useRef(0);

  const goTo = useCallback(
    (target: number | SectionId) => {
      const nextIndex = Math.max(0, Math.min(count - 1, resolveIndex(target)));
      if (nextIndex === index || animatingRef.current) return;

      animatingRef.current = true;
      setIsAnimating(true);
      setIndex(nextIndex);

      window.setTimeout(
        () => {
          animatingRef.current = false;
          setIsAnimating(false);
        },
        reduce ? 0 : DURATION * 1000 + 40,
      );
    },
    [count, index, reduce],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    document.documentElement.classList.add("fullpage-lock");
    document.body.classList.add("fullpage-lock");
    return () => {
      document.documentElement.classList.remove("fullpage-lock");
      document.body.classList.remove("fullpage-lock");
    };
  }, []);

  useEffect(() => {
    const id = SECTION_IDS[index];
    if (id && window.location.hash !== `#${id}`) {
      history.replaceState(null, "", `#${id}`);
    }
  }, [index]);

  useEffect(() => {
    const fromHash = () => {
      const hash = window.location.hash.replace("#", "") as SectionId;
      if (SECTION_IDS.includes(hash)) {
        const i = SECTION_IDS.indexOf(hash);
        if (i !== index && !animatingRef.current) {
          setIndex(i);
        }
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented) return;
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(count - 1);
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (animatingRef.current) {
        e.preventDefault();
        return;
      }
      const now = Date.now();
      if (now - wheelLock.current < 900) {
        e.preventDefault();
        return;
      }
      if (Math.abs(e.deltaY) < 12) return;
      e.preventDefault();
      wheelLock.current = now;
      if (e.deltaY > 0) next();
      else prev();
    };

    const onTouchStart = (e: TouchEvent) => {
      touchY.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (touchY.current == null || animatingRef.current) return;
      const endY = e.changedTouches[0]?.clientY ?? touchY.current;
      const delta = touchY.current - endY;
      touchY.current = null;
      if (Math.abs(delta) < 50) return;
      if (delta > 0) next();
      else prev();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [count, goTo, next, prev]);

  const value = useMemo<FullPageContextValue>(
    () => ({
      index,
      sectionId: SECTION_IDS[index] ?? "top",
      count,
      isAnimating,
      goTo,
      next,
      prev,
    }),
    [count, goTo, index, isAnimating, next, prev],
  );

  return (
    <FullPageContext.Provider value={value}>
      <Header />
      <div className="fullpage-root relative h-[100svh] w-full overflow-hidden bg-[#0b0b0b]">
        {panels.map((panel, i) => (
          <motion.section
            key={SECTION_IDS[i] ?? i}
            aria-hidden={i !== index}
            className="fullpage-panel absolute inset-0 overflow-hidden"
            style={{ zIndex: 10 + i }}
            initial={false}
            animate={{ y: i <= index ? "0%" : "100%" }}
            transition={{
              duration: reduce ? 0 : DURATION,
              ease,
            }}
          >
            <div className="h-full w-full overflow-hidden">{panel}</div>
          </motion.section>
        ))}

        <div className="pointer-events-none fixed top-1/2 right-4 z-[80] hidden -translate-y-1/2 flex-col gap-3 md:right-6 md:flex">
          {SECTION_IDS.slice(0, count).map((id, i) => (
            <button
              key={id}
              type="button"
              aria-label={`Aller à ${id}`}
              onClick={() => goTo(i)}
              className="pointer-events-auto group flex h-4 w-4 items-center justify-center"
            >
              <span
                className={`block rounded-full transition-all duration-500 ${
                  i === index
                    ? "h-2.5 w-2.5 bg-psy-red"
                    : "h-1.5 w-1.5 bg-psy-white/35 group-hover:bg-psy-white/70"
                }`}
              />
            </button>
          ))}
        </div>

        {index < count - 1 && (
          <button
            type="button"
            onClick={next}
            className="fixed bottom-6 left-1/2 z-[80] hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.28em] text-psy-white/45 uppercase transition-colors hover:text-psy-white md:flex"
            aria-label="Section suivante"
          >
            <span>Bas</span>
            <span className="block h-8 w-px origin-top animate-pulse bg-psy-white/40" />
          </button>
        )}
      </div>
    </FullPageContext.Provider>
  );
}
