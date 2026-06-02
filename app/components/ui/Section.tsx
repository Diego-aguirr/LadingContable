import type { ReactNode } from "react";

type SectionBackground = "white" | "alt" | "primary";

interface SectionProps {
  id?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
  background?: SectionBackground;
  className?: string;
}

const backgroundStyles: Record<SectionBackground, string> = {
  white: "bg-bg text-text",
  alt: "bg-bg-alt text-text",
  primary: "bg-primary text-white",
};

export default function Section({
  id,
  children,
  title,
  subtitle,
  background = "white",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
