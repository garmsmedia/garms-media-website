import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "outline-light" | "outline-dark" | "dark";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-200";

const variants: Record<Variant, string> = {
  // Orange with near-black text (6:1 contrast) — the main CTA style.
  primary: "bg-flame text-ink hover:bg-paper",
  // For dark backgrounds.
  "outline-light": "border border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-ink",
  // For light backgrounds.
  "outline-dark": "border border-ink/40 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  // For orange backgrounds.
  dark: "bg-ink text-paper hover:bg-paper hover:text-ink",
};

export function buttonClasses(variant: Variant = "primary", extra = "") {
  return `${base} ${variants[variant]} ${extra}`;
}

/** Link styled as a button (all CTAs on this one-pager are in-page links). */
export function ButtonLink({
  variant = "primary",
  arrow = true,
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; arrow?: boolean; children: ReactNode }) {
  return (
    <Link className={buttonClasses(variant, className)} {...props}>
      {children}
      {arrow && (
        <Icon
          name="arrow"
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
