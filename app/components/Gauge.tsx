"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

// Ring gauge. `scale` is the value that fills the full ring.
export default function Gauge({
  value,
  scale = 20,
  decimals = 0,
  name,
  color,
}: {
  value: number;
  scale?: number;
  decimals?: number;
  name: string;
  color: string;
}) {
  return (
    <div className="relative mx-auto h-60 w-60">
      <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="90" cy="90" r="74" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
        <motion.circle
          cx="90"
          cy="90"
          r="74"
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: value / scale }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter: `drop-shadow(0 0 10px ${color})` }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-display text-5xl font-extrabold leading-none text-pearl">
            <CountUp to={value} decimals={decimals} suffix="%" />
          </p>
          <p className="mt-2 text-sm font-semibold text-pearl/60">{name}</p>
        </div>
      </div>
    </div>
  );
}
