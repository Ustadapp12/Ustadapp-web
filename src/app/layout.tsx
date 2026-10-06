import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteChrome } from "@/components/site-chrome";
import { siteConfig } from "@/lib/site";
import "./globals.css";

// Self-hosted instead of next/font/google: the Google Fonts build-time fetch
// intermittently fails inside Vercel's Turbopack build sandbox ("next/font/google
// queries have exactly one entry"), which blocked a production deploy. These
// files are the exact same woff2s Google serves, just checked into the repo so
// the build never depends on reaching fonts.gstatic.com.
const nunito = localFont({
  src: "../assets/fonts/nunito/nunito-variable.woff2",
  // Nunito ships as a single variable file on Google Fonts (one wght axis,
  // 200-1000) — this range covers every weight class actually used on the site.
  weight: "400 900",
  variable: "--font-nunito",
  display: "swap",
});

const amiri = localFont({
  src: [
    { path: "../assets/fonts/amiri/amiri-400.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/amiri/amiri-700.woff2", weight: "700", style: "normal" },
  ],
  // Arabic subset only: Amiri here renders Quran verses and the Arabic
  // wordmark, never Latin text — Nunito already covers Latin everywhere else.
  variable: "--font-amiri",
  display: "swap",
});

const baloo2 = localFont({
  src: "../assets/fonts/baloo2/baloo2-variable.woff2",
  // Also a single variable file (wght axis); 500-800 covers the weights used.
  weight: "500 800",
  variable: "--font-baloo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "UstadApp - Gamified Quran Learning App",
    template: "%s | UstadApp",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  authors: [{ name: "UstadApp Team" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UstadApp - Learn Quran One Ayah at a Time",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UstadApp - Learn Quran One Ayah at a Time",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1B2A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${nunito.variable} ${amiri.variable} ${baloo2.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0F1B2A] text-white" suppressHydrationWarning>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
