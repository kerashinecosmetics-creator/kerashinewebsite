"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE, LOADER_MS } from "@/lib/motion";

const letters = "KERASHINE".split("");

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const t = setTimeout(() => {
      setVisible(false);
      root.style.overflow = "";
    }, LOADER_MS);
    return () => {
      clearTimeout(t);
      root.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] grid place-items-center bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
          role="status"
          aria-label="Loading KeraShine"
        >
          <div className="text-center">
            <div className="flex overflow-hidden" aria-hidden="true">
              {letters.map((l, i) => (
                <motion.span
                  key={i}
                  className="inline-block font-serif text-4xl font-semibold tracking-[0.18em] text-beige will-change-transform sm:text-6xl md:text-7xl"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease: EASE }}
                >
                  {l}
                </motion.span>
              ))}
            </div>
            <motion.p
              className="mt-4 text-sm tracking-[0.4em] text-gold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              COSMETICS · KARACHI
            </motion.p>
            <div className="mx-auto mt-10 h-px w-48 overflow-hidden bg-white/10">
              <motion.div
                className="h-full origin-left bg-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: (LOADER_MS - 500) / 1000, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
