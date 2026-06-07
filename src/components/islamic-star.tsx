export type IslamicStarProps = { className?: string };

export function IslamicStar({ className = "" }: IslamicStarProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <polygon
        points="60,4 72,42 112,42 80,66 92,104 60,80 28,104 40,66 8,42 48,42"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <polygon
        points="60,4 72,42 112,42 80,66 92,104 60,80 28,104 40,66 8,42 48,42"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        transform="rotate(36 60 60)"
      />
      <circle cx="60" cy="60" r="14" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}
