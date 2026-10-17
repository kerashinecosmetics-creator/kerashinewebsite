import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Blobs from "./components/Blobs";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Loader from "./components/Loader";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KeraShine Cosmetics | Hair Care, Skin Care & Private Label, Karachi",
  description:
    "KeraShine is a Karachi-based cosmetics manufacturer offering premium hair care, skin care, private label production and distribution partnerships.",
};

export const viewport: Viewport = { themeColor: "#FAF6F1" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Loader />
        <Blobs />
        <SmoothScroll>{children}</SmoothScroll>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
