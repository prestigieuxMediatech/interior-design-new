// src/data/portfolioData.js
// Central data source for every /portfolio/[category] page.
// Add a new category by adding a new key here — the page template
// itself never changes.

const portfolioData = {
  "modular-kitchen": {
    slug: "modular-kitchen",
    title: "Modular Kitchens",
    subtitle: "Engineered for the way you actually cook",
    metaDescription:
      "Custom modular kitchen design and installation — German hardware, marine-ply carcasses, and layouts built around real cooking habits.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200",
      alt: "Handleless matte-finish modular kitchen",
    },
    intro:
      "A kitchen earns its keep in the first six months, long after the render has been forgotten. We start every project by mapping how you cook, then build the storage, worktop and lighting around that.",
    highlights: [
      { label: "German soft-close fittings", icon: "check" },
      { label: "BWP marine-ply carcass", icon: "check" },
      { label: "10-year hardware warranty", icon: "check" },
      { label: "Modular, upgrade-ready design", icon: "check" },
    ],
    pullQuote:
      "A good kitchen disappears into the cooking. You stop noticing the cabinets and start noticing the food.",
    sliderImages: [
      {
        src: "/Kitchen_Images/K-3.jpeg",
        alt: "Island counter in honed quartzite",
      },
      {
        src: "/Kitchen_Images/K-6.jpeg",
        alt: "Modern luxury kitchen cabinet design",
      },
      {
        src: "/Kitchen_Images/K-7.jpeg",
        alt: "Under-cabinet lighting over splashback",
      },
      {
        src: "/Kitchen_Images/K-8.jpeg",
        alt: "Breakfast counter and bar seating",
      },
      {
        src: "/Kitchen_Images/K-1.jpeg",
        alt: "Corner storage unit layout",
      },
    ],
    philosophy: {
      heading: "How We Plan a Kitchen",
      paragraphs: [
        "Every layout begins with a work-triangle audit: where the stove, sink and fridge sit relative to each other, and how far you'd walk between them on a busy weeknight.",
        "Storage is planned by category — spices, pans, appliances and dry goods each get a dedicated zone, sized against what you actually own rather than a generic drawer count.",
        "Worktops and splashbacks are chosen for how they age under oil, heat and citrus over years of use, not just for how they photograph on handover day.",
      ],
    },
    specs: {
      "Material Grade": "BWP-grade marine plywood, 18mm carcass",
      "Hardware": "Hettich / Blum soft-close systems",
      "Completion Timeline": "6–8 weeks from design lock",
      "Warranty Period": "10 years on hardware, 5 years on carcass",
    },
  },

  "master-bedroom": {
    slug: "master-bedroom",
    title: "Master Bedrooms",
    subtitle: "A room built around rest, not appearances",
    metaDescription:
      "Master bedroom interior design focused on acoustics, light control and storage with custom wardrobes.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200",
      alt: "Master bedroom with upholstered headboard",
    },
    intro:
      "The master bedroom carries more competing demands than any other room — sleep, storage, dressing, and sometimes a quiet corner to work. We design it in that exact order.",
    highlights: [
      { label: "Acoustic-lined wardrobe wall", icon: "check" },
      { label: "Blackout-ready drapery track", icon: "check" },
      { label: "Layered, dimmable lighting", icon: "check" },
      { label: "5-year finish warranty", icon: "check" },
    ],
    pullQuote:
      "The room that looks the calmest is usually the one that is working the hardest, quietly, in the background.",
    sliderImages: [
      {
        src: "/Master_Bedroom/MB-1.jpeg",
        alt: "Walnut wardrobe wall",
      },
      {
        src: "/Master_Bedroom/MB-3.jpeg",
        alt: "Upholstered bed frame in bouclé",
      },
      {
        src: "/Master_Bedroom/MB-7.png",
        alt: "Reading nook with armchair",
      },
      {
        src: "/Master_Bedroom/MB-9.jpeg",
        alt: "Dressing area with backlit mirror",
      },
      {
        src: "/Master_Bedroom/MB-7.png",
        alt: "Layered lighting bedroom view",
      },
    ],
    philosophy: {
      heading: "How We Plan a Bedroom",
      paragraphs: [
        "We treat storage capacity as a hard number, not a guess — every wardrobe is sized against an actual inventory of what needs to live inside it, hanging length included.",
        "Light is planned in three layers: ambient, task and accent, each on its own switch or dimmer, so the room can shift from a dressing space at 7am to a quiet one at 11pm.",
        "Acoustic separation from adjoining rooms is built into the wardrobe wall itself wherever the layout allows, rather than left to the door alone.",
      ],
    },
    specs: {
      "Material Grade": "MR-grade plywood with veneer finish",
      "Hardware": "Soft-close hinges, telescopic drawer channels",
      "Completion Timeline": "5–7 weeks from design lock",
      "Warranty Period": "5 years on finish, 10 years on hardware",
    },
  },

  "living-room": {
    slug: "living-room",
    title: "Living Room",
    subtitle: "Designed for effortless gathering and timeless charm",
    metaDescription:
      "Spacious living room designs featuring custom TV units and ambient lighting.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200",
      alt: "Modern luxury living room",
    },
    intro:
      "Your living room is the one space every guest, every gathering and every ordinary evening passes through. We blend sleek TV consoles, considered seating layouts and architectural lighting into something that still feels like home.",
    highlights: [
      { label: "Cable-free entertainment wall", icon: "check" },
      { label: "HDMR moisture-resistant board", icon: "check" },
      { label: "Zoned ambient lighting circuits", icon: "check" },
      { label: "10-year hardware warranty", icon: "check" },
    ],
    pullQuote:
      "A living room should hold a quiet Tuesday and a full house on Diwali equally well.",
    sliderImages: [
      {
        src: "/Living_Room_Images/LR-9.jpeg",
        alt: "Modern seating area",
      },
      {
        src: "/Living_Room_Images/LR-11.jpeg",
        alt: "Wall-mounted entertainment center",
      },
      {
        src: "/Living_Room_Images/LR-14.jpeg",
        alt: "Minimalist coffee table setup",
      },
        {
        src: "/Living_Room_Images/LR-13.jpeg",
        alt: "Minimalist coffee table setup",
      },
        {
        src: "/Living_Room_Images/LR-12.jpeg",
        alt: "Minimalist coffee table setup",
      },
        {
        src: "/Living_Room_Images/LR-1.jpeg",
        alt: "Minimalist coffee table setup",
      },
        {
        src: "/Living_Room_Images/LR-2.jpeg",
        alt: "Minimalist coffee table setup",
      },
    ],
    philosophy: {
      heading: "Living Space Concepts",
      paragraphs: [
        "We focus on fluid traffic flow and open sightlines, so the room reads as one continuous space even when it's doing three jobs at once — TV nights, conversation, and passage to the rest of the home.",
        "Custom storage paneling hides cables, routers and remotes seamlessly behind the same finish as the walls, so nothing but the furniture and the light is on display.",
        "Seating is planned around actual conversation distance, not just the size of the sofa — close enough to talk without raising your voice, open enough to still feel spacious.",
      ],
    },
    specs: {
      "Material Grade": "High-Density Moisture Resistant (HDMR) board",
      "Completion Timeline": "4–6 weeks",
      "Warranty Period": "10 years hardware warranty",
    },
  },

  "kids-bedroom": {
    slug: "kids-bedroom",
    title: "Kid's Bedroom",
    subtitle: "Vibrant, adaptable, and completely safe",
    metaDescription:
      "Creative kid's bedroom interiors with built-in study spaces and safety features.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200",
      alt: "Child bedroom interior",
    },
    intro:
      "A child's room is the one interior that has to keep changing. We design spaces that grow with your children — combining playful study nooks, soft-edged furniture and clever toy storage that doesn't need replacing every two years.",
    highlights: [
      { label: "E0-grade eco plywood", icon: "check" },
      { label: "Rounded, anti-pinch hardware", icon: "check" },
      { label: "Low-VOC, child-safe finishes", icon: "check" },
      { label: "Modular, grows with your child", icon: "check" },
    ],
    pullQuote:
      "Furniture a child outgrows in a year is a design failure, not a phase.",
    sliderImages: [
      {
        src: "/Kids_bedroom/KB-1.jpeg",
        alt: "Bunk bed and desk unit",
      },
      {
        src: "/Kids_bedroom/KB-2.jpeg",
        alt: "Study area with bookshelves",
      },
      {
        src: "/Kids_bedroom/KB-4.jpeg",
        alt: "Study area with bookshelves",
      },
      {
        src: "/Kids_bedroom/KB-6.jpeg",
        alt: "Study area with bookshelves",
      },
      {
        src: "/Kids_bedroom/KB-5.jpeg",
        alt: "Study area with bookshelves",
      },
    ],
    philosophy: {
      heading: "Designing for Growth",
      paragraphs: [
        "Modular furniture that adapts from toddler years through high school — a cot converts to a single bed, a low shelf gains height as your child does.",
        "Non-toxic, low-VOC finishes are used exclusively throughout, including on hidden surfaces and drawer interiors that don't need to be seen to matter.",
        "Study corners are placed against natural light wherever the room allows, with storage sized for both books and the toys that haven't been outgrown yet.",
      ],
    },
    specs: {
      "Material Grade": "E0 Grade Eco-Plywood",
      "Safety Standards": "Rounded corners, anti-pinch hinges",
      "Completion Timeline": "4–5 weeks",
    },
  },

