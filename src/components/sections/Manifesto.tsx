"use client";

import Image from "next/image";
import { Reveal, RevealText } from "@/components/ui/Reveal";

const beliefs = [
  {
    num: "01",
    title: "Concevoir",
    text: "Identité, supports, mise en page — une direction claire avant production.",
  },
  {
    num: "02",
    title: "Fabriquer",
    text: "Matières, finitions, prototypage. Du fichier à l’objet.",
  },
  {
    num: "03",
    title: "Imprimer",
    text: "Tirages soignés, couleurs justes — prêt à circuler.",
  },
];

export function Manifesto() {
  return (
    <div className="surface-grain flex h-full flex-col justify-center overflow-hidden bg-psy-white px-5 py-24 md:px-8 lg:px-10">
      <div className="relative mx-auto w-full max-w-[1280px]">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-psy-black/10 pb-5">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.28em] text-psy-muted uppercase">
              Le studio
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm text-psy-black/50">
              Design · Fabrication · Impression
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
          <div>
            <RevealText
              as="h2"
              text="On imagine. On fabrique. On imprime — sans rupture de chaîne."
              className="font-display text-[clamp(1.8rem,3.8vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.035em] text-psy-black"
              delay={0.05}
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-psy-black/65">
                LES PSY prend en charge le design, la fabrication et
                l’impression. Un seul interlocuteur, du concept au support fini.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="relative mx-auto hidden w-full max-w-xs lg:block">
            <div className="relative aspect-square overflow-hidden bg-psy-black">
              <Image
                src="/brand/mask-black.jpg"
                alt="Emblème LES PSY"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-0 border-t border-psy-black/10 md:grid-cols-3">
          {beliefs.map((belief, index) => (
            <Reveal key={belief.num} delay={0.08 * index}>
              <article
                className={`py-7 ${
                  index < beliefs.length - 1
                    ? "border-b border-psy-black/10 md:border-r md:border-b-0 md:pr-8"
                    : ""
                } ${index > 0 ? "md:pl-8" : ""}`}
              >
                <span className="font-display text-xs font-semibold tracking-[0.2em] text-psy-red">
                  {belief.num}
                </span>
                <h3 className="font-display mt-3 text-xl font-bold tracking-[-0.02em] text-psy-black md:text-2xl">
                  {belief.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-psy-black/55">
                  {belief.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
