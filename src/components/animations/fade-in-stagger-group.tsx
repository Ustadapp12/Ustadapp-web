import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ReactNode,
} from "react";

type StaggerChildProps = {
  className?: string;
  style?: CSSProperties;
};

export type FadeInStaggerGroupProps = {
  children: ReactNode;
  staggerMs?: number;
  /** Use `contents` so flex/grid parents lay out children as direct items */
  displayContents?: boolean;
  className?: string;
};

export function FadeInStaggerGroup({
  children,
  staggerMs = 90,
  displayContents = true,
  className = "",
}: FadeInStaggerGroupProps) {
  let index = 0;

  const wrapperClass = displayContents ? `contents ${className}`.trim() : className;

  return (
    <div className={wrapperClass}>
      {Children.map(children, (child) => {
        if (!isValidElement<StaggerChildProps>(child)) {
          return child;
        }

        const delay = index * staggerMs;
        index += 1;

        const nextClass = [child.props.className, "fade-in-stagger"].filter(Boolean).join(" ");
        const nextStyle: CSSProperties = {
          ...child.props.style,
          animationDelay: `${delay}ms`,
        };

        return cloneElement(child, {
          className: nextClass,
          style: nextStyle,
        } as Partial<StaggerChildProps>);
      })}
    </div>
  );
}
