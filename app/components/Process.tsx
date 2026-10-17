"use client";

import { motion } from "framer-motion";
import { FlaskConical, Factory, ShieldCheck, Truck } from "lucide-react";
import { fadeUp, stagger, viewport, EASE } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const steps = [
  { icon: FlaskConical, title: "Formulation", text: "Our chemists develop and refine formulas around proven actives and your brief." },
  { icon: ShieldCheck, title: "Quality Testing", text: "Every formula is tested for stability, pH and safety before it goes to production." },
  { icon: Factory, title: "Manufacturing", text: "Controlled batches, trained operators and full batch records at every run." },
  { icon: Truck, title: "Distribution", text: "Packed, documented and delivered to partners across Pakistan on schedule." },
];

export default function Process() {
  return (
    <section id="process" className="section-pad bg-white/50">
      <div className="container-x">
        <SectionHeading
          center
          kicker="Why choose us"
          title="From idea to shelf in four controlled steps."
          text="A clear process means no surprises: you know what happens, who does it and when."
        />

        <div className="relative mt-20">
          {/* connecting line (desktop) */}
          <motion.div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-10 hidden h-px origin-left bg-gradient-to-r from-gold/0 via-gold to-gold/0 lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 1.6, ease: EASE, delay: 0.3 }}
          />
          <motion.ol
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={stagger(0.18)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -12 }}
                className="relative rounded-[2.5rem] border border-ink/5 bg-cream p-8 text-center shadow-soft will-change-transform"
              >
                <motion.div
                  className="relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-ink text-gold"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                >
                  <s.icon size={30} strokeWidth={1.5} />
                </motion.div>
                <p className="mt-6 text-sm font-medium text-gold">Step {i + 1}</p>
                <h3 className="mt-1 font-serif text-2xl font-medium text-ink">{s.title}</h3>
                <p className="mt-3 text-ink/60">{s.text}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
