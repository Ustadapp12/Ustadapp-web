"use client";

import { useEffect, useRef, type KeyboardEvent } from "react";
import type { FeatureTab } from "./types";

export type FeatureTabBarProps = {
  tabs: FeatureTab[];
  activeIndex: number;
  onChange: (index: number) => void;
};

export function FeatureTabBar({ tabs, activeIndex, onChange }: FeatureTabBarProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const btn = track?.querySelector<HTMLButtonElement>(`[data-tab-index="${activeIndex}"]`);
    btn?.scrollIntoView({ inline: "nearest", block: "nearest", behavior: "smooth" });
  }, [activeIndex]);

  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      onChange(Math.min(index + 1, tabs.length - 1));
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      onChange(Math.max(index - 1, 0));
    } else if (e.key === "Home") {
      e.preventDefault();
      onChange(0);
    } else if (e.key === "End") {
      e.preventDefault();
      onChange(tabs.length - 1);
    }
  };

  return (
    <div ref={trackRef} className="feature-tab-table-wrap" role="tablist" aria-label="Product capabilities">
      <div className="feature-tab-table grid grid-cols-3 md:grid-cols-6">
        {tabs.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`feature-tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={`feature-tab-panel-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              data-tab-index={index}
              onClick={() => onChange(index)}
              onKeyDown={(e) => onTabKeyDown(e, index)}
              className={`feature-tab-table-cell ${isActive ? "feature-tab-table-cell-active" : ""}`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
