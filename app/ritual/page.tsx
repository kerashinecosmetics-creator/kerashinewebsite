import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button";
import { MotionDiv, MotionH1, Reveal } from "@/app/components/motion";
import Tilt from "@/app/components/Tilt";
import { products } from "@/lib/data";
export const metadata: Metadata = {
  title: "Ritual | KeraShine",
  description: "How to use KeraShine 4-step ritual: Shampoo, Condition, Mask, Serum for 48h shine.",
};
const steps = [
  {
    title: "Cleanse",
    product: "Keratin Shampoo",
    text: "Wet hair with lukewarm water. Massage a coin-sized amount into scalp for 60 seconds, rinse until water runs clear.",
    image: "/images/keratin-shampoo.webp",
  },
  {
    title: "Condition",
    product: "Silk Conditioner",
    text: "Squeeze excess water. Apply conditioner mid-length to ends, comb through, leave 3 minutes, rinse cool.",
    image: "/images/silk-conditioner.webp",
  },
  {
    title: "Treat",
    product: "Repair Hair Mask",
    text: "Once a week: Apply mask generously after conditioner, leave 10-15 minutes for deep keratin repair.",
    image: "/images/hair-mask.webp",
  },
  {
    title: "Finish",
    product: "Gloss Serum",
    text: "Warm 2 pumps of serum between palms, smooth over damp hair before styling. Locks 48h shine.",
    image: "/images/gloss-serum.webp",
  },
];
export default function RitualPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-40 md:px-10 md:pt-48">
        {/* FIXED: h- w- -> h-[30rem] w-[30rem] */}
        <MotionDiv
          aria-hidden="true"
          className="absolute -left-40 top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-rose/40 blur-3xl"
          animate={{ x: [0, 70, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <MotionH1
              className="font-display text-[clamp(3.2rem,10vw,7rem)] font-extrabold leading-[0.86] tracking-tighter text-ink"
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Four steps. Ten minutes.
            </MotionH1>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink/70">
                Built so each product prepares hair for the next. Use all 4 for full 48-hour mirror shine.
              </p>
            </Reveal>
          </div>
          <MotionDiv initial={{ opacity: 0, scale: 0.85, rotate: 6 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.1, delay: 0.2 }}>
            <Tilt className="relative mx-auto aspect-square w-full max-w-md" max={12}>
              <MotionDiv className="relative h-full w-full" animate={{ y: [0, -14, 0] }} transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}>
                <Image src="/images/hair-mask.webp" alt="KeraShine ritual" fill priority sizes="40vw" className="object-contain drop-shadow-[0_50px_50px_rgba(42,19,66,0.25)]" />
              </MotionDiv>
            </Tilt>
          </MotionDiv>
        </div>
      </section>
      <section className="px-5 pb-28 md:px-10 md:pb-36">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <MotionDiv className="glass relative flex h-full flex-col overflow-hidden rounded-[2.5rem] p-6 md:p-8" whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                <div className="relative h-40 w-full">
                  <Image src={s.image} alt={s.product} fill className="object-contain" />
                </div>
                <span className="mt-6 font-display text-6xl font-extrabold leading-none text-champagne/60">{i + 1}</span>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink">{s.title}</h2>
                <p className="text-xs font-semibold tracking-widest text-gold">{s.product}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.text}</p>
              </MotionDiv>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="px-3 pb-28 md:px-6">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-ink px-6 py-20 text-pearl md:px-14 md:py-28">
          <Reveal>
            <h2 className="font-display text-4xl font-extrabold leading-[0.98] tracking-tighter md:text-6xl">Complete Collection</h2>
            <p className="mt-6 max-w-xl text-lg text-pearl/65">All 4 KeraShine products — the full ritual in your salon or store.</p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
                <div className="glass-dark flex h-full flex-col rounded-[2.5rem] p-6">
                  <div className="relative h-40 w-full"><Image src={p.image} alt={p.name} fill className="object-contain" /></div>
                  <h3 className="mt-4 font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm text-pearl/60 line-clamp-2">{p.short}</p>
                  <Link href={`/collection/${p.id}`} className="mt-auto inline-block rounded-full border border-white/20 px-5 py-2 text-sm font-semibold transition hover:bg-white/10">View</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 pb-28 text-center md:px-10">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tighter text-ink md:text-5xl">Want KeraShine in your salon?</h2>
          <div className="mt-8"><Button href="/contact">Distributor inquiry</Button></div>
        </Reveal>
      </section>
    </>
  );
}