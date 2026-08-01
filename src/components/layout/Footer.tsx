"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="shrink-0 border-t border-psy-white/10 bg-[#0b0b0b] text-psy-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-5 py-4 md:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/mask-icon.jpg"
            alt=""
            width={36}
            height={36}
            className="size-8 object-cover"
          />
          <p className="text-[10px] tracking-[0.18em] text-psy-white/45 uppercase md:text-[11px]">
            Design · Fabrication · Impression
          </p>
        </div>
        <p className="text-[10px] tracking-[0.18em] text-psy-white/40 uppercase md:text-[11px]">
          © {new Date().getFullYear()} LES PSY
        </p>
      </div>
    </footer>
  );
}
