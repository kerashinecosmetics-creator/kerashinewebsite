"use client";

import { useCart } from "@/app/context/CartContext";

export default function SignatureSets() {
  const { addToCart } = useCart();

  return (
    <section className="py-44 bg-black text-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Intro */}
        <div className="max-w-2xl mb-32">
          <p className="text-xs tracking-[0.45em] uppercase opacity-60">
            Curated Rituals
          </p>

          <h2 className="mt-8 text-5xl md:text-6xl font-serif leading-tight">
            Signature
            <br />
            Haircare Sets
          </h2>

          <p className="mt-8 text-gray-300 leading-relaxed">
            Thoughtfully curated combinations designed for complete haircare
            routines — perfect for individuals and trusted by salons.
          </p>
        </div>

        {/* Sets */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* SMALL SET */}
          <div className="relative border border-white/10 p-14">
            <span className="absolute -top-4 left-6 bg-black px-4 text-xs tracking-widest">
              MOST POPULAR
            </span>

            <h3 className="text-3xl font-serif">
              Signature Care Set — Small
            </h3>

            <p className="mt-4 text-gray-400">
              Ideal for personal use and first-time experience.
            </p>

            <ul className="mt-8 space-y-2 text-sm text-gray-300">
              <li>• Shampoo — 250ml</li>
              <li>• Conditioner — 250ml</li>
              <li>• Hair Mask — 300ml</li>
              <li>• Serum — 60ml</li>
            </ul>

            <div className="mt-12 flex justify-between items-center">
              <span className="text-lg opacity-80">
                Complete Ritual
              </span>

              <button
                onClick={() =>
                  addToCart({
                    id: "set-small",
                    name: "Signature Care Set — Small",
                    price: 2500, // set later
                    qty: 1,
                    type: "set",
                  })
                }
                className="px-8 py-3 rounded-full border border-white/40
                          text-xs tracking-widest uppercase
                          hover:bg-white hover:text-black transition"
              >
                Add Full Set
              </button>
            </div>
          </div>

          {/* LARGE SET */}
          <div className="relative border border-white/10 p-14">
            <h3 className="text-3xl font-serif">
              Signature Care Set — Large
            </h3>

            <p className="mt-4 text-gray-400">
              Designed for long-term use and salon-level results.
            </p>

            <ul className="mt-8 space-y-2 text-sm text-gray-300">
              <li>• Shampoo — 500ml</li>
              <li>• Conditioner — 500ml</li>
              <li>• Hair Mask — 500ml</li>
              <li>• Serum — 60ml</li>
            </ul>

            <div className="mt-12 flex justify-between items-center">
              <span className="text-lg opacity-80">
                Advanced Ritual
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
                className="px-8 py-3 rounded-full border border-white/40
                          text-xs tracking-widest uppercase
                          hover:bg-white hover:text-black transition"
              >
                Add Full Set
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}