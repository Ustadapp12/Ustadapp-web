import type { Metadata } from "next";

export const siteConfig = {
  name: "UstadApp",
  arabicName: "أُستَاذ",
  description:
    "Gamified Quranic learning from Alif to full Surahs. Learn, recite, and remember with daily lessons, streaks, and AI-powered pronunciation coaching.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ustadapp.com",
  whatsappCommunityUrl: "https://chat.whatsapp.com/FM4p2nZu94XJ5NGg9qKXd2",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.ustadapp",
  contactEmail: "sana@ustadapp.com",
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
  // next.config.ts sets trailingSlash: true, so every non-root route is
  // served as /path/index.html — canonical and OG URLs must match exactly,
  // or crawlers take an extra redirect hop to reach the trailing-slash URL.
  const normalizedPath = path === "/" || path.endsWith("/") ? path : `${path}/`;
  const absoluteUrl = `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: normalizedPath,
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
