"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials" className="py-24 md:py-32 bg-white dark:bg-slate-950">

      <SectionHeader
        title={siteConfig.sections.testimonials.title}
        subtitle={siteConfig.sections.testimonials.subtitle}
        description={siteConfig.sections.testimonials.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

        {siteConfig.testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-orange-900 transition-all duration-500"
          >
            {/* STARS */}
            <div className="flex gap-1 mb-6 text-orange-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>

            {/* TEXT */}
            <blockquote className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 italic">
              "{testimonial.quote}"
            </blockquote>

            {/* USER */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-50">
                  {testimonial.name}
                </h4>
                <p className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                  {testimonial.company}
                </p>
              </div>
            </div>

            <Quote className="absolute bottom-8 right-8 w-12 h-12 text-slate-200 dark:text-slate-800 opacity-20" />
          </motion.div>
        ))}

      </div>
    </SectionWrapper>
  );
};