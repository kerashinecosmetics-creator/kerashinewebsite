"use client";

import { motion } from "framer-motion";
import { Check, Handshake, Package, Tag } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Tag,
    title: "Private Label",
    text: "Launch your own brand on formulas we already make, or develop a custom one.",
    points: ["Custom formulation", "Your packaging and branding", "Low minimum order quantities"],
  },
  {
    icon: Package,
    title: "Bulk Manufacturing",
    text: "Consistent, documented production for salons, retailers and other brands.",
    points: ["Scalable batch sizes", "Full batch records", "Stability and safety testing"],
  },
  {
    icon: Handshake,
    title: "Distribution Partnership",
    text: "Become an authorized KeraShine distributor in your city or region.",
    points: ["Territory protection", "Marketing support", "Priority supply"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden bg-ink">
      <div aria-hidden="true" className="blob-a absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-gold/15 blur-[120px]" />
      <div className="container-x relative">
        <SectionHeading
          dark
          kicker="For businesses"
          title="Ways to work with KeraShine."
          text="Whether you are starting a brand, stocking a salon or growing a distribution network, there is a model that fits."
        />
        <motion.div
          className="mt-16 grid gap-6 lg:grid-cols-3"
          variants={stagger(0.16)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -14 }}
              className="group flex flex-col rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-9 backdrop-blur-xl transition-colors duration-500 hover:border-gold/60 hover:bg-white/[0.07] will-change-transform"
            >
              <div className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <s.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="mt-8 font-serif text-3xl font-medium text-white">{s.title}</h3>
              <p className="mt-3 text-white/60">{s.text}</p>
              <ul className="mt-8 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-white/80">
                    <Check size={16} className="shrink-0 text-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.9 }}
        >
          <Button href="#contact" variant="gold">
            Discuss your project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
