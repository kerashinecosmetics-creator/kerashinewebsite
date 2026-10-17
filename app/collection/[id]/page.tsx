import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/app/components/Button";
import CountUp from "@/app/components/CountUp";
import { MotionDiv, MotionH1, Reveal } from "@/app/components/motion";
import Tilt from "@/app/components/Tilt";
import { getProduct, products } from "@/lib/products";

type Props = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: "Product not found" };
  return { title: product.name, description: product.tagline };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  const index = products.findIndex((p) => p.id === product.id);
  const prev = products[(index - 1 + products.length) % products.length];
  const next = products[(index + 1) % products.length];

  const keyFigures = [
    { node: <>{product.ph}</>, label: "pH level" },
    { node: <>{product.sulfateFree ? "0%" : "—"}</>, label: "Sulfates" },
    { node: <CountUp to={product.keratin} suffix="%" />, label: "Hydrolyzed keratin" },
    { node: <CountUp to={product.shineHours} suffix="h" />, label: "Shine duration" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-36 md:px-10 md:pt-44">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{ background: `radial-gradient(circle at 75% 40%, ${product.accent}66, transparent 55%)` }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <Link
                href="/collection"
                className="focus-ring inline-block rounded-full text-sm font-semibold text-ink/60 transition hover:text-ink"
              >
                Back to collection
              </Link>
            </Reveal>
            <MotionH1
              className="mt-6 font-display text-[clamp(2.8rem,7vw,6.5rem)] font-extrabold leading-[0.92] tracking-tighter text-ink"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {product.name}
            </MotionH1>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-lg text-xl leading-relaxed text-ink/70">{product.tagline}</p>
              <p className="mt-4 max-w-lg leading-relaxed text-ink/60">{product.description}</p>
            </Reveal>
            <Reveal delay={0.25} className="mt-8 flex flex-wrap items-center gap-3">
              <span className="glass rounded-full px-5 py-3 font-semibold text-ink">{product.size}</span>
              <Button href="/contact">Ask a distributor</Button>
            </Reveal>
          </div>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tilt className="relative mx-auto aspect-[4/5] w-full max-w-md" max={12}>
              <MotionDiv
                className="relative h-full w-full"
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-contain drop-shadow-[0_50px_50px_rgba(42,19,66,0.38)]"
                />
              </MotionDiv>
            </Tilt>
          </MotionDiv>
        </div>
      </section>

      {/* Key figures */}
      <section className="px-3 pb-20 md:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-[2.5rem] bg-ink/10 shadow-glass lg:grid-cols-4">
          {keyFigures.map((k, i) => (
            <MotionDiv
              key={k.label}
              className="bg-white/80 px-6 py-10 text-center backdrop-blur-xl md:py-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ scale: 1.04, backgroundColor: "#ffffff" }}
            >
              <p className="font-display text-5xl font-extrabold tracking-tighter text-ink md:text-7xl">{k.node}</p>
              <p className="mt-3 font-semibold text-ink/60">{k.label}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Spec sheet */}
      <section className="px-5 pb-24 md:px-10">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-4xl font-extrabold tracking-tighter text-ink md:text-6xl">
              Specifications
            </h2>
          </Reveal>
          <div className="mt-12 space-y-10">
            {product.specs.map((group) => (
              <Reveal key={group.group}>
                <div className="glass overflow-hidden rounded-[2.5rem]">
                  <h3 className="bg-ink px-8 py-5 font-display text-xl font-bold text-pearl">{group.group}</h3>
                  <dl>
                    {group.rows.map(([k, v]) => (
                      <MotionDiv
                        key={k}
                        className="grid grid-cols-[1fr_1.2fr] gap-4 border-b border-ink/10 px-8 py-5 last:border-b-0"
                        whileHover={{ backgroundColor: "rgba(217,179,140,0.18)", x: 6 }}
                      >
                        <dt className="text-ink/60">{k}</dt>
                        <dd className="font-semibold text-ink">{v}</dd>
                      </MotionDiv>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>

          {product.contents && (
            <Reveal className="mt-10">
              <div className="rounded-[2.5rem] bg-ink p-8 text-pearl md:p-10">
                <h3 className="font-display text-2xl font-bold">In the box</h3>
                <ul className="mt-5 space-y-3">
                  {product.contents.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-pearl/80">
                      <span className="h-2 w-2 rounded-full bg-champagne" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Highlights + ritual */}
      <section className="px-5 pb-28 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-[2.5rem] p-8 md:p-12">
              <h2 className="font-display text-3xl font-extrabold tracking-tighter text-ink md:text-4xl">Highlights</h2>
              <ul className="mt-8 space-y-5">
                {product.highlights.map((h) => (
                  <li key={h} className="flex gap-4 text-lg text-ink/80">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: product.accent }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-[2.5rem] bg-ink p-8 text-pearl md:p-12">
              <h2 className="font-display text-3xl font-extrabold tracking-tighter md:text-4xl">How to use</h2>
              <ol className="mt-8 space-y-7">
                {product.ritual.map((s, i) => (
                  <li key={s.title} className="flex gap-5">
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-lg font-extrabold text-ink"
                      style={{ backgroundColor: product.accent }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-display text-xl font-bold">{s.title}</p>
                      <p className="mt-1 text-pearl/65">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prev / next */}
      <section className="px-5 pb-24 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {[
            { p: prev, label: "Previous" },
            { p: next, label: "Next" },
          ].map(({ p, label }) => (
            <MotionDiv key={label} whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
              <Link
                href={`/collection/${p.id}`}
                className="glass focus-ring block rounded-[2.5rem] p-8 transition-shadow hover:shadow-lift"
              >
                <p className="text-sm font-semibold text-ink/50">{label}</p>
                <p className="mt-2 font-display text-2xl font-bold text-ink">{p.name}</p>
                <p className="mt-1 text-ink/60">{p.size}</p>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </section>
    </>
  );
}