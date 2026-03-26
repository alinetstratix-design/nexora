"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-black text-white">

      {/* LIGHTWEIGHT BACKGROUND */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2.5rem,7vw,5rem)] font-black leading-tight"
          >
            {siteConfig.sections.hero.line1} <br />
            <span className="text-purple-400">
              {siteConfig.sections.hero.highlight}
            </span>
            <br />
            {siteConfig.sections.hero.line2}
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-sm md:text-lg max-w-xl"
          >
            {siteConfig.sections.hero.description}
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Button className="h-14 px-8 text-lg rounded-full font-bold bg-purple-600 hover:bg-purple-700 transition-all">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              className="h-14 px-8 rounded-full border-white/20 text-white hover:bg-white/10"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          {/* SOCIAL PROOF (OPTIMIZED) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-3 pt-8"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-black overflow-hidden"
                >
                  <Image
                    src={`/users/user${i}.jpg`} // 👉 local images use karo
                    alt="user"
                    width={40}
                    height={40}
                  />
                </div>
              ))}
            </div>
            <span className="text-sm text-white/70">
              50+ founders joined
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};