export type PulseRingProps = {
  className?: string;
};

export function PulseRing({ className = "" }: PulseRingProps) {
  return (
    <span
      aria-hidden
      className={`pulse-ring pointer-events-none absolute inset-0 rounded-[inherit] ${className}`.trim()}
    />
  );
}
