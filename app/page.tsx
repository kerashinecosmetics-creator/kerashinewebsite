"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/app/context/CartContext";
import { Minus, Plus, Trash } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { signatureSets, type SignatureSet } from "../lib/products";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [cartOpen, setCartOpen] = useState(false); // cart flyout
  const { items, addToCart, removeFromCart, decreaseQty } = useCart();
  const subtotal = items.reduce((total, item) => total + item.price * item.qty, 0);
  const [scrolled, setScrolled] = useState(false);

  const videos: { src: string }[] = [
    { src: "/about/clip1.mp4" },
    { src: "/about/clip2.mp4" },
    { src: "/about/clip3.mp4" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled
          ? "bg-white text-black shadow-sm"
          : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="group text-lg tracking-[0.25em] font-light">
            KERA
            <span className="ml-2 font-semibold tracking-[0.25em] group-hover:text-pink-600 transition">
              SHINE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12 text-[11px] tracking-[0.35em] uppercase">
            {["Shop", "Products", "Our Story", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="relative group transition-colors duration-300"
              >
                <span className="group-hover:text-pink-600">
                  {item}
                </span>

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-2 h-[1px] w-0 bg-pink-600 
                  transition-all duration-300 group-hover:w-full`}
                />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <div
              className="relative cursor-pointer"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="opacity-70 hover:opacity-100 transition" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-50 bg-black flex flex-col"
          >
            {/* Top */}
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="tracking-[0.4em] text-sm">
                KERA<span className="font-semibold ml-2">SHINE</span>
              </span>

              <button onClick={() => setIsOpen(false)}>
                <X size={26} />
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-12 text-3xl tracking-widest uppercase">
              {["Home", "Collection", "Story", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="relative group"
                >
                  <span className="transition-colors duration-300 group-hover:text-pink-600">
                    {item}
                  </span>

                  <span className="absolute left-1/2 -bottom-3 h-[1px] w-0 bg-pink-600 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4" />
                </a>
              ))}
            </nav>

            {/* Footer Accent */}
            <div className="pb-10 text-center text-xs tracking-[0.3em] opacity-50">
              PREMIUM HAIR CARE
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>

    {/* ================= CART FLYOUT ================= */}
      <AnimatePresence>
        {cartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setCartOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
              className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b">
                <h2 className="text-xs tracking-[0.3em] uppercase text-gray-800">
                  Your Cart
                </h2>
                <button onClick={() => setCartOpen(false)}>
                  <X className="text-black" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {items.length === 0 ? (
                  <p className="text-sm text-gray-500 text-center mt-20">
                    Your cart is currently empty.
                  </p>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 border-b pb-6 last:border-none"
                    >
                      {/* Image */}
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <h3 className="text-sm text-black font-medium">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          Rs {item.price.toLocaleString()}
                        </p>

                        {/* Quantity */}
                        <div className="flex items-center gap-4 mt-3">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="w-8 h-8 flex items-center justify-center 
                            rounded-full bg-gray-100
                            text-black hover:bg-gray-200
                            active:scale-95 transition"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="text-sm text-black">
                            {item.qty}
                          </span>

                          <button
                            onClick={() => addToCart(item)}
                            className="w-8 h-8 flex items-center justify-center 
                            rounded-full bg-gray-100
                            text-black hover:bg-gray-20
                            active:scale-95 transition"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-pink-600 transition"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t px-6 py-6">
                  <div className="flex justify-between text-sm text-black mb-4">
                    <span>Subtotal</span>
                    <span>Rs {subtotal.toLocaleString()}</span>
                  </div>

                  <Link href="/cart">
                    <button className="w-full bg-black text-white py-4 text-xs tracking-widest uppercase hover:bg-pink-600 transition">
                      Proceed to Checkout
                    </button>
                  </Link>

                  <p className="text-[10px] text-center text-gray-400 mt-4">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center bg-black overflow-hidden"
      >
        {/* Background overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />

        {/* Glow accents */}
        <div className="absolute top-1/3 -left-40 w-[520px] h-[520px] bg-pink-500/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 -right-40 w-[520px] h-[520px] bg-rose-600/20 rounded-full blur-[160px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

            {/* ================= MOBILE VIDEO ================= */}
            <div className="md:hidden w-full flex justify-center">
              <div className="relative w-full max-w-sm h-[320px] rounded-[2rem] overflow-hidden border border-white/10 shadow-xl">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/videos/kerashine-launch.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />
              </div>
            </div>

            {/* ================= LEFT CONTENT ================= */}
            <div>
              <p className="text-xs tracking-[0.45em] uppercase text-pink-400">
                Professional Haircare
              </p>

              <h1 className="mt-8 text-[clamp(2.4rem,8vw,5.5rem)] font-extrabold leading-[1.05]">
                Salon-Grade Care
                <br />
                <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                  For Stronger, Shinier Hair
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg text-gray-300 leading-relaxed">
                Crafted for salons and perfected for everyday use.
                Premium formulas designed to restore, protect, and elevate every hair type.
              </p>

              {/* CTA */}
              <div className="mt-12">
                <a
                  href="#products"
                  className="relative inline-flex w-full md:w-auto items-center justify-center
                  px-12 py-4 rounded-full bg-white text-black
                  shadow-[0_0_40px_rgba(236,72,153,0.35)]
                  hover:bg-pink-600 hover:text-white
                  transition"
                >
                  Shop Hair Solutions
                </a>
              </div>

              {/* Trust points */}
              <div className="mt-10 flex gap-6 md:gap-8 text-xs tracking-widest uppercase text-gray-400 flex-wrap">
                <span>Salon Approved</span>
                <span>Unisex</span>
                <span>All Hair Types</span>
              </div>
            </div>

            {/* ================= DESKTOP VIDEO ================= */}
            <div className="hidden md:flex justify-center">
              <div className="relative w-[420px] h-[520px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/videos/kerashine-launch.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY SECTION ================= */}
      <section id="products"
        className="relative py-28 md:py-40 overflow-hidden
                  bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100"
      >
        {/* Ambient glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-pink-300/30 blur-[180px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="max-w-2xl mb-24">
            <p className="text-xs tracking-[0.45em] uppercase text-pink-600">
              Why Kerashine
            </p>

            <h2 className="mt-8 text-5xl md:text-6xl font-serif leading-tight text-gray-900">
              More Than Haircare —
              <br />
              <span className="text-pink-600">
                It’s a Standard
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              KERASHINE is crafted for those who expect more from their hair.
              Professional-grade formulas designed to deliver real results,
              without compromise.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

            {/* Card 1 */}
            <div className="rounded-[36px] bg-[#fff7f4] p-14 shadow-xl">
              <h3 className="text-2xl font-serif text-gray-900">
                Salon-Grade Formulas
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Developed to meet professional salon standards, delivering
                performance you can see and feel from the very first use.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-[36px] bg-[#fff4f6] p-14 shadow-xl">
              <h3 className="text-2xl font-serif text-gray-900">
                Designed for Real Hair
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Every formula is tested across diverse hair types to ensure
                effectiveness for everyday routines and long-term care.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-[36px] bg-[#fff8f2] p-14 shadow-xl">
              <h3 className="text-2xl font-serif text-gray-900">
                Clean & Conscious Care
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Thoughtfully formulated without unnecessary harsh additives,
                balancing performance with gentle care.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-[36px] bg-[#fff5fb] p-14 shadow-xl">
              <h3 className="text-2xl font-serif text-gray-900">
                Visible Results
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                From improved texture to long-lasting shine, KERASHINE delivers
                results you can trust — not empty promises.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= HAIR RITUAL ================= */}
      <section
        className="relative py-28 overflow-hidden
                  bg-gradient-to-br from-rose-200 via-pink-100 to-fuchsia-100"
      >
        {/* Soft ambient shapes */}
        <div className="absolute -top-32 right-0 w-[420px] h-[420px] bg-pink-400/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 -left-32 w-[420px] h-[420px] bg-rose-300/30 rounded-full blur-[160px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="max-w-xl mb-20">
            <p className="text-xs tracking-[0.45em] uppercase text-pink-700">
              The Ritual
            </p>

            <h2 className="mt-8 text-4xl md:text-5xl font-serif leading-tight text-gray-900">
              A Simple Routine —
              <br />
              <span className="text-pink-600">
                Designed to Perform
              </span>
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            <div className="rounded-[32px] bg-[#fff6f8] p-10 shadow-lg">
              <span className="text-xs tracking-widest text-pink-600">
                STEP 01
              </span>
              <h3 className="mt-4 font-serif text-xl text-gray-900">
                Cleanse
              </h3>
              <p className="mt-3 text-gray-700">
                Gently remove buildup while preserving natural moisture.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#fff3f5] p-10 shadow-lg">
              <span className="text-xs tracking-widest text-pink-600">
                STEP 02
              </span>
              <h3 className="mt-4 font-serif text-xl text-gray-900">
                Condition
              </h3>
              <p className="mt-3 text-gray-700">
                Restore softness, manageability, and everyday smoothness.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#fff7f2] p-10 shadow-lg">
              <span className="text-xs tracking-widest text-pink-600">
                STEP 03
              </span>
              <h3 className="mt-4 font-serif text-xl text-gray-900">
                Repair
              </h3>
              <p className="mt-3 text-gray-700">
                Deep treatment to strengthen and revive tired hair.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#fff5fb] p-10 shadow-lg">
              <span className="text-xs tracking-widest text-pink-600">
                STEP 04
              </span>
              <h3 className="mt-4 font-serif text-xl text-gray-900">
                Finish
              </h3>
              <p className="mt-3 text-gray-700">
                Seal shine and control frizz with lightweight care.
              </p>
            </div>

          </div>
        </div>
      </section>
      
      {/* ================= SIGNATURE SETS (VIP EDITION) ================= */}
      <section
        className="relative py-28 sm:py-28 md:py-40 lg:py-48 overflow-hidden
                  bg-gradient-to-br from-[#fff1f4] via-[#ffe8ef] to-[#fff6ec]"
      >
        {/* Luxury ambient layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2
                          w-[700px] sm:w-[1000px] h-[400px] sm:h-[500px]
                          bg-pink-300/40 blur-[180px] sm:blur-[200px]" />
          <div className="absolute bottom-0 -right-40
                          w-[400px] sm:w-[600px] h-[400px] sm:h-[600px]
                          bg-rose-200/40 blur-[180px] sm:blur-[200px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">

          {/* INTRO */}
          <div className="max-w-3xl mb-24 sm:mb-32 lg:mb-40">
            <p className="text-xs tracking-[0.35em] sm:tracking-[0.5em]
                          uppercase text-pink-600">
              Curated Rituals
            </p>

            <h2 className="mt-6 sm:mt-10
                          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                          font-serif font-semibold text-gray-900 leading-tight">
              Signature
              <br />
              Haircare Sets
            </h2>

            <p className="mt-6 sm:mt-10
                          text-base sm:text-lg md:text-xl
                          text-gray-700 leading-relaxed max-w-2xl">
              Thoughtfully composed salon-grade rituals — designed for those
              who expect more than just haircare.
            </p>
          </div>

          {/* SETS */}
          <div className="space-y-24 sm:space-y-32 lg:space-y-40">

            {signatureSets.map((set: SignatureSet, index: number) => (
              <div
                key={set.id}
                className="relative grid grid-cols-1 lg:grid-cols-2
                          items-center gap-14 sm:gap-20 lg:gap-24
                          rounded-[36px] sm:rounded-[44px] lg:rounded-[56px]
                          bg-white/80 backdrop-blur-2xl
                          shadow-[0_30px_90px_rgba(0,0,0,0.12)]
                          p-6 sm:p-10 lg:p-24"
              >
                {/* Floating index */}
                <span className="absolute -top-6 -left-4 sm:-top-8 sm:-left-8
                                text-[72px] sm:text-[96px] lg:text-[120px]
                                font-serif text-pink-200/40 select-none">
                  {index + 1}
                </span>

                {/* IMAGE */}
                <div className="relative flex flex-col items-center gap-4">

                  {/* Badge — image se upar */}
                  <span className="inline-block bg-black/80 text-white
                                  text-[10px] tracking-widest px-3 py-1 rounded-full">
                    SIGNATURE SET
                  </span>

                  {/* Image */}
                  <div className="relative flex justify-center">
                    <Image
                      src={set.image}
                      alt={set.name}
                      width={520}
                      height={520}
                      className="object-contain
                                max-w-[220px] sm:max-w-[320px] lg:max-w-none
                                drop-shadow-[0_40px_70px_rgba(0,0,0,0.25)]
                                transition duration-700"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div>
                  {set.id === "set-small" && (
                    <span className="inline-block mb-6
                                    text-[10px] sm:text-xs
                                    tracking-[0.35em] sm:tracking-[0.45em]
                                    uppercase text-pink-600">
                      Most Loved
                    </span>
                  )}

                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                                font-serif text-gray-900">
                    {set.name}
                  </h3>

                  <p className="mt-6 sm:mt-8 lg:mt-10
                                text-base sm:text-lg lg:text-xl
                                text-gray-600 leading-relaxed max-w-xl">
                    {set.id === "set-small"
                      ? "A refined introduction to Kera Shine — effortless daily luxury."
                      : "A complete professional-grade ritual for long-term transformation."}
                  </p>

                  <ul className="mt-8 sm:mt-10 lg:mt-12
                                space-y-2 sm:space-y-3
                                text-sm sm:text-base lg:text-lg
                                text-gray-700">
                    {set.items.map((item: string) => (
                      <li key={item}>— {item}</li>
                    ))}
                  </ul>

                  {/* PRICE + BUTTON */}
                  <div className="mt-10 sm:mt-12 lg:mt-16
                                  flex flex-col sm:flex-row
                                  sm:items-center gap-6 sm:gap-10">
                    <span className="text-2xl sm:text-3xl
                                    font-semibold text-gray-900">
                      PKR {set.price}
                    </span>

                    <button
                      onClick={() =>
                        addToCart({
                          id: set.id,
                          name: set.name,
                          price: set.price,
                          image: set.image,
                          qty: 1,
                          type: "set",
                        })
                      }
                      className="
                        w-full sm:w-auto
                        rounded-full bg-black
                        px-8 sm:px-12 lg:px-16
                        py-3 sm:py-4 lg:py-5
                        text-[11px] sm:text-xs text-white
                        tracking-wider sm:tracking-widest
                        uppercase font-semibold
                        shadow-xl
                        hover:bg-pink-600 hover:scale-[1.05]
                        transition duration-300
                      "
                    >
                      Add Ritual
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PRODUCTS — VIP CAROUSEL ================= */}
      <section
        id="products"
        className="relative py-48 overflow-hidden
                  bg-gradient-to-br from-[#fff3f6] via-[#fff7fb] to-[#fff1ea]"
      >
        {/* Ambient luxury glows */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-pink-300/30 blur-[200px]" />
        <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-rose-200/30 blur-[200px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

          {/* INTRO */}
          <div className="mb-36 text-center max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.5em] uppercase text-pink-600">
              The Essentials
            </p>

            <h2 className="mt-10 text-6xl md:text-7xl font-serif leading-tight text-gray-900">
              Everyday Haircare
              <br />
              <span className="text-pink-600">Designed to Perform</span>
            </h2>

            <p className="mt-10 text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Professional-grade formulas crafted for visible results — strength,
              softness, and long-lasting shine.
            </p>
          </div>

          {/* 👇 ADD THIS (mobile only hint) */}
          <p className="md:hidden text-center text-xs tracking-widest uppercase text-gray-500 mb-6">
            Swipe to explore →
          </p>

          {/* ================= CAROUSEL WRAPPER ================= */}
          <div className="relative">

            {/* LEFT ARROW */}
            <button
              onClick={() =>
                document.getElementById("product-carousel")?.scrollBy({
                  left: -380,
                  behavior: "smooth",
                })
              }
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20
                        w-14 h-14 rounded-full bg-white/80 backdrop-blur
                        shadow-lg border border-black/10
                        items-center justify-center
                        hover:bg-black hover:text-white transition"
            >
              ←
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={() =>
                document.getElementById("product-carousel")?.scrollBy({
                  left: 380,
                  behavior: "smooth",
                })
              }
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20
                        w-14 h-14 rounded-full bg-white/80 backdrop-blur
                        shadow-lg border border-black/10
                        items-center justify-center
                        hover:bg-black hover:text-white transition"
            >
              →
            </button>

            {/* ================= PRODUCT STRIP ================= */}
            <div
              id="product-carousel"
              className="flex gap-20 overflow-x-auto scroll-smooth
                        no-scrollbar px-20"
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[340px] max-w-[340px]
                            group relative rounded-[44px] overflow-hidden
                            bg-white/85 backdrop-blur-2xl
                            shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                            transition-all duration-500
                            hover:-translate-y-4"
                >
                  {/* Gradient glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.bg}
                                opacity-50 group-hover:opacity-80 transition`}
                  />

                  {/* Image */}
                  <div className="relative h-[320px] flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={220}
                      height={220}
                      className="object-contain
                                drop-shadow-[0_40px_70px_rgba(0,0,0,0.25)]
                                group-hover:scale-[1.12]
                                transition duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative px-8 pb-12 text-center">
                    <h3 className="text-2xl font-serif text-gray-900">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {product.description}
                    </p>

                    <span className="block mt-5 text-lg font-semibold text-gray-900">
                      PKR {product.price}
                    </span>

                    <button
                      onClick={() =>
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          qty: 1,
                          type: "product",
                        })
                      }
                      className="mt-6 w-full rounded-full bg-black text-white
                                py-4 text-xs tracking-widest uppercase font-semibold
                                shadow-lg hover:bg-pink-600 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="ourstory"
        className="relative py-28 bg-gradient-to-br from-pink-50 via-white to-pink-100 overflow-hidden"
      >
        {/* Decorative blobs (same vibe, thore subtle) */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-pink-100/40 rounded-full blur-3xl opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT — STORY */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.45em] uppercase text-pink-600">
              Our Story
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
              The Story of <br />
              <span className="text-pink-600">KERASHINE</span>
            </h2>

            <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-lg">
              What started at{" "}
              <span className="font-semibold text-pink-600">
                Umani Beauty Salon
              </span>{" "}
              has now become a movement in haircare.
              <br /><br />
              With passion and expertise, our brand was created to empower individuals
              to shine every day — with elegance, confidence, and grace.
            </p>
          </motion.div>

          {/* RIGHT — VIDEOS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-6 flex-wrap justify-center lg:justify-end"
          >
            {videos.map((vid, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden w-40 h-52"
              >
                <video
                  src={vid.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="relative py-28 md:py-40 overflow-hidden
                  bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50"
      >
        {/* Ambient glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-300/30 blur-[160px]" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-rose-200/30 blur-[160px]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          {/* Heading */}
          <p className="text-xs tracking-[0.45em] uppercase text-pink-600">
            Contact
          </p>

          <h2 className="mt-8 text-4xl md:text-5xl font-serif leading-tight text-gray-900">
            Get in
            <span className="text-pink-600"> Touch</span>
          </h2>

          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Questions, collaborations or wholesale inquiries —
            our team is always happy to assist you.
          </p>

          {/* Contact Cards */}
          <div className="mt-24 grid gap-12 md:grid-cols-3">

            <div className="group rounded-[36px] bg-white/80 backdrop-blur-xl
                            border border-white/60 shadow-xl
                            hover:shadow-2xl hover:-translate-y-2
                            transition-all duration-300 p-12">
              <h3 className="text-xl font-serif text-gray-900">
                Email
              </h3>
              <p className="mt-4 text-gray-600">
                kerashinecosmetics@gmail.com
              </p>
            </div>

            <div className="group rounded-[36px] bg-white/80 backdrop-blur-xl
                            border border-white/60 shadow-xl
                            hover:shadow-2xl hover:-translate-y-2
                            transition-all duration-300 p-12">
              <h3 className="text-xl font-serif text-gray-900">
                Phone
              </h3>
              <p className="mt-4 text-gray-600">
                +92 335 2545444
              </p>
            </div>

            <div className="group rounded-[36px] bg-white/80 backdrop-blur-xl
                            border border-white/60 shadow-xl
                            hover:shadow-2xl hover:-translate-y-2
                            transition-all duration-300 p-12">
              <h3 className="text-xl font-serif text-gray-900">
                Location
              </h3>
              <p className="mt-4 text-gray-600">
                North Nazimabad Town, Karachi
              </p>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="mt-20 flex flex-wrap justify-center gap-6">

            <a
              href="mailto:kerashinecosmetics@gmail.com"
              className="px-10 py-4 rounded-full bg-pink-600 text-white
                        text-sm tracking-widest uppercase font-semibold
                        shadow-lg hover:bg-pink-700 hover:scale-[1.04]
                        transition"
            >
              Send Email
            </a>

            <a
              href="tel:+923101425352"
              className="px-10 py-4 rounded-full bg-pink-600 text-white
                        text-sm tracking-widest uppercase font-semibold
                        shadow-lg hover:bg-pink-700 hover:scale-[1.04]
                        transition"
            >
              Call Now
            </a>

            <a
              href="https://maps.google.com/?q=North+Nazimabad+Town+Karachi"
              target="_blank"
              className="px-10 py-4 rounded-full bg-pink-600 text-white
                        text-sm tracking-widest uppercase font-semibold
                        shadow-lg hover:bg-pink-700 hover:scale-[1.04]
                        transition"
            >
              Get Directions
            </a>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black py-14 text-center text-gray-400 text-sm tracking-widest">
        <p>KERA SHINE — Salon Grade Haircare</p>
        <p className="mt-2 text-xs opacity-60">
          © 2021 All Rights Reserved
        </p>
      </footer>
    </main>
  );
}