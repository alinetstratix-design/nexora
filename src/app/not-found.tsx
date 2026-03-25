"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Rocket, ArrowRight, ShieldAlert } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { TextReveal } from "@/components/ui/text-reveal";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-brand-dark relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 nexora-gradient opacity-10" />
      <div className="absolute inset-0 noise-overlay opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-32 h-32 rounded-[2.5rem] bg-brand-light border border-brand-border backdrop-blur-3xl flex items-center justify-center mb-12 shadow-xl"
        >
          <ShieldAlert className="w-16 h-16 text-brand-blue" />
        </motion.div>
        
        <h1 className="text-[clamp(4rem,15vw,12rem)] font-black tracking-[-0.06em] leading-none uppercase italic mb-4 opacity-10 select-none text-brand-dark">
          404_ERR
        </h1>
        
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 text-brand-dark">
            <TextReveal text="Mission Deviated" />
          </h2>
          <p className="text-brand-gray text-lg md:text-xl font-medium tracking-tight leading-relaxed mb-12">
            The coordinates you provided do not exist in the Nexora database. Our tactical team suggests a fallback to base.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Magnetic>
              <Link href="/">
                <Button size="lg" className="h-20 px-12 rounded-3xl font-black text-xl uppercase italic tracking-tighter gap-3 nexora-gradient text-white shadow-xl hover:scale-105 transition-all group border-0">
                  <Home className="w-6 h-6" /> Back to Base <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                </Button>
              </Link>
            </Magnetic>
            
            <Magnetic strength={0.1}>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-20 px-12 rounded-3xl font-black text-xl uppercase italic tracking-tighter bg-white border-2 border-brand-border text-brand-blue hover:bg-brand-light transition-all">
                  Report Anomaly
                </Button>
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
      
      {/* Decorative Decals */}
      <div className="absolute top-12 left-12 text-[8rem] font-black italic text-brand-blue/5 select-none pointer-events-none lowercase">
        lost_in_space
      </div>
    </main>
  );
}
