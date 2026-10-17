export type Category = "Hair Care" | "Private Label" | "Signature Set" | "Daily Care";

export type Product = {
  id: string;
  name: string;
  category: Category;
  short: string;
  description: string;
  image: string;
  position: string;
  ingredients: string[];
  benefits: string[];
};

export const categories: ("All" | Category)[] = ["All", "Hair Care"];

export const products: Product[] = [
  {
    id: "keratin-shampoo",
    name: "Keratin Repair Shampoo",
    category: "Hair Care",
    short: "Sulfate-free cleanse with 15% hydrolyzed keratin.",
    description: "A gentle daily shampoo that cleanses without stripping and leaves hair smooth and glossy. pH 5.2, safe for colored hair.",
    image: "/images/keratin-shampoo.webp",
    position: "center",
    ingredients: ["Hydrolyzed Keratin 15%", "Argan Oil 10%", "Biotin 2.5%", "Panthenol", "Aloe Vera"],
    benefits: ["Sulfate-free (SLS/SLES None)", "Safe for colored & keratin-treated hair", "pH 5.2 balanced", "48-hour shine"],
  },
  {
    id: "silk-conditioner",
    name: "Silk Conditioner",
    category: "Hair Care",
    short: "Detangles in seconds and seals the cuticle.",
    description: "A lightweight conditioner that locks in moisture and adds long-lasting shine without residue.",
    image: "/images/silk-conditioner.webp",
    position: "center 30%",
    ingredients: ["Hydrolyzed Keratin 15%", "Argan Oil 10%", "Shea Butter", "Biotin 2.5%"],
    benefits: ["Easy detangling, less breakage", "No heavy residue", "48-hour shine", "Seals cuticle"],
  },
  {
    id: "argan-serum",
    name: "Argan Gloss Serum",
    category: "Hair Care",
    short: "Weightless finishing serum for mirror shine.",
    description: "A finishing serum that tames frizz, protects from heat up to 210°C and adds final gloss.",
    image: "/images/gloss-serum.webp",
    position: "center",
    ingredients: ["Argan Oil 10%", "Hydrolyzed Keratin", "Jojoba Oil", "Vitamin E"],
    benefits: ["Heat protection 210°C", "Tames frizz", "Non-greasy finish", "Damp or dry hair"],
  },
  {
    id: "hair-mask",
    name: "Keratin Hair Mask",
    category: "Hair Care",
    short: "Deep repair for dry, damaged lengths.",
    description: "Rich intensive mask that restores elasticity and shine. Once a week salon-repair feeling.",
    image: "/images/hair-mask.webp",
    position: "center",
    ingredients: ["Hydrolyzed Keratin 15%", "Argan Oil 10%", "Biotin 2.5%", "Shea Butter"],
    benefits: ["Repairs heat & color damage", "Deep conditioning", "Weekly use", "Made in Karachi"],
  },
];

export const galleryItems = [
  { src: "/images/lab-texture.webp", alt: "Laboratory surface", ratio: "aspect-[4/5]", position: "center" },
  { src: "/images/keratin-shampoo.webp", alt: "Keratin Shampoo", ratio: "aspect-[4/5]", position: "center" },
  { src: "/images/silk-conditioner.webp", alt: "Silk Conditioner", ratio: "aspect-[3/4]", position: "center" },
  { src: "/images/gloss-serum.webp", alt: "Argan Gloss Serum", ratio: "aspect-square", position: "center" },
  { src: "/images/hair-mask.webp", alt: "Keratin Hair Mask", ratio: "aspect-square", position: "center" },
  { src: "/images/lab-texture.webp", alt: "Quality control bench", ratio: "aspect-[4/3]", position: "20% 30%" },
];

export const testimonials = [
  { quote: "Our private label line launched on schedule and the batch quality has been consistent every order.", name: "Sana Malik", role: "Founder, Glow Atelier" },
  { quote: "KeraShine understood our brief quickly. Their lab team was responsive and the documentation was complete.", name: "Imran Qureshi", role: "Director, Qureshi Beauty Supply" },
  { quote: "Our salon clients ask for the keratin range by name. Reorders are always on time.", name: "Hina Siddiqui", role: "Owner, Studio H Salons" },
  { quote: "Professional from the first call to delivery. A reliable manufacturing partner in Karachi.", name: "Bilal Ahmed", role: "Procurement, Noor Retail Group" },
];

export const clients = [
  "Glow Atelier", "Noor Retail", "Studio H", "【entity-Aura Beauty¦canonical_name=Aura Beauty】", "Silk & Co", "Qureshi Supply", "Velora", "Mehr Salons",
];

export const whatsappNumber = "+923268681026";