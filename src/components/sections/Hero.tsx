"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowCta } from "@/components/ui/ArrowCta";
import { DanceText, DanceWords } from "@/components/ui/DanceText";
import { useFullPageOptional } from "@/components/providers/FullPage";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const fullpage = useFullPageOptional();

  return (
    <div className="relative isolate h-full overflow-hidden bg-[#0b0b0b]">
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

      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/2 h-[55vh] w-[55vw] -translate-x-1/2 rounded-full bg-psy-red/10 blur-[120px]"
      />

      <div className="pointer-events-none absolute inset-x-0 top-[16%] z-0 flex justify-center overflow-hidden md:top-[12%]">
        <motion.span
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.1, ease }}
          className="font-display select-none text-[clamp(5rem,20vw,16rem)] leading-none font-extrabold tracking-[-0.06em] text-transparent uppercase"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}
        >
          LES&nbsp;PSY
        </motion.span>
      </div>

      <motion.div
        className="absolute inset-x-0 top-[6%] z-10 mx-auto flex h-[62vh] max-h-[680px] w-full max-w-[520px] items-end justify-center md:top-[5%]"
        initial={reduce ? false : { opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.15, delay: 0.25, ease }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/brand/hero-portrait.png"
            alt="Portrait créatif LES PSY"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 520px"
            className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(209,36,17,0.18)]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b0b0b] to-transparent" />
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-20 pb-14 md:pb-16">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-5 md:grid-cols-2 md:items-end md:gap-16 md:px-8 lg:px-10">
          <DanceText
            as="h1"
            text={"Design.\nFabrication.\nImpression."}
            delay={0.35}
            className="font-display text-[clamp(2.2rem,5.2vw,4.4rem)] leading-[1.02] font-bold tracking-[-0.04em] text-psy-white"
          />

          <div className="md:justify-self-end md:text-right">
            <DanceWords
              text="Studio créatif : on conçoit, on fabrique, on imprime. De l’idée au support fini — net, tactile, mémorable."
              delay={0.95}
              className="max-w-sm text-[14px] leading-relaxed text-psy-white/70 md:ml-auto md:text-[15px]"
            />
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 1.45,
                type: "spring",
                stiffness: 280,
                damping: 18,
              }}
            >
              <ArrowCta
                href="#contact"
                label="Demander un devis"
                variant="red"
                className="mt-5"
                onClick={(e) => {
                  e.preventDefault();
                  fullpage?.goTo("contact");
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
