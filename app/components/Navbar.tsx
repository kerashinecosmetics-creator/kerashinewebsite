"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE, LOADER_MS } from "@/lib/motion";
import { scrollToId } from "@/lib/scroll";
import Magnetic from "./Magnetic";

const links = [
  { id: "about", label: "About" },
  { id: "process", label: "Process" },
  { id: "products", label: "Products" },
  { id: "services", label: "B2B" },
  { id: "gallery", label: "Gallery" },
  { id: "testimonials", label: "Clients" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 350 : 0);
  };

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-ink/5 bg-cream/70 py-3 backdrop-blur-xl" : "bg-transparent py-6"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: LOADER_MS / 1000 - 0.3 }}
    >
      <nav aria-label="Main" className="container-x flex items-center justify-between px-5 md:px-10">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            if (window.lenis) window.lenis.scrollTo(0, { duration: 1.5 });
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="focus-ring relative z-[60] font-serif text-2xl font-semibold tracking-[0.22em] text-ink"
        >
          KERASHINE
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id} className="relative">
              <a
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(l.id);
                }}
                className="focus-ring relative z-10 block rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
              {active === l.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-ink/[0.06]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="relative z-[60] flex items-center gap-3">
          <div className="hidden lg:block">
            <Magnetic strength={0.25}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  go("contact");
                }}
                className="focus-ring rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-gold hover:text-ink"
              >
                Become a Distributor
              </a>
            </Magnetic>
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring relative h-11 w-11 rounded-full lg:hidden"
          >
            <motion.span
              className={`absolute left-1/2 top-[17px] h-0.5 w-6 -translate-x-1/2 rounded ${open ? "bg-white" : "bg-ink"}`}
              animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className={`absolute left-1/2 top-[26px] h-0.5 w-6 -translate-x-1/2 rounded ${open ? "bg-white" : "bg-ink"}`}
              animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col justify-center bg-ink px-8 lg:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 36px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 36px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 36px)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <ul className="space-y-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.6, ease: EASE }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(l.id);
                    }}
                    className="focus-ring block py-2 font-serif text-4xl text-white transition hover:text-gold"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.p
              className="mt-10 text-sm text-white/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Karachi, Pakistan
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
