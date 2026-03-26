"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

export const Magnetic = ({
  children,
  className,
  strength = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    setPosition({
      x: x * strength,
      y: y * strength,
    });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={position}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};