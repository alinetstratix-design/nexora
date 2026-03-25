"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { TextReveal } from "@/components/ui/text-reveal";
import { ShieldCheck, Zap, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

export function AboutPageContent() {
  return (
    <main className="pt-20">
      {/* Cinematic About Hero */}
      <section className="relative py-24 md:py-40 overflow-hidden nexora-gradient text-white text-center">
        <div className="absolute inset-0 bg-white/10 opacity-30" />
        <div className="absolute inset-0 noise-overlay opacity-20" />
        <SectionWrapper className="relative z-10">
          <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black tracking-[-0.04em] leading-[0.9] uppercase italic text-balance mb-8">
            <TextReveal text="Our Digital DNA" />
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl font-medium tracking-tight leading-relaxed">
            The mission-critical engine behind the next generation of digital dominance.
          </p>
        </SectionWrapper>
      </section>

      <SectionWrapper className="py-24 md:py-32 bg-white text-brand-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-brand-border group">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Our Tactical Team"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-brand-blue text-[10px] font-black uppercase tracking-[0.5em] italic">The Manifesto</h2>
              <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.9] text-brand-dark">
                Architecting <span className="text-brand-blue">Dominance</span> In Every Byte
              </h3>
            </div>
            
            <div className="space-y-6 text-brand-gray text-lg md:text-xl font-medium leading-relaxed tracking-tight">
              <p>
                At {siteConfig.name}, we don't just build websites; we engineer tactical digital weapons. Founded in 2024, our mission has been singular: empower visionaries with absolute technical superiority.
              </p>
              <p>
                Our squad of elite designers and engineers operate at the intersection of cinematic aesthetics and brute-force performance. We stay true to our core pillars: <span className="text-brand-dark font-black italic">Precision, Innovation, and Results.</span>
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-brand-border">
              <div>
                <span className="block text-4xl font-black italic tracking-tighter text-brand-blue">500+</span>
                <span className="text-[10px] text-brand-gray uppercase font-black tracking-[0.3em] opacity-60">Deployments</span>
              </div>
              <div>
                <span className="block text-4xl font-black italic tracking-tighter text-brand-blue">99.9%</span>
                <span className="text-[10px] text-brand-gray uppercase font-black tracking-[0.3em] opacity-60">Efficiency</span>
              </div>
              <div>
                <span className="block text-4xl font-black italic tracking-tighter text-brand-blue">24/7</span>
                <span className="text-[10px] text-brand-gray uppercase font-black tracking-[0.3em] opacity-60">Response</span>
              </div>
              <div>
                <span className="block text-4xl font-black italic tracking-tighter text-brand-blue">Global</span>
                <span className="text-[10px] text-brand-gray uppercase font-black tracking-[0.3em] opacity-60">Reach</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      
      {/* Values Section with Elite Polish */}
      <section className="py-24 md:py-32 bg-brand-light relative overflow-hidden">
        <div className="absolute top-0 right-0 text-[20rem] font-black italic text-brand-dark/[0.03] select-none pointer-events-none translate-x-1/2 -translate-y-1/2">
          Values
        </div>
        
        <SectionWrapper>
          <SectionHeader
            title="Core Tactical Values"
            subtitle="Philosophy"
            description="The principles that guide our squad through every deployment."
            className="text-brand-dark"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-brand-dark">
            {[
              { title: "Innovation", desc: "Pushing boundaries beyond the known horizon.", icon: Zap },
              { title: "Sovereignty", desc: "Absolute control over performance and quality.", icon: ShieldCheck },
              { title: "Synergy", desc: "Seamless integration between design and code.", icon: Users },
            ].map((value) => (
              <motion.div 
                key={value.title} 
                whileHover={{ y: -10 }}
                className="p-10 bg-white border border-brand-border rounded-[2.5rem] shadow-sm relative overflow-hidden group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-8 group-hover:nexora-gradient group-hover:text-white transition-all duration-500">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4 text-brand-dark">{value.title}</h3>
                <p className="text-brand-gray font-medium leading-relaxed tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </section>
    </main>
  );
}
