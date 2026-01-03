"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductsSection from "./ProductsSection";
import AboutSection from "./AboutSection";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { Minus, Plus, Trash } from "lucide-react";
import SignatureSets from "@/app/components/product/SignatureSets";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [cartOpen, setCartOpen] = useState(false); // cart flyout
  const { items, addToCart, removeFromCart, decreaseQty } = useCart();

  const subtotal = items.reduce((total, item) => total + item.price * item.qty, 0);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* ================= NAVBAR ================= */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl tracking-[0.35em] font-light">
            KERA
            <span className="ml-2 font-semibold">SHINE</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-14 text-xs tracking-widest uppercase">
            <a className={`transition ${scrolled ? "text-black" : "text-white"}`} href="#home">Home</a>
            <a className={`transition ${scrolled ? "text-black" : "text-white"}`} href="#products">Collection</a>
            <a className={`transition ${scrolled ? "text-black" : "text-white"}`} href="#about">Story</a>
            <a className={`transition ${scrolled ? "text-black" : "text-white"}`} href="#contact">Contact</a>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-6">
            {/* Cart */}
            <div
              className="relative cursor-pointer"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="opacity-80 hover:opacity-100 transition" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </div>

            {/* Mobile Menu */}
            <button
              className={`md:hidden transition ${
                scrolled ? "text-black" : "text-white"
              }`}
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed inset-0 bg-black z-50 flex flex-col"
            >
              <div className="w-full flex items-center justify-between px-6 pt-6">
                <span className="font-bold text-lg tracking-widest">
                  KERASHINE
                </span>

                <button onClick={() => setIsOpen(false)}>
                  <X size={26} />
                </button>
              </div>
              <nav className="mt-24 flex flex-col items-center gap-12 text-2xl tracking-widest uppercase">
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#products" onClick={() => setIsOpen(false)}>Collection</a>
                <a href="#about" onClick={() => setIsOpen(false)}>Story</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative h-screen w-full flex items-center justify-center text-center bg-black overflow-hidden"
      >
        {/* Background gradient (cinematic) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        {/* Soft glow accents */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-5xl px-6">
          <p className="text-xs tracking-[0.5em] uppercase text-pink-400">
            Premium Haircare
          </p>

          <h1 className="mt-10 text-[clamp(3.2rem,6.5vw,6.2rem)] font-extrabold text-white leading-[1.05]">
            Shine with
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
              Confidence
            </span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
            Salon-inspired haircare crafted to elevate your everyday ritual —
            refined, powerful, and unapologetically elegant.
          </p>
          <div className="mt-14 flex justify-center gap-6 flex-wrap">
            <a
              href="#products"
              className="px-10 py-4 rounded-full bg-white text-black text-sm tracking-wide font-semibold hover:bg-pink-600 hover:text-white transition"
            >
              Shop Collection
            </a>

            <a
              href="#about"
              className="px-10 py-4 rounded-full border border-white/40 text-white text-sm tracking-wide hover:bg-white hover:text-black transition"
            >
              Our Story
            </a>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section id="products" className="py-28 bg-gray-50">
        <SignatureSets />
        <ProductsSection />
      </section>

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
                  <X size={24} className="text-black" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">

                {/* EMPTY CART */}
                {items.length === 0 && (
                  <p className="text-gray-500">Your cart is empty.</p>
                )}

                {/* ================= SIGNATURE SETS ================= */}
                {items.some(i => i.type === "set") && (
                  <div className="mb-10">
                    <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-6">
                      Curated Sets
                    </p>

                    {items
                      .filter(i => i.type === "set")
                      .map((item) => (
                        <div
                          key={item.id}
                          className="mb-6 border border-gray-200 rounded-2xl p-6"
                        >
                          <h3 className="font-serif text-lg text-black">
                            {item.name}
                          </h3>

                          <div className="mt-4 flex justify-between items-center">
                            <span className="text-gray-600">
                              Qty: {item.qty}
                            </span>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-xs tracking-widest uppercase text-red-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                )}

                {/* ================= INDIVIDUAL PRODUCTS ================= */}
                {items.some(i => i.type === "product") && (
                  <div>
                    <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-6">
                      Individual Products
                    </p>

                    {items
                      .filter(i => i.type === "product")
                      .map((item) => (
                        <div key={item.id} className="flex gap-4 mb-6">
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-contain rounded-xl"
                            />
                          )}

                          <div className="flex-1">
                            <h4 className="font-medium text-black">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              Qty: {item.qty}
                            </p>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs text-red-500"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                  </div>
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

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-28 bg-white">
        <AboutSection />
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold">
            Get in <span className="text-pink-600">Touch</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Questions, collaborations or wholesale inquiries — we’re here.
          </p>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            <ContactCard title="Email" value="kerashinecosmetics@gmail.com" />
            <ContactCard title="Phone" value="+92 335 2545444" />
            <ContactCard
              title="Location"
              value="North Nazimabad Town, Karachi"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            <a
              href="mailto:kerashinecosmetics@gmail.com"
              className="px-8 py-3 rounded-full bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
            >
              Send Email
            </a>

            <a
              href="tel:+923352545444"
              className="px-8 py-3 rounded-full border-2 border-pink-600 text-pink-600 font-semibold hover:bg-pink-600 hover:text-white transition"
            >
              Call Now
            </a>

            <a
              href="https://maps.google.com/?q=North+Nazimabad+Town+Karachi"
              target="_blank"
              className="px-8 py-3 rounded-full border-2 border-pink-600 text-pink-600 font-semibold hover:bg-pink-600 hover:text-white transition"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black py-10 text-center text-gray-400">
        © {new Date().getFullYear()} KERA SHINE — All Rights Reserved
      </footer>
    </main>
  );
}

/* ===== Helper Components ===== */

function ContactCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 text-gray-600">{value}</p>
    </div>
  );
}

function ActionBtn({ text, solid }: { text: string; solid?: boolean }) {
  return (
    <a
      href="#"
      className={`px-8 py-3 rounded-full font-semibold transition ${
        solid
          ? "bg-pink-600 text-white hover:bg-pink-700"
          : "border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
      }`}
    >
      {text}
    </a>
  );
}