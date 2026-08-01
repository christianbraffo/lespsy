"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    title: "Design",
    description:
      "Identité visuelle, supports print, packaging, signalétique — direction nette.",
  },
  {
    title: "Fabrication",
    description:
      "Prototypes, découpe, façonnage. Du fichier à la pièce réelle.",
  },
  {
    title: "Impression",
    description:
      "Offset, numérique, grand format. Couleurs maîtrisées, tirages propres.",
  },
  {
    title: "Finitions",
    description:
      "Vernis, pelliculage, dorure, gaufrage — le détail qui change tout.",
  },
  {
    title: "Objets & PLV",
    description:
      "Kakémonos, stands, goodies, éditions. Du support dans l’espace.",
  },
];

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex h-full flex-col justify-center overflow-hidden bg-psy-black px-5 py-24 text-psy-white md:px-10">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <p className="mb-4 text-[11px] font-medium tracking-[0.28em] text-psy-white/45 uppercase">
            Savoir-faire
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display max-w-3xl text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.03em]">
            De l’écran à la{" "}
            <span className="text-psy-red italic">matière.</span>
          </h2>
        </Reveal>

        <ul className="mt-10 border-t border-psy-white/10">
          {services.map((service, index) => {
            const isActive = active === index;
            return (
              <li
                key={service.title}
                className="border-b border-psy-white/10"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <button
                  type="button"
                  className="group flex w-full flex-col gap-2 py-4 text-left md:flex-row md:items-baseline md:justify-between md:gap-10 md:py-5"
                >
                  <div className="flex items-baseline gap-5 md:gap-8">
                    <span className="text-[11px] tracking-[0.2em] text-psy-red">
                      0{index + 1}
                    </span>
                    <span
                      className={`font-display text-[clamp(1.35rem,2.8vw,2.2rem)] leading-none font-semibold tracking-[-0.02em] transition-colors duration-500 ${
                        isActive ? "text-psy-white" : "text-psy-white/45"
                      }`}
                    >
                      {service.title}
                    </span>
                  </div>

                  <div className="relative min-h-[2.6rem] max-w-md overflow-hidden md:text-right">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.p
                          key={service.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="text-sm leading-relaxed text-psy-white/55"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
                <motion.div
                  className="h-px origin-left bg-psy-red"
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
