"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Rocket } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="absolute inset-0 noise-overlay opacity-10" />
      
      <div className="relative flex flex-col items-center gap-12 z-10">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-24 h-24 rounded-[2rem] bg-primary/20 border-2 border-primary/50 flex items-center justify-center shadow-[0_0_50px_rgba(var(--primary),0.3)] backdrop-blur-3xl"
        >
          <Rocket className="w-10 h-10 text-primary animate-pulse" />
        </motion.div>
        
        <div className="flex flex-col items-center gap-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-3xl font-black italic uppercase tracking-tighter"
          >
            Powering Up
          </motion.h2>
          
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
                className="w-2 h-2 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Decal numbers */}
      <div className="absolute bottom-12 right-12 text-[10rem] font-black italic text-white/5 select-none pointer-events-none lowercase">
        loading...
      </div>
    </div>
  );
}
