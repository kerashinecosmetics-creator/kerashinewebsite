"use client";

import ProductCard from "@/app/components/product/ProductCard";
import { products } from "@/lib/products";

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="py-32 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-pink-600">
            The Essentials
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-serif leading-tight">
            Everyday Haircare
            <br />
            Designed to Perform
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Salon-grade formulas crafted for real results — softness,
            strength and long-lasting shine.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}