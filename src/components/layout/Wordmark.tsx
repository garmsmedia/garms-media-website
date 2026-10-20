/**
 * Typographic wordmark. Replace with an SVG logo later if GARMS creates one —
 * keep the accessible name ("GARMS MEDIA") on the surrounding link.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 leading-none ${className}`}>
      <span className="display text-2xl tracking-wide lg:text-[1.7rem]">GARMS</span>
      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-flame">
        Media
      </span>
    </span>
  );
}
