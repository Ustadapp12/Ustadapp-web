"use client";

import { usePathname } from "next/navigation";
import { CursorFollower } from "@/components/cursor-follower";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SectionDots } from "@/components/section-dots";

// Routes that render as standalone full-viewport experiences with no site
// header/footer/scroll-dots/custom cursor around them (e.g. the sticker QR
// welcome page).
const BARE_ROUTES = ["/hello"];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBare = BARE_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));

  if (isBare) {
    return <main className="flex flex-1 flex-col">{children}</main>;
  }

  return (
    <>
      <CursorFollower />
      <Navbar />
      <SectionDots />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
