import type { Metadata } from "next";
import { DM_Sans, Amiri } from "next/font/google";
import { CursorFollower } from "@/components/cursor-follower";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Ustad - Gamified Quran Learning App",
    template: "%s | Ustad",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: "Ustad Team" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ustad - Learn Quran One Ayah at a Time",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ustad - Learn Quran One Ayah at a Time",
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
      className={`${dmSans.variable} ${amiri.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#faf8f2] text-[#1f2f28]">
        <CursorFollower />
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
