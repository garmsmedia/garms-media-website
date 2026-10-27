import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { article } from "@/content/articles/from-scrolls-to-sales";
import { guideBySlug, type Guide, type GuideMeta } from "@/content/guides";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Callout, GuideSection, type Tone } from "./GuideParts";

/*
 * Shared template for GARMS Playbook guides. Each guide is its own route
 * (src/app/insights/<slug>/page.tsx) with distinct content and metadata.
 * Structure: H1 (the search question) -> three-sentence answer -> numbered H2
 * sections -> FAQ -> sources -> related reading -> contact CTA.
 */

const AUTHOR = `${site.name} Team`;
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** "2026-10-27" -> "27 October 2026" (no Date object, so it is safe in the prerendered shell). */
function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

export function guideMetadata(guide: GuideMeta): Metadata {
  return {
    title: { absolute: guide.metaTitle },
    description: guide.metaDescription,
    keywords: [guide.keyword],
    authors: [{ name: AUTHOR, url: "/#team" }],
    alternates: { canonical: guide.href },
    openGraph: {
      type: "article",
      url: guide.href,
      title: guide.h1,
      description: guide.metaDescription,
      siteName: site.name,
      locale: "en_US",
      publishedTime: guide.published,
      authors: [AUTHOR],
      section: guide.category,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

function jsonLd(guide: Guide) {
  const url = `${site.url}${guide.href}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.h1,
        description: guide.metaDescription,
        datePublished: guide.published,
        dateModified: guide.published,
        inLanguage: "en-US",
        articleSection: guide.category,
        keywords: guide.keyword,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: AUTHOR, url: `${site.url}/#team` },
        publisher: { "@type": "Organization", name: site.name, url: site.url },
        citation: guide.sources.map((source) => source.href),
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${site.url}/#insights` },
          { "@type": "ListItem", position: 3, name: guide.shortTitle, item: url },
        ],
      },
    ],
  };
}

