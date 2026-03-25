"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { TiltCard } from "@/components/ui/tilt-card";
import * as Icons from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export const ServicesOverview = () => {
  return (
    <SectionWrapper id="services" className="py-24 md:py-32 overflow-hidden bg-brand-light">
      <SectionHeader
        title={siteConfig.sections.services.title}
        subtitle={siteConfig.sections.services.subtitle}
        description={siteConfig.sections.services.description}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {siteConfig.services.map((service) => {
          const Icon = Icons[service.icon as keyof typeof Icons] as React.ElementType;
          
          return (
            <motion.div key={service.id} variants={itemVariants}>
              <TiltCard className="rounded-[2.5rem]">
                <div className="p-8 md:p-10 flex flex-col h-full group">
                  <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-8 group-hover:nexora-gradient group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm">
                    {Icon && <Icon className="w-8 h-8" />}
                  </div>
                  
                  <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-brand-blue transition-colors duration-300 text-brand-dark">
                    {service.title}
                  </h3>
                  
                  <p className="text-brand-gray leading-relaxed text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto pt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-blue opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300">
                    Learn More <Icons.ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};
