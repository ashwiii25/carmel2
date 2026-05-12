"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeader({
  kicker,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div 
      className={cn(
        "max-w-4xl mb-16 lg:mb-24",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-4"
      >
        {kicker}
      </motion.span>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight tracking-tight text-primary",
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl font-light text-foreground/70 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