export function GuidePage({ guide }: { guide: Guide }) {
  const tone = (i: number): Tone => (i % 2 === 0 ? "paper" : "ink");
  const n = guide.sections.length;
  const related = guide.related.map(guideBySlug).filter((g): g is GuideMeta => Boolean(g));
  const toc = [
    ...guide.sections.map((s, i) => ({ id: s.id, n: String(i + 1).padStart(2, "0"), label: s.title })),
    { id: "faq", n: "FAQ", label: "Frequently asked questions" },
    { id: "sources", n: "REF", label: "Sources and further reading" },
  ];

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(guide)) }} />

      <article>
        {/* ---------------------------------------------------------- HERO: H1 + direct answer */}
        <header className="grain relative overflow-hidden bg-ink text-paper">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pt-14 lg:pb-24">
            <div className="min-w-0 lg:col-span-8">
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-ash">
                  <li>
                    <Link href="/" className="hover:text-paper">Home</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/#insights" className="hover:text-paper">Insights</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-paper">{guide.shortTitle}</li>
                </ol>
              </nav>

              <p className="eyebrow mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-ash">
                <span className="rounded-full bg-flame px-3 py-1.5 text-ink">GARMS Guide</span>
                <span>{guide.category}</span>
                <span aria-hidden="true">·</span>
                <span>{guide.readTime}</span>
              </p>

              <h1 className="display mt-8 text-[clamp(2.4rem,6.2vw,5.25rem)]">{guide.h1}</h1>
              <p className="mt-8 max-w-[62ch] border-l-4 border-flame pl-5 text-lg leading-relaxed text-paper sm:text-xl">
                {guide.answer.join(" ")}
              </p>

              <p className="mt-8 text-sm text-ash">
                By{" "}
                <Link href="/#team" className="font-semibold text-paper underline decoration-flame underline-offset-4 hover:no-underline">
                  {AUTHOR}
                </Link>{" "}
                · <time dateTime={guide.published}>{formatDate(guide.published)}</time>
              </p>
              <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-ash">
                {site.name} is a university project exploring social media marketing for independent clothing brands.
                This guide shares general practice and planning ideas, not results from client work.
              </p>
            </div>

            <nav aria-label="In this guide" className="lg:col-span-4 lg:pt-24">
              <div className="border-t-4 border-flame pt-5">
                <p className="eyebrow text-ash">In this guide</p>
                <ol className="mt-4 space-y-1">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="group flex items-baseline gap-3 py-1.5 text-paper">
                        <span className="display w-10 shrink-0 text-lg text-paper/40 group-hover:text-flame">{item.n}</span>
                        <span className="font-medium underline-offset-4 group-hover:underline">{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>
          </div>
        </header>

        {/* ---------------------------------------------------------- SECTIONS */}
        {guide.sections.map((section, i) => (
          <GuideSection key={section.id} id={section.id} number={String(i + 1).padStart(2, "0")} title={section.title} tone={tone(i)}>
            {i === 0 && (
              <Callout label="Definition">
                <p>
                  <dfn className="font-semibold text-(--strong,var(--color-ink)) not-italic">{guide.definition.term}</dfn>{" "}
                  {guide.definition.text}
                </p>
              </Callout>
            )}
            <div className={i === 0 ? "mt-10" : undefined}>{section.body}</div>
          </GuideSection>
        ))}

        {/* ---------------------------------------------------------- FAQ */}
        <GuideSection id="faq" title="Frequently asked questions" tone={tone(n)}>
          <div className="max-w-[66ch] divide-y divide-(--rule) border-y border-(--rule)">
            {guide.faq.map((item) => (
              <div key={item.question} className="py-6">
                <h3 className="text-xl font-bold text-(--strong,var(--color-ink))">{item.question}</h3>
                <p className="mt-2 text-lg leading-relaxed text-(--prose,var(--color-stone))">{item.answer}</p>
              </div>
            ))}
          </div>
        </GuideSection>

        {/* ---------------------------------------------------------- SOURCES */}
        <GuideSection id="sources" title="Sources and further reading" tone={tone(n + 1)}>
          <ol className="max-w-[66ch] space-y-5">
            {guide.sources.map((source) => (
              <li key={source.href} className="leading-relaxed text-(--prose,var(--color-stone))">
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-(--strong,var(--color-ink)) underline decoration-flame decoration-2 underline-offset-4 hover:decoration-(--strong,var(--color-ink))"
                >
                  {source.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <span className="block text-sm">{source.publisher}</span>
                <span className="mt-1 block">{source.note}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-[66ch] text-sm leading-relaxed text-(--prose,var(--color-stone))">
            Platform features, rules and eligibility change over time. Check each source for the current version
            before acting on it.
          </p>
        </GuideSection>

        {/* ---------------------------------------------------------- RELATED */}
        <GuideSection id="keep-reading" title="Keep reading" tone={tone(n + 2)}>
          <ul className="grid gap-px bg-(--rule) sm:grid-cols-2">
            {related.map((g) => (
              <li key={g.slug} className="bg-(--surface)">
                <Link href={g.href} className="group flex h-full flex-col p-6 sm:p-8">
                  <span className="eyebrow text-(--prose,var(--color-stone))">{g.category}</span>
                  <span className="display mt-3 text-2xl text-(--strong,var(--color-ink)) group-hover:underline group-hover:decoration-flame">
                    {g.h1}
                  </span>
                  <span className="mt-3 leading-relaxed text-(--prose,var(--color-stone))">{g.summary}</span>
                  <Icon name="arrow" className="mt-5 size-5 text-flame transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
            <li className="bg-(--surface)">
              <Link href={article.href} className="group flex h-full flex-col p-6 sm:p-8">
                <span className="eyebrow text-(--prose,var(--color-stone))">{article.kicker}</span>
                <span className="display mt-3 text-2xl text-(--strong,var(--color-ink)) group-hover:underline group-hover:decoration-flame">
                  {article.title}
                </span>
                <span className="mt-3 leading-relaxed text-(--prose,var(--color-stone))">{article.subtitle}</span>
                <Icon name="arrow" className="mt-5 size-5 text-flame transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </li>
          </ul>
        </GuideSection>

        {/* ---------------------------------------------------------- CTA */}
        <section aria-labelledby="guide-cta-title" className="bg-paper px-5 py-20 sm:px-8 lg:py-28">
          <div className="grain relative mx-auto max-w-7xl overflow-hidden bg-flame text-ink on-flame">
            <span aria-hidden="true" className="display pointer-events-none absolute -right-6 -bottom-12 text-[clamp(8rem,26vw,22rem)] leading-none text-ink/10">
              GARMS
            </span>
            <div className="relative px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
              <p className="eyebrow">Questions about your brand?</p>
              <h2 id="guide-cta-title" className="display mt-5 text-[clamp(2.75rem,7vw,5.5rem)]">
                Talk to the GARMS MEDIA team.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
                {site.name} is a university project exploring social media marketing for independent clothing brands.
                If this guide raised a question about your own brand, send it through our contact form and the project
                team will read it.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href="/#contact" variant="dark">Contact the team</ButtonLink>
                <ButtonLink href="/#services" variant="dark" arrow={false} className="!bg-transparent !text-ink ring-2 ring-ink hover:!bg-ink hover:!text-paper">
                  Explore our services
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 text-ink sm:flex-row sm:items-center sm:justify-between">
            <Link href="/#insights" className="inline-flex items-center gap-2 font-semibold underline underline-offset-4 hover:no-underline">
              <Icon name="arrow" className="size-4 rotate-180" />
              All guides and articles
            </Link>
            <p className="text-sm text-stone">
              By {AUTHOR}. Published {formatDate(guide.published)}.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
