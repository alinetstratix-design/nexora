"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TiltCard } from "@/components/ui/tilt-card";
import { Magnetic } from "@/components/ui/magnetic";
import { TextReveal } from "@/components/ui/text-reveal";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Tag } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as any,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function ProductsPageContent() {
  const products = siteConfig.products || [];

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="relative py-24 md:py-40 overflow-hidden nexora-gradient">
        <div className="absolute inset-0 bg-white/10 opacity-30" />
        <div className="absolute inset-0 noise-overlay opacity-20" />

        <SectionWrapper className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-[0.3em] mb-8"
          >
            <Tag className="w-4 h-4" />
            Elite Catalog
          </motion.div>

          <h1 className="text-[clamp(3rem,10vw,7rem)] font-black tracking-[-0.04em] leading-[0.85] uppercase italic text-white mb-8">
            <TextReveal text="Premium Forge" />
            <br />
            <span className="text-white italic">Digital Assets</span>
          </h1>

          <p className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl font-medium tracking-tight leading-relaxed">
            Accelerate your workflow with our high-performance templates and UI kits.
          </p>
        </SectionWrapper>
      </section>

      {/* PRODUCT GRID */}
      <SectionWrapper className="py-24 md:py-32 bg-white text-brand-dark">
        {products.length === 0 ? (
          // EMPTY STATE
          <div className="text-center py-20">
            <h3 className="text-3xl font-black mb-4">No Products Found</h3>
            <p className="text-brand-gray">Add products in siteConfig</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {products.map((product) => (
              <motion.article key={product.id} variants={itemVariants}>
                <TiltCard className="rounded-[2.5rem] group h-full bg-brand-light border border-brand-border hover:border-brand-blue/30 transition-all duration-500">
                  <div className="p-3 h-full flex flex-col">
                    {/* IMAGE */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-6">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      />

                      {/* CATEGORY */}
                      <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-widest translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        {product.category}
                      </div>

                      {/* PRICE */}
                      <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-brand-blue text-white text-sm font-black translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                        {product.price}
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="px-4 pb-4 flex-1 flex flex-col">
                      <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-3 group-hover:text-brand-blue transition-colors text-brand-dark">
                        {product.title}
                      </h3>

                      <p className="text-brand-gray text-sm font-medium leading-relaxed mb-8 flex-1">
                        {product.description}
                      </p>

                      {/* CTA */}
                      <Magnetic strength={0.2}>
                        <Link
                          href={`/products/${product.id}`}
                          className="w-full h-16 rounded-2xl nexora-gradient text-white flex items-center justify-center gap-3 font-black uppercase tracking-widest hover:scale-[1.02] transition-all duration-500 group/btn shadow-lg"
                        >
                          <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                          Buy Now
                        </Link>
                      </Magnetic>
                    </div>
                  </div>
                </TiltCard>
              </motion.article>
            ))}
          </motion.div>
        )}
      </SectionWrapper>

      {/* CTA */}
      <section className="py-24 border-t border-brand-border bg-brand-light">
        <SectionWrapper className="text-center">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-8 text-brand-dark">
            Need a <span className="text-brand-blue italic">Custom Solution?</span>
          </h2>

          <Magnetic>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 py-4 px-10 rounded-full border-2 border-brand-blue text-brand-blue font-black uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all duration-500 group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Magnetic>
        </SectionWrapper>
      </section>
    </main>
  );
}