"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  return (
    <footer className="border-t border-psy-white/10 bg-[#0b0b0b] text-psy-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8 md:py-14 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-4">
            <Image
              src="/brand/mask-icon.jpg"
              alt=""
              width={48}
              height={48}
              className="size-12 object-cover"
            />
            <div>
              <p className="font-display text-lg font-bold tracking-[0.06em] uppercase md:text-xl">
                LES PSY
                <span className="align-super text-[9px]">™</span>
              </p>
              <p className="mt-1 text-[11px] tracking-[0.18em] text-psy-white/40 uppercase">
                Pas juste du design.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3 text-[11px] tracking-[0.18em] text-psy-white/45 uppercase md:items-end">
            <p>© {new Date().getFullYear()} LES PSY</p>
            <div className="flex gap-6">
              <a href="#top" className="transition-colors hover:text-psy-white">
                Haut de page
              </a>
              <a
                href="mailto:hello@lespsy.agency"
                className="transition-colors hover:text-psy-red"
              >
                Email
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
