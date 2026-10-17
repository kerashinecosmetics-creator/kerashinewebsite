"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { galleryItems } from "@/lib/data";
import { EASE, viewport } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + galleryItems.length) % galleryItems.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    window.lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : galleryItems[open];

  return (
    <section id="gallery" className="section-pad">
      <div className="container-x">
        <SectionHeading
          kicker="Factory glimpse"
          title="Inside the lab and the production floor."
          text="A look at the materials, equipment and people behind every KeraShine batch."
        />

        <div className="mt-14 columns-2 gap-4 md:columns-3 md:gap-6">
          {galleryItems.map((g, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open image: ${g.alt}`}
              className="group focus-ring relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[2rem] shadow-soft md:mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: EASE }}
            >
              <div className={`relative w-full ${g.ratio}`}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 48vw"
                  className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
                  style={{ objectPosition: g.position }}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="font-serif text-lg text-white">{g.alt}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && open !== null && (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-ink/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close viewer"
              className="focus-ring absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:rotate-90 hover:bg-white/20"
            >
              <X size={22} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="focus-ring absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-8"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="focus-ring absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-8"
            >
              <ChevronRight size={24} />
            </button>

            <AnimatePresence mode="wait">
              <motion.figure
                key={open}
                className="relative h-[80vh] w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <Image src={current.src} alt={current.alt} fill sizes="90vw" className="rounded-[2rem] object-contain" style={{ objectPosition: current.position }} priority />
                <figcaption className="absolute -bottom-10 left-0 right-0 text-center text-sm text-white/70">
                  {current.alt} · {open + 1} / {galleryItems.length}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
