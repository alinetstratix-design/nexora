"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials" className="py-20 md:py-28 bg-white">

      <SectionHeader
        title={siteConfig.sections.testimonials.title}
        subtitle={siteConfig.sections.testimonials.subtitle}
        description={siteConfig.sections.testimonials.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {siteConfig.testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="border rounded-2xl p-6 hover:shadow-md transition group relative"
          >
            {/* ICON */}
            <Quote className="absolute top-4 right-4 w-10 h-10 text-gray-100" />

            {/* STARS */}
            <div className="flex gap-1 mb-3 text-yellow-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* TEXT */}
            <p className="text-sm text-gray-600 italic mb-6">
              "{testimonial.quote}"
            </p>

            {/* USER */}
            <div className="flex items-center gap-3 border-t pt-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </SectionWrapper>
  );
};