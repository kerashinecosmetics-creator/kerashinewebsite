"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { categories, products, type Category, type Product } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { scrollToId } from "@/lib/scroll";
import SectionHeading from "./SectionHeading";
import Tilt from "./Tilt";

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    window.lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[90] grid place-items-center bg-ink/60 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2.5rem] bg-cream shadow-lift md:grid-cols-2 md:overflow-hidden"
        initial={{ y: 70, scale: 0.94, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="focus-ring absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-ink shadow-soft transition hover:rotate-90 hover:bg-white"
        >
          <X size={20} />
        </button>

        <div className="relative min-h-[18rem] bg-gradient-to-b from-beige to-white md:min-h-[32rem]">
          <Image src={product.image} alt={product.name} fill sizes="(min-width: 768px) 450px, 90vw" className="object-contain p-8" style={{ objectPosition: product.position }} />
        </div>

        <div className="overflow-y-auto p-8 md:max-h-[90vh] md:p-10" data-lenis-prevent>
          <p className="text-sm font-medium text-gold">{product.category}</p>
          <h3 className="mt-2 font-serif text-3xl font-medium text-ink md:text-4xl">{product.name}</h3>
          <p className="mt-4 leading-relaxed text-ink/65">{product.description}</p>

          <h4 className="mt-8 font-serif text-xl text-ink">Key ingredients</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {product.ingredients.map((i) => (
              <li key={i} className="rounded-full bg-beige/60 px-4 py-1.5 text-sm text-ink">
                {i}
              </li>
            ))}
          </ul>

          <h4 className="mt-8 font-serif text-xl text-ink">Benefits</h4>
          <ul className="mt-3 space-y-2.5">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-ink/75">
                <Check size={18} className="mt-1 shrink-0 text-gold" />
                {b}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => {
              onClose();
              setTimeout(() => scrollToId("contact"), 450);
            }}
            className="focus-ring mt-10 rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition hover:bg-gold hover:text-ink"
          >
            Enquire about this product
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Products() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [selected, setSelected] = useState<Product | null>(null);
  const close = useCallback(() => setSelected(null), []);
  const list = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <section id="products" className="section-pad">
      <div className="container-x">
        <SectionHeading
          kicker="Product showcase"
          title="Hair care, skin care and private label."
          text="Browse what we make. Select any product to see ingredients and benefits, then get in touch to discuss supply."
        />

        <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Filter products">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className="focus-ring relative rounded-full px-6 py-3 text-sm font-medium transition-colors"
            >
              {filter === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative ${filter === c ? "text-white" : "text-ink/70 hover:text-ink"}`}>{c}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <Tilt>
                  <button
                    type="button"
                    onClick={() => setSelected(p)}
                    className="group focus-ring block w-full overflow-hidden rounded-[2.5rem] border border-ink/5 bg-white text-left shadow-soft transition-shadow duration-500 hover:shadow-lift"
                    aria-label={`View details for ${p.name}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-beige/70 to-white">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                        className="object-contain p-6 transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
                        style={{ objectPosition: p.position }}
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-ink backdrop-blur-md">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-7">
                      <h3 className="font-serif text-2xl font-medium text-ink">{p.name}</h3>
                      <p className="mt-2 text-ink/60">{p.short}</p>
                      <p className="mt-5 text-sm font-medium text-gold transition-transform duration-300 group-hover:translate-x-1">
                        View details
                      </p>
                    </div>
                  </button>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProductModal key={selected.id} product={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
