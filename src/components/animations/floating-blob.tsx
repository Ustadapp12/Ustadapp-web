export type FloatingBlobProps = {
  className?: string;
  variant?: "light" | "mint" | "gold";
};

const variantClass: Record<NonNullable<FloatingBlobProps["variant"]>, string> = {
  light: "floating-blob-light",
  mint: "floating-blob-mint",
  gold: "floating-blob-gold",
};

export function FloatingBlob({ className = "", variant = "light" }: FloatingBlobProps) {
  return (
    <div
      aria-hidden
      className={`floating-blob pointer-events-none absolute rounded-full blur-2xl ${variantClass[variant]} ${className}`.trim()}
    />
  );
}
