"use client";

import { useEffect, useRef, useState, type ComponentProps } from "react";

export type RevealOnScrollProps = ComponentProps<"div"> & {
  revealOnce?: boolean;
  rootMargin?: string;
  threshold?: number;
};

export function RevealOnScroll({
  children,
  className = "",
  revealOnce = true,
  rootMargin = "0px 0px -8% 0px",
  threshold = 0.08,
  ...props
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    if (mq.matches) {
      setVisible(true);
    }

    const onMq = () => {
      setReduceMotion(mq.matches);
      if (mq.matches) {
        setVisible(true);
      }
    };
    mq.addEventListener("change", onMq);

    if (mq.matches) {
      return () => mq.removeEventListener("change", onMq);
    }

    const el = ref.current;
    if (!el) {
      return () => mq.removeEventListener("change", onMq);
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (revealOnce) {
              obs.disconnect();
            }
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

  const motion = reduceMotion ? "reveal-visible-static" : visible ? "reveal-visible" : "reveal-pending";

  return (
    <div ref={ref} className={`${motion} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
