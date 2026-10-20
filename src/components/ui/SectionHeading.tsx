import type { ReactNode } from "react";

/**
 * Standard section header: small numbered eyebrow + oversized Anton headline.
 * Every section uses exactly one <h2> through this component to keep the
 * heading hierarchy consistent (h1 lives in the hero only).
 */
export function SectionHeading({
  index,
  eyebrow,
  id,
  children,
  className = "",
  eyebrowClassName = "text-flame",
}: {
  index: string;
  eyebrow: string;
  id: string;
  children: ReactNode;
  className?: string;
  eyebrowClassName?: string;
}) {
  return (
    <header className={className}>
      <p className={`eyebrow mb-5 flex items-center gap-3 ${eyebrowClassName}`}>
        <span aria-hidden="true">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-current" />
        <span>{eyebrow}</span>
      </p>
      <h2 id={id} className="display text-[clamp(2.75rem,8vw,6.5rem)]">
        {children}
      </h2>
    </header>
  );
}
