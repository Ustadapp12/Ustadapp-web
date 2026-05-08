"use client";

import Link from "next/link";
import { useState } from "react";
import { NavbarMobileMenu } from "@/components/navbar-mobile-menu";
import { siteConfig } from "@/lib/site";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#feature-tabs", label: "Features" },
  { href: "#coming-soon", label: "Coming Soon" },
  { href: "#waitlist", label: "Waitlist" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="font-display text-2xl font-bold italic text-[#0d1b2a]">
          {siteConfig.name}
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="interactive-link text-sm font-semibold text-[#0d1b2a] transition hover:text-[#05966a]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#waitlist"
            className="gradient-btn rounded-full px-5 py-2 text-sm font-bold text-white hover:bg-[#047857]"
          >
            Signup
          </Link>
        </div>
        <button
          type="button"
          className="rounded-lg border border-[#c9d6e5] px-3 py-2 text-sm font-semibold text-[#0d1b2a] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>
      {isOpen ? <NavbarMobileMenu links={links} onNavigate={() => setIsOpen(false)} /> : null}
    </header>
  );
}
