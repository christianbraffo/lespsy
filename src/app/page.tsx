"use client";

import { Footer } from "@/components/layout/Footer";
import { FullPage } from "@/components/providers/FullPage";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <FullPage>
      <Hero />
      <Manifesto />
      <Services />
      <Work />
      <Approach />
      <div className="flex h-full flex-col">
        <div className="min-h-0 flex-1 overflow-hidden">
          <Contact />
        </div>
        <Footer />
      </div>
    </FullPage>
  );
}
