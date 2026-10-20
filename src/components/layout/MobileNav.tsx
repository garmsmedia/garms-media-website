"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { navLinks } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

/** Mobile menu: disclosure button + full-screen panel. Closes on Escape or link click. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 inline-flex size-11 items-center justify-center rounded-full border border-paper/25 text-paper"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <Icon name={open ? "close" : "menu"} className="size-5" />
      </button>

      <nav
        id={panelId}
        aria-label="Mobile"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 h-[calc(100dvh-4rem)] overflow-y-auto bg-ink px-5 pt-8 pb-12"
      >
        <ul className="flex flex-col">
          {navLinks.map((link, i) => (
            <li key={link.href} className="border-b border-paper/10">
              <Link
                ref={i === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={() => setOpen(false)}
                className="display flex items-center justify-between py-4 text-5xl text-paper hover:text-flame"
              >
                {link.label}
                <Icon name="arrowUpRight" className="size-7 text-flame" />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#contact"
          onClick={() => setOpen(false)}
          className="mt-10 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-flame px-6 text-sm font-semibold uppercase tracking-[0.08em] text-ink"
        >
          Let&apos;s Talk
        </Link>
      </nav>
    </div>
  );
}
