"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const TiltCard = ({ children, className, glowColor = "primary" }: TiltCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = event.clientX - rect.left;
    const mouseYVal = event.clientY - rect.top;

    const xPct = mouseXVal / width - 0.5;
    const yPct = mouseYVal / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    
    mouseX.set(mouseXVal);
    mouseY.set(mouseYVal);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative group h-full transition-shadow duration-500",
        className
      )}
    >
      {/* Dynamic Border Glow */}
      <motion.div
        className={cn(
          "absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10",
          glowColor === "primary" ? "bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(45,156,219,0.1),transparent_80%)]" : ""
        )}
        style={{
          // @ts-ignore
          "--x": useTransform(mouseX, (val) => `${val}px`),
          // @ts-ignore
          "--y": useTransform(mouseY, (val) => `${val}px`),
        }}
      />

      <div className="relative z-20 h-full w-full rounded-[inherit] bg-white border border-brand-border overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
        {children}
      </div>
    </motion.div>
  );
};
