"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowCta } from "@/components/ui/ArrowCta";
import {
  useFullPageOptional,
  type SectionId,
} from "@/components/providers/FullPage";

const links: { id: SectionId; label: string }[] = [
  { id: "manifeste", label: "Studio" },
  { id: "selection", label: "Réalisations" },
  { id: "savoir-faire", label: "Services" },
  { id: "approche", label: "Process" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const fullpage = useFullPageOptional();
  const [open, setOpen] = useState(false);
  const active = fullpage?.sectionId ?? "top";
  const scrolled = (fullpage?.index ?? 0) > 0;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: SectionId) => {
    setOpen(false);
    fullpage?.goTo(id);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[90] transition-colors duration-500 ${
          scrolled || open ? "bg-psy-black/45 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="relative mx-auto grid h-[72px] max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center px-5 md:h-20 md:px-8 lg:px-10">
          <button
            type="button"
            onClick={() => go("top")}
            className="justify-self-start"
            aria-label="LES PSY — Accueil"
          >
            <Image
              src="/brand/logo-nav.png"
              alt="LES PSY"
              width={120}
              height={105}
              priority
              unoptimized
              className="h-12 w-auto object-contain md:h-14"
            />
          </button>

          <nav
            className="hidden items-center gap-7 justify-self-center lg:flex"
            aria-label="Navigation principale"
          >
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => go(link.id)}
                className={`text-[11px] font-medium tracking-[0.18em] uppercase transition-colors ${
                  active === link.id
                    ? "text-psy-white"
                    : "text-psy-white/75 hover:text-psy-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center justify-self-end gap-3">
            <ArrowCta
              href="#contact"
              label="Nous écrire"
              variant="white"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={(e) => {
                e.preventDefault();
                go("contact");
              }}
            />

            <button
              type="button"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className="relative flex h-10 w-10 items-center justify-center lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`absolute h-px w-5 bg-psy-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-psy-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] bg-psy-black lg:hidden"
          >
            <nav className="flex h-full flex-col justify-center gap-1 px-8 pt-10">
              {links.map((link, i) => (
                <motion.button
                  key={link.id}
                  type="button"
                  onClick={() => go(link.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 * i,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display border-b border-psy-white/10 py-5 text-left text-3xl font-bold tracking-[-0.02em] text-psy-white"
                >
                  {link.label}
                </motion.button>
              ))}
              <ArrowCta
                href="#contact"
                label="Demander un devis"
                variant="red"
                className="mt-10"
                onClick={(e) => {
                  e.preventDefault();
                  go("contact");
                }}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
