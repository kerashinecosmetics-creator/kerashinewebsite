"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { EASE, LOADER_MS } from "@/lib/motion";
import { scrollToId } from "@/lib/scroll";
import Magnetic from "./Magnetic";

const links = [
  { id: "about", label: "About", href: "/#about", isSection: true },
  { id: "process", label: "Process", href: "/#process", isSection: true },
  { id: "products", label: "Products", href: "/#products", isSection: true },
  { id: "technology", label: "Technology", href: "/technology", isSection: false },
  { id: "collection", label: "Collection", href: "/collection", isSection: false },
  { id: "contact", label: "Contact", href: "/contact", isSection: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  const handleNav = (e: React.MouseEvent, link: typeof links[0]) => {
    e.preventDefault();
    setOpen(false);
    if (link.isSection) {
      if (pathname === "/") {
        setTimeout(() => scrollToId(link.id), 100);
      } else {
        router.push(link.href);
      }
    } else {
      router.push(link.href);
    }
  };

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-ink/5 bg-cream/80 py-3 backdrop-blur-xl" : "bg-transparent py-6"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: LOADER_MS / 1000 - 0.3 }}
    >
      <nav className="container-x flex items-center justify-between px-5 md:px-10">
        <Link href="/" className="relative z-[60] font-serif text-2xl font-semibold tracking-[0.22em] text-ink">
          KERASHINE
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id} className="relative">
              <a href={l.href} onClick={(e) => handleNav(e, l)} className={`relative z-10 block rounded-full px-5 py-2 text-sm font-medium ${pathname === l.href || pathname.startsWith(l.href) ? "text-ink" : "text-ink/70 hover:text-ink"}`}>
                {l.label}
              </a>
              {(pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href))) && (
                <motion.span layoutId="nav-active" className="absolute inset-0 rounded-full bg-ink/[0.08]" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
            </li>
          ))}
        </ul>
        <div className="relative z-[60] flex items-center gap-3">
          <div className="hidden lg:block">
            <Magnetic strength={0.25}>
              <Link href="/contact" className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-gold hover:text-ink">
                Become a Distributor
              </Link>
            </Magnetic>
          </div>
          {/* FIXED TOGGLE - pehle top- h-0.5 toota hua tha */}
          <button type="button" aria-label={open ? "Close" : "Open"} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="relative h-11 w-11 rounded-full bg-ink/5 lg:hidden">
            <span className={`absolute left-1/2 top- h-0.5 w-5 -translate-x-1/2 rounded bg-ink transition-all ${open ? "translate-y-[4.5px] rotate-45" : ""}`} />
            <span className={`absolute left-1/2 top- h-0.5 w-5 -translate-x-1/2 rounded bg-ink transition-all ${open ? "-translate-y-[2.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[55] flex flex-col bg-cream px-6 pt-28 lg:hidden" initial={{ x: "100%" }} animate={{ x: "0%" }} exit={{ x: "100%" }} transition={{ duration: 0.5, ease: EASE }}>
            <ul className="space-y-1">
              {links.map((l, i) => (
                <motion.li key={l.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.07 }}>
                  <a href={l.href} onClick={(e) => handleNav(e, l)} className={`block border-b border-ink/5 py-5 font-serif text-4xl transition ${pathname === l.href || pathname.startsWith(l.href) ? "text-ink" : "text-ink/40 hover:text-ink"}`}>{l.label}</a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto pb-10">
              <Link href="/contact" className="block w-full rounded-full bg-ink py-4 text-center font-medium text-white">Become a Distributor</Link>
              <p className="mt-6 text-center text-sm text-ink/50">4 Products Live · Made in Karachi</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}