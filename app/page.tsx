"use client";

import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductsSection from "./ProductsSection";
import AboutSection from "./AboutSection";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { Minus, Plus, Trash } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [cartOpen, setCartOpen] = useState(false); // cart flyout
  const { items, addToCart, removeFromCart, decreaseQty } = useCart();

  const subtotal = items.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg z-50 shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-wide">
            KERA
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              SHINE
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* Cart */}
            <div
              className="relative cursor-pointer"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="w-6 h-6 text-gray-900" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </div>

            {/* Mobile Menu */}
            <button
              className="text-gray-900 md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
              <a href="#home" className="hover:text-pink-500">Home</a>
              <a href="#products" className="hover:text-pink-500">Products</a>
              <a href="#about" className="hover:text-pink-500">Story</a>
              <a href="#contact" className="hover:text-pink-500">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-[999]">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold">KERASHINE</span>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 text-gray-800 font-medium">
              <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#products" onClick={() => setIsOpen(false)}>Products</a>
              <a href="#about" onClick={() => setIsOpen(false)}>Story</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </nav>
          </div>
        </div>
      )}

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative h-screen w-full flex items-center justify-center text-center"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/kerashine-launch.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
            Shine with{" "}
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Confidence
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200">
            Premium haircare crafted for elegance, health & natural beauty.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <div id="products">
        <ProductsSection />
      </div>

      {/* ================= CART FLYOUT ================= */}
      <AnimatePresence>
        {cartOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50"
              onClick={() => setCartOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-semibold">Your Cart</h2>
                <button onClick={() => setCartOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-contain rounded-xl"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          {item.sizes && <p className="text-gray-500 text-sm">Size: {item.sizes}</p>}
                          <p className="font-medium text-gray-700 mt-1">
                            Rs. {item.price * item.qty}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
                          >
                            <Minus size={16} />
                          </button>
                          <span>{item.qty}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
                          >
                            <Plus size={16} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-red-500 hover:text-red-600"
                          >
                            <Trash size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 border-t">
                <div className="flex justify-between text-lg font-semibold mb-4">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal}</span>
                </div>
                <Link
                  href="/cart"
                  onClick={() => setCartOpen(false)}
                  className="block w-full text-center py-4 bg-black text-white rounded-full hover:bg-pink-600 transition font-medium"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}