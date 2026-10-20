import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { WhyGarms } from "@/components/sections/WhyGarms";
import { Team } from "@/components/sections/Team";
import { Consultation } from "@/components/sections/Consultation";
import { Contact } from "@/components/sections/Contact";

/** One-page site. Section order is defined in AGENTS.md — keep them in sync. */
export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Services />
      <Work />
      <WhyGarms />
      <Team />
      <Consultation />
      <Contact />
    </main>
  );
}
