"use client";

import ProductCard from "@/app/components/product/ProductCard";
import { products } from "@/lib/products";

const ProductsSection = () => {
  return (
    <section
      id="products"
      className="relative py-40 bg-gradient-to-b from-[#fafafa] via-white to-[#f6f6f6]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Intro */}
        <div className="max-w-2xl mb-24">
          <p className="text-xs tracking-[0.45em] uppercase text-gray-500">
            The Collection
          </p>

          <h2 className="mt-8 text-5xl md:text-6xl font-serif font-semibold text-gray-900 leading-tight">
            Crafted like
            <br />
            a signature.
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            Designed with intention. Refined through expertise.
            Each formula is an expression of modern salon luxury.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <a
            href="#"
            className="inline-block text-xs tracking-[0.4em] uppercase
                       border-b border-black/40 pb-2
                       hover:border-black transition"
          >
            View the complete range
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;