"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

// 3D tilt that follows the cursor.
export default function Tilt({ children, className, max = 10 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 160, damping: 16, mass: 0.5 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [max, -max]), spring);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-max, max]), spring);

  return (
    <div className={className} style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        className="h-full will-change-transform"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={(e) => {
          const r = ref.current?.getBoundingClientRect();
          if (!r) return;
          mx.set((e.clientX - r.left) / r.width - 0.5);
          my.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
