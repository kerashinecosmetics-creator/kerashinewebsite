"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Re-exports so server components (pages) can use motion elements.
export const MotionDiv = motion.div;
export const MotionSpan = motion.span;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionP = motion.p;
export const MotionLi = motion.li;

export const EASE = [0.22, 1, 0.36, 1] as const;

// fadeInUp when scrolled into view
export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
