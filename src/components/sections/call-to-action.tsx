"use client";

import { useRef } from "react";
import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight, MessageSquare } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Magnetic } from "@/components/ui/magnetic";
import { TextReveal } from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const iconX = useTransform(mouseX, (val) => val * 0.05);
  const iconY = useTransform(mouseY, (val) => val * 0.05);

  return (
    <SectionWrapper className="py-24 md:py-40">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden rounded-[4rem] p-12 md:p-24 lg:p-32 text-white shadow-[0_50px_100px_-20px_rgba(45,156,219,0.5)] nexora-gradient noise-overlay group"
      >
        {/* Animated Background Glows */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[40%] h-[60%] bg-white/20 rounded-full blur-[120px] pointer-events-none"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            style={{ x: iconX, y: iconY }}
            className="w-24 h-24 bg-white/10 backdrop-blur-2xl rounded-[2rem] border border-white/20 flex items-center justify-center mb-12 shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-white/5 rounded-[inherit] animate-pulse" />
            <Rocket className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black tracking-[-0.04em] leading-[0.9] uppercase italic text-balance mb-8">
            <TextReveal text={siteConfig.sections.cta.title} />
          </h2>

          <p className="text-white/70 text-lg md:text-2xl mb-14 leading-relaxed max-w-2xl font-medium tracking-tight">
            {siteConfig.sections.cta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center w-full sm:w-auto text-brand-dark">
            <Magnetic strength={0.2}>
              <Button 
                size="lg" 
                className="h-20 px-14 text-xl rounded-full font-black shadow-2xl gap-3 bg-white text-brand-dark border-0 hover:scale-105 transition-transform"
              >
                {siteConfig.sections.cta.buttonText} <ArrowRight className="w-6 h-6" />
              </Button>
            </Magnetic>

            <Magnetic strength={0.2}>
              <Button 
                size="lg" 
                variant="outline"
                className="h-20 px-12 text-lg rounded-full font-black bg-white/10 hover:bg-white text-white hover:text-brand-dark border-white/20 hover:border-white backdrop-blur-xl border-2 transition-all gap-3"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                TALK TO EXPERT
              </Button>
            </Magnetic>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute bottom-10 left-10 opacity-20 hidden md:block">
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-12 bg-white rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
