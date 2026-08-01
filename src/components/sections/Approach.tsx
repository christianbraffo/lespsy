"use client";

import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Brief",
    text: "Besoin, contraintes, volumes, délais. On cadre avant de créer.",
  },
  {
    number: "02",
    title: "Création",
    text: "Direction artistique, maquettes, validation. Fichier prêt à produire.",
  },
  {
    number: "03",
    title: "Production",
    text: "Fabrication, impression, contrôle qualité. Livraison du support fini.",
  },
];

export function Approach() {
  return (
    <div className="surface-grain flex h-full flex-col justify-center overflow-hidden bg-psy-white px-5 py-24 md:px-10">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <p className="mb-4 text-[11px] font-medium tracking-[0.28em] text-psy-muted uppercase">
            Process
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display max-w-2xl text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.03em] text-psy-black">
            Trois étapes.{" "}
            <span className="text-psy-red italic">Zéro flou.</span>
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-10 border-t border-psy-black/10 pt-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={0.1 * index}>
              <li>
                <span className="font-display text-sm font-semibold tracking-[0.18em] text-psy-red">
                  {step.number}
                </span>
                <h3 className="font-display mt-4 text-3xl font-bold tracking-[-0.02em] text-psy-black">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-psy-black/60">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  );
}
