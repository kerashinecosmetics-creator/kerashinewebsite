"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { whatsappNumber } from "@/lib/data";
import { EASE, fadeUp, stagger, viewport } from "@/lib/motion";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

const info = [
  { icon: MapPin, label: "Karachi, Sindh, Pakistan" },
  { icon: Phone, label: "+92 326 8681026" },
  { icon: Mail, label: "kerashinecosmetics@gmail.com" },
  { icon: Clock, label: "Mon to Sat, 9:00 to 18:00" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    setSending(true);
    // No backend needed: the inquiry opens in WhatsApp, pre-filled.
    const text = `Hello KeraShine,\nName: ${d.name}\nBusiness: ${d.business}\nPhone: ${d.phone}\n\n${d.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    setSent(true);
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        <SectionHeading
          kicker="Become a partner"
          title="Let us build something together."
          text="Tell us about your business. We reply within two working days with pricing, minimum orders and timelines."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            className="rounded-[2.5rem] border border-ink/5 bg-white p-6 shadow-soft md:p-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0, y: -16 }} className="grid gap-5">
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    Name
                    <input name="name" required autoComplete="name" className="field" placeholder="Your full name" />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    Business
                    <input name="business" required autoComplete="organization" className="field" placeholder="Company or salon name" />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    Phone
                    <input name="phone" type="tel" required autoComplete="tel" className="field" placeholder="+92 300 0000000" />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-ink">
                    Message
                    <textarea name="message" required rows={4} className="field resize-none" placeholder="What are you looking for? Private label, bulk supply, distribution…" />
                  </label>
                  <motion.button
                    type="submit"
                    disabled={sending}
                    className="focus-ring rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gold hover:text-ink disabled:opacity-60"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {sending ? "Opening WhatsApp…" : "Send inquiry"}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="done"
                  role="status"
                  className="grid place-items-center py-16 text-center"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <motion.svg viewBox="0 0 52 52" className="h-20 w-20" fill="none" stroke="#C9A96E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <motion.circle cx="26" cy="26" r="23" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
                    <motion.path d="M15 27l8 8 14-16" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.7 }} />
                  </motion.svg>
                  <h3 className="mt-6 font-serif text-3xl text-ink">Thank you</h3>
                  <p className="mt-3 max-w-xs text-ink/60">Your inquiry is ready in WhatsApp. Press send there and we will reply shortly.</p>
                  <button type="button" onClick={() => setSent(false)} className="focus-ring mt-8 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition hover:bg-cream">
                    Send another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            variants={stagger(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.ul variants={fadeUp} className="grid gap-4 rounded-[2.5rem] bg-ink p-8 text-white md:p-10">
              {info.map((i) => (
                <li key={i.label} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <i.icon size={20} strokeWidth={1.5} />
                  </span>
                  <span className="text-white/85">{i.label}</span>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello KeraShine, I would like to know more about working with you.")}`}
                  variant="gold"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </Button>
              </li>
            </motion.ul>

            <motion.div variants={fadeUp} className="group relative min-h-[18rem] flex-1 overflow-hidden rounded-[2.5rem] border border-ink/5 shadow-soft">
              <iframe
                title="KeraShine location in Karachi"
                src="https://www.google.com/maps?q=Karachi,Pakistan&output=embed"
                className="absolute inset-0 h-full w-full grayscale transition duration-700 group-hover:grayscale-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
