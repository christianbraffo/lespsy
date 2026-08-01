"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { useFullPageOptional } from "@/components/providers/FullPage";

const projects = [
  {
    title: "Édition rouge",
    discipline: "Impression & finitions",
    image: "/brand/logo-full-red.jpg",
  },
  {
    title: "Identité noire",
    discipline: "Design graphique",
    image: "/brand/wordmark-black.jpg",
  },
  {
    title: "Signal print",
    discipline: "Fabrication PLV",
    image: "/brand/mask-red.jpg",
  },
];

export function Work() {
  const fullpage = useFullPageOptional();

  return (
    <div className="flex h-full flex-col justify-center overflow-hidden bg-psy-white px-5 py-24 md:px-10">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <p className="mb-4 text-[11px] font-medium tracking-[0.28em] text-psy-muted uppercase">
            Réalisations
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display max-w-3xl text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.03em] text-psy-black">
            Des pièces qui tiennent.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={0.08 * index}>
              <button
                type="button"
                onClick={() => fullpage?.goTo("contact")}
                className="group w-full text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-psy-black">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.04 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <p className="mt-4 text-[11px] tracking-[0.2em] text-psy-muted uppercase">
                  0{index + 1} — {project.discipline}
                </p>
                <h3 className="font-display mt-2 text-2xl font-bold tracking-[-0.02em] text-psy-black">
                  {project.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] text-psy-black/70 uppercase">
                  Devis
                  <span className="block h-px w-8 bg-psy-red transition-all duration-500 group-hover:w-14" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
