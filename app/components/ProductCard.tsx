"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="group h-full rounded-[2.5rem] shadow-glass transition-shadow duration-500 hover:shadow-lift"
        whileHover={{ y: -15, scale: 1.03 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <Link
          href={`/collection/${product.id}`}
          className="glass focus-ring flex h-full flex-col overflow-hidden rounded-[2.5rem] p-4"
        >
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"
            style={{
              background: `radial-gradient(circle at 50% 38%, ${product.accent}88, transparent 68%), linear-gradient(160deg, #ffffff, #efe8f6)`,
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-contain p-8 drop-shadow-[0_30px_30px_rgba(42,19,66,0.3)] transition-transform duration-700 ease-out group-hover:rotate-3 group-hover:scale-110"
            />
            <span className="absolute left-4 top-4 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-plum backdrop-blur-xl">
              {product.category}
            </span>
          </div>

          <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink">
                {product.name}
              </h3>
              <span className="shrink-0 rounded-full bg-ink px-3 py-1 text-sm font-semibold text-pearl">
                {product.size}
              </span>
            </div>
            <p className="mt-3 text-ink/65">{product.tagline}</p>
            <div className="mt-auto flex items-center justify-between pt-6 text-sm font-semibold text-ink">
              <span>
                {product.keratin}% keratin · pH {product.ph}
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">View specs</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
