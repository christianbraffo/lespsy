"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const projects = [
  {
    title: "Double face",
    discipline: "Identité visuelle",
    image: "/brand/logo-full-red.jpg",
    tone: "red" as const,
  },
  {
    title: "Lecture nocturne",
    discipline: "Brand content",
    image: "/brand/wordmark-black.jpg",
    tone: "black" as const,
  },
  {
    title: "Signal rouge",
    discipline: "Campagne",
    image: "/brand/mask-red.jpg",
    tone: "white" as const,
  },
];

export function Work() {
  return (
    <section id="selection" className="bg-psy-white">
      <div className="mx-auto max-w-[1400px] px-5 pt-28 md:px-10 md:pt-36 lg:pt-44">
        <Reveal>
          <p className="mb-6 text-[11px] font-medium tracking-[0.28em] text-psy-muted uppercase">
            Sélection
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display max-w-3xl text-[clamp(2rem,4.8vw,3.75rem)] leading-[1.05] font-bold tracking-[-0.03em] text-psy-black">
            Des signes qui restent.
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 md:mt-20">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`group relative overflow-hidden ${
              project.tone === "black"
                ? "bg-psy-black text-psy-white"
                : project.tone === "red"
                  ? "bg-psy-red text-psy-white"
                  : "bg-psy-white text-psy-black"
            }`}
          >
            <a
              href="#contact"
              className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-24"
            >
              <Reveal
                delay={0.05}
                className={index % 2 === 1 ? "md:order-2" : undefined}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.03 }}
                    transition={{
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </Reveal>

              <Reveal
                delay={0.12}
                className={index % 2 === 1 ? "md:order-1" : undefined}
              >
                <p
                  className={`text-[11px] font-medium tracking-[0.24em] uppercase ${
                    project.tone === "white"
                      ? "text-psy-muted"
                      : "text-psy-white/55"
                  }`}
                >
                  Projet 0{index + 1} — {project.discipline}
                </p>
                <h3 className="font-display mt-5 text-[clamp(2.2rem,5vw,4rem)] leading-none font-bold tracking-[-0.03em]">
                  {project.title}
                </h3>
                <span className="mt-8 inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase">
                  Découvrir
                  <span
                    className={`block h-px w-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-16 ${
                      project.tone === "white" ? "bg-psy-red" : "bg-psy-white"
                    }`}
                  />
                </span>
              </Reveal>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
