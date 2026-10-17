"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Respects the visitor's "reduce motion" OS setting everywhere.
export default function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
