"use client";

import Image from "next/image";
import { Product } from "@/lib/products";
import { useCart } from "@/app/context/CartContext";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="group rounded-3xl border border-gray-100 bg-white p-6 transition hover:shadow-xl">
      
      {/* Image */}
      <div
        className={`rounded-2xl bg-gradient-to-b ${product.bg} p-6`}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="mx-auto h-[240px] object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="mt-6 text-center">
        <h3 className="font-serif text-xl">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {product.sizes.join(" · ")}
        </p>

        <p className="mt-3 text-lg font-semibold">
          Rs. {product.price}
        </p>

        {/* CTA */}
        <button
          onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              sizes: product.sizes,
              qty: 1,
              type: "product",
            })
          }
          className="mt-5 w-full rounded-full bg-black py-3 text-sm font-medium text-white hover:bg-pink-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}