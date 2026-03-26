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
            ? "w-full max-w-5xl px-8 h-16 rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            : "w-full max-w-7xl px-8 h-20 bg-transparent border-transparent"
        )}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="relative w-8 h-8 rounded-xl bg-brand-blue/10 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className={cn(
            "font-black text-xl uppercase italic tracking-tighter transition-colors",
            scrolled ? "text-brand-dark" : "text-white"
          )}>
            {siteConfig.name}
          </span>
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
                      ? isActive ? "text-brand-blue" : "text-brand-gray hover:text-brand-dark"
                      : isActive ? "text-white" : "text-white/60 hover:text-white"
                  )}
                >
                  {item.title}
                  {/* Highlight bar */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-5 right-5 h-0.5 bg-brand-blue"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </Magnetic>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Magnetic strength={0.1}>
            <Button
              variant={scrolled ? "default" : "outline"}
              className={cn(
                "h-11 px-8 rounded-full font-black uppercase tracking-widest text-[10px] gap-2",
                !scrolled && "border-white/20 text-white hover:bg-white hover:text-brand-dark"
              )}
            >
              Get Started <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Magnetic>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className={cn(
            "lg:hidden relative z-50 p-2 rounded-xl transition-colors",
            scrolled ? "bg-brand-light text-brand-dark" : "bg-white/10 text-white"
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
            className="fixed inset-x-4 top-24 z-50 p-8 rounded-[2.5rem] bg-white/90 backdrop-blur-2xl border border-brand-border shadow-2xl lg:hidden"
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
                      "text-3xl font-black uppercase italic tracking-tighter transition-colors",
                      pathname === item.href ? "text-brand-blue" : "text-brand-dark hover:text-brand-blue"
                    )}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <Button className="w-full h-16 rounded-2xl text-lg font-black uppercase italic tracking-widest nexora-gradient">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};