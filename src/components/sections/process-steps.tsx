"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { motion, useScroll, useSpring, useTransform, Variants } from "framer-motion";
import * as Icons from "lucide-react";
import { useRef } from "react";
import { Magnetic } from "@/components/ui/magnetic";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

export const ProcessSteps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <SectionWrapper id="process" className="py-24 md:py-32 relative overflow-hidden bg-white">
      <SectionHeader
        title={siteConfig.sections.process.title}
        subtitle={siteConfig.sections.process.subtitle}
        description={siteConfig.sections.process.description}
      />

      <div ref={containerRef} className="relative mt-32 max-w-6xl mx-auto px-4">
        {/* Cinematic Path (SVG) */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] hidden lg:block -translate-y-1/2 pointer-events-none opacity-20 text-brand-blue">
          <svg width="100%" height="2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
          </svg>
        </div>
        
        <div className="absolute top-1/2 left-0 w-full h-[2px] hidden lg:block -translate-y-1/2 pointer-events-none text-brand-blue">
          <svg width="100%" height="2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.line 
              x1="0" y1="1" x2="100%" y2="1" 
              stroke="currentColor" strokeWidth="2" 
              style={{ pathLength }}
            />
          </svg>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {(siteConfig.process as any[]).map((step: any, index: number) => {
            const iconName = index === 0 ? "Lightbulb" : index === 1 ? "Component" : index === 2 ? "Code2" : "Rocket";
            const Icon = (Icons as any)[iconName] as React.ElementType;
            
            return (
              <motion.div key={step.title} variants={itemVariants} className="relative">
                <div className="flex flex-col items-center group">
                  {/* Floating Number */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="absolute -top-16 text-8xl font-black italic text-brand-blue/5 select-none pointer-events-none group-hover:text-brand-blue/10 transition-colors duration-500"
                  >
                    0{index + 1}
                  </motion.div>

                  <Magnetic strength={0.2}>
                    <div className="w-24 h-24 rounded-[2rem] bg-brand-light border border-brand-border shadow-sm flex items-center justify-center mb-10 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:border-brand-blue/50">
                      <div className="absolute inset-0 bg-brand-blue/5 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {Icon && <Icon className="w-10 h-10 text-brand-blue group-hover:scale-110 transition-transform duration-500" />}
                    </div>
                  </Magnetic>

                  <div className="text-center bg-white p-6 rounded-3xl border border-brand-border group-hover:border-brand-blue/10 transition-colors duration-500 w-full shadow-sm">
                    <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-4 group-hover:text-brand-blue transition-colors text-brand-dark">
                      {step.title}
                    </h3>
                    <p className="text-brand-gray text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
