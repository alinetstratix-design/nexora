"use client";

import { useState, useRef } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Play, Rocket, Globe, Zap, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import { TextReveal } from "@/components/ui/text-reveal";

const PixelGrid = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none overflow-hidden">
      <div className="absolute inset-0" style={{ 
        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
        backgroundSize: '32px 32px' 
      }} />
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-blue rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple rounded-full blur-[150px]" 
      />
    </div>
  );
};

// --- Advanced UI Components ---

const StatCard = ({
  icon: Icon,
  value,
  label,
  className,
  mouseX,
  mouseY,
  factor = 20
}: {
  icon: any;
  value: string;
  label: string;
  className?: string;
  mouseX: any;
  mouseY: any;
  factor?: number;
}) => {
  const x = useTransform(mouseX, (val: number) => val / factor);
  const y = useTransform(mouseY, (val: number) => val / factor);

  return (
    <motion.div
      style={{ x, y }}
      className={cn(
        "absolute p-4 rounded-3xl bg-background/40 backdrop-blur-2xl border border-white/10 shadow-2xl flex items-center gap-4 z-20 select-none",
        className
      )}
    >
      <div className="bg-primary/10 p-2.5 rounded-2xl text-primary">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm font-black italic tracking-tighter leading-none">{value}</p>
        <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest opacity-60 m-0">{label}</p>
      </div>
    </motion.div>
  );
};

// --- Core Hero Section ---

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX - window.innerWidth / 2);
    mouseY.set(clientY - window.innerHeight / 2);
  };

  return (
    <>

      <section
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden mesh-gradient noise-overlay"
      >
        <PixelGrid />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-8">

            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] md:text-[11px] font-black w-fit uppercase tracking-[0.3em] border border-white/20 shadow-2xl backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
              </span>
              Next-Gen Startup OS 2.0
            </motion.div> */}

            <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-black tracking-[-0.04em] leading-[0.9] uppercase italic text-balance mb-4 text-white">
              <TextReveal text={siteConfig.sections.hero.line1} delay={0.1} />
              <br />
              <span className="relative inline-block px-4">
                <TextReveal text={siteConfig.sections.hero.highlight} delay={0.3} />
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[0.15em] bg-white/20 -z-10 origin-left rounded-full"
                />
              </span>
              <br />
              <TextReveal text={siteConfig.sections.hero.line2} delay={0.6} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/80 text-sm md:text-xl leading-relaxed max-w-2xl text-balance font-medium tracking-tight"
            >
              {siteConfig.sections.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 mt-4 w-full sm:w-auto"
            >
              <Magnetic>
                <Button size="lg" className="h-16 px-12 text-lg rounded-full font-black shadow-[0_20px_50px_rgba(123,47,247,0.3)] hover:scale-105 transition-all gap-3 nexora-gradient text-white group w-full border-none">
                  GET STARTED <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </Button>
              </Magnetic>

              <Magnetic>
                <Button size="lg" variant="outline" className="h-16 px-10 text-base rounded-full font-black group hover:bg-white/10 transition-all border-2 border-white/20 text-white backdrop-blur-sm w-full">
                  <div className="p-1 px-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors mr-2 flex items-center gap-2">
                    <Play className="w-3 h-3 fill-white text-white" />
                    <span className="text-[10px] tracking-widest">WATCH</span>
                  </div>
                  STORY
                </Button>
              </Magnetic>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 1 }}
              className="flex items-center gap-4 pt-12 border-t border-primary/10 mt-8"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, zIndex: 50 }}
                    className="w-12 h-12 rounded-full border-[3px] border-background overflow-hidden relative shadow-xl cursor-pointer"
                  >
                    <Image 
                      src={`https://i.pravatar.cc/100?u=user${i}`} 
                      alt="User" 
                      fill 
                      className="object-cover" 
                      sizes="48px"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex gap-0.5 text-yellow-500 mb-0.5">
                  {[...Array(5)].map((_, i) => <Zap key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <span className="font-black text-sm leading-none italic uppercase">50+ FOUNDERS ARE IN</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Interactive Stat Cards */}
        <StatCard
          icon={Globe}
          value="GLOBAL"
          label="REACH"
          className="top-[15%] left-[5%] hidden xl:flex scale-110"
          mouseX={mouseX}
          mouseY={mouseY}
          factor={-25}
        />
        <StatCard
          icon={Zap}
          value="99.9%"
          label="UPTIME"
          className="bottom-[20%] right-[8%] hidden xl:flex scale-125"
          mouseX={mouseX}
          mouseY={mouseY}
          factor={30}
        />
        <StatCard
          icon={ShieldCheck}
          value="SECURE"
          label="ENCRYPTED"
          className="top-[25%] right-[12%] hidden lg:flex rotate-3"
          mouseX={mouseX}
          mouseY={mouseY}
          factor={-40}
        />

        {/* Dynamic Background Blur Glows */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 100, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, -120, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none"
        />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-5 h-9 border-2 border-primary/20 rounded-full flex justify-center p-1.5 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-primary/60 rounded-full"
            />
          </div>
          <span className="text-[9px] uppercase font-black tracking-[0.5em] text-primary/40 leading-none">SCROLL</span>
        </motion.div>
      </section>
    </>
  );
};
