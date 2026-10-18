"use client";

import { motion } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { scrollToId } from "@/lib/scroll";
import Magnetic from "./Magnetic";

type Variant = "dark" | "gold" | "outline" | "light";

const styles: Record<Variant, string> = {
  dark: "bg-[#111] !text-white",
  gold: "bg-gold !text-ink",
  outline: "border border-ink/20 bg-white/40 !text-ink",
  light: "bg-white !text-ink",
};

type Props = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({ href, children, variant="dark", className="", type="button" }: Props) {
  const internal = href?.startsWith("#");
  const base = `focus-ring inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium !text-white transition ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Magnetic>
        <motion.a
          href={href}
          onClick={internal ? (e: MouseEvent) => { e.preventDefault(); scrollToId(href.slice(1)); } : undefined}
          className={base}
          style={{ color: "#fff" }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
        >
          {children}
        </motion.a>
      </Magnetic>
    );
  }

  return (
    <Magnetic>
      <motion.button type={type} className={base} style={{ color: "#fff" }} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
        {children}
      </motion.button>
    </Magnetic>
  );
}