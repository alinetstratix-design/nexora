"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <SectionWrapper className="py-24 md:py-32 bg-white dark:bg-slate-950">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[3rem] p-12 md:p-20 lg:p-24 text-white bg-slate-900 shadow-[0_40px_80px_-15px_rgba(255,107,0,0.3)]"
      >
        {/* DESIGN ACCENT (MESH GRADIENT) */}
        <div className="absolute inset-0 nexora-gradient opacity-90" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">

          {/* ICON */}
          <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-10 border border-white/20">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
            {siteConfig.sections.cta.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
            {siteConfig.sections.cta.description}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">

            <Button 
              onClick={() => window.open(siteConfig.contact.whatsapp, "_blank")}
              className="h-16 px-10 text-lg rounded-2xl font-bold bg-white text-orange-600 hover:bg-slate-50 shadow-xl shadow-black/10 transition-all hover:-translate-y-1 active:scale-[0.98]"
            >
              {siteConfig.sections.cta.buttonText}
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              onClick={() => window.open(siteConfig.contact.whatsapp, "_blank")}
              className="h-16 px-10 rounded-2xl border-white/40 text-white hover:bg-white/10 backdrop-blur-sm font-bold text-lg transition-all"
            >
              <MessageSquare className="w-5 h-5 mr-3" />
              Chat on WhatsApp
            </Button>

          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};