"safety-door": {
  slug: "safety-door",
  title: "Safety Doors",
  subtitle: "Uncompromising security wrapped in designer aesthetics",
  metaDescription:
    "Heavy-duty custom safety doors with smart lock integration and veneer accents.",
  heroImage: {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
    alt: "Modern wooden safety door entrance",
  },
  intro:
    "First impressions start at the entrance. Our safety doors carry multi-point locking systems and a reinforced steel core, without sacrificing the curb appeal of the home behind them.",
  highlights: [
    { label: "Galvanized steel core frame", icon: "check" },
    { label: "Multi-bolt locking mechanism", icon: "check" },
    { label: "Biometric smart-lock ready", icon: "check" },
    { label: "Solid teak veneer facing", icon: "check" },
  ],
  pullQuote:
    "The door is the one piece of furniture your home wears on the outside.",
  sliderImages: [
    {
      src: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1000",
      alt: "Designer main entryway safety door",
    },
    {
      src: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1000",
      alt: "Modern smart security door design",
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
      alt: "Solid wood entrance safety door",
    },
    ],
    philosophy: {
      heading: "Engineering Security",
      paragraphs: [
        "A heavy steel core framework is reinforced with premium teak or veneer facing, so the door reads as furniture from the inside and as a barrier from the outside.",
        "Seamless integration with biometric and smart locks is planned into the frame from day one, not retrofitted after installation.",
        "Every door is measured and hung to the specific frame it will live in, so the multi-bolt mechanism seats cleanly without the shimming that shortens a lock's life.",
      ],
    },
    specs: {
      "Core Material": "Galvanized Steel + Solid Teak Framing",
      "Security": "Multi-bolt locking mechanism",
      "Completion Timeline": "2–3 weeks",
    },
  },

  "floor-area": {
    slug: "floor-area",
    title: "Floor Area & Layouts",
    subtitle: "Precision flooring solutions and spatial zoning",
    metaDescription:
      "Italian marble, engineered hardwood, and large-format porcelain tile installations.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1200",
      alt: "Polished Italian marble floor",
    },
    intro:
      "Floor textures set the tone for every room above them. We handle flawless tile layout planning, underfloor heating coordination, and high-end marble polishing from slab selection to final seal.",
    highlights: [
      { label: "Laser-guided level flooring", icon: "check" },
      { label: "Italian marble & engineered oak", icon: "check" },
      { label: "3-year anti-stain guarantee", icon: "check" },
      { label: "Seamless joint execution", icon: "check" },
    ],
    pullQuote:
      "You feel a floor before you notice it — that's exactly the point.",
    sliderImages: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
        alt: "Seamless marble flooring",
      },
      {
        src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1000",
        alt: "Herringbone wooden flooring",
      },
    ],
    philosophy: {
      heading: "Precision Execution",
      paragraphs: [
        "Laser-guided leveling is used across every installation for perfectly flat, seamless joints — the difference between a floor that photographs well and one that stays flat for a decade.",
        "High-performance sealant application protects marble and stone from staining without dulling the natural shine of the material underneath.",
        "Layout planning accounts for slab veining and grain direction before a single tile is cut, so the pattern reads as one continuous surface across the room.",
      ],
    },
    specs: {
      "Materials": "Italian Marble, Engineered Oak, Vitrified Porcelain",
      "Completion Timeline": "3–4 weeks",
      "Warranty": "3-year anti-stain & polish guarantee",
    },
  },
};

export function getCategoryData(slug) {
  return portfolioData[slug] ?? null;
}

export function getAllCategorySlugs() {
  return Object.keys(portfolioData);
}

export default portfolioData;