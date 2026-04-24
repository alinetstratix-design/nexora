import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeaderProps) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("max-w-3xl mb-16 flex flex-col", alignmentClasses[align], className)}
    >
      {subtitle && (
        <span className="px-4 py-1.5 rounded-2xl bg-orange-500/5 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border border-orange-500/10">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
};
