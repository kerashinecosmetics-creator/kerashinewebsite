"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import ProductsSection from "./ProductsSection";
import AboutSection from "./AboutSection";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ✅ Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg z-50 shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-wide">
            KERA{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              SHINE
            </span>
          </div>

          {/* Menu Button (mobile) */}
          <button
            className="text-gray-900 md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
            <a href="#home" className="hover:text-pink-500 transition">
              Home
            </a>
            <a href="#about" className="hover:text-pink-500 transition">
              About
            </a>
            <a href="#products" className="hover:text-pink-500 transition">
              Products
            </a>
            <a href="#contact" className="hover:text-pink-500 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ✅ Mobile Menu (Overlay + Drawer) */}
      <div
        className={`fixed inset-0 z-[999] transition ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 md:w-80 bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <span className="text-xl font-bold">KERA SHINE</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Drawer Nav Links */}
          <nav className="flex flex-col space-y-6 mt-6 px-6 text-gray-800 font-medium">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="hover:text-pink-500 transition"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-pink-500 transition"
            >
              About
            </a>
            <a
              href="#products"
              onClick={() => setIsOpen(false)}
              className="hover:text-pink-500 transition"
            >
              Products
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-pink-500 transition"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* ✅ Hero Section */}
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

        <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg"
          >
            Shine with{" "}
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Confidence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200"
          >
            Premium haircare designed for elegance, health & natural beauty.
          </motion.p>
        </div>
      </section>

      {/* ✅ About Section */}
      <AboutSection />

      {/* ✅ Products Section */}
      <ProductsSection />

      {/* ✅ Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 sm:py-20 lg:py-28 bg-white text-center"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700">
            Have questions or want to know more? Reach out to us and we’ll be
            happy to help.
          </p>
          <p className="mt-6 text-gray-800 font-medium">
            📧 contact@kerashine.com
          </p>
          <p className="text-gray-800 font-medium">📍 Karachi, Pakistan</p>
        </div>
      </motion.section>

      {/* ✅ Footer */}
      <footer className="bg-black text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} KERA SHINE. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
