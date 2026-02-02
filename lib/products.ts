// lib/products.ts

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  usage: string[];
  ingredients: string[];
  sizes: string[];
  price: number; // for future ecommerce
  bg: string;
};

export type SignatureSet = {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
  type: "set";
  items: string[];
};

export const products: Product[] = [
  {
    id: "shampoo-250",
    name: "Shampoo",
    slug: "shampoo",
    description: "Gently cleanses and nourishes hair for a natural shine.",
    image: "/products/ShampooModel250ml.png",
    usage: ["Apply to wet hair.", "Massage gently.", "Rinse thoroughly."],
    ingredients: ["Aqua", "Argan Oil", "Aloe Vera", "Vitamin E"],
    sizes: ["250ml"],
    price: 1200,
    bg: "from-pink-50 to-white",
  },
  {
    id: "shampoo-500",
    name: "Shampoo",
    slug: "shampoo",
    description: "Gently cleanses and nourishes hair for a natural shine.",
    image: "/products/ShampooModel500ml.png",
    usage: ["Apply to wet hair.", "Massage gently.", "Rinse thoroughly."],
    ingredients: ["Aqua", "Argan Oil", "Aloe Vera", "Vitamin E"],
    sizes: ["500ml"],
    price: 1800,
    bg: "from-pink-50 to-white",
  },
  {
    id: "conditioner-250",
    name: "Conditioner",
    slug: "conditioner",
    description: "Deep hydration leaving your hair silky smooth.",
    image: "/products/ConditionerModel250ml.png",
    usage: ["Apply after shampooing.", "Leave 2–3 mins.", "Rinse well."],
    ingredients: ["Shea Butter", "Coconut Oil", "Keratin", "Panthenol"],
    sizes: ["250ml"],
    price: 1200,
    bg: "from-rose-50 to-white",
  },
  {
    id: "conditioner-500",
    name: "Conditioner",
    slug: "conditioner",
    description: "Deep hydration leaving your hair silky smooth.",
    image: "/products/ConditionerModel500ml.png",
    usage: ["Apply after shampooing.", "Leave 2–3 mins.", "Rinse well."],
    ingredients: ["Shea Butter", "Coconut Oil", "Keratin", "Panthenol"],
    sizes: ["500ml"],
    price: 1800,
    bg: "from-rose-50 to-white",
  },
  {
    id: "hair-mask-300",
    name: "Hair Mask",
    slug: "hair-mask",
    description: "Restores strength & vitality for damaged hair.",
    image: "/products/HairMaskModel300ml.png",
    usage: ["Apply generously.", "Leave 10–15 mins.", "Rinse well."],
    ingredients: ["Macadamia Oil", "Avocado Oil", "Shea Butter"],
    sizes: ["300ml"],
    price: 1200,
    bg: "from-gray-50 to-white",
  },
  {
    id: "hair-mask-500",
    name: "Hair Mask",
    slug: "hair-mask",
    description: "Restores strength & vitality for damaged hair.",
    image: "/products/HairMaskModel500ml.png",
    usage: ["Apply generously.", "Leave 10–15 mins.", "Rinse well."],
    ingredients: ["Macadamia Oil", "Avocado Oil", "Shea Butter"],
    sizes: ["500ml"],
    price: 1800,
    bg: "from-gray-50 to-white",
  },
  {
    id: "serum",
    name: "Serum",
    slug: "serum",
    description: "Lightweight serum for glossy & frizz-free finish.",
    image: "/products/SerumModel60ml.png",
    usage: ["Take 2–3 drops.", "Apply mid-lengths to ends.", "Style."],
    ingredients: ["Argan Oil", "Jojoba Oil", "Vitamin E"],
    sizes: ["60ml"],
    price: 1100,
    bg: "from-yellow-50 to-white",
  },
];
export const signatureSets: SignatureSet[] = [
  {
    id: "set-small",
    name: "Signature Care Set — Small",
    price: 4700,
    image: "/sets/250mlFullSet.png",
    qty: 1,
    type: "set",
    items: [
      "Shampoo 250ml",
      "Conditioner 250ml",
      "Hair Mask 300ml",
      "Serum 60ml",
    ],
  },
  {
    id: "set-large",
    name: "Signature Care Set — Large",
    price: 6500,
    image: "/sets/500mlFullSet.png",
    qty: 1,
    type: "set",
    items: [
      "Shampoo 500ml",
      "Conditioner 500ml",
      "Hair Mask 500ml",
      "Serum 60ml",
    ],
  },
];


