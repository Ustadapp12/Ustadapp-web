"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import appstore from "@/assets/circles/appstore.svg";
import dp from "@/assets/dp.png";
import playstore from "@/assets/circles/playstore.svg";
import { StoreButton } from "@/components/store-button";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setHidden(y > lastScrollY.current && y > 80);
      lastScrollY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-[#05966A] transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex w-full items-center justify-between gap-2 px-4 py-3.5 sm:gap-4 md:px-10 lg:px-12">
        <Link href="/" className="flex items-center gap-2">
          <Image src={dp} alt={siteConfig.name} className="h-11 w-11 rounded-full md:h-9 md:w-9" priority />
          <span className="text-lg font-black text-white md:hidden">Ustad</span>
          <span className="hidden text-lg font-black text-white md:inline">{siteConfig.name}</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 md:hidden">
            <StoreButton icon={playstore} store="Google Play" compact />
            <StoreButton icon={appstore} store="App store" compact />
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <StoreButton icon={playstore} store="Google Play" />
            <StoreButton icon={appstore} store="App store" />
          </div>
          <Link
            href="#waitlist"
            className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-[#D8B565] to-[#C6A153] px-3 py-2 text-xs font-bold text-[#0d1b2a] active:scale-[0.97] sm:px-4 sm:py-2.5 sm:text-sm"
          >
            Get Early Access
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
