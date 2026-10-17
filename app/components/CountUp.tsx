"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function CountUp({
  to,
  suffix = "",
  duration = 2,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const value = useMotionValue(0);
  const text = useTransform(value, (v) => Math.round(v) + suffix);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, value, to, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  );
}
