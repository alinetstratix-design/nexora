"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

export function AboutPageContent() {
  return (
    <main className="pt-20 bg-white dark:bg-slate-950">

      {/* HERO */}
      <section className="py-24 text-center bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 inline-block border border-blue-100 dark:border-blue-800">
              {siteConfig.sections.about.subtitle}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-slate-50">
              {siteConfig.sections.about.title}
            </h1>
            <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              {siteConfig.sections.about.description}
            </p>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* MISSION & VISION */}
      <SectionWrapper className="py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE GRID */}
          <div className="grid grid-cols-2 gap-4">
             <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mt-8">
               <Image
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=150&h=150&fit=crop"
                 alt="Teamwork"
                 fill
                 className="object-cover hover:scale-110 transition-transform duration-700"
               />
             </div>
             <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden">
               <Image
                 src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=150&h=150&fit=crop"
                 alt="Innovation"
                 fill
                 className="object-cover hover:scale-110 transition-transform duration-700"
               />
             </div>
          </div>

          {/* TEXT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-slate-50">
              Driving Digital Transformation
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800">
                <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Our Mission</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                  "{siteConfig.sections.about.mission}"
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">Our Vision</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                  "{siteConfig.sections.about.vision}"
                </p>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-slate-100 dark:border-slate-800">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CORE VALUES */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 border-y border-slate-100 dark:border-slate-800">
        <SectionWrapper>
          <SectionHeader
            title={siteConfig.sections.about.valuesTitle}
            subtitle={siteConfig.sections.about.valuesSubtitle}
            description={siteConfig.sections.about.valuesDescription}
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {siteConfig.values.map((value, i) => {
              const Icon = (Icons as any)[value.icon];
              return (
                <motion.div 
                  key={value.title} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-slate-950 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 mb-8 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    {Icon && <Icon className="w-7 h-7" />}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-50">{value.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </SectionWrapper>
      </section>

    </main>
  );
}