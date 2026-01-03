"use client";

import { useCart } from "@/app/context/CartContext";

export default function SignatureSets() {
  const { addToCart } = useCart();

  return (
    <section
      className="relative py-48 overflow-hidden
                 bg-gradient-to-b from-[#fafafa] via-white to-[#f6f6f6]"
    >
      {/* Ambient layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-pink-200/20 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-black/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Intro */}
        <div className="max-w-2xl mb-44">
          <p className="text-xs tracking-[0.45em] uppercase text-gray-500">
            Curated Rituals
          </p>

          <h2 className="mt-8 text-5xl md:text-6xl font-serif font-semibold text-gray-900 leading-tight">
            Signature
            <br />
            Haircare Sets
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            Thoughtfully designed routines combining our most loved formulas —
            created for women who want complete, effortless haircare.
          </p>
        </div>

        {/* Sets Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">

          {/* HERO SET */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[40px] bg-white shadow-xl p-16">
              <span className="text-xs tracking-[0.4em] uppercase text-pink-500">
                Most Loved
              </span>

              <h3 className="mt-6 text-4xl font-serif text-gray-900">
                Signature Care Set — Small
              </h3>

              <p className="mt-6 text-gray-600 max-w-md">
                A complete introduction to Kera Shine — perfect for personal use
                and daily care rituals.
              </p>

              <ul className="mt-8 space-y-2 text-gray-600">
                <li>• Shampoo — 250ml</li>
                <li>• Conditioner — 250ml</li>
                <li>• Hair Mask — 300ml</li>
              </ul>

              <div className="mt-12 flex items-center justify-between">
                <span className="text-lg font-medium text-gray-900">
                  Complete Ritual
                </span>

                <button
                  onClick={() =>
                    addToCart({
                      id: "set-small",
                      name: "Signature Care Set — Small",
                      price: 2500,
                      qty: 1,
                      type: "set",
                    })
                  }
                  className="text-xs tracking-[0.4em] uppercase border-b border-black/40 pb-2
                             hover:border-black transition"
                >
                  Add Set
                </button>
              </div>
            </div>
          </div>

          {/* SUPPORTING SET */}
          <div className="lg:col-span-5 pt-32">
            <div className="rounded-[36px] bg-white shadow-lg p-14">
              <h3 className="text-3xl font-serif text-gray-900">
                Signature Care Set — Large
              </h3>

              <p className="mt-6 text-gray-600">
                Designed for long-term use and salon-level results —
                ideal for professionals and loyal users.
              </p>

              <ul className="mt-8 space-y-2 text-gray-600">
                <li>• Shampoo — 500ml</li>
                <li>• Conditioner — 500ml</li>
                <li>• Hair Mask — 500ml</li>
              </ul>

              <div className="mt-12 flex items-center justify-between">
                <span className="text-lg font-medium text-gray-900">
                  Advanced Ritual
                </span>

                <button
                  onClick={() =>
                    addToCart({
                      id: "set-large",
                      name: "Signature Care Set — Large",
                      price: 4000,
                      qty: 1,
                      type: "set",
                    })
                  }
                  className="text-xs tracking-[0.4em] uppercase border-b border-black/40 pb-2
                             hover:border-black transition"
                >
                  Add Set
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}