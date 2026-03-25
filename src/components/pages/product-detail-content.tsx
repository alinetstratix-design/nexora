"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, ShoppingCart, Share2, ShieldCheck, Zap, Globe } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { TiltCard } from "@/components/ui/tilt-card";
import { Magnetic } from "@/components/ui/magnetic";
import { TextReveal } from "@/components/ui/text-reveal";
import { Button } from "@/components/ui/button";

interface ProductDetailContentProps {
  product: any;
}

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  return (
    <main className="pt-20">
      {/* Cinematic Detail Hero */}
      <section className="relative py-24 md:py-40 overflow-hidden nexora-gradient text-white">
        <div className="absolute inset-0 bg-white/10 opacity-30" />
        <div className="absolute inset-0 noise-overlay opacity-20" />
        
        <SectionWrapper className="relative z-10">
          <Link href="/products" className="inline-flex items-center gap-2 text-white/80 text-[10px] font-black uppercase tracking-[0.4em] mb-12 hover:gap-6 hover:text-white transition-all group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block text-white/60 text-[10px] font-black uppercase tracking-[0.5em] mb-4"
              >
                {product.category}
              </motion.span>
              <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-[-0.04em] leading-[0.9] uppercase italic mb-8">
                <TextReveal text={product.title} />
              </h1>
              <p className="text-white/80 text-xl font-medium tracking-tight leading-relaxed mb-10 text-balance">
                {product.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-8 items-center pt-4">
                <div className="text-5xl font-black italic tracking-tighter text-white">
                  {product.price}
                  <span className="text-[10px] text-white/60 block uppercase tracking-[0.3em] font-black not-italic mt-1">LIFETIME ACCESS</span>
                </div>
                <Magnetic strength={0.3}>
                  <Button size="lg" className="h-20 px-12 rounded-3xl bg-white text-brand-dark font-black uppercase italic tracking-tighter flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl text-xl">
                    <ShoppingCart className="w-6 h-6" />
                    Secure Purchase
                  </Button>
                </Magnetic>
              </div>
            </div>

            <div className="relative group">
              <TiltCard className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/10">
                <div className="relative aspect-[16/10] m-1.5 rounded-[3.5rem] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                </div>
              </TiltCard>
              
              {/* Floating feature pill */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-10 -right-6 md:-right-12 bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white fill-current" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-1">Response Speed</div>
                    <div className="text-3xl font-black italic text-white tracking-tighter">99.9%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* Product Content */}
      <div className="bg-white relative overflow-hidden border-t border-brand-border">
        <SectionWrapper className="py-24 md:py-40 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Features List */}
            <div className="lg:col-span-8 space-y-16">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter flex items-center gap-6 text-brand-dark">
                  <ShieldCheck className="w-12 h-12 text-brand-blue" />
                  Key Capabilities
                </h2>
                <p className="text-brand-gray text-xl font-medium tracking-tight">Mission-critical features engineered for scale.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.features.map((feature: string, i: number) => (
                  <motion.div 
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col gap-6 p-8 rounded-[2.5rem] bg-brand-light border border-brand-border hover:border-brand-blue/30 hover:bg-white transition-all duration-500 group shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:nexora-gradient group-hover:text-white transition-all duration-500">
                      <Check className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black italic uppercase tracking-tighter mb-2 text-brand-dark">{feature}</h4>
                      <p className="text-brand-gray text-sm font-medium leading-relaxed italic">Strategic implementation with absolute precision.</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Side Info */}
            <aside className="lg:col-span-4 space-y-10">
              <div className="p-10 rounded-[3rem] bg-brand-light text-brand-dark border border-brand-border relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-brand-blue">
                  <Globe className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-8 relative z-10">Technical Specs</h3>
                <ul className="space-y-6 relative z-10">
                  {[
                    { label: "Architecture", val: "Next.js 14+" },
                    { label: "Engine", val: "Framer Motion" },
                    { label: "Framework", val: "Tailwind CSS" },
                    { label: "Deployment", val: "Production Ready" },
                  ].map((spec) => (
                    <li key={spec.label} className="flex justify-between items-end border-b border-brand-border pb-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{spec.label}</span>
                      <span className="text-sm font-bold uppercase italic tracking-tight">{spec.val}</span>
                    </li>
                  ))}
                </ul>
                
                <Magnetic strength={0.2}>
                  <Button className="w-full mt-10 h-16 rounded-2xl bg-brand-dark text-white hover:bg-brand-blue font-black uppercase tracking-widest text-xs gap-2">
                    <Share2 className="w-4 h-4" /> Share Asset
                  </Button>
                </Magnetic>
              </div>

              <div className="p-10 rounded-[3rem] border border-brand-border flex flex-col items-center text-center group hover:border-brand-blue/20 transition-colors duration-500 bg-white">
                <div className="w-20 h-20 rounded-full bg-brand-light flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Globe className="w-10 h-10 text-brand-blue" />
                </div>
                <h4 className="text-xl font-black italic uppercase tracking-tighter mb-2 text-brand-dark">Global Support</h4>
                <p className="text-brand-gray text-sm font-medium mb-8">Access documentation and elite support tiers instantly.</p>
                <button className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue hover:tracking-[0.6em] transition-all">
                  Documentation_v2.0
                </button>
              </div>
            </aside>
          </div>
        </SectionWrapper>
        
        {/* Background Decal */}
        <div className="absolute top-1/2 left-0 text-[30rem] font-black italic text-brand-dark/[0.02] select-none pointer-events-none -translate-x-1/2 -translate-y-1/2 uppercase leading-none">
          {product.id}
        </div>
      </div>
    </main>
  );
}
