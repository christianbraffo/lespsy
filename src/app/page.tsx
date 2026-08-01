import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Work />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
