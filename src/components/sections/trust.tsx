"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

/**
 * Trust Section
 * Highlights key performance metrics to establish credibility.
 */
export const Trust = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-950 border-y border-slate-50 dark:border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Section context */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg font-medium text-slate-400 max-w-[280px] leading-relaxed"
          >
            {siteConfig.sections.hero.socialProof}
          </motion.div>
          
          {/* Metrics Display */}
          <div className="flex flex-wrap justify-center md:justify-end gap-12 lg:gap-24 flex-1">
            {siteConfig.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center md:text-left"
              >
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold text-orange-600 uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
