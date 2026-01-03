"use client";

import { motion } from "framer-motion";
import { Product } from "@/lib/products";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
      type: "product",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`rounded-[28px] bg-gradient-to-b ${product.bg} overflow-hidden`}
    >
      {/* Image */}
      <div className="relative flex items-center justify-center px-10 pt-14 pb-8">
        <Image
          src={product.image}
          alt={product.name}
          width={420}
          height={420}
          className="h-[380px] object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-10 pb-12">
        <h3 className="text-xl font-serif font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {product.description}
        </p>

        {/* Sizes */}
        <div className="mt-5 flex gap-2 flex-wrap">
          {product.sizes.map((size) => (
            <span
              key={size}
              className="rounded-full border border-pink-200 px-3 py-1 text-xs text-pink-700"
            >
              {size}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-lg font-medium text-gray-900">
            Rs. {product.price}
          </span>

          <button
            onClick={handleAdd}
            className="text-xs tracking-widest uppercase
                       border-b border-black/40 pb-1
                       hover:border-black transition"
          >
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}