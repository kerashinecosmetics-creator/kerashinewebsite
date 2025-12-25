"use client";

import ProductCard from "@/app/components/product/ProductCard";
import { products } from "@/lib/products";

const ProductsSection = () => {
  return (
    <section id="products" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-semibold text-gray-900 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Signature
            </span>{" "}
            Collection
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            Crafted with precision, powered by nature, and designed to elevate
            your everyday haircare ritual.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Optional Call-to-Action */}
        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-block px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Explore All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;