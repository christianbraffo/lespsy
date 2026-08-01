"use client";

import Image from "next/image";
import { Reveal, RevealText } from "@/components/ui/Reveal";

const beliefs = [
  {
    num: "01",
    title: "Concevoir",
    text: "Identité, supports, mise en page — une direction claire avant la moindre production.",
  },
  {
    num: "02",
    title: "Fabriquer",
    text: "Choix des matières, finitions, prototypage. On passe du fichier à l’objet.",
  },
  {
    num: "03",
    title: "Imprimer",
    text: "Tirages soignés, couleurs justes, rendu premium — prêt à circuler.",
  },
];

const signals = ["Design", "Fabrication", "Impression", "Finitions"];

export function Manifesto() {
  return (
    <section
      id="manifeste"
      className="surface-grain relative overflow-hidden bg-psy-white py-24 md:py-32 lg:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-16 right-[-4%] select-none font-display text-[clamp(8rem,28vw,22rem)] leading-none font-extrabold tracking-[-0.08em] text-psy-black/[0.035] uppercase"
      >
        PSY
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-psy-black/10 pb-8">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.28em] text-psy-muted uppercase">
              Le studio
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xs text-right text-sm leading-relaxed text-psy-black/50">
              Design · Fabrication · Impression.
              <br />
              Du concept au support physique.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid items-start gap-12 lg:mt-16 lg:grid-cols-[1.35fr_0.85fr] lg:gap-16">
          <div>
            <RevealText
              as="h2"
              text="On imagine. On fabrique. On imprime — sans rupture de chaîne."
              className="font-display text-[clamp(2.1rem,4.6vw,3.85rem)] leading-[1.06] font-bold tracking-[-0.035em] text-psy-black"
              delay={0.05}
            />

            <Reveal delay={0.18}>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <p className="text-[15px] leading-relaxed text-psy-black/65 md:text-base">
                  LES PSY est un studio de création et de production. On prend
                  en charge le design, la fabrication et l’impression pour des
                  pièces nettes, tangibles, durables.
                </p>
                <p className="text-[15px] leading-relaxed text-psy-black/65 md:text-base">
                  Un seul interlocuteur : de la direction artistique au tirage
                  final. Moins d’allers-retours, plus de précision.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-psy-black/10 pt-8">
                {signals.map((signal) => (
                  <span
                    key={signal}
                    className="font-display text-sm font-semibold tracking-[-0.02em] text-psy-black/80 md:text-base"
                  >
                    <span className="mr-2 text-psy-red">—</span>
                    {signal}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-psy-black">
              <Image
                src="/brand/mask-black.jpg"
                alt="Emblème LES PSY"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-psy-black/70 via-transparent to-transparent" />
              <div className="absolute right-5 bottom-5 left-5">
                <p className="font-display text-2xl font-bold tracking-[-0.03em] text-psy-white italic md:text-3xl">
                  LES <span className="text-psy-red">PSY</span>
                </p>
                <p className="mt-2 text-[11px] tracking-[0.2em] text-psy-white/55 uppercase">
                  Design · Fab · Print
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-0 border-t border-psy-black/10 md:mt-28 md:grid-cols-3">
          {beliefs.map((belief, index) => (
            <Reveal key={belief.num} delay={0.08 * index}>
              <article
                className={`py-10 md:py-12 ${
                  index < beliefs.length - 1
                    ? "border-b border-psy-black/10 md:border-r md:border-b-0 md:pr-10"
                    : ""
                } ${index > 0 ? "md:pl-10" : ""}`}
              >
                <span className="font-display text-xs font-semibold tracking-[0.2em] text-psy-red">
                  {belief.num}
                </span>
                <h3 className="font-display mt-4 text-2xl font-bold tracking-[-0.02em] text-psy-black md:text-[1.75rem]">
                  {belief.title}
                </h3>
                <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-psy-black/55">
                  {belief.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
