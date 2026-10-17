"use client";

import { motion } from "framer-motion";

// The "48h shine" seal: rotating ring of text around a fixed centre.
export default function ShineBadge({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`glass relative grid h-40 w-40 place-items-center rounded-full md:h-48 md:w-48 ${className}`}
      initial={{ scale: 0, rotate: -90 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay: 1.2 }}
      whileHover={{ scale: 1.1, rotate: 6 }}
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        aria-hidden="true"
      >
        <defs>
          <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-ink font-display text-[15px] font-bold" letterSpacing="3.2">
          <textPath href="#badge-circle">48 HOUR MIRROR SHINE ✦ 48 HOUR MIRROR SHINE ✦</textPath>
        </text>
      </motion.svg>
      <div className="text-center leading-none">
        <p className="font-display text-5xl font-extrabold text-ink md:text-6xl">48h</p>
        <p className="mt-1 text-xs font-semibold text-plum">shine</p>
      </div>
    </motion.div>
  );
}
