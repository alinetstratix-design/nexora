"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { TiltCard } from "@/components/ui/tilt-card";
import { Magnetic } from "@/components/ui/magnetic";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";

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

export const Portfolio = () => {
  return (
    <SectionWrapper id="portfolio" className="py-24 md:py-32 bg-white">
      <SectionHeader
        title={siteConfig.sections.portfolio.title}
        subtitle={siteConfig.sections.portfolio.subtitle}
        description={siteConfig.sections.portfolio.description}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {siteConfig.portfolio.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <TiltCard className="rounded-[2.5rem] group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.2rem] m-1.5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Advanced Glassmorphic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] group-hover:backdrop-blur-sm flex flex-col justify-end p-8 md:p-10">
                  <div className="overflow-hidden">
                    <motion.span 
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      className="inline-block text-brand-blue text-[10px] font-black uppercase tracking-[0.3em] mb-3"
                    >
                      {project.category}
                    </motion.span>
                  </div>
                  
                  <div className="flex items-end justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tighter italic uppercase mb-2">
                        {project.title}
                      </h3>
                      <div className="w-12 h-1 bg-brand-blue rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" />
                    </div>
                    
                    <Magnetic strength={0.2}>
                      <Link
                        href="#"
                        className="w-14 h-14 rounded-2xl bg-white text-brand-dark flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-2xl"
                      >
                        <ArrowUpRight className="w-7 h-7" />
                      </Link>
                    </Magnetic>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20 text-center">
        <Magnetic>
          <Link href="/portfolio" className="inline-flex items-center gap-4 group">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-gray group-hover:text-brand-blue transition-colors">View All Case Studies</span>
            <div className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-500">
              <ExternalLink className="w-5 h-5 group-hover:text-white transition-colors text-brand-blue" />
            </div>
          </Link>
        </Magnetic>
      </div>
    </SectionWrapper>
  );
};
