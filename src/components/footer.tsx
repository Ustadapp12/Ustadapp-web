import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white px-6 pb-8 pt-16 md:px-16">
      <div className="mx-auto mb-12 grid w-full max-w-6xl grid-cols-2 gap-10 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold italic text-[#0d1b2a]">Ustad</p>
          <p className="mt-3 text-xs leading-relaxed text-gray-600">
            Get updates on new features and launch news.
          </p>
          <div className="mt-4 flex gap-2">
            <input
              placeholder="Your email"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-[#05966a]"
            />
            <button className="rounded-lg bg-[#0d1b2a] px-4 py-2 text-xs font-bold text-white">Subscribe</button>
          </div>
          <p className="mt-2 text-[10px] text-gray-500">
            By subscribing you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs font-black uppercase tracking-widest text-[#0d1b2a]">Product</p>
          <Link href="#feature-tabs" className="interactive-link block text-gray-700 hover:text-[#05966a]">
            Features
          </Link>
          <Link href="#how-it-works" className="interactive-link block text-gray-700 hover:text-[#05966a]">
            How it works
          </Link>
          <Link href="#waitlist" className="interactive-link block text-gray-700 hover:text-[#05966a]">
            Waitlist
          </Link>
          <Link href="#coming-soon" className="interactive-link block text-gray-700 hover:text-[#05966a]">
            Coming Soon
          </Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs font-black uppercase tracking-widest text-[#0d1b2a]">About</p>
          <Link href="#waitlist" className="interactive-link block text-gray-700 hover:text-[#05966a]">
            Contact
          </Link>
          <Link href="#feature-tabs" className="interactive-link block text-gray-700 hover:text-[#05966a]">
            Feature List
          </Link>
          <Link href="#how-it-works" className="interactive-link block text-gray-700 hover:text-[#05966a]">
            Step by step
          </Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs font-black uppercase tracking-widest text-[#0d1b2a]">Feedback</p>
          <a href="https://instagram.com/ustadapp" target="_blank" rel="noreferrer" className="interactive-link block text-gray-700 hover:text-[#05966a]">
            Instagram
          </a>
          <a href="https://x.com/ustadapp" target="_blank" rel="noreferrer" className="interactive-link block text-gray-700 hover:text-[#05966a]">
            X
          </a>
          <a href="https://linkedin.com/company/ustadapp" target="_blank" rel="noreferrer" className="interactive-link block text-gray-700 hover:text-[#05966a]">
            LinkedIn
          </a>
          <a href="https://youtube.com/@ustadapp" target="_blank" rel="noreferrer" className="interactive-link block text-gray-700 hover:text-[#05966a]">
            YouTube
          </a>
          <p className="pt-2 text-xs text-gray-600">© 2026 UstadhApp. All rights reserved.</p>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
        <div className="flex flex-wrap gap-6">
          <Link href="#" className="text-xs text-gray-600 hover:text-[#05966a]">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs text-gray-600 hover:text-[#05966a]">
            Terms of Service
          </Link>
          <a href="#" className="text-xs text-gray-600 hover:text-[#05966a]">
            Cookies Settings
          </a>
          <a href="#" className="text-xs text-gray-600 hover:text-[#05966a]">
            Cookies Policy
          </a>
        </div>
        <a
          className="text-xs text-gray-600 hover:text-[#05966a]"
          href="https://maps.google.com/?q=National+Science+and+Technology+Park+NSTP+NUST+H-12+Islamabad+Pakistan+44000"
          target="_blank"
          rel="noreferrer"
        >
          NSTP, NUST, H-12 Islamabad
        </a>
      </div>
    </footer>
  );
}
