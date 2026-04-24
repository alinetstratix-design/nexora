"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

export const ProcessSteps = () => {
  return (
    <SectionWrapper id="process" className="py-24 md:py-32 bg-white dark:bg-slate-950">

      <SectionHeader
        title={siteConfig.sections.process.title}
        subtitle={siteConfig.sections.process.subtitle}
        description={siteConfig.sections.process.description}
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        
        {/* CONNECTOR LINE (Desktop) */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 dark:bg-slate-800 hidden lg:block -translate-y-1/2 z-0" />

        {(siteConfig.process as any[]).map((step: any, index: number) => {
          const Icon = (Icons as any)[step.icon];

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 text-center p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-orange-200 dark:hover:border-orange-900 transition-all duration-500 group shadow-sm hover:shadow-2xl hover:shadow-orange-500/5"
            >
              {/* ICON */}
              <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center rounded-3xl bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-inner">
                {Icon && <Icon className="w-10 h-10" />}
              </div>

              {/* STEP NUMBER */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                Phase 0{index + 1}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-50">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          );
        })}

      </div>
    </SectionWrapper>
  );
};