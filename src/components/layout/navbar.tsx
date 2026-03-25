"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Dynamic transformations based on scroll - Elite "nav-shrink" response
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "92%"]);
  const navPadding = useTransform(scrollY, [0, 100], ["1.5rem", "0.6rem"]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.7]);
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.15)"] // 15-20% glassmorphism
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none pt-2 md:pt-4 transition-all duration-700">
      <motion.nav
        style={{
          width: navWidth,
          padding: navPadding,
          backgroundColor: navBg,
        }}
        className={cn(
          "pointer-events-auto transition-all duration-700 flex items-center justify-center",
          isScrolled
            ? "rounded-full backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.08)] mx-4 md:mx-auto max-w-6xl"
            : "mx-0 max-w-none border-b border-white/5"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              style={{ scale: logoScale }}
              className="relative w-[300px] md:w-[450px] h-[60px] md:h-[100px] transition-all duration-500 origin-left"
            >
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 768px) 200px, 450px"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav with Pill Indicator */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-sm p-1 rounded-full relative border border-white/10">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onMouseEnter={() => setHoveredLink(item.title)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={cn(
                    "relative px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 z-10",
                    isActive ? "text-brand-purple" : "text-brand-gray hover:text-brand-dark"
                  )}
                >
                  {item.title}
                  {(hoveredLink === item.title || isActive) && (
                    <motion.div
                      layoutId="nav-pill"
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        duration: 0.6
                      }}
                      className={cn(
                        "absolute inset-0 bg-white rounded-full shadow-lg -z-10",
                        isActive && "border border-brand-purple/10"
                      )}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Button
              size="lg"
              className="hidden md:flex h-12 px-10 rounded-full font-black text-[11px] uppercase tracking-[0.25em] nexora-gradient hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand-purple/20 text-white border-none"
            >
              Start Project
            </Button>

            {/* Mobile Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={cn(
                "md:hidden p-3 rounded-full transition-all duration-500 z-[110]",
                isOpen ? "bg-white text-brand-dark" : "bg-white/10 backdrop-blur-md text-white border border-white/20"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Full-Screen Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-brand-dark/98 backdrop-blur-3xl z-[105] flex flex-col p-8 pt-32 md:hidden"
            >
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-4">NAVIGATION</span>
                {siteConfig.nav.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "text-5xl font-black uppercase tracking-tighter transition-all flex items-center gap-4",
                          isActive ? "text-brand-purple italic" : "text-white/40 hover:text-white"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                        {isActive && <motion.div layoutId="mobile-dot" className="w-3 h-3 rounded-full bg-brand-purple" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-auto space-y-8">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">GET IN TOUCH</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-xl font-bold text-white underline underline-offset-8 decoration-brand-purple/50">
                    {siteConfig.contact.email}
                  </a>
                </div>
                
                <Button className="w-full h-20 rounded-3xl font-black text-xl uppercase tracking-[0.2em] nexora-gradient text-white border-none shadow-3xl shadow-brand-purple/40">
                  START PROJECT
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};
