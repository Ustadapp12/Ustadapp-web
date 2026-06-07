"use client";

import { useEffect, useRef, useState, type ComponentProps, type CSSProperties } from "react";

export type SlidingRevealProps = ComponentProps<"div"> & {
  direction?: "up" | "left" | "right";
  revealOnce?: boolean;
  rootMargin?: string;
  threshold?: number;
  delay?: string;
};

const PENDING: Record<NonNullable<SlidingRevealProps["direction"]>, string> = {
  up: "reveal-pending",
  left: "slide-left-pending",
  right: "slide-right-pending",
};
const VISIBLE: Record<NonNullable<SlidingRevealProps["direction"]>, string> = {
  up: "reveal-visible",
  left: "slide-left-visible",
  right: "slide-right-visible",
};

export function SlidingReveal({
  children,
  className = "",
  direction = "up",
  revealOnce = true,
  rootMargin = "0px 0px -8% 0px",
  threshold = 0.08,
  delay,
  style,
  ...props
}: SlidingRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    if (mq.matches) setVisible(true);

    const onMq = () => {
      setReduceMotion(mq.matches);
      if (mq.matches) setVisible(true);
    };
    mq.addEventListener("change", onMq);
    if (mq.matches) return () => mq.removeEventListener("change", onMq);

    const el = ref.current;
    if (!el) return () => mq.removeEventListener("change", onMq);

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (revealOnce) obs.disconnect();
          }
        }
      },
      { rootMargin, threshold }
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      mq.removeEventListener("change", onMq);
    };
  }, [revealOnce, rootMargin, threshold]);

  const motionClass = reduceMotion
    ? "reveal-visible-static"
    : visible
    ? VISIBLE[direction]
    : PENDING[direction];

  const combinedStyle: CSSProperties | undefined = delay
    ? { ...style, animationDelay: delay }
    : style;

  return (
    <div
      ref={ref}
      className={`${motionClass} ${className}`.trim()}
      style={combinedStyle}
      {...props}
    >
      {children}
    </div>
  );
}
