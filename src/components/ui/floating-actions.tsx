"use client";

import { MessageCircle, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappNumber = siteConfig.contact.phone.replace(/[^0-9]/g, "");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">

      {/* 🔝 Scroll To Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={scrollToTop}
            className="group relative p-3 rounded-full bg-white text-brand-dark shadow-xl hover:shadow-2xl border border-brand-border hover:-translate-y-1 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1 text-xs font-bold bg-black text-white rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 💬 WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex items-center justify-center p-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />

        {/* Pulse Effect 🔥 */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1 text-xs font-bold bg-black text-white rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Chat with us
        </span>
      </motion.a>
    </div>
  );
};