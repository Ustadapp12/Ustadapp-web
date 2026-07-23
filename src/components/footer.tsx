import Image from "next/image";
import Link from "next/link";
import appstore from "@/assets/circles/appstore.svg";
import dp from "@/assets/dp.png";
import playstore from "@/assets/circles/playstore.svg";
import faceIcon from "@/assets/circles/socials/face.png";
import instaIcon from "@/assets/circles/socials/insta.png";
import linkIcon from "@/assets/circles/socials/link.png";
import xIcon from "@/assets/circles/socials/x.png";
import { IslamicStar } from "@/components/islamic-star";
import { StoreButton } from "@/components/store-button";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Socials",
    links: [
      { href: "https://x.com/ustadapp", label: "X" },
      { href: "https://www.instagram.com/ustadapp_official/", label: "Instagram" },
      { href: "https://www.linkedin.com/company/ustadapp/posts/?feedView=all", label: "LinkedIn" },
      { href: "https://facebook.com/ustadapp", label: "Facebook" },
    ],
  },
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#journey", label: "How it Works" },
      { href: "#", label: "Hiring" },
      { href: "#", label: "Roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About" },
      { href: "#", label: "Contact" },
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
    ],
  },
];

const socialGlyphs = [
  { href: "https://x.com/ustadapp", label: "X", icon: xIcon },
  { href: "https://www.instagram.com/ustadapp_official/", label: "Instagram", icon: instaIcon },
  { href: "https://www.linkedin.com/company/ustadapp/posts/?feedView=all", label: "LinkedIn", icon: linkIcon },
  { href: "https://facebook.com/ustadapp", label: "Facebook", icon: faceIcon },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0B1E18] px-6 pb-24 pt-14 text-white md:px-16 md:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <IslamicStar className="absolute -right-14 top-8 h-56 w-56 text-white/5 spin-slow" />
        <IslamicStar className="absolute -left-14 bottom-8 h-48 w-48 text-white/5 spin-slow [animation-direction:reverse] [animation-delay:8s]" />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-[25%] justify-center">
          <span className="whitespace-nowrap text-[18vw] font-black leading-none text-[#2fd88f]/25 sm:text-[15vw]">
            UstadApp
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mb-6 flex flex-col items-center gap-10 text-center sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-between sm:text-left">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2fd88f]/30 px-3 py-1.5">
                <Image src={dp} alt={siteConfig.name} className="h-6 w-6 rounded-full" />
                <span className="text-sm font-bold text-white">{siteConfig.name}</span>
              </div>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
                Making Quran learning accessible, engaging, and effective for every learner.
              </p>

              <div className="mt-5 flex flex-row justify-center gap-2 sm:justify-start">
                <StoreButton icon={playstore} store="Google Play" />
                <StoreButton icon={appstore} store="App store" />
              </div>
            </div>

            <p className="mt-4 text-xs text-white/40">Launching soon, join on the waitlist</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/40 sm:mt-auto">Located at Hatch 8, NSTP H-12</p>
          </div>

          <div className="flex flex-col items-center sm:items-stretch">
            <div className="grid grid-cols-3 gap-6 sm:gap-10">
              {columns.map((column) => (
                <div key={column.title} className="space-y-2 text-center text-xs sm:space-y-3 sm:text-left sm:text-sm">
                  <p className="text-[0.65rem] font-black uppercase tracking-widest text-white/40 sm:text-xs">{column.title}</p>
                  {column.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="interactive-link block text-white/70 hover:text-[#2fd88f]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-4 flex w-full justify-center gap-3 sm:mt-auto sm:justify-end">
              {socialGlyphs.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 p-1.5 hover:border-[#2fd88f]"
                >
                  <Image src={social.icon} alt="" aria-hidden className="h-full w-full object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/*
        <div className="flex flex-col items-center gap-2 text-center">
          <p lang="ar" className="arabic max-w-md text-sm italic text-white/60">
            &ldquo;Read in the name of your Lord who created&rdquo; — Surah Al-Alaq 96:1
          </p>
          <p className="text-xs text-white/40">© 2026 UstadApp. Built with love for every Quran learner.</p>
        </div>
        */}
      </div>
    </footer>
  );
}
