"use client";

import Link from "next/link";

export type NavbarMobileMenuProps = {
  links: readonly { href: string; label: string }[];
  onNavigate: () => void;
};

export function NavbarMobileMenu({ links, onNavigate }: NavbarMobileMenuProps) {
  return (
    <div className="nav-mobile-drawer border-t border-white/10 bg-[#0B1E33] px-4 py-4 md:hidden">
      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-mobile-link rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            onClick={onNavigate}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#waitlist"
          onClick={onNavigate}
          className="mt-2 rounded-full bg-gradient-to-r from-[#D8B565] to-[#C6A153] px-4 py-2 text-center text-sm font-bold text-[#0d1b2a]"
        >
          Get Early Access
        </Link>
      </nav>
    </div>
  );
}
