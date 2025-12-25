"use client";

import { motion } from "framer-motion";
import { Product } from "@/lib/products";
import { useCart } from "@/app/context/CartContext";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart(); // ✅ FIXED

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`rounded-[32px] bg-gradient-to-b ${product.bg} overflow-hidden`}
    >
      {/* Image */}
      <div className="relative flex items-center justify-center px-8 pt-12 pb-6">
        <img
          src={product.image}
          alt={product.name}
          className="h-[420px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-10 pb-12">
        <h3 className="text-2xl font-serif font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-3 text-gray-700 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-6 flex gap-3 flex-wrap">
          {product.sizes.map((size) => (
            <span
              key={size}
              className="rounded-full border border-pink-200 px-4 py-1.5 text-sm text-pink-700"
            >
              {size}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-xl font-semibold text-gray-900">
            Rs. {product.price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="rounded-full bg-black px-6 py-3 text-sm text-white transition hover:bg-pink-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}