import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121212",
        gold: "#C9A96E",
        beige: "#E8D5C4",
        cream: "#FAF6F1",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -25px rgba(18,18,18,0.25)",
        lift: "0 40px 80px -30px rgba(18,18,18,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
