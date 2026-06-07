import Link from "next/link";
import { FooterSubscribeForm } from "@/components/footer-subscribe-form";
import { IslamicStar } from "@/components/islamic-star";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-100 bg-[#faf8f2] px-6 pb-10 pt-16 md:px-16">
      {/* Very subtle Islamic star decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <IslamicStar className="absolute -right-14 top-8 h-56 w-56 text-[#05966a]/6 spin-slow" />
        <IslamicStar className="absolute -left-14 bottom-8 h-48 w-48 text-[#05966a]/5 spin-slow [animation-direction:reverse] [animation-delay:8s]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Brand header */}
        <div className="mb-10 border-b border-gray-200 pb-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-baseline gap-2.5">
                <span lang="ar" className="arabic text-4xl font-black text-[#004a36]">{siteConfig.arabicName}</span>
                <span className="text-sm font-medium text-gray-400">{siteConfig.name}</span>
              </div>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-500">
                The fun, smart, and effective way to memorize Quran. Built for children and adults.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Stay updated</p>
              <FooterSubscribeForm />
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="space-y-3 text-sm">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400">Product</p>
            {[
              { href: "#feature-tabs", label: "Features" },
              { href: "#how-it-works", label: "How it works" },
              { href: "#waitlist", label: "Waitlist" },
              { href: "#coming-soon", label: "Coming Soon" },
            ].map(({ href, label }) => (
              <Link key={label} href={href} className="interactive-link block text-gray-600 hover:text-[#05966a]">
                {label}
              </Link>
            ))}
          </div>

          <div className="space-y-3 text-sm">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400">About</p>
            {[
              { href: "#waitlist", label: "Contact" },
              { href: "#feature-tabs", label: "Feature List" },
              { href: "#how-it-works", label: "Step by step" },
            ].map(({ href, label }) => (
              <Link key={label} href={href} className="interactive-link block text-gray-600 hover:text-[#05966a]">
                {label}
              </Link>
            ))}
          </div>

          <div className="space-y-3 text-sm">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400">Connect</p>
            {[
              { href: "https://instagram.com/ustadapp", label: "Instagram" },
              { href: "https://x.com/ustadapp", label: "X (Twitter)" },
              { href: "https://linkedin.com/company/ustadapp", label: "LinkedIn" },
              { href: "https://youtube.com/@ustadapp", label: "YouTube" },
            ].map(({ href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="interactive-link block text-gray-600 hover:text-[#05966a]">
                {label}
              </a>
            ))}
          </div>

          <div className="space-y-3 text-sm">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400">Legal</p>
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((item) => (
              <Link key={item} href="#" className="interactive-link block text-gray-600 hover:text-[#05966a]">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6">
          <a
            href="https://maps.google.com/?q=National+Science+and+Technology+Park+NSTP+NUST+H-12+Islamabad+Pakistan+44000"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-gray-400 hover:text-[#05966a]"
          >
            NSTP, NUST, H-12 Islamabad
          </a>
          <p className="text-xs text-gray-400">© 2026 Ustad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
