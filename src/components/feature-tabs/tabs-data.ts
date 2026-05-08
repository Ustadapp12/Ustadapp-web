import type { FeatureTab } from "./types";

export const FEATURE_TABS: FeatureTab[] = [
  {
    id: "font",
    label: "Choose font",
    label2: "Typography & readability",
    heading: "Start from Arabic letters and symbols",
    body: "Build accuracy with structured progression through letters, diacritics, and common letter combinations before moving to words and phrases.",
    imageClass: "from-[#d7dee8] to-[#c5d0dd]",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "surah",
    label: "Choose Surah",
    label2: "Structured memorization",
    heading: "Select a Surah and follow a guided path",
    body: "Work through Juz Amma or any Surah with clear milestones, grouped ayat, and revision checkpoints aligned to your pace.",
    imageClass: "from-[#d8ecd8] to-[#bfd9bf]",
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "repetition",
    label: "Custom repetition",
    label2: "Retention & review",
    heading: "Spaced repetition tailored to you",
    body: "Review prompts are timed to reinforce recall without overload, so memorization stays durable across weeks and months.",
    imageClass: "from-[#e4d9ef] to-[#d2c5e4]",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "alphabets",
    label: "Arabic Alphabets",
    label2: "Core foundations",
    heading: "Learn each letter with correct form and sound",
    body: "Cover all Arabic letters and their contextual shapes, with pronunciation guidance suitable for beginners and refreshers alike.",
    imageClass: "from-[#f0e0d2] to-[#e7d0bc]",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "symbols",
    label: "Symbols",
    label2: "Tajweed & notation",
    heading: "Understand Quranic symbols and pause marks",
    body: "Study tajweed notation and waqf rules systematically so recitation stays precise and respectful of meaning.",
    imageClass: "from-[#d8e6e7] to-[#c1d7d9]",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "duas",
    label: "Dua & supplications",
    label2: "Daily practice",
    heading: "Memorize essential duas with support",
    body: "Practice morning, evening, and prayer supplications with clear text, translation, and audio where available.",
    imageClass: "from-[#e7e2d6] to-[#d8d2c1]",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
  },
];
