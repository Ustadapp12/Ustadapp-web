import type { Metadata } from "next";
import { FeatureOrbit } from "@/components/feature-orbit";
import { FinalCta } from "@/components/final-cta";
import { HeroSection } from "@/components/hero-section";
import { LearningJourney } from "@/components/learning-journey";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Ustad – Learn Quran with AI | Free Gamified Quran App",
  description: "Learn and memorize Quran step by step with AI recitation feedback, gamified lessons, streaks, and smart revision. Free Quran app for children and adults.",
  path: "/",
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: [
      "https://instagram.com/ustadapp",
      "https://x.com/ustadapp",
      "https://linkedin.com/company/ustadapp",
      "https://youtube.com/@ustadapp",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Ustad – Quran Memorization App",
    applicationCategory: "EducationalApplication",
    description:
      "Learn and memorize Quran step by step with AI recitation feedback, gamified lessons, streaks, and smart revision. Free for children and adults.",
    url: siteConfig.url,
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="overflow-hidden bg-gradient-to-b from-[#05966A] via-[#0F1B2A] via-45% to-[#0F1B2A]">
        <HeroSection />
        <FeatureOrbit />
      </div>
      <LearningJourney />
      <FinalCta />
    </>
  );
}
