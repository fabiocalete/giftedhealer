"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface GlassButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

const sizeStyles = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function GlassButton({
  children,
  href,
  onClick,
  size = "md",
  className = "",
  disabled = false,
}: GlassButtonProps) {
  const classes = `btn-ortiz ${sizeStyles[size]} ${className}`;

  const content = <span>{children}</span>;

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
