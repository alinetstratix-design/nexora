"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center py-4",
        scrolled ? "px-4" : "px-0"
      )}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative flex items-center justify-between transition-all duration-500 ease-out",
          scrolled
            ? "w-full max-w-5xl px-8 h-16 rounded-[2rem] bg-white/80 backdrop-blur-xl border-none shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            : "w-full max-w-7xl px-8 h-22 bg-transparent border-none"
        )}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center group relative z-50">
          {/* Desktop Logo: Full version */}
          <div className="hidden sm:flex relative h-11 w-[200px] items-center transition-transform hover:scale-105 duration-300">
            <Image 
              src="/logo.png" 
              alt="Nexora Logo" 
              width={200} 
              height={44} 
              className="h-11 w-full object-contain object-left" 
              priority
            />
          </div>
          
          {/* Mobile Logo: Just the 'N' icon */}
          <div className="flex sm:hidden relative h-10 w-10 items-center justify-center overflow-hidden bg-white/50 backdrop-blur-md rounded-xl border border-slate-200 transition-transform active:scale-95 duration-300">
            <Image 
              src="/logo.png" 
              alt="N Logo" 
              width={200} 
              height={44} 
              className="h-8 w-auto max-w-none object-contain object-left" 
              style={{ objectPosition: '0% 50%' }}
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-1">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Magnetic key={item.title} strength={0.15}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-5 py-2 text-xs font-black uppercase tracking-widest transition-colors group",
                    scrolled
                      ? isActive ? "text-orange-600" : "text-slate-500 hover:text-slate-900"
                      : isActive ? "text-orange-600" : "text-slate-900 hover:text-orange-600"
                  )}
                >
                  {item.title}
                  {/* Highlight bar */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-5 right-5 h-0.5 bg-orange-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </Magnetic>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Magnetic strength={0.1}>
            <Button
              onClick={() => window.open(siteConfig.contact.whatsapp, "_blank")}
              className={cn(
                "h-11 px-8 rounded-full font-black uppercase tracking-widest text-[10px] gap-2 nexora-gradient text-white shadow-lg shadow-orange-500/10 transition-transform hover:scale-105 active:scale-95 border-none"
              )}
            >
              Get Free Quote <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Magnetic>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className={cn(
            "lg:hidden relative z-50 p-2 rounded-xl transition-colors",
            scrolled ? "bg-slate-100 text-slate-900" : "bg-slate-100 text-slate-900"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-24 z-50 p-8 rounded-[2.5rem] bg-white/90 backdrop-blur-2xl border border-slate-200 shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-6 mb-10">
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-3xl font-black uppercase tracking-tighter transition-colors",
                      pathname === item.href ? "text-orange-600" : "text-slate-900 hover:text-orange-600"
                    )}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <Button 
              onClick={() => window.open(siteConfig.contact.whatsapp, "_blank")}
              className="w-full h-16 rounded-2xl text-lg font-black uppercase tracking-widest bg-orange-600 hover:bg-orange-700 text-white"
            >
              Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};