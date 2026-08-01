"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    title: "Design",
    description:
      "Identité visuelle, supports print, packaging, signalétique — une direction nette et cohérente.",
  },
  {
    title: "Fabrication",
    description:
      "Prototypes, découpe, façonnage, assemblages. On passe du fichier à la pièce réelle.",
  },
  {
    title: "Impression",
    description:
      "Offset, numérique, grand format. Couleurs maîtrisées, tirages propres, délais tenus.",
  },
  {
    title: "Finitions",
    description:
      "Vernis, pelliculage, dorure, gaufrage, reliure — le détail qui change tout.",
  },
  {
    title: "Objets & PLV",
    description:
      "Kakémonos, stands, goodies, éditions limitées. Du support qui s’installe dans l’espace.",
  },
];

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="savoir-faire"
      className="surface-grain relative bg-psy-black py-28 text-psy-white md:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="mb-6 text-[11px] font-medium tracking-[0.28em] text-psy-white/45 uppercase">
            Savoir-faire
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display max-w-3xl text-[clamp(2rem,4.8vw,3.75rem)] leading-[1.05] font-bold tracking-[-0.03em]">
            De l’écran à la{" "}
            <span className="text-psy-red italic">matière.</span>
          </h2>
        </Reveal>

        <ul className="mt-16 border-t border-psy-white/10 md:mt-20">
          {services.map((service, index) => {
            const isActive = active === index;
            return (
              <Reveal key={service.title} delay={0.05 * index}>
                <li
                  className="border-b border-psy-white/10"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                >
                  <button
                    type="button"
                    className="group flex w-full flex-col gap-3 py-7 text-left md:flex-row md:items-baseline md:justify-between md:gap-10 md:py-9"
                  >
                    <div className="flex items-baseline gap-5 md:gap-8">
                      <span className="text-[11px] tracking-[0.2em] text-psy-red">
                        0{index + 1}
                      </span>
                      <span
                        className={`font-display text-[clamp(1.6rem,3.5vw,2.75rem)] leading-none font-semibold tracking-[-0.02em] transition-colors duration-500 ${
                          isActive ? "text-psy-white" : "text-psy-white/45"
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>

                    <div className="relative min-h-[3.2rem] max-w-md overflow-hidden md:text-right">
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.p
                            key={service.title}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{
                              duration: 0.45,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-sm leading-relaxed text-psy-white/55 md:text-[15px]"
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
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
