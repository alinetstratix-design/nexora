"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const ProductsShowcase = () => {
  return (
    <SectionWrapper id="products" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50">

      <SectionHeader
        title={siteConfig.sections.products.title}
        subtitle={siteConfig.sections.products.subtitle}
        description={siteConfig.sections.products.description}
      />

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">

        {siteConfig.products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-950 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group"
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* IMAGE */}
              <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-[10px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest">{product.category}</span>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 md:p-10 flex flex-col flex-1 justify-center">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.slice(0, 3).map((f, i) => (
                    <span key={i} className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-400 border border-slate-100 dark:border-slate-800">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pricing Model</p>
                    <p className="text-xl font-bold text-blue-600">{product.price}</p>
                  </div>

                  <Button variant="outline" className="rounded-full px-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    Request Demo <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

      </div>

    </SectionWrapper>
  );
};