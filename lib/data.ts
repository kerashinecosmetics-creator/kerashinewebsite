export type Category = "Hair Care" | "Skin Care" | "Private Label";

export type Product = {
  id: string;
  name: string;
  category: Category;
  short: string;
  description: string;
  image: string;
  position: string; // object-position so one image can serve several crops
  ingredients: string[];
  benefits: string[];
};

export const categories: ("All" | Category)[] = ["All", "Hair Care", "Skin Care", "Private Label"];

export const products: Product[] = [
  {
    id: "keratin-shampoo",
    name: "Keratin Repair Shampoo",
    category: "Hair Care",
    short: "Sulfate-free cleanse with 15% hydrolyzed keratin.",
    description:
      "A gentle daily shampoo that cleanses without stripping and leaves hair smooth and glossy.",
    image: "/images/hero-bottle.png",
    position: "center",
    ingredients: ["Hydrolyzed Keratin", "Argan Oil", "Biotin", "Panthenol", "Aloe Vera Extract"],
    benefits: ["Sulfate-free formula", "Safe for colored hair", "Reduces frizz and breakage", "pH balanced for the scalp"],
  },
  {
    id: "silk-conditioner",
    name: "Silk Conditioner",
    category: "Hair Care",
    short: "Detangles in seconds and seals the cuticle.",
    description: "A lightweight conditioner that locks in moisture and adds long-lasting shine.",
    image: "/images/model-hair.png",
    position: "center 30%",
    ingredients: ["Hydrolyzed Keratin", "Argan Oil", "Shea Butter", "Vitamin E"],
    benefits: ["Easy detangling", "No heavy residue", "48-hour shine", "Smooth, manageable lengths"],
  },
  {
    id: "argan-serum",
    name: "Argan Gloss Serum",
    category: "Hair Care",
    short: "Weightless finishing serum for mirror shine.",
    description: "A finishing serum that tames frizz, protects from heat and adds a final layer of gloss.",
    image: "/images/ritual-set.png",
    position: "center",
    ingredients: ["Argan Oil", "Jojoba Oil", "Vitamin E", "Silicone-free slip agents"],
    benefits: ["Heat protection", "Tames frizz", "Non-greasy finish", "Works on damp or dry hair"],
  },
  {
    id: "vitamin-c-serum",
    name: "Vitamin C Brightening Serum",
    category: "Skin Care",
    short: "Daily serum for a brighter, even complexion.",
    description: "A fast-absorbing serum designed to brighten dull skin and support a smoother tone.",
    image: "/images/ingredients-flatlay.png",
    position: "30% center",
    ingredients: ["Vitamin C", "Hyaluronic Acid", "Niacinamide", "Green Tea Extract"],
    benefits: ["Brightens dull skin", "Hydrates without stickiness", "Evens skin tone", "Suitable for daily use"],
  },
  {
    id: "hydra-cream",
    name: "Hydra Barrier Cream",
    category: "Skin Care",
    short: "Rich daily moisturizer for the Karachi climate.",
    description: "A balanced moisturizer that hydrates in humidity and heat without feeling heavy.",
    image: "/images/ingredients-flatlay.png",
    position: "75% 60%",
    ingredients: ["Ceramides", "Squalane", "Shea Butter", "Glycerin"],
    benefits: ["24-hour hydration", "Supports the skin barrier", "Fast absorbing", "Fragrance-light"],
  },
  {
    id: "gentle-cleanser",
    name: "Gentle Foaming Cleanser",
    category: "Skin Care",
    short: "Soft daily cleanser that respects the skin barrier.",
    description: "A mild foaming cleanser that removes dirt and oil without leaving skin tight.",
    image: "/images/lab-texture.png",
    position: "center",
    ingredients: ["Amino-acid Surfactants", "Chamomile Extract", "Allantoin", "Glycerin"],
    benefits: ["Soap-free", "Leaves skin soft", "Suits sensitive skin", "Everyday use"],
  },
  {
    id: "pl-haircare",
    name: "Private Label Hair Care",
    category: "Private Label",
    short: "Your brand on our proven hair care formulas.",
    description: "Choose from our tested hair formulas or request a custom one, packaged under your brand.",
    image: "/images/hero-bottle.png",
    position: "center 20%",
    ingredients: ["Custom active selection", "Fragrance options", "Texture and viscosity options"],
    benefits: ["Low minimum orders", "Custom packaging", "Documentation support", "Batch consistency"],
  },
  {
    id: "pl-skincare",
    name: "Private Label Skin Care",
    category: "Private Label",
    short: "Serums, creams and cleansers made to your brief.",
    description: "From concept to filled bottle: formulation, testing and packaging for your skin care line.",
    image: "/images/ingredients-flatlay.png",
    position: "center",
    ingredients: ["Custom active selection", "Preservation systems", "Texture options"],
    benefits: ["Formulation support", "Stability testing", "Scalable volumes", "Dedicated project manager"],
  },
  {
    id: "pl-sets",
    name: "Private Label Gift Sets",
    category: "Private Label",
    short: "Curated sets and kits under your brand.",
    description: "Multi-product sets and kits with custom boxes for retail, salons and corporate gifting.",
    image: "/images/ritual-set.png",
    position: "center 40%",
    ingredients: ["Any combination from our range", "Custom box and insert options"],
    benefits: ["Ready for retail", "Flexible set sizes", "Seasonal editions", "Co-branded packaging"],
  },
];

export const galleryItems = [
  { src: "/images/lab-texture.png", alt: "Laboratory surface", ratio: "aspect-[4/5]", position: "center" },
  { src: "/images/ingredients-flatlay.png", alt: "Raw ingredients", ratio: "aspect-square", position: "center" },
  { src: "/images/model-hair.png", alt: "Finished hair result", ratio: "aspect-[3/4]", position: "center" },
  { src: "/images/ritual-set.png", alt: "Filled and packaged set", ratio: "aspect-[4/3]", position: "center" },
  { src: "/images/hero-bottle.png", alt: "Finished bottle", ratio: "aspect-[3/5]", position: "center" },
  { src: "/images/lab-texture.png", alt: "Quality control bench", ratio: "aspect-[4/3]", position: "20% 30%" },
  { src: "/images/ingredients-flatlay.png", alt: "Ingredient selection", ratio: "aspect-[4/5]", position: "80% 50%" },
  { src: "/images/model-hair.png", alt: "Salon-tested results", ratio: "aspect-square", position: "center 20%" },
];

export const testimonials = [
  { quote: "Our private label line launched on schedule and the batch quality has been consistent every order.", name: "Sana Malik", role: "Founder, Glow Atelier" },
  { quote: "KeraShine understood our brief quickly. Their lab team was responsive and the documentation was complete.", name: "Imran Qureshi", role: "Director, Qureshi Beauty Supply" },
  { quote: "Our salon clients ask for the keratin range by name. Reorders are always on time.", name: "Hina Siddiqui", role: "Owner, Studio H Salons" },
  { quote: "Professional from the first call to delivery. A reliable manufacturing partner in Karachi.", name: "Bilal Ahmed", role: "Procurement, Noor Retail Group" },
];

export const clients = [
  "Glow Atelier", "Noor Retail", "Studio H", "Aura Beauty", "Silk & Co", "Qureshi Supply", "Velora", "Mehr Salons",
];

export const whatsappNumber = "923000000000"; // replace with your number, country code first, no +
