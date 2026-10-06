"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

export function StoreButton({
  icon,
  store,
  href,
  compact = false,
}: {
  icon: StaticImageData;
  store: string;
  // When set, the app is live on this store and the button links to it;
  // otherwise it shows a "Coming soon" hint on click.
  href?: string;
  compact?: boolean;
}) {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(true);
    setTimeout(() => setShow(false), 1800);
  }

  const className = compact
    ? "flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-black active:scale-[0.97]"
    : "flex h-11 items-center gap-2 rounded-xl border border-white/15 bg-black px-3 active:scale-[0.97]";

  const content = (
    <>
      <Image src={icon} alt="" aria-hidden className="h-6 w-6 shrink-0" />
      {compact ? null : (
        <span className="flex flex-col leading-none">
          <span className="text-[9px] font-medium text-white/70">
            {href ? "Download on" : "Coming soon on"}
          </span>
          <span className="mt-0.5 text-[13px] font-bold text-white">{store}</span>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Download UstadApp on ${store}`}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={handleClick}
        suppressHydrationWarning
        aria-label={compact ? `Coming soon on ${store}` : undefined}
        className={className}
      >
        {content}
      </button>
      {show ? (
        <span className="absolute left-1/2 top-full z-20 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/90 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg">
          Coming soon!
        </span>
      ) : null}
    </span>
  );
}
