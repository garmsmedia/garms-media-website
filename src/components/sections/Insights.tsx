import Link from "next/link";
import { article } from "@/content/articles/from-scrolls-to-sales";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollToSaleGraphic } from "@/components/visuals/ScrollToSaleGraphic";

/** Homepage preview of the featured GARMS Playbook article. */
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
      </div>
    </section>
  );
}
