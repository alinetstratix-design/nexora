"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

export const ServicesOverview = () => {
  return (
    <SectionWrapper id="services" className="py-24 md:py-32 bg-white dark:bg-slate-950">

      <SectionHeader
        title={siteConfig.sections.services.title}
        subtitle={siteConfig.sections.services.subtitle}
        description={siteConfig.sections.services.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

        {siteConfig.services.map((service, index) => {
          const Icon = (Icons as any)[service.icon] || Icons.Globe;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:border-orange-500/50 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500"
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/30 text-orange-600 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* LINK */}
              <div className="flex items-center gap-2 text-sm font-bold text-orange-600">
                <span className="group-hover:mr-2 transition-all duration-300 uppercase tracking-widest text-[10px]">Explore Solution</span>
                <Icons.ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          );
        })}

      </div>
    </SectionWrapper>
  );
};