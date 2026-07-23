import type { Metadata } from "next";
import { Nunito, Amiri, Baloo_2 } from "next/font/google";
import { SiteChrome } from "@/components/site-chrome";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

const baloo2 = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
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
      <body className="min-h-full bg-[#0F1B2A] text-white">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
