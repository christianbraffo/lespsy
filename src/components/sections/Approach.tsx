"use client";

import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Écouter",
    text: "Immersion, lecture du contexte, détection des non-dits. On commence par comprendre avant de produire.",
  },
  {
    number: "02",
    title: "Décrypter",
    text: "Insights, tension créative, territoire. On isole le signal qui fera basculer la perception.",
  },
  {
    number: "03",
    title: "Faire parler",
    text: "Forme, récit, diffusion. Une expression nette qui traverse les supports sans se diluer.",
  },
];

export function Approach() {
  return (
    <section
      id="approche"
      className="surface-grain relative bg-psy-white py-28 md:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="mb-6 text-[11px] font-medium tracking-[0.28em] text-psy-muted uppercase">
            Approche
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display max-w-2xl text-[clamp(2rem,4.8vw,3.75rem)] leading-[1.05] font-bold tracking-[-0.03em] text-psy-black">
            Trois temps.{" "}
            <span className="text-psy-red italic">Zéro flou.</span>
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-12 border-t border-psy-black/10 pt-14 md:mt-20 md:grid-cols-3 md:gap-10 md:pt-16">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={0.1 * index}>
              <li>
                <span className="font-display text-sm font-semibold tracking-[0.18em] text-psy-red">
                  {step.number}
                </span>
                <h3 className="font-display mt-5 text-3xl font-bold tracking-[-0.02em] text-psy-black md:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-psy-black/60">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
