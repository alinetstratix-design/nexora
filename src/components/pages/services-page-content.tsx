"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TextReveal } from "@/components/ui/text-reveal";
import * as Icons from "lucide-react";
import Link from "next/link";

export function ServicesPageContent() {
  const services = siteConfig.services || [];

  return (
    <div className="pt-20 min-h-screen bg-white text-brand-dark">
      {/* HERO */}
      <section className="relative py-24 md:py-32 overflow-hidden nexora-gradient text-white text-center">
        <div className="absolute inset-0 bg-white/10 opacity-30" />
        <div className="absolute inset-0 noise-overlay opacity-20" />

        <SectionWrapper className="relative z-10">
          <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black tracking-[-0.04em] leading-[0.9] uppercase italic mb-6">
            <TextReveal text="Tactical Services" />
          </h1>

          <p className="max-w-2xl mx-auto text-white/80 text-lg font-medium tracking-tight leading-relaxed">
            Build, launch, and scale your digital product with elite engineering precision.
          </p>
        </SectionWrapper>
      </section>

      {/* SERVICES GRID */}
      <SectionWrapper className="py-24">
        {services.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-3xl font-black mb-4">No Services Found</h3>
            <p className="text-brand-gray">Add services in siteConfig</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {services.map((service) => {
              const Icon =
                Icons[service.icon as keyof typeof Icons] as React.ElementType;

              return (
                <Card
                  key={service.id}
                  className="p-8 border-brand-border bg-brand-light hover:bg-white transition-all shadow-sm group rounded-[2.5rem]"
                >
                  <CardHeader className="p-0 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:nexora-gradient group-hover:text-white transition-all duration-500">
                      {Icon && <Icon className="w-8 h-8" />}
                    </div>
                  </CardHeader>

                  <CardContent className="p-0">
                    <CardTitle className="text-3xl mb-4 italic uppercase tracking-tighter text-brand-dark">
                      {service.title}
                    </CardTitle>

                    <p className="text-brand-gray leading-relaxed font-medium mb-8">
                      {service.description}
                    </p>

                    {/* FEATURES (dynamic) */}
                    <ul className="space-y-4">
                      {((service as any).features || [
                        "Custom Development",
                        "Performance Optimization",
                        "Scalable Architecture",
                      ]).map((item: string) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-[10px] text-brand-dark font-black uppercase tracking-[0.2em] border-t border-brand-border pt-4"
                        >
                          <Icons.ArrowUpRight className="w-4 h-4 text-brand-blue" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* TECH STACK */}
        <div className="p-12 md:p-20 rounded-[3.5rem] bg-brand-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-brand-blue text-[10px] font-black uppercase tracking-[0.5em]">
                The Infrastructure
              </h2>

              <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.9]">
                Engineered with{" "}
                <span className="text-brand-blue">Precision</span>
              </h3>

              <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                Built using world-class technologies for performance, scalability,
                and reliability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Next.js",
                "Tailwind",
                "Framer Motion",
                "TypeScript",
                "Vercel",
                "PostgreSQL",
              ].map((tech) => (
                <div
                  key={tech}
                  className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-sm font-black uppercase tracking-widest text-white/80 hover:bg-white/10 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA SECTION 🔥 */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-8">
            Ready to Build Something <span className="text-brand-blue">Powerful?</span>
          </h3>

          <Link
            href="/contact"
            className="inline-flex items-center gap-4 py-4 px-10 rounded-full bg-brand-blue text-white font-black uppercase tracking-widest hover:scale-105 transition-all duration-500"
          >
            Start Your Project
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}