import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/app/components/Button";
import CountUp from "@/app/components/CountUp";
import Gauge from "@/app/components/Gauge";
import Marquee from "@/app/components/Marquee";
import { MotionDiv, MotionH1, Reveal } from "@/app/components/motion";

export const metadata: Metadata = {
  title: "Technology",
  description: "The KeraShine formula: 15% hydrolyzed keratin, 10% argan oil, 2.5% biotin, pH 5.2 and sulfate-free.",
};

const actives = [
  {
    value: 15,
    decimals: 0,
    name: "Hydrolyzed Keratin",
    color: "#D9B38C",
    text: "Keratin broken into small peptides that can slip into the hair fiber and fill damaged gaps, instead of just coating the surface.",
  },
  {
    value: 10,
    decimals: 0,
    name: "Argan Oil",
    color: "#E8A6B6",
    text: "Rich in vitamin E and fatty acids. It seals the cuticle after the keratin is in place, which is what gives the long-lasting gloss.",
  },
  {
    value: 2.5,
    decimals: 1,
    name: "Biotin",
    color: "#B9A4F5",
    text: "A B-vitamin that conditions the hair fiber and keeps strands feeling dense and resilient between washes.",
  },
];

const composition = [
  { label: "Hydrolyzed Keratin", pct: 15, color: "#D9B38C" },
  { label: "Argan Oil", pct: 10, color: "#E8A6B6" },
  { label: "Biotin", pct: 2.5, color: "#B9A4F5" },
  { label: "Water, mild cleansers, pH buffers", pct: 72.5, color: "rgba(255,255,255,0.14)" },
];

const process = [
  { title: "Source", text: "Keratin peptides and argan oil are sourced with a certificate of analysis for every lot." },
  { title: "Blend", text: "Actives are added at controlled temperatures so they stay intact." },
  { title: "Balance", text: "pH is adjusted to 5.2 to match the scalp and keep the cuticle closed." },
  { title: "Test", text: "Each batch is checked for pH, viscosity, scent and stability before filling." },
];

export default function TechnologyPage() {
  return (
    <div className="bg-ink text-pearl">
      {/* Hero */}
      <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden px-5 pb-20 pt-40 md:px-10">
        <Image
          src="/images/lab-texture.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className="mx-auto w-full max-w-6xl">
          <MotionH1
            className="max-w-5xl font-display text-[clamp(3rem,10vw,9rem)] font-extrabold leading-[0.88] tracking-tighter"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Formula, not fantasy.
          </MotionH1>
          <MotionDiv
            className="mt-8 max-w-xl text-lg leading-relaxed text-pearl/70"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>
              We publish what is inside every bottle and how much of it. Three actives make up more than a quarter of
              the formula by weight.
            </p>
          </MotionDiv>
        </div>
      </section>

      <section className="border-y border-white/10 py-8">
        <Marquee dark duration={40} items={["pH 5.2", "Sulfate-Free", "27.5% Active Complex", "Batch Tested", "Karachi Lab"]} />
      </section>

      {/* Gauges */}
      <section className="px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[0.98] tracking-tighter md:text-7xl">
              Three actives, measured to the decimal.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {actives.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.12}>
                <MotionDiv
                  className="glass-dark h-full rounded-[2.5rem] p-8"
                  whileHover={{ y: -12, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <Gauge value={a.value} decimals={a.decimals} name={a.name} color={a.color} />
                  <p className="mt-8 leading-relaxed text-pearl/70">{a.text}</p>
                </MotionDiv>
              </Reveal>
            ))}
          </div>

          {/* Composition bar */}
          <Reveal className="mt-8">
            <div className="glass-dark rounded-[2.5rem] p-8 md:p-12">
              <p className="font-display text-2xl font-bold">What is in the bottle</p>
              <div className="mt-8 flex h-6 w-full overflow-hidden rounded-full bg-white/5">
                {composition.map((c, i) => (
                  <MotionDiv
                    key={c.label}
                    className="h-full"
                    style={{ backgroundColor: c.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${c.pct}%` }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  />
                ))}
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {composition.map((c) => (
                  <li key={c.label} className="flex items-start gap-3">
                    <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: c.color }} />
                    <span>
                      <span className="block font-display text-2xl font-bold">
                        <CountUp to={c.pct} decimals={c.pct % 1 ? 1 : 0} suffix="%" />
                      </span>
                      <span className="text-sm text-pearl/60">{c.label}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ingredients */}
      <section className="px-5 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <Reveal className="lg:order-2">
            <MotionDiv
              className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-lift"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Image
                src="/images/ingredients-flatlay.png"
                alt="Argan oil, keratin and botanical ingredients laid out on a surface"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </MotionDiv>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display text-4xl font-extrabold leading-[0.98] tracking-tighter md:text-6xl">
                Ingredients with a job to do.
              </h2>
            </Reveal>
            <dl className="mt-10 space-y-4">
              {[
                ["Sulfate-free", "No SLS or SLES. Cleansing comes from mild, plant-derived surfactants that do not strip color."],
                ["pH 5.2", "Slightly acidic, like healthy hair and scalp. This keeps the cuticle flat, and flat cuticles reflect light."],
                ["Fragrance", "A warm amber and white tea blend, balanced so it does not linger on the hair for days."],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.1}>
                  <MotionDiv
                    className="glass-dark rounded-[2rem] p-6"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <dt className="font-display text-xl font-bold">{t}</dt>
                    <dd className="mt-2 text-pearl/65">{d}</dd>
                  </MotionDiv>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Process: a real sequence, so numbered */}
      <section className="px-5 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-4xl font-extrabold leading-[0.98] tracking-tighter md:text-6xl">
              From raw material to sealed bottle.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12}>
                <MotionDiv
                  className="glass-dark relative h-full overflow-hidden rounded-[2.5rem] p-8"
                  whileHover={{ y: -12, rotate: i % 2 ? 1 : -1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <div>
                    <span className="font-display text-7xl font-extrabold text-champagne/30">{i + 1}</span>
                    <h3 className="mt-4 font-display text-2xl font-bold">{s.title}</h3>
                    <p className="mt-3 text-pearl/65">{s.text}</p>
                  </div>
                </MotionDiv>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 text-center">
            <Button href="/collection" variant="light">
              See the products
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
