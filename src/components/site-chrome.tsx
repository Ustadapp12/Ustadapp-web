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

// Routes that keep the normal header/footer but drop the scroll-progress
// dots: SectionDots tracks the landing page's #hero/#features/#journey/
// #waitlist anchors, none of which exist on a plain reading page, so the
// dots would render but never reflect real scroll position.
const NO_DOTS_ROUTES = ["/privacy", "/terms"];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBare = BARE_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
  const showDots = !NO_DOTS_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));

  if (isBare) {
    return <main className="flex flex-1 flex-col">{children}</main>;
  }

  return (
    <>
      <CursorFollower />
      <Navbar />
      {showDots && <SectionDots />}
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
