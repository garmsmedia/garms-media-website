import Link from "next/link";
import { navLinks } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Wordmark } from "./Wordmark";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/90 backdrop-blur-md supports-[backdrop-filter]:bg-ink/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-20">
        <Link href="/#home" className="rounded-sm" aria-label="GARMS MEDIA, back to top">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative py-2 text-sm font-medium text-paper/80 transition-colors hover:text-paper after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-flame after:transition-transform hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* Hidden on very narrow phones (≤400px), where the menu panel has its own CTA. */}
          <div className="hidden min-[400px]:block">
            <ButtonLink href="/#contact" className="!min-h-10 !px-5 !py-2">
              Let&apos;s Talk
            </ButtonLink>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
