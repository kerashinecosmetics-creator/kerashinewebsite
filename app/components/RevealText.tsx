"use client";

import { motion } from "framer-motion";

// Letters rise out of a mask, one after another.
export default function RevealText({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`inline-block overflow-hidden py-[0.04em] leading-[0.9] ${className}`} aria-hidden="true">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "115%", rotate: 8 }}
          animate={{ y: "0%", rotate: 0 }}
          transition={{ duration: 1, delay: delay + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
