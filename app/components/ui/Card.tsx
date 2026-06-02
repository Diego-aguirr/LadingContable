import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

interface CardSlotProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardSlotProps) {
  return (
    <div className={`px-6 pt-6 pb-2 ${className}`.trim()}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }: CardSlotProps) {
  return (
    <div className={`px-6 py-4 ${className}`.trim()}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "" }: CardSlotProps) {
  return (
    <div className={`px-6 pt-2 pb-6 ${className}`.trim()}>
      {children}
    </div>
  );
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  const base = "rounded-lg bg-white border border-border shadow-sm";
  const hoverEffect = hover
    ? "transition-shadow hover:shadow-md"
    : "";

  return (
    <div className={`${base} ${hoverEffect} ${className}`.trim()}>
      {children}
    </div>
  );
}
