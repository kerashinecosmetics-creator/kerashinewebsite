"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function SectionHeading({
  kicker,
  title,
  text,
  center = false,
  dark = false,
}: {
  kicker: string;
  title: string;
  text?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <motion.div
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <motion.p variants={fadeUp} className="text-sm font-medium tracking-[0.2em] text-gold">
        {kicker}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className={`mt-4 font-serif text-4xl font-medium leading-[1.08] md:text-6xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </motion.h2>
      {text && (
        <motion.p variants={fadeUp} className={`mt-6 text-lg leading-relaxed ${dark ? "text-white/65" : "text-ink/65"}`}>
          {text}
        </motion.p>
      )}
    </motion.div>
  );
}
