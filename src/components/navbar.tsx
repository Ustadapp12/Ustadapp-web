"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import appstore from "@/assets/appstore-trimmed.png";
import dp from "@/assets/dp.png";
import playstore from "@/assets/playstore-trimmed.png";
import { NavbarMobileMenu } from "@/components/navbar-mobile-menu";
import { StoreBadge } from "@/components/store-badge";
import { siteConfig } from "@/lib/site";

const links = [
  { href: "#features", label: "Features" },
  { href: "#journey", label: "Journey" },
  { href: "#waitlist", label: "Waitlist" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1E33]">
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-3.5 md:px-10 lg:px-12">
        <Link href="/" className="flex items-center gap-2 justify-self-start">
          <Image src={dp} alt={siteConfig.name} className="h-9 w-9 rounded-full" priority />
          <span className="text-lg font-black text-white">{siteConfig.name}</span>
        </Link>

        <nav className="hidden justify-self-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="interactive-link text-sm font-semibold text-white/80 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <StoreBadge src={playstore} alt="Coming soon on Google Play" />
            <StoreBadge src={appstore} alt="Coming soon on the App Store" />
            <Link
              href="#waitlist"
              className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#D8B565] to-[#C6A153] px-4 py-2.5 text-sm font-bold text-[#0d1b2a] active:scale-[0.97]"
            >
              Get Early Access
              <span aria-hidden>→</span>
            </Link>
          </div>

          <button
            type="button"
            className="rounded-lg border border-white/20 px-3 py-2 text-sm font-semibold text-white md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>
      {isOpen ? <NavbarMobileMenu links={links} onNavigate={() => setIsOpen(false)} /> : null}
    </header>
  );
}
