"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappNumber } from "@/lib/data";
import { LOADER_MS } from "@/lib/motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello KeraShine!")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with KeraShine on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-ink text-gold shadow-lift will-change-transform"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 14, delay: LOADER_MS / 1000 + 1 }}
      whileHover={{ scale: 1.12, rotate: -6 }}
      whileTap={{ scale: 0.94 }}
    >
      <MessageCircle size={26} />
    </motion.a>
  );
}
