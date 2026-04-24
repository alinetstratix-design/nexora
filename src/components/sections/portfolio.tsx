"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  return (
    <SectionWrapper id="portfolio" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50">

      <SectionHeader
        title={siteConfig.sections.portfolio.title}
        subtitle={siteConfig.sections.portfolio.subtitle}
        description={siteConfig.sections.portfolio.description}
      />

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
        {siteConfig.portfolio.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                 <button 
                   onClick={() => window.open(siteConfig.contact.whatsapp, "_blank")}
                   className="w-14 h-14 rounded-2xl bg-orange-600 text-white flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl"
                 >
                    <ExternalLink className="w-6 h-6" />
                 </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/30 text-[10px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => window.open(siteConfig.contact.whatsapp, "_blank")}
                  className="inline-flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100 hover:text-orange-600 transition-colors"
                >
                  View Project <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 text-center"
      >
        <Button 
          size="lg" 
          onClick={() => window.open(siteConfig.contact.whatsapp, "_blank")}
          className="rounded-2xl px-12 h-14 nexora-gradient text-white font-bold shadow-xl shadow-orange-500/20 transition-all hover:scale-105 active:scale-95 border-none"
        >
          Start Your Project Now
        </Button>
      </motion.div>

    </SectionWrapper>
  );
};