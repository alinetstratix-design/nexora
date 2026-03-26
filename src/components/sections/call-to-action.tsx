"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <SectionWrapper className="py-20 md:py-32">
      <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 lg:p-20 text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-xl">

        {/* LIGHT BACKGROUND GLOW */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">

          {/* ICON (STATIC + LIGHT ANIMATION) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-8"
          >
            <Rocket className="w-8 h-8 text-white" />
          </motion.div>

          {/* TITLE */}
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight mb-6">
            {siteConfig.sections.cta.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-xl">
            {siteConfig.sections.cta.description}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">

            <Button className="h-14 px-8 text-lg rounded-full font-semibold bg-white text-black hover:scale-105 transition">
              {siteConfig.sections.cta.buttonText}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              className="h-14 px-8 rounded-full border-white/30 text-white hover:bg-white hover:text-black transition"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Talk to Expert
            </Button>

          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};