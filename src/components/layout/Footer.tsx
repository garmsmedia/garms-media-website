import Link from "next/link";
import { navLinks, site } from "@/content/site";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { Logo } from "./Logo";

const socials = [
  { label: "Instagram", href: site.social.instagram },
  { label: "TikTok", href: site.social.tiktok },
  { label: "LinkedIn", href: site.social.linkedin },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" aria-label="GARMS MEDIA homepage" className="inline-block rounded-sm">
              <Logo alt="" className="h-16 w-auto sm:h-20" sizes="(min-width: 640px) 200px, 160px" />
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-ash">{site.positioning}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="eyebrow text-ash">Explore</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-flame">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="eyebrow text-ash">Follow &amp; contact</h2>
            <ul className="mt-5 space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  {social.href ? (
                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-flame">
                      {social.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <span className="text-ash">
                      {social.label} <span className="text-xs uppercase tracking-[0.12em]">(link coming soon)</span>
                    </span>
                  )}
                </li>
              ))}
              <li>
                {site.email ? (
                  <a href={`mailto:${site.email}`} className="hover:text-flame">
                    {site.email}
                  </a>
                ) : (
                  <span className="text-ash">
                    Email <span className="text-xs uppercase tracking-[0.12em]">(to be confirmed)</span>
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>

        <p aria-hidden="true" className="display mt-20 select-none whitespace-nowrap text-[clamp(3rem,15.5vw,14.5rem)] leading-[0.85] text-paper/[0.06]">
          GARMS MEDIA
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t border-paper/10 pt-6 text-sm text-ash sm:flex-row sm:justify-between">
          <p>
            © <CurrentYear /> {site.name}. All rights reserved.
          </p>
          <Link href="/privacy" className="hover:text-paper">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
