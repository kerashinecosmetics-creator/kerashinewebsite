import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/app/components/Button";
import CountUp from "@/app/components/CountUp";
import { MotionDiv, MotionH1, Reveal } from "@/app/components/motion";

export const metadata: Metadata = {
  title: "About",
  description: "Our lab story: how a small Karachi laboratory built a premium keratin haircare brand.",
};

const values = [
  { title: "Publish the numbers", text: "If a formula contains 15% keratin, we say 15%. No vague “infused with” claims." },
  { title: "Built for local hair", text: "Karachi’s heat and humidity are tough on hair. We formulate and test for exactly that." },
  { title: "Gentle by default", text: "Sulfate-free and pH-balanced, so colored and treated hair is safe from the first wash." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[80svh] items-end overflow-hidden px-5 pb-20 pt-40 md:px-10">
        <Image
          src="/images/lab-texture.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-pearl via-pearl/70 to-pearl/30" />
        <div className="mx-auto w-full max-w-6xl">
          <MotionH1
            className="max-w-5xl font-display text-[clamp(3rem,10vw,9rem)] font-extrabold leading-[0.88] tracking-tighter text-ink"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Our lab story.
          </MotionH1>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-ink/75">
            <Reveal>
              <p className="font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                KeraShine started with a simple frustration: salon-quality shine that vanished after one wash.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Our formulators in Karachi began by testing keratin peptides on real hair swatches under real local
                conditions: heat, humidity and hard water. Most formulas coated the strand. Very few repaired it.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                The result is a sulfate-free system built on 15% hydrolyzed keratin, 10% argan oil and 2.5% biotin.
                Every batch is mixed, tested and filled in our own laboratory, so what we publish is what you get.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <MotionDiv
              className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-lift"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Image
                src="/images/model-hair.webp"
                alt="Model with glossy hair"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </MotionDiv>
          </Reveal>
        </div>
      </section>

      {/* Lab numbers */}
      <section className="px-3 pb-24 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-[2.5rem] bg-white/10 md:grid-cols-3">
          {[
            { to: 5.2, d: 1, s: "", label: "pH on every batch" },
            { to: 0, d: 0, s: "%", label: "Sulfates, ever" },
            { to: 100, d: 0, s: "%", label: "Made in Karachi" },
          ].map((n, i) => (
            <MotionDiv
              key={n.label}
              className="bg-ink px-8 py-14 text-center text-pearl"
              whileHover={{ scale: 1.05, backgroundColor: "#2A1342" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <p className="font-display text-6xl font-extrabold tracking-tighter text-champagne md:text-8xl">
                <CountUp to={n.to} decimals={n.d} suffix={n.s} />
              </p>
              <p className="mt-3 font-semibold text-pearl/70">{n.label}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      <section className="px-5 pb-28 md:px-10 md:pb-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-4xl font-extrabold tracking-tighter text-ink md:text-6xl">What we stand for.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.12}>
                <MotionDiv
                  className="glass h-full rounded-[2.5rem] p-8"
                  whileHover={{ y: -12, scale: 1.04, rotate: i === 1 ? 1 : -1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <h3 className="font-display text-2xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/70">{v.text}</p>
                </MotionDiv>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <Button href="/contact">Work with us</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
