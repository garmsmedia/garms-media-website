import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Building blocks for GARMS Playbook guides (/insights/<slug>).
 * Colours come from the --surface / --prose / --strong / --rule / --panel variables
 * set by <GuideSection>, so every block reads well on paper and ink.
 * Paragraphs, lists and emphasis reuse components/article/ArticleParts.
 */

const tones = {
  paper:
    "bg-paper text-ink [--surface:var(--color-paper)] [--prose:var(--color-stone)] [--strong:var(--color-ink)] [--rule:color-mix(in_srgb,var(--color-ink)_15%,transparent)] [--panel:color-mix(in_srgb,var(--color-ink)_4%,transparent)]",
  ink: "grain bg-ink text-paper [--surface:var(--color-ink)] [--prose:var(--color-ash)] [--strong:var(--color-paper)] [--rule:color-mix(in_srgb,var(--color-paper)_15%,transparent)] [--panel:color-mix(in_srgb,var(--color-paper)_6%,transparent)]",
};

export type Tone = keyof typeof tones;

/** Numbered guide section: number column + text column with an H2 question. */
export function GuideSection({
  id,
  number,
  title,
  tone,
  children,
}: {
  id: string;
  number?: string;
  title: ReactNode;
  tone: Tone;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-24 ${tones[tone]}`}>
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="min-w-0 lg:col-span-3">
          {number && (
            <span
              aria-hidden="true"
              className={`display block text-[clamp(3.5rem,8vw,6rem)] leading-none lg:sticky lg:top-28 ${
                tone === "ink" ? "text-flame" : "text-ink/10"
              }`}
            >
              {number}
            </span>
          )}
        </div>
        <div className="min-w-0 lg:col-span-9">
          <h2 id={`${id}-title`} className="display text-[clamp(2rem,4.6vw,3.5rem)]">
            {title}
          </h2>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

const linkClass =
  "font-semibold text-(--strong,var(--color-ink)) underline decoration-flame decoration-2 underline-offset-4 hover:decoration-(--strong,var(--color-ink))";

/** Contextual link to another page on this site. */
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

/** Link to an external source (opens in a new tab). */
export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/** Short subheading inside a section (H3). */
export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-10 text-xl font-bold text-(--strong,var(--color-ink)) first:mt-0">{children}</h3>;
}

/** Numbered steps with large Anton numerals. */
export function Steps({ items }: { items: { title: string; body: ReactNode }[] }) {
  return (
    <ol className="mt-8 max-w-[66ch] space-y-6">
      {items.map((item, i) => (
        <li key={item.title} className="flex gap-5">
          <span aria-hidden="true" className="display w-10 shrink-0 text-3xl leading-none text-flame">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="text-lg font-bold text-(--strong,var(--color-ink))">{item.title}</p>
            <p className="mt-1 text-lg leading-relaxed text-(--prose,var(--color-stone))">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Labelled callout for definitions and worked examples. */
export function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <aside aria-label={label} className="mt-10 max-w-[66ch] border-l-4 border-flame bg-(--panel) p-6">
      <p className="eyebrow text-(--strong,var(--color-ink))">{label}</p>
      <div className="mt-3 text-lg leading-relaxed text-(--prose,var(--color-stone))">{children}</div>
    </aside>
  );
}

/** Simple data table. Scrolls inside its own box on narrow screens, never the page. */
export function Table({
  caption,
  head,
  rows,
}: {
  caption: string;
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div role="region" aria-label={caption} tabIndex={0} className="mt-8 max-w-[66ch] overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <caption className="mb-3 text-left text-sm text-(--prose,var(--color-stone))">{caption}</caption>
        <thead>
          <tr>
            {head.map((cell) => (
              <th
                key={cell}
                scope="col"
                className="border-b-2 border-flame py-3 pr-4 text-sm font-bold uppercase tracking-[0.08em] text-(--strong,var(--color-ink))"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-b border-(--rule)">
              {row.map((cell, c) =>
                c === 0 ? (
                  <th key={c} scope="row" className="py-3 pr-4 align-top font-semibold text-(--strong,var(--color-ink))">
                    {cell}
                  </th>
                ) : (
                  <td key={c} className="py-3 pr-4 align-top leading-relaxed text-(--prose,var(--color-stone))">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Grid of short labelled cards (each with an H3). */
export function CardGrid({ items }: { items: { title: string; body: ReactNode }[] }) {
  return (
    <ul className="mt-8 grid max-w-3xl gap-px bg-(--rule) sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="bg-(--surface) p-6 sm:last:odd:col-span-2">
          <h3 className="text-lg font-bold text-(--strong,var(--color-ink))">{item.title}</h3>
          <p className="mt-2 leading-relaxed text-(--prose,var(--color-stone))">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
