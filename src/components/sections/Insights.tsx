import Link from "next/link";
import { article } from "@/content/articles/from-scrolls-to-sales";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollToSaleGraphic } from "@/components/visuals/ScrollToSaleGraphic";
import { Icon } from "@/components/ui/Icon";
import { guides } from "@/content/guides";

/** Homepage preview of the featured GARMS Playbook article, plus the guides hub. */
export function Insights() {
  return (
    <section id="insights" aria-labelledby="insights-title" className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <SectionHeading index="05" eyebrow="Insights" id="insights-title" eyebrowClassName="text-stone">
            The GARMS <span className="underline decoration-flame decoration-[0.12em] underline-offset-[0.1em]">playbook.</span>
          </SectionHeading>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <article
            aria-labelledby="insights-article-title"
            className="group grid overflow-hidden bg-ink text-paper lg:grid-cols-12"
          >
            {/* Cover graphic */}
            <Link
              href={article.href}
              tabIndex={-1}
              aria-hidden="true"
              className="grain relative flex items-center px-8 pt-10 pb-4 sm:px-12 lg:col-span-5 lg:pb-10"
            >
              <ScrollToSaleGraphic className="mx-auto max-w-sm" />
            </Link>

            {/* Copy */}
            <div className="flex flex-col justify-center border-t border-paper/10 p-6 sm:p-10 lg:col-span-7 lg:border-t-0 lg:border-l lg:p-14">
              <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2 text-ash">
                <span className="rounded-full bg-flame px-3 py-1.5 text-ink">{article.kicker}</span>
                <span>{article.readTime}</span>
              </p>
              <h3 id="insights-article-title" className="display mt-6 text-[clamp(2.75rem,6vw,5rem)]">
                <Link href={article.href} className="hover:text-flame">
                  From scrolls to <span className="text-flame">sales.</span>
                </Link>
              </h3>
              <p className="mt-3 font-serif text-xl leading-snug text-paper italic sm:text-2xl">{article.subtitle}</p>
              <p className="mt-5 max-w-xl leading-relaxed text-ash">{article.summary}</p>

              <ol className="mt-8 grid gap-px bg-paper/15 sm:grid-cols-3">
                {article.takeaways.map((t, i) => (
                  <li key={t.title} className="bg-ink p-4 sm:p-5">
                    <span aria-hidden="true" className="display text-2xl text-flame">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 font-bold">{t.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ash">{t.body}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-10">
                <ButtonLink href={article.href} aria-describedby="insights-article-title">
                  Read the article
                </ButtonLink>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Guides hub: one landing page per topic. */}
        <Reveal delay={100} className="mt-20">
          <div className="flex flex-col gap-4 border-t-4 border-ink pt-6 lg:flex-row lg:items-end lg:justify-between">
            <h3 id="insights-guides-title" className="display text-[clamp(2.25rem,5vw,3.75rem)]">
              Guides for clothing brand founders
            </h3>
            <p className="max-w-md leading-relaxed text-stone">
              Straight answers to the questions independent clothing brands ask about growing on social media.
            </p>
          </div>
          <ul aria-labelledby="insights-guides-title" className="mt-10 grid gap-px bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide, i) => (
              <li key={guide.slug} className="bg-paper">
                <Link href={guide.href} className="group flex h-full flex-col p-6 transition-colors duration-300 hover:bg-ink/[0.04] sm:p-8">
                  <span className="flex items-center justify-between">
                    <span aria-hidden="true" className="display text-3xl text-flame">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="eyebrow text-stone">{guide.shortTitle}</span>
                  </span>
                  <span className="display mt-5 text-2xl text-ink group-hover:underline group-hover:decoration-flame group-hover:decoration-2">
                    {guide.h1}
                  </span>
                  <span className="mt-3 leading-relaxed text-stone">{guide.summary}</span>
                  <span className="mt-auto pt-5">
                    <Icon name="arrow" className="size-5 text-ink transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
