"use client";

import { useState } from "react";

export function ComingSoonLink({ label }: { label: string }) {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(true);
    setTimeout(() => setShow(false), 1800);
  }

  return (
    <span className="relative block">
      <button
        type="button"
        onClick={handleClick}
        suppressHydrationWarning
        className="interactive-link block text-white/70 hover:text-[#2fd88f]"
      >
        {label}
      </button>
      {show ? (
        <span className="absolute left-1/2 top-full z-20 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/90 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg">
          Coming soon!
        </span>
      ) : null}
    </span>
  );
}
