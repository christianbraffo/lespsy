"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowCta } from "@/components/ui/ArrowCta";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const watermarkX = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#0b0b0b]"
    >
      {/* Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/2 h-[55vh] w-[55vw] -translate-x-1/2 rounded-full bg-psy-red/10 blur-[120px]"
      />

      {/* Watermark */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[18%] z-0 flex justify-center overflow-hidden md:top-[14%]"
        style={reduce ? undefined : { x: watermarkX }}
      >
        <motion.span
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.1, ease }}
          className="font-display select-none text-[clamp(5.5rem,22vw,18rem)] leading-none font-extrabold tracking-[-0.06em] text-transparent uppercase"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.08)",
          }}
        >
          LES&nbsp;PSY
        </motion.span>
      </motion.div>

      {/* Portrait */}
      <motion.div
        className="absolute inset-x-0 top-[8%] z-10 mx-auto flex h-[68vh] max-h-[760px] w-full max-w-[560px] items-end justify-center md:top-[6%] md:h-[72vh]"
        style={reduce ? undefined : { y: imageY, scale: imageScale }}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.15, delay: 0.25, ease }}
          className="relative h-full w-full"
        >
          <Image
            src="/brand/hero-portrait.png"
            alt="Portrait créatif LES PSY"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 560px"
            className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(209,36,17,0.18)]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b0b0b] to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom content */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-20"
        style={reduce ? undefined : { opacity: contentOpacity }}
      >
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 pb-10 pt-8 md:grid-cols-2 md:items-end md:gap-16 md:px-8 md:pb-14 lg:px-10 lg:pb-16">
          <div>
            <h1 className="font-display text-[clamp(2.4rem,5.8vw,4.75rem)] leading-[0.95] font-bold tracking-[-0.04em] text-psy-white">
              <span className="line-reveal block">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.95, delay: 0.45, ease }}
                >
                  Pas juste du design.
                </motion.span>
              </span>
              <span className="line-reveal mt-1 block md:mt-2">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.95, delay: 0.58, ease }}
                >
                  Une révolution de marque.
                </motion.span>
              </span>
            </h1>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease }}
            className="md:justify-self-end md:text-right"
          >
            <p className="max-w-sm text-[14px] leading-relaxed text-psy-white/70 md:ml-auto md:text-[15px]">
              Nous aidons les marques à créer des identités magnétiques et des
              récits qui font parler — et agir.
            </p>
            <ArrowCta
              href="#contact"
              label="Démarrer un projet"
              variant="red"
              className="mt-6"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
