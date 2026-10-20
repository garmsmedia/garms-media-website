import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Editorial building blocks for long-form articles.
 * Copy rules (AGENTS.md): no em dashes in published article text.
 */

/** Numbered article section: big number column + readable text column. */
export function ArticleSection({
  id,
  number,
  title,
  tone = "paper",
  children,
}: {
  id: string;
  number: string;
  title: ReactNode;
  tone?: "paper" | "ink";
  children: ReactNode;
}) {
  const dark = tone === "ink";
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-24 ${dark ? "grain bg-ink text-paper" : "bg-paper text-ink"}`}
    >
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:py-28">
        <div className="min-w-0 lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <span
              aria-hidden="true"
              className={`display block text-[clamp(4rem,10vw,7.5rem)] leading-none ${dark ? "text-flame" : "text-ink/10"}`}
            >
              {number}
            </span>
          </div>
        </div>
        <div className="min-w-0 lg:col-span-9">
          <h2 id={`${id}-title`} className="display text-[clamp(2.25rem,5.5vw,4.25rem)]">
            <span className="sr-only">{number}. </span>
            {title}
          </h2>
          <div
            className={`mt-8 ${
              dark
                ? "[--prose:var(--color-ash)] [--strong:var(--color-paper)]"
                : "[--prose:var(--color-stone)] [--strong:var(--color-ink)]"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Body paragraph with comfortable measure. */
export function P({ children, lead = false }: { children: ReactNode; lead?: boolean }) {
  return (
    <p
      className={`mt-5 max-w-[66ch] leading-relaxed text-(--prose,var(--color-stone)) first:mt-0 ${
        lead ? "text-xl sm:text-2xl" : "text-lg"
      }`}
    >
      {children}
    </p>
  );
}

/** Strong inline emphasis that keeps the surrounding text colour readable. */
export function Em({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-(--strong,var(--color-ink))">{children}</strong>;
}

export function PullQuote({ children, tone = "paper" }: { children: ReactNode; tone?: "paper" | "ink" }) {
  return (
    <Reveal as="figure" className="my-12 max-w-[34ch]">
      <span aria-hidden="true" className="display block text-7xl leading-[0.6] text-flame">
        &ldquo;
      </span>
      <blockquote
        className={`mt-2 font-serif text-[clamp(1.9rem,4.2vw,2.9rem)] leading-[1.1] italic ${
          tone === "ink" ? "text-paper" : "text-ink"
        }`}
      >
        {children}
      </blockquote>
    </Reveal>
  );
}

/** "The goal:" callout that closes each numbered section. */
export function Goal({ children, tone = "paper" }: { children: ReactNode; tone?: "paper" | "ink" }) {
  return (
    <aside
      aria-label="The goal"
      className={`mt-10 flex max-w-[66ch] flex-col gap-3 border-l-4 border-flame p-6 sm:flex-row sm:items-center sm:gap-6 ${
        tone === "ink" ? "bg-paper/[0.06] text-paper" : "bg-ink text-paper"
      }`}
    >
      <span className="eyebrow shrink-0 text-flame">The goal</span>
      <p className="text-lg font-semibold leading-snug">{children}</p>
    </aside>
  );
}

/** Small "coming soon" notice. */
export function ComingSoonNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-8 flex max-w-[66ch] items-start gap-3 text-sm leading-relaxed text-stone">
      <span className="mt-px shrink-0 rounded-full border border-ink px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink">
        Coming soon
      </span>
      <em>{children}</em>
    </p>
  );
}

/** Bulleted list styled for the article. */
export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-6 max-w-[66ch] space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-lg leading-relaxed text-(--prose,var(--color-stone))">
          <span aria-hidden="true" className="mt-[0.7em] size-2 shrink-0 bg-flame" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Wide visual block that breaks out of the text column on large screens. */
export function Figure({
  children,
  caption,
  className = "",
}: {
  children: ReactNode;
  caption?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal as="figure" className={`my-12 ${className}`}>
      {children}
      {caption && <figcaption className="mt-4 max-w-[66ch] text-sm leading-relaxed text-(--prose,var(--color-stone))">{caption}</figcaption>}
    </Reveal>
  );
}
