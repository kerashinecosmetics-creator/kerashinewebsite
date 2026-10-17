import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button";
import { MotionDiv, MotionH1, Reveal } from "@/app/components/motion";
import Tilt from "@/app/components/Tilt";
import { getProduct } from "@/lib/products";

export const metadata: Metadata = {
  title: "Ritual",
  description: "How to use KeraShine: a three-step ritual and the Signature Sets in 250 ml and 500 ml.",
};

const steps = [
  {
    title: "Cleanse",
    text: "Wet hair with lukewarm water. Massage a coin-sized amount of Keratin Repair Shampoo into the scalp for 60 seconds, then rinse until the water runs clear.",
  },
  {
    title: "Condition",
    text: "Squeeze out excess water. Apply Silk Conditioner from mid-length to ends, comb through, and leave for three minutes before rinsing cool.",
  },
  {
    title: "Finish",
    text: "Warm two pumps of Argan Gloss Serum between your palms and smooth over damp hair before styling. This is the step that locks in 48 hours of shine.",
  },
];

export default function RitualPage() {
  const sets = [getProduct("signature-small"), getProduct("signature-large")].filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );

  return (
    <>
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-40 md:px-10 md:pt-48">
        <MotionDiv
          aria-hidden="true"
          className="absolute -left-40 top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-rose/40 blur-3xl"
          animate={{ x: [0, 70, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <MotionH1
              className="font-display text-[clamp(3.2rem,10vw,9rem)] font-extrabold leading-[0.86] tracking-tighter text-ink"
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Three steps. Five minutes.
            </MotionH1>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink/70">
                The ritual is built so each product prepares hair for the next. Use all three for the full 48-hour
                effect.
              </p>
            </Reveal>
          </div>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.85, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tilt className="relative mx-auto aspect-square w-full max-w-md" max={12}>
              <MotionDiv
                className="relative h-full w-full"
                animate={{ y: [0, -14, 0], rotate: [-1.5, 1.5, -1.5] }}
                transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
              >
                <Image
                  src="/images/ritual-set.png"
                  alt="The KeraShine ritual set"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-contain drop-shadow-[0_50px_50px_rgba(42,19,66,0.35)]"
                />
              </MotionDiv>
            </Tilt>
          </MotionDiv>
        </div>
      </section>

      {/* Steps: a true sequence */}
      <section className="px-5 pb-28 md:px-10 md:pb-36">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <MotionDiv
                className="glass relative h-full overflow-hidden rounded-[2.5rem] p-8 md:p-10"
                whileHover={{ y: -14, scale: 1.04, rotate: i === 1 ? 1 : -1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <span className="font-display text-8xl font-extrabold leading-none text-champagne/60">{i + 1}</span>
                <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-ink/70">{s.text}</p>
              </MotionDiv>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Signature Sets */}
      <section className="px-3 pb-28 md:px-6">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-ink px-6 py-20 text-pearl md:px-14 md:py-28">
          <Reveal>
            <h2 className="font-display text-4xl font-extrabold leading-[0.98] tracking-tighter md:text-7xl">
              Signature Sets
            </h2>
            <p className="mt-6 max-w-xl text-lg text-pearl/65">
              The whole ritual in one box. Choose the size that matches your hair and your routine.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {sets.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.15}>
                <MotionDiv
                  className="glass-dark h-full rounded-[2.5rem] p-8 md:p-10"
                  whileHover={{ y: -15, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-3xl font-bold tracking-tight">{p.name.replace("Signature Set: ", "")}</h3>
                    <span className="rounded-full px-4 py-1.5 text-sm font-bold text-ink" style={{ backgroundColor: p.accent }}>
                      {p.size}
                    </span>
                  </div>
                  <p className="mt-4 text-pearl/70">{p.description}</p>
                  <ul className="mt-6 space-y-3">
                    {p.contents?.map((c) => (
                      <li key={c} className="flex items-center gap-3 text-pearl/85">
                        <span className="h-2 w-2 rounded-full bg-champagne" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/collection/${p.id}`}
                    className="focus-ring mt-8 inline-block rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
                  >
                    View specifications
                  </Link>
                </MotionDiv>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 text-center md:px-10">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tighter text-ink md:text-5xl">
            Want KeraShine in your salon?
          </h2>
          <div className="mt-8">
            <Button href="/contact">Distributor inquiry</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
