export type SpecGroup = { group: string; rows: [string, string][] };

export type Product = {
  id: string;
  name: string;
  category: "Daily Care" | "Signature Set";
  size: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
  ph: number;
  keratin: number;
  argan: number;
  biotin: number;
  sulfateFree: boolean;
  shineHours: number;
  highlights: string[];
  contents?: string[];
  specs: SpecGroup[];
  ritual: { title: string; text: string }[];
};

const FORMULA = { ph: 5.2, keratin: 15, argan: 10, biotin: 2.5, shineHours: 48 };

function specs(
  size: string,
  pack: string,
  usage: string,
  scent = "Warm amber, white tea, soft musk"
): SpecGroup[] {
  return [
    {
      group: "Formula",
      rows: [
        ["Hydrolyzed Keratin", `${FORMULA.keratin}%`],
        ["Argan Oil", `${FORMULA.argan}%`],
        ["Biotin", `${FORMULA.biotin}%`],
        ["pH", `${FORMULA.ph}`],
        ["Sulfates (SLS / SLES)", "None"],
      ],
    },
    {
      group: "Performance",
      rows: [
        ["Shine duration", `${FORMULA.shineHours} hours`],
        ["Best for", "All hair types, especially colored or heat-styled"],
        ["Recommended use", usage],
        ["Scent", scent],
      ],
    },
    {
      group: "Packaging",
      rows: [
        ["Volume", size],
        ["Format", pack],
        ["Shelf life", "24 months unopened"],
        ["Made in", "Karachi, Pakistan"],
      ],
    },
  ];
}

export const products: Product[] = [
  {
    id: "keratin-shampoo",
    name: "Keratin Repair Shampoo",
    category: "Daily Care",
    size: "250 ml",
    tagline: "A sulfate-free cleanse that keeps keratin where it belongs.",
    description:
      "Cleanses without stripping. Hydrolyzed keratin fills rough spots along the strand while argan oil and biotin keep the cuticle smooth, so hair dries glossy, not squeaky.",
    image: "/images/hero-bottle.png",
    accent: "#D9B38C",
    ...FORMULA,
    sulfateFree: true,
    highlights: [
      "Rich, low-foam lather from mild plant-derived cleansers",
      "pH 5.2 matches the natural acidity of the scalp",
      "Safe for colored and keratin-treated hair",
    ],
    specs: specs("250 ml", "Pump bottle, recyclable PET", "3–4 times per week"),
    ritual: [
      { title: "Wet thoroughly", text: "Soak hair with lukewarm water for a full minute so the cuticle softens." },
      { title: "Massage the scalp", text: "Work a coin-sized amount into the roots with your fingertips for 60 seconds." },
      { title: "Rinse, then follow", text: "Rinse until water runs clear and follow with Silk Conditioner." },
    ],
  },
  {
    id: "silk-conditioner",
    name: "Silk Conditioner",
    category: "Daily Care",
    size: "250 ml",
    tagline: "Lengths that detangle in seconds and stay smooth for two days.",
    description:
      "The second half of the system. It seals the cuticle after cleansing and locks in the keratin and argan oil, which is where the 48-hour shine comes from.",
    image: "/images/hero-bottle.png",
    accent: "#E8A6B6",
    ...FORMULA,
    sulfateFree: true,
    highlights: [
      "Detangles wet hair with less breakage when combing",
      "Lightweight: no residue, no flat roots",
      "Same 15% keratin base as the shampoo",
    ],
    specs: specs("250 ml", "Squeeze tube, recyclable PET", "After every shampoo"),
    ritual: [
      { title: "Squeeze out water", text: "Press excess water from your lengths. Dripping hair dilutes the formula." },
      { title: "Apply mid-length to ends", text: "Keep it off the roots. Comb through with a wide-tooth comb." },
      { title: "Leave for three minutes", text: "Let the keratin bind, then rinse with cool water to seal the cuticle." },
    ],
  },
  {
    id: "gloss-serum",
    name: "Argan Gloss Serum",
    category: "Daily Care",
    size: "100 ml",
    tagline: "The finishing coat. Two pumps, mirror shine.",
    description:
      "A weightless finishing serum built on argan oil. Apply to damp or dry hair to tame frizz, protect against heat, and add the final layer of shine.",
    image: "/images/hero-bottle.png",
    accent: "#B9A4F5",
    ...FORMULA,
    sulfateFree: true,
    highlights: [
      "Heat protection up to 210°C",
      "Works on damp or dry hair",
      "Non-greasy, with a soft amber finish",
    ],
    specs: specs("100 ml", "Glass-look pump bottle", "Daily, as a finishing step", "Warm amber, argan, soft musk"),
    ritual: [
      { title: "Warm two pumps", text: "Rub between your palms until the serum turns translucent." },
      { title: "Smooth from mid-length down", text: "Glide through lengths and ends. Avoid the scalp." },
      { title: "Style as usual", text: "Blow-dry, straighten or air-dry. The shine holds for 48 hours." },
    ],
  },
  {
    id: "signature-small",
    name: "Signature Set: Small",
    category: "Signature Set",
    size: "250 ml",
    tagline: "The full ritual in a gift-ready box.",
    description:
      "Shampoo, conditioner and serum together in the 250 ml size. The right starting point for trying the system, or for gifting.",
    image: "/images/ritual-set.png",
    accent: "#D9B38C",
    ...FORMULA,
    sulfateFree: true,
    contents: ["Keratin Repair Shampoo 250 ml", "Silk Conditioner 250 ml", "Argan Gloss Serum 100 ml"],
    highlights: [
      "Lasts roughly 8 weeks with regular use",
      "Travel-friendly sizes",
      "Magnetic gift box",
    ],
    specs: specs("250 ml + 250 ml + 100 ml", "Magnetic gift box", "Full ritual, 3–4 times per week"),
    ritual: [
      { title: "Cleanse", text: "Shampoo the scalp, rinse thoroughly." },
      { title: "Condition", text: "Apply to lengths and ends, leave three minutes." },
      { title: "Finish", text: "Two pumps of serum on damp hair before styling." },
    ],
  },
  {
    id: "signature-large",
    name: "Signature Set: Large",
    category: "Signature Set",
    size: "500 ml",
    tagline: "Salon-size. Built for long hair and loyal routines.",
    description:
      "Double-size shampoo and conditioner with the 100 ml serum. Made for long or thick hair, shared households and salon back-bars.",
    image: "/images/ritual-set.png",
    accent: "#E8A6B6",
    ...FORMULA,
    sulfateFree: true,
    contents: ["Keratin Repair Shampoo 500 ml", "Silk Conditioner 500 ml", "Argan Gloss Serum 100 ml"],
    highlights: [
      "Lasts roughly 16 weeks with regular use",
      "Lower cost per ml than the Small set",
      "Pump tops included for clean dosing",
    ],
    specs: specs("500 ml + 500 ml + 100 ml", "Premium gift box with pumps", "Full ritual, 3–4 times per week"),
    ritual: [
      { title: "Cleanse", text: "Two pumps of shampoo for long hair, massaged into the scalp." },
      { title: "Condition", text: "Work through lengths with a wide-tooth comb, leave three minutes." },
      { title: "Finish", text: "Serum on damp hair, then style. Shine holds for 48 hours." },
    ],
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
