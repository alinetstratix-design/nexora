"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeader
        title={siteConfig.sections.testimonials.title}
        subtitle={siteConfig.sections.testimonials.subtitle}
        description={siteConfig.sections.testimonials.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {siteConfig.testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-muted/50 relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 text-primary/5 group-hover:text-primary/10 transition-colors">
                <Quote className="w-24 h-24 rotate-12" />
              </div>
              <CardContent className="pt-8">
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </p>
              </CardContent>
              <CardFooter className="gap-4 pt-4 border-t bg-muted/20">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
