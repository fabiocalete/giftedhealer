import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export function Section({
  id,
  children,
  className = "",
  fullHeight = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full ${fullHeight ? "min-h-screen" : "min-h-[50vh]"} ${className}`}
    >
      {children}
    </section>
  );
}
