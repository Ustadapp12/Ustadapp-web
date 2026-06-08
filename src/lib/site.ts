import type { Metadata } from "next";

export const siteConfig = {
  name: "Ustad",
  arabicName: "أُستَاذ",
  description:
    "Gamified Quranic learning from Alif to full Surahs. Learn, recite, and remember with daily lessons, streaks, and AI-powered pronunciation coaching.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ustadapp.com",
  keywords: [
    "learn quran online free",
    "quran memorisation app",
    "arabic alphabet for beginners",
    "duolingo for quran",
    "tajweed app for beginners",
    "surah memorisation app",
    "quran app for kids",
    "quran learning app",
    "memorize quran online",
    "islamic learning app",
    "quran recitation feedback",
    "quran memorization with ai",
    "quran for beginners",
    "quran app free",
    "gamified quran learning",
  ],
};

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
}: MetadataOptions): Metadata {
  const absoluteUrl = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
