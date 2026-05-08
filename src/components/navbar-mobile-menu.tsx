"use client";

import Link from "next/link";

export type NavbarMobileMenuProps = {
  links: readonly { href: string; label: string }[];
  onNavigate: () => void;
};

export function NavbarMobileMenu({ links, onNavigate }: NavbarMobileMenuProps) {
  return (
    <div className="nav-mobile-drawer border-t border-[#e8dec1] bg-white px-4 py-4 md:hidden">
      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-mobile-link rounded-lg px-3 py-2 text-sm font-medium text-[#0d1b2a] transition hover:bg-[#edf7f3] hover:text-[#05966a]"
            onClick={onNavigate}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#waitlist"
          onClick={onNavigate}
          className="gradient-btn mt-2 rounded-full px-4 py-2 text-center text-sm font-semibold text-white"
        >
          Signup
        </Link>
      </nav>
    </div>
  );
}
