"use client";

import { siteConfig } from "@/config/site";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import { Magnetic } from "@/components/ui/magnetic";
import { TextReveal } from "@/components/ui/text-reveal";
import { ShoppingCart, ArrowRight, Tag, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const ProductsShowcase = () => {
  return (
    <SectionWrapper id="products" className="py-24 md:py-32 bg-brand-light">
      <SectionHeader
        title={siteConfig.sections.products.title}
        subtitle={siteConfig.sections.products.subtitle}
        description={siteConfig.sections.products.description}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
      >
        {siteConfig.products.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <TiltCard className="rounded-[3rem]">
              <div className="flex flex-col h-full group">
                {/* Image Container with Overlay */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] m-2">
                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/90 backdrop-blur-xl rounded-full text-[10px] font-black shadow-2xl border border-brand-border uppercase tracking-widest text-brand-dark">
                      <Tag className="w-3 h-3 text-brand-blue" />
                      {product.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-blue text-white rounded-full text-[10px] font-black shadow-2xl border border-white/10 uppercase tracking-widest">
                      <Zap className="w-3 h-3 fill-current" />
                      NEW
                    </span>
                  </div>
                  
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Detailed Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <Magnetic strength={0.1}>
                      <Link href={`/products/${product.id}`} className="w-full">
                        <Button className="w-full h-14 rounded-2xl bg-white text-brand-dark hover:bg-white/90 font-black gap-2 text-sm uppercase tracking-tighter">
                          View Details <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </Magnetic>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-4 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black tracking-tight group-hover:text-brand-blue transition-colors text-brand-dark">
                      {product.title}
                    </h3>
                  </div>
                  
                  <p className="text-brand-gray text-sm font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity line-clamp-2 italic mb-6">
                    {product.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black italic tracking-tighter text-brand-dark">{product.price}</span>
                      <span className="text-[10px] text-brand-gray uppercase font-black tracking-[0.2em] opacity-50">LIFETIME ACCESS</span>
                    </div>
                    
                    <Magnetic>
                      <Button size="icon" className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue hover:nexora-gradient hover:text-white transition-all duration-500 shadow-inner">
                        <ShoppingCart className="w-6 h-6" />
                      </Button>
                    </Magnetic>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-20 text-center">
        <Magnetic>
          <Button variant="ghost" className="h-14 px-8 rounded-full font-black text-xs uppercase tracking-[0.3em] gap-3 border border-brand-border hover:bg-white transition-all group" asChild>
            <Link href="/products">
              Explore All Gear <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </Magnetic>
      </div>
    </SectionWrapper>
  );
};
