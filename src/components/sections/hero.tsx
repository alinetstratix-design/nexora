"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white text-slate-900">
      
      {/* SUBTLE BACKGROUND DECORATION */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* CONTENT COLUMN */}
          <div className="flex flex-col items-start gap-8 max-w-2xl">
            
            {/* TRUST BADGE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span className="text-xs md:text-sm font-semibold text-slate-600">
                {siteConfig.sections.hero.socialProof}
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
            >
              {siteConfig.sections.hero.line1}{" "}
              <span className="text-blue-600 block sm:inline">
                {siteConfig.sections.hero.highlight}
              </span>{" "}
              {siteConfig.sections.hero.line2}
            </motion.h1>

            {/* SUBHEADLINE */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
            >
              {siteConfig.sections.hero.description}
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="h-14 px-8 text-lg rounded-xl font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Website <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(siteConfig.contact.whatsapp, "_blank")}
                className="h-14 px-8 text-lg rounded-xl border-2 border-slate-200 font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-green-600 fill-green-600/10" />
                Chat on WhatsApp
              </Button>
            </motion.div>

            {/* QUICK FEATURES / PROMISES */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="flex flex-wrap gap-x-8 gap-y-3 pt-4 border-t border-slate-100"
            >
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Free Consultation
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> 24/7 Support
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Fast Delivery
              </div>
            </motion.div>
          </div>

          {/* IMAGE COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300 transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <Image
                src="/hero-india.png"
                alt="Modern Web Development for India"
                width={700}
                height={500}
                priority
                className="object-cover w-full h-auto scale-105 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none" />
            </div>
            
            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">100% Mobile Ready</p>
                  <p className="text-[10px] text-slate-500 font-medium">Perfect on all screens</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};