import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={[
        "glass-panel relative rounded-2xl p-6 md:p-8",
        hover &&
          "hover:border-glass-border-hover hover:glass-shadow-hover transition-all duration-300 hover:-translate-y-1",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Rim light */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
