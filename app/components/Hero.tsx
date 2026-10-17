"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { EASE, LOADER_MS } from "@/lib/motion";
import Button from "./Button";

const START = LOADER_MS / 1000 - 0.2;
const words = ["Shine", "That", "Defines", "You"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBottle = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const yCardA = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const yCardB = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative flex min-h- items-center overflow-hidden px-5 pb-24 pt-32 md:px-10">
      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div style={{ y: yText, opacity: fade }} className="will-change-transform">
          <motion.p
            className="text-sm font-medium tracking-[0.25em] text-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: START }}
          >
            COSMETICS MANUFACTURER · KARACHI
          </motion.p>

          <h1 className="mt-6 font-serif text-[clamp(3rem,8.5vw,7.5rem)] font-medium leading-[0.98] text-ink" aria-label="Shine That Defines You">
            {words.map((w, i) => (
              <span key={w} className="mr-[0.25em] inline-block overflow-hidden align-bottom" aria-hidden="true">
                <motion.span
                  className={`inline-block will-change-transform ${w === "Defines" ? "italic text-gold" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.1, delay: START + 0.1 + i * 0.12, ease: EASE }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink/65"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: START + 0.7, ease: EASE }}
          >
            KeraShine formulates and manufactures premium hair care for salons,
            retailers and growing brands, from our laboratory in Karachi. Now live with 4 hero products.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: START + 0.9, ease: EASE }}
          >
            <Button href="#products">Explore Products</Button>
            <Button href="#contact" variant="outline">
              Become a Distributor
            </Button>
          </motion.div>
        </motion.div>

        {/* Parallax collage - NOW WITH REAL PRODUCTS */}
        <div className="relative mx-auto h-[min(70vh,600px)] w-full max-w-md lg:max-w-none">
          <motion.div
            style={{ y: yBottle }}
            className="absolute inset-x-[15%] inset-y-0 overflow-hidden rounded-t-full rounded-b-[2.5rem] bg-gradient-to-b from-beige to-white shadow-lift will-change-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: START + 0.2, ease: EASE }}
          >
            <Image
              src="/images/keratin-shampoo.webp"
              alt="KeraShine Keratin Shampoo"
              fill
              priority
              sizes="(min-width: 1024px) 30vw, 70vw"
              className="object-contain p-8"
            />
          </motion.div>

          <motion.div style={{ y: yCardA }} className="absolute -left-2 top-[8%] h-36 w-28 will-change-transform sm:h-44 sm:w-36 lg:-left-10">
            <motion.div
              className="relative h-full w-full overflow-hidden rounded-3xl border-4 border-cream bg-white shadow-soft"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: START + 0.6, ease: EASE }}
            >
              <Image src="/images/silk-conditioner.webp" alt="Silk Conditioner" fill sizes="160px" className="object-contain p-3" />
            </motion.div>
          </motion.div>

          <motion.div style={{ y: yCardB }} className="absolute -right-2 bottom-[6%] h-40 w-32 will-change-transform sm:h-52 sm:w-40 lg:-right-8">
            <motion.div
              className="relative h-full w-full overflow-hidden rounded-3xl border-4 border-cream bg-white shadow-soft"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: START + 0.8, ease: EASE }}
            >
              <Image src="/images/hair-mask.webp" alt="KeraShine Hair Mask" fill sizes="180px" className="object-contain p-3" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute -bottom-2 left-[6%] rounded-2xl border border-white/70 bg-white/70 px-5 py-4 shadow-soft backdrop-blur-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: START + 1.1 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: START + 1.5 },
            }}
          >
            <p className="font-serif text-xl text-ink">4 Products Live</p>
            <p className="text-xs text-ink/55">Shampoo · Conditioner · Serum · Mask</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-ink/50 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: START + 1.4, duration: 1 }}
        aria-hidden="true"
      >
        Scroll
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={20} />
        </motion.span>
      </motion.div>
    </section>
  );
}