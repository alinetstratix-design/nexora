"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

/**
 * NexoraTech Hero Section
 * Optimized for conversion with a clean, professional aesthetic.
 */
export const Hero = () => {
  // Navigation handler for conversion
  const handleConsultation = () => {
    window.open(siteConfig.contact.whatsapp, "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white dark:bg-slate-950">
      
      {/* Structural Background - Subtle Grid for depth */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[grid-linear-gradient(to_right,#0f172a_1px,transparent_1px),grid-linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          
          {/* Main Content Content Wrapper */}
          <div className="flex-1 space-y-10 text-left">
            
            {/* Typography Stack */}
            <div className="space-y-6 pt-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-[1.08] tracking-tight"
              >
                {siteConfig.sections.hero.line1}
                <span className="block mt-2 text-orange-600">
                  {siteConfig.sections.hero.highlight}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
              >
                {siteConfig.sections.hero.description}
              </motion.p>
            </div>

            {/* Action Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button 
                size="lg" 
                onClick={handleConsultation}
                className="w-full sm:w-auto h-14 px-10 text-lg rounded-2xl nexora-gradient text-white shadow-lg shadow-orange-500/20 flex items-center gap-3 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Chat on WhatsApp
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleConsultation}
                className="w-full sm:w-auto h-14 px-10 text-lg rounded-2xl border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all font-bold"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          {/* Visual Showcase Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-slate-900/5 dark:border-white/5 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=800&fit=crop"
                alt="Product Showcase"
                width={800}
                height={600}
                priority
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              {/* Subtle Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Contextual Metric Tag */}
          </motion.div>

        </div>
      </div>
    </section>
  );
};