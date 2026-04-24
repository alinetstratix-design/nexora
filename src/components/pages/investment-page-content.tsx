"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { Pricing } from "@/components/sections/pricing-services";

export function InvestmentPageContent() {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-slate-950">
      {/* HERO */}
      <section className="relative py-24 md:py-32 overflow-hidden nexora-gradient text-white text-center">
        <div className="absolute inset-0 bg-white/10 opacity-30" />
        <div className="absolute inset-0 noise-overlay opacity-20" />

        <SectionWrapper className="relative z-10">
          <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black tracking-[-0.04em] leading-[0.9] uppercase italic mb-6">
            <TextReveal text="Investment Plans" />
          </h1>

          <p className="max-w-2xl mx-auto text-white/80 text-lg font-medium tracking-tight leading-relaxed">
            Scalable digital solutions with surgical precision and transparent pricing.
          </p>
        </SectionWrapper>
      </section>

      {/* PRICING SECTION */}
      <Pricing />
    </div>
  );
}
