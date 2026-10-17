"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent";

const types = ["Distributor", "Salon owner", "Retailer", "Other"];

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    // TODO: send `data` to your API route, Formspree, or email service.
    console.log("Distributor inquiry", data);
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  }

  return (
    <section className="relative isolate overflow-hidden px-5 pb-28 pt-40 md:px-10 md:pt-48">
      <motion.div
        aria-hidden="true"
        className="absolute -right-40 top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-violet/25 blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <motion.h1
            className="font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.9] tracking-tighter text-ink"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Stock KeraShine.
          </motion.h1>
          <motion.p
            className="mt-8 max-w-md text-lg leading-relaxed text-ink/70"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Tell us about your salon, store or distribution network. Our team replies within two working days with
            pricing, minimum orders and territory availability.
          </motion.p>
          <motion.div
            className="glass mt-10 rounded-[2.5rem] p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <p className="font-display text-xl font-bold text-ink">KeraShine Laboratory</p>
            <p className="mt-2 text-ink/70">Karachi, Sindh, Pakistan</p>
            <p className="mt-4 text-ink/70">kerashinecosmetics@gmail.com</p>
          </motion.div>
        </div>

        <motion.div
          className="glass rounded-[2.5rem] p-6 md:p-10"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            {status !== "sent" ? (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                exit={{ opacity: 0, y: -20 }}
                className="grid gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 font-semibold text-ink">
                    Full name
                    <input name="name" required autoComplete="name" className="field" placeholder="Ayesha Khan" />
                  </label>
                  <label className="grid gap-2 font-semibold text-ink">
                    Company
                    <input name="company" required autoComplete="organization" className="field" placeholder="Glow Salon" />
                  </label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 font-semibold text-ink">
                    Email
                    <input name="email" type="email" required autoComplete="email" className="field" placeholder="you@company.com" />
                  </label>
                  <label className="grid gap-2 font-semibold text-ink">
                    Phone
                    <input name="phone" type="tel" autoComplete="tel" className="field" placeholder="+92 300 0000000" />
                  </label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 font-semibold text-ink">
                    City
                    <input name="city" required className="field" placeholder="Lahore" />
                  </label>
                  <label className="grid gap-2 font-semibold text-ink">
                    I am a
                    <select name="type" className="field" defaultValue={types[0]}>
                      {types.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="grid gap-2 font-semibold text-ink">
                  Tell us about your business
                  <textarea
                    name="message"
                    rows={4}
                    className="field resize-none"
                    placeholder="Number of outlets, expected monthly volume, regions you serve…"
                  />
                </label>
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="focus-ring rounded-full bg-ink px-8 py-4 text-base font-semibold text-pearl disabled:opacity-60"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {status === "sending" ? "Sending…" : "Send inquiry"}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 160, damping: 16 }}
                className="grid place-items-center py-16 text-center"
                role="status"
              >
                <motion.svg
                  viewBox="0 0 52 52"
                  className="h-20 w-20"
                  fill="none"
                  stroke="#2A1342"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <motion.circle cx="26" cy="26" r="23" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
                  <motion.path d="M15 27l8 8 14-16" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.7 }} />
                </motion.svg>
                <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-ink">Inquiry received</h2>
                <p className="mt-3 max-w-sm text-ink/70">
                  Thank you. Our distribution team will reply within two working days.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="focus-ring mt-8 rounded-full border border-ink/15 px-6 py-3 font-semibold text-ink transition hover:bg-white/70"
                >
                  Send another inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
