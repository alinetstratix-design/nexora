"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TextReveal } from "@/components/ui/text-reveal";
import { Portfolio } from "@/components/sections/portfolio";

export function PortfolioPageContent() {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-slate-950">
      {/* HERO */}
      <section className="relative py-24 md:py-32 overflow-hidden nexora-gradient text-white text-center">
        <div className="absolute inset-0 bg-white/10 opacity-30" />
        <div className="absolute inset-0 noise-overlay opacity-20" />

        <SectionWrapper className="relative z-10">
          <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black tracking-[-0.04em] leading-[0.9] uppercase italic mb-6">
            <TextReveal text="Elite Portfolio" />
          </h1>

          <p className="max-w-2xl mx-auto text-white/80 text-lg font-medium tracking-tight leading-relaxed">
            A showcase of high-impact digital transformations and proprietary ecosystems.
          </p>
        </SectionWrapper>
      </section>

      {/* PORTFOLIO SECTION */}
      <Portfolio />
    </div>
  );
}
