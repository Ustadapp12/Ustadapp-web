"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

export function StoreBadge({ src, alt }: { src: StaticImageData; alt: string }) {
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
        className="flex h-9 w-[124px] items-center justify-center border-0 bg-transparent p-0 active:scale-[0.97]"
      >
        <Image src={src} alt={alt} className="h-full w-full object-contain" />
      </button>
      {show ? (
        <span className="absolute left-1/2 top-full z-20 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/90 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg">
          Coming soon!
        </span>
      ) : null}
    </span>
  );
}
