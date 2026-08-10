import type { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  variant?: "orange" | "forest" | "gradient";
  className?: string;
}

export function GradientText({
  children,
  variant = "orange",
  className = "",
}: GradientTextProps) {
  if (variant === "gradient") {
    return (
      <span
        className={`from-orange-accent via-gold-warm to-forest-light bg-gradient-to-r bg-clip-text text-transparent ${className}`}
      >
        {children}
      </span>
    );
  }

  const colorClass =
    variant === "forest" ? "text-forest-light" : "text-orange-accent";

  return <span className={`${colorClass} ${className}`}>{children}</span>;
}
