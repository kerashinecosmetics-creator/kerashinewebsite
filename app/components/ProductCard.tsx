"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data"; // <-- ab lib/data se le raha hai, lib/products se nahi

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  // 4 products ke liye soft background colors
  const bgMap: Record<string, string> = {
    "keratin-shampoo": "#FFF7D6",
    "silk-conditioner": "#EFE8F6",
    "argan-serum": "#FFEAD5",
    "hair-mask": "#E6F4EA",
  };

  const bg = bgMap[product.id] || "#ffffff";

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
        whileHover={{ y: -12, scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <Link
          href={`/collection/${product.id}`}
          className="glass focus-ring flex h-full flex-col overflow-hidden rounded-[2.5rem] p-4"
        >
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-"
            style={{
              background: `radial-gradient(circle at 50% 35%, ${bg}, transparent 70%), linear-gradient(160deg, #ffffff, ${bg})`,
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-contain p-8 drop-shadow-[0_30px_30px_rgba(42,19,66,0.2)] transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-ink backdrop-blur-xl">
              {product.category}
            </span>
          </div>

          <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
            <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink">
              {product.name}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-ink/65">{product.short}</p>
            <div className="mt-auto flex items-center justify-between pt-6 text-sm font-semibold text-ink">
              <span className="text-xs text-ink/60">{product.benefits[0]}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">View →</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}