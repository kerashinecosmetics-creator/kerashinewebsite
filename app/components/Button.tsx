"use client";

import { motion } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { scrollToId } from "@/lib/scroll";
import Magnetic from "./Magnetic";

type Variant = "dark" | "gold" | "outline" | "light";

const styles: Record<Variant, string> = {
  dark: "bg-ink text-white hover:bg-ink/90",
  gold: "bg-gold text-ink hover:bg-[#d6b97f]",
  outline: "border border-ink/20 bg-white/40 text-ink backdrop-blur-md hover:bg-white/80",
  light: "bg-white text-ink hover:bg-cream",
};

// href="#id" smooth-scrolls via Lenis; anything else is a normal link.
export default function Button({
  href,
  children,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const internal = href.startsWith("#");
  return (
    <Magnetic>
      <motion.a
        href={href}
        {...(internal
          ? {
              onClick: (e: MouseEvent) => {
                e.preventDefault();
                scrollToId(href.slice(1));
              },
            }
          : { target: "_blank", rel: "noopener noreferrer" })}
        className={`focus-ring inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium transition-colors duration-300 ${styles[variant]} ${className}`}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
      >
        {children}
      </motion.a>
    </Magnetic>
  );
}
