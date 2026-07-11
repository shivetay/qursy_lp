import type { Metadata } from "next";
import { HeroSection } from "@/modules/HeroSection/HeroSection";
import { WhatIsQursySection } from "@/modules/WhatIsQursySection/WhatIsQursySection";
import { BenefitsSection } from "@/modules/BenefitsSection/BenefitsSection";
import { HowItWorksSection } from "@/modules/HowItWorksSection/HowItWorksSection";
import { LeadFormSection } from "@/modules/LeadFormSection/LeadFormSection";

export const metadata: Metadata = {
  title: "qursy — platforma dla organizatorów warsztatów",
  description:
    "Dołącz do qursy jako organizator warsztatów, kursów i wydarzeń rozwojowych jeszcze przed startem platformy.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <WhatIsQursySection />
        <BenefitsSection />
        <HowItWorksSection />
        <LeadFormSection />
      </main>
    </div>
  );
}
