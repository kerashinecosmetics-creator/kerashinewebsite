"use client";

import { motion } from "framer-motion";

// Infinite, seamless marquee. Two identical copies; each item carries its own
// right padding so translating by -50% lands exactly on the loop point.
export default function Marquee({
  items,
  duration = 32,
  dark = false,
  className = "",
}: {
  items: string[];
  duration?: number;
  dark?: boolean;
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        className="flex w-max whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className={`flex items-center gap-10 pr-10 font-display text-3xl font-bold tracking-tight md:text-5xl ${
              dark ? "text-pearl" : "text-ink"
            }`}
          >
            {item}
            <span className="text-champagne">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
