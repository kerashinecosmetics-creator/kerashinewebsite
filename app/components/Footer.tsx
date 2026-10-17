"use client";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const nav = [
  { id: "about", label: "About us" },
  { id: "process", label: "Our process" },
  { id: "products", label: "Products" },
  { id: "services", label: "Services" },
];
const more = [
  { id: "gallery", label: "Gallery" },
  { id: "testimonials", label: "Clients" },
  { id: "contact", label: "Become a partner" },
];
const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

function LinkList({ title, items }: { title: string; items: { id: string; label: string }[] }) {
  return (
    <div>
      <p className="font-serif text-xl text-white">{title}</p>
      <ul className="mt-5 space-y-3">
        {items.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(l.id);
              }}
              className="focus-ring rounded text-white/60 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink px-5 pb-8 pt-24 text-white md:px-10">
      <div className="container-x grid gap-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl tracking-[0.2em]">KERASHINE</p>
          <p className="mt-5 max-w-xs text-white/60">
            Premium hair care, skin care and private label cosmetics, made in Karachi, Pakistan.
          </p>
          <ul className="mt-8 flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-ink"
                >
                  <s.icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <LinkList title="Company" items={nav} />
        <LinkList title="Explore" items={more} />
        <div>
          <p className="font-serif text-xl text-white">Contact</p>
          <address className="mt-5 space-y-3 not-italic text-white/60">
            <p>Karachi, Sindh, Pakistan</p>
            <p>+92 300 0000000</p>
            <p>partners@kerashine.com</p>
          </address>
        </div>
      </div>

      <p aria-hidden="true" className="mt-20 select-none text-center font-serif text-[clamp(3rem,15vw,13rem)] font-medium leading-none tracking-[0.1em] text-white/[0.05]">
        KERASHINE
      </p>

      <div className="container-x mt-8 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row">
        <p>© {new Date().getFullYear()} KeraShine Cosmetics. All rights reserved.</p>
        <p>Business portfolio website. Not an online store.</p>
      </div>
    </footer>
  );
}
