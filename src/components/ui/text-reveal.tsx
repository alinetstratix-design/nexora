"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextReveal = ({ 
  text, 
  className, 
  delay = 0 
}: { 
  text: string; 
  className?: string; 
  delay?: number;
}) => {
  const words = text.split(" ");
  
  return (
    <div className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.2em] overflow-hidden inline-flex">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};
