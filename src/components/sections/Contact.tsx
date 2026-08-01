"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowButton } from "@/components/ui/ArrowCta";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Projet LES PSY — ${name}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\n${message}`,
    );

    window.location.href = `mailto:hello@lespsy.agency?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b0b0b] py-28 text-psy-white md:py-36 lg:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
      <div className="pointer-events-none absolute -right-24 top-10 size-[420px] rounded-full bg-psy-red/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-[1280px] gap-16 px-5 md:grid-cols-[1.1fr_0.9fr] md:gap-20 md:px-8 lg:px-10">
        <div>
          <Reveal>
            <p className="mb-6 text-[11px] font-medium tracking-[0.28em] text-psy-white/45 uppercase">
              Contact
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] font-bold tracking-[-0.04em]">
              Un projet
              <br />
              à produire&nbsp;?
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-psy-white/55">
              Design, fabrication ou impression — dis-nous ce dont tu as besoin.
              On te répond avec un devis clair, pas un discours flou.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <a
              href="mailto:hello@lespsy.agency"
              className="mt-10 inline-flex text-sm tracking-[0.08em] text-psy-white transition-colors hover:text-psy-red"
            >
              hello@lespsy.agency
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <form onSubmit={onSubmit} className="space-y-8">
            <Field label="Nom" name="name" type="text" required />
            <Field label="Email" name="email" type="email" required />
            <label className="block">
              <span className="mb-3 block text-[11px] tracking-[0.22em] text-psy-white/45 uppercase">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full resize-none border-b border-psy-white/20 bg-transparent py-3 text-psy-white outline-none transition-colors placeholder:text-psy-white/25 focus:border-psy-red"
                placeholder="Parle-nous du projet…"
              />
            </label>

            <ArrowButton
              label={sent ? "Ouverture mail…" : "Envoyer"}
              variant="red"
              className="mt-4"
            />
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-3 block text-[11px] tracking-[0.22em] text-psy-white/45 uppercase">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border-b border-psy-white/20 bg-transparent py-3 text-psy-white outline-none transition-colors placeholder:text-psy-white/25 focus:border-psy-red"
        placeholder=" "
      />
    </label>
  );
}
