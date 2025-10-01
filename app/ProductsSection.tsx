"use client";

import { motion } from "framer-motion";

const ProductsSection = () => {
  const products = [
    {
      name: "Shampoo",
      desc: "Gently cleanses and nourishes hair for a natural shine.",
      img: "/products/ShampooModel250ml.png",
      usage: ["Apply to wet hair.", "Massage gently.", "Rinse thoroughly."],
      ingredients: ["Aqua", "Argan Oil", "Aloe Vera", "Vitamin E"],
      sizes: ["300ml", "500ml"], // ✅ Added sizes
      bg: "from-pink-50 to-white",
    },
    {
      name: "Conditioner",
      desc: "Deep hydration leaving your hair silky smooth.",
      img: "/products/ConditionerModel250ml.png",
      usage: ["Apply after shampooing.", "Leave 2–3 mins.", "Rinse well."],
      ingredients: ["Shea Butter", "Coconut Oil", "Keratin", "Panthenol"],
      sizes: ["300ml", "500ml"], // ✅ Added sizes
      bg: "from-rose-50 to-white",
    },
    {
      name: "Hair Mask",
      desc: "Restores strength & vitality for damaged hair.",
      img: "/products/HairMaskModel300ml.png",
      usage: ["Apply generously.", "Leave 10–15 mins.", "Rinse well."],
      ingredients: ["Macadamia Oil", "Avocado Oil", "Shea Butter"],
      sizes: ["300ml", "500ml"], // ✅ Added sizes
      bg: "from-gray-50 to-white",
    },
    {
      name: "Serum",
      desc: "Lightweight serum for glossy & frizz-free finish.",
      img: "/products/SerumModel60ml.png",
      usage: ["Take 2–3 drops.", "Apply mid-lengths to ends.", "Style."],
      ingredients: ["Argan Oil", "Jojoba Oil", "Vitamin E"],
      sizes: ["60ml"], // ✅ Added sizes
      bg: "from-yellow-50 to-white",
    },
  ];

  return (
    <section id="products" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 leading-tight mb-24">
          Our{" "}
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Signature
          </span>{" "}
          Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-b ${product.bg} rounded-3xl shadow-xl overflow-hidden flex flex-col`}
            >
              {/* Product Image */}
              <div className="flex justify-center items-center p-4 sm:p-8 md:p-12 bg-white/30">
                <motion.img
                  src={product.img}
                  alt={product.name}
                  className="
                    w-full 
                    h-[60vh]             /* 📱 Mobile: 60% of screen height */
                    sm:h-[65vh]          /* 📲 Tablet: 65% */
                    md:h-[70vh]          /* 💻 Small Desktop: 70% */
                    lg:h-[80vh]          /* 🖥️ Large Desktop: 80% */
                    object-contain drop-shadow-2xl 
                    hover:scale-105 transition-transform duration-500
                  "
                />
              </div>

              {/* Product Details */}
              <div className="p-10">
                <h3 className="text-3xl font-serif font-bold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-4 text-lg text-gray-700">{product.desc}</p>

                {/* Divider */}
                <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded mt-6 mb-8"></div>

                {/* Usage */}
                <div className="mb-6">
                  <h4 className="text-base font-semibold uppercase tracking-wide text-gray-800">
                    How to Use
                  </h4>
                  <ul className="mt-3 space-y-2 text-gray-600 text-sm">
                    {product.usage.map((step, idx) => (
                      <li key={idx}>• {step}</li>
                    ))}
                  </ul>
                </div>

                {/* Ingredients */}
                <div className="mb-6">
                  <h4 className="text-base font-semibold uppercase tracking-wide text-gray-800">
                    Ingredients
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.ingredients.map((ing, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-100 rounded-lg text-xs text-gray-700"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                {product.sizes && (
                  <div>
                    <h4 className="text-base font-semibold uppercase tracking-wide text-gray-800">
                      Available Sizes
                    </h4>
                    <div className="mt-3 flex gap-3">
                      {product.sizes.map((size, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-pink-100 text-pink-700 font-medium rounded-full text-sm shadow-sm"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;