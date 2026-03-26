"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import {
  Check,
  ArrowLeft,
  ShoppingCart,
  Share2,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";

// ✅ Lazy load heavy components
const TiltCard = dynamic(() => import("@/components/ui/tilt-card").then(mod => mod.TiltCard), { ssr: false });
const Magnetic = dynamic(() => import("@/components/ui/magnetic").then(mod => mod.Magnetic), { ssr: false });
const TextReveal = dynamic(() => import("@/components/ui/text-reveal").then(mod => mod.TextReveal), { ssr: false });

interface ProductDetailContentProps {
  product: any;

}

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // ✅ prevent re-renders
  const features = useMemo(() => product.features || [], [product.features]);

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="relative py-20 md:py-32 overflow-hidden nexora-gradient text-white">
        <div className="absolute inset-0 bg-white/10 opacity-20" />

        <SectionWrapper className="relative z-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/80 text-xs font-bold uppercase mb-10 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              <motion.span
                initial={!isMobile ? { opacity: 0, x: -20 } : undefined}
                animate={!isMobile ? { opacity: 1, x: 0 } : undefined}
                className="text-white/60 text-xs uppercase mb-3 block"
              >
                {product.category}
              </motion.span>

              <h1 className="text-3xl md:text-5xl font-black italic mb-6">
                <TextReveal text={product.title} />
              </h1>

              <p className="text-white/80 text-lg mb-8">
                {product.longDescription}
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <div className="text-4xl font-black">
                  {product.price}
                  <span className="block text-xs opacity-60 mt-1">
                    LIFETIME ACCESS
                  </span>
                </div>

                <Magnetic>
                  <Button className="h-14 px-8 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition">
                    <ShoppingCart className="w-5 h-5" />
                    Buy Now
                  </Button>
                </Magnetic>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <TiltCard className="rounded-3xl overflow-hidden border border-white/10">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    quality={70}
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </TiltCard>

              {/* floating badge */}
              {!isMobile && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-white" />
                    <div>
                      <p className="text-xs text-white/60">Speed</p>
                      <p className="font-bold">99.9%</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-20">
        <SectionWrapper>
          <div className="grid lg:grid-cols-12 gap-12">
            {/* FEATURES */}
            <div className="lg:col-span-8 space-y-10">
              <h2 className="text-3xl font-black flex items-center gap-3">
                <ShieldCheck className="text-blue-500" />
                Key Features
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature: string, i: number) => (
                  <motion.div
                    key={feature}
                    initial={!isMobile ? { opacity: 0, y: 20 } : undefined}
                    whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
                    transition={{ delay: i * 0.05 }}
                    className="p-6 border rounded-xl hover:shadow-md transition"
                  >
                    <Check className="mb-3 text-blue-500" />
                    <h4 className="font-bold">{feature}</h4>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="p-6 border rounded-xl">
                <h3 className="font-bold mb-4">Tech Stack</h3>

                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span>Framework</span>
                    <span>Next.js</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Animation</span>
                    <span>Framer Motion</span>
                  </li>
                  <li className="flex justify-between">
                    <span>UI</span>
                    <span>Tailwind</span>
                  </li>
                </ul>

                <Button className="w-full mt-6 flex gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>

              <div className="p-6 border rounded-xl text-center">
                <Globe className="mx-auto mb-3 text-blue-500" />
                <h4 className="font-bold">Global Support</h4>
                <p className="text-sm text-gray-500">
                  Documentation & support available
                </p>
              </div>
            </aside>
          </div>
        </SectionWrapper>
      </section>
    </main>
  );
}