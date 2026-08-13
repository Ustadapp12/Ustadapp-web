"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import appstore from "@/assets/circles/appstore.svg";
import logo from "@/assets/logo.png";
import playstore from "@/assets/circles/playstore.svg";
import whatsappIcon from "@/assets/whatsapp.svg";
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
      <div className="flex w-full flex-nowrap items-center justify-between gap-2 px-4 py-3.5 sm:gap-4 md:px-10 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center">
          <Image src={logo} alt={siteConfig.name} priority className="h-9 w-auto sm:h-10 md:h-11 lg:h-12" />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 md:hidden">
            <StoreButton icon={playstore} store="Google Play" compact />
            <StoreButton icon={appstore} store="Apple Store" compact />
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <StoreButton icon={playstore} store="Google Play" />
            <StoreButton icon={appstore} store="Apple Store" />
          </div>
          <a
            href={siteConfig.whatsappCommunityUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-[#D8B565] to-[#C6A153] px-[clamp(0.65rem,3vw,1rem)] py-[clamp(0.45rem,1.6vw,0.625rem)] text-[clamp(0.68rem,2.6vw,0.875rem)] font-bold text-[#0d1b2a] active:scale-[0.97]"
          >
            <Image src={whatsappIcon} alt="" aria-hidden className="h-[1.15em] w-[1.15em] shrink-0" />
            Join Community
          </a>
        </div>
      </div>
    </header>
  );
}
