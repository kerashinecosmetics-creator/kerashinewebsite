"use client";

import Image from "next/image";
import { Product } from "@/lib/products";
import { useCart } from "@/app/context/CartContext";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  // Out of stock check
  const isOutOfStock = product.stock === 0 || product.inStock === false;

  return (
    <div className="group relative rounded-3xl border border-gray-100 bg-white p-6 transition hover:shadow-xl">

      {/* Out of Stock Badge */}
      {isOutOfStock && (
        <span className="absolute left-8 top-8 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white">
          Out of Stock
        </span>
      )}

      {/* Image */}
      <div
        className={`rounded-2xl bg-gradient-to-b ${product.bg} p-6 ${isOutOfStock? 'opacity-60 grayscale' : ''}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="mx-auto h- object-contain transition-transform duration-500 group-hover:scale-105"
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
          disabled={isOutOfStock}
          onClick={() =>
           !isOutOfStock &&
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
          className={`mt-5 w-full rounded-full py-3 text-sm font-medium text-white transition
            ${isOutOfStock
             ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-black hover:bg-pink-600'
            }`}
        >
          {isOutOfStock? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
