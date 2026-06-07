import type { FeatureTab } from "./types";

export const FEATURE_TABS: FeatureTab[] = [
  {
    id: "font",
    label: "Choose font",
    label2: "Typography & readability",
    heading: "Start from Arabic letters and symbols",
    body: "Build accuracy with structured progression through letters, diacritics, and common letter combinations before moving to words and phrases.",
    imageClass: "from-[#d7dee8] to-[#c5d0dd]",
    // Quran page on black textile — clear Arabic script for typography focus
    image:
      "https://images.unsplash.com/photo-1589462135796-2b46e4bdd7fe?auto=format&fit=crop&w=1400&q=80",
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
    // Quran on green prayer mat (confirmed from unsplash.com/photos/2HgHr60mWVo)
    image:
      "https://images.unsplash.com/photo-1616422840391-fa670d4b2ae7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "alphabets",
    label: "Arabic Alphabets",
    label2: "Core foundations",
    heading: "Learn each letter with correct form and sound",
    body: "Cover all Arabic letters and their contextual shapes, with pronunciation guidance suitable for beginners and refreshers alike.",
    imageClass: "from-[#f0e0d2] to-[#e7d0bc]",
    // Open Quran pages — verified renders correctly
    image:
      "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "symbols",
    label: "Symbols",
    label2: "Tajweed & notation",
    heading: "Understand Quranic symbols and pause marks",
    body: "Study tajweed notation and waqf rules systematically so recitation stays precise and respectful of meaning.",
    imageClass: "from-[#d8e6e7] to-[#c1d7d9]",
    // Black and gold Quran — ornate tajweed notation (confirmed from unsplash.com/photos/pEHjWZFhyN8)
    image:
      "https://images.unsplash.com/photo-1624345690118-d303350f7445?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "duas",
    label: "Dua & supplications",
    label2: "Daily practice",
    heading: "Memorize essential duas with support",
    body: "Practice morning, evening, and prayer supplications with clear text, translation, and audio where available.",
    imageClass: "from-[#e7e2d6] to-[#d8d2c1]",
    // Person holding Quran with rosary — supplication/dua (confirmed from unsplash.com/photos/Dby_80zzmNc)
    image:
      "https://images.unsplash.com/photo-1720873160840-d5934323bb23?auto=format&fit=crop&w=1400&q=80",
  },
];
