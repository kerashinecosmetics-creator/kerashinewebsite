"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import CountUp from "./CountUp";
import SectionHeading from "./SectionHeading";

const stats = [
  { to: 500, suffix: "+", label: "Clients served" },
  { to: 5, suffix: "+", label: "Years of experience" },
  { to: 120, suffix: "+", label: "Formulas developed" },
  { to: 100, suffix: "%", label: "Made in Karachi" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section id="about" className="section-pad">
      <div className="container-x">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div ref={ref} className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-pearl shadow-lift">
            <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
              <Image
                src="/images/lab-texture.webp"
                alt="The KeraShine laboratory"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-serif text-2xl text-white">
              Formulated, tested and filled under one roof.
            </p>
          </div>

          <div>
            <SectionHeading
              kicker="About KeraShine"
              title="A Karachi laboratory with international standards."
              text="KeraShine is a cosmetics manufacturer focused on hair care, skin care and private label production. Our mission is simple: give salons, retailers and emerging brands a dependable local partner, with formulas that are documented, tested and consistent from the first batch to the thousandth."
            />
            
            {/* DETAIL PAGE BUTTON - NEW */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-6 py-3 text-sm font-medium text-ink shadow-soft transition hover:bg-ink hover:text-white"
              >
                Learn more about us
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-gold hover:text-ink"
              >
                Become a partner
              </Link>
            </div>

            <motion.div
              className="mt-12 grid grid-cols-2 gap-4"
              variants={stagger(0.12, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="rounded- border border-ink/5 bg-white/70 p-6 shadow-soft backdrop-blur-xl will-change-transform"
                >
                  <p className="font-serif text-5xl font-medium text-ink">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-ink/60">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}