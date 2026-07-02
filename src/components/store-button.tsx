"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

export function StoreButton({
  icon,
  store,
  compact = false,
}: {
  icon: StaticImageData;
  store: string;
  compact?: boolean;
}) {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(true);
    setTimeout(() => setShow(false), 1800);
  }

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={handleClick}
        className={
          compact
            ? "flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-black active:scale-[0.97]"
            : "flex h-11 items-center gap-2 rounded-xl border border-white/15 bg-black px-3 active:scale-[0.97]"
        }
      >
        <Image src={icon} alt="" aria-hidden className="h-6 w-6 shrink-0" />
        {compact ? null : (
          <span className="flex flex-col leading-none">
            <span className="text-[9px] font-medium text-white/70">Coming soon on</span>
            <span className="mt-0.5 text-[13px] font-bold text-white">{store}</span>
          </span>
        )}
      </button>
      {show ? (
        <span className="absolute left-1/2 top-full z-20 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/90 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg">
          Coming soon!
        </span>
      ) : null}
    </span>
  );
}
