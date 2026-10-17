import type { Metadata } from "next";
import Button from "@/app/components/Button";
import { MotionH1, MotionDiv, Reveal } from "@/app/components/motion";
import ProductCard from "@/app/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Collection",
  description: "The full KeraShine range: shampoo, conditioner, gloss serum and Signature Sets in 250 ml and 500 ml.",
};

export default function CollectionPage() {
  const care = products.filter((p) => p.category === "Daily Care");
  const sets = products.filter((p) => p.category === "Signature Set");

  return (
    <>
      <section className="relative isolate overflow-hidden px-5 pb-16 pt-40 md:px-10 md:pt-48">
        <MotionDiv
          aria-hidden="true"
          className="absolute -right-40 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-champagne/50 blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        />
        <div className="mx-auto max-w-6xl">
          <MotionH1
            className="font-display text-[clamp(3.2rem,11vw,10rem)] font-extrabold leading-[0.86] tracking-tighter text-ink"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            The Collection
          </MotionH1>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">
              One formula across every product, so each step reinforces the last. Select a product to see its full
              specification sheet.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">Daily care</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {care.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">Signature Sets</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {sets.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <Reveal className="mt-16 text-center">
            <p className="mx-auto max-w-lg text-ink/65">
              KeraShine is sold through authorized distributors and partner salons.
            </p>
            <div className="mt-6">
              <Button href="/contact">Distributor inquiry</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
