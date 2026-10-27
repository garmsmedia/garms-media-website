import type { Metadata } from "next";
import Link from "next/link";
import { article } from "@/content/articles/from-scrolls-to-sales";
import { guides } from "@/content/guides";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ScrollToSaleGraphic } from "@/components/visuals/ScrollToSaleGraphic";
import { ArticleSection, Em, Figure, Goal, List, P, PullQuote } from "@/components/article/ArticleParts";
import {
  BantGrid,
  BenchmarkInfographic,
  FunnelGraphic,
  LookbookIllustration,
  SearchIllustration,
  TwoFunnels,
  VisitorJourney,
} from "@/components/article/ArticleVisuals";

/*
 * "From Scrolls to Sales": GARMS Playbook article.
 * Source of truth: the approved article text. Published copy must not contain em dashes.
 */

export const metadata: Metadata = {
  title: { absolute: `${article.seoTitle} | ${site.name}` },
  description: article.description,
  keywords: [
    "social media marketing for clothing brands",
    "how to grow a clothing brand online",
    "Instagram marketing for clothing brands",
    "fashion marketing agency Los Angeles",
    "social media marketing for streetwear brands",
    "social media agency for clothing brands",
    "conversion funnel",
  ],
  alternates: { canonical: article.href },
  openGraph: {
    type: "article",
    url: article.href,
    title: `${article.title} ${article.subtitle}`,
    description: article.description,
    siteName: site.name,
    publishedTime: article.published,
    authors: [site.name],
    section: article.category,
  },
  twitter: {
    card: "summary_large_image",
    title: article.seoTitle,
    description: article.description,
  },
};

const toc = [
  { id: "what-is-a-funnel", n: "01", label: "What is a conversion funnel?" },
  { id: "get-discovered", n: "02", label: "Be there when you need answers" },
  { id: "build-trust", n: "03", label: "A reason to trust us" },
  { id: "start-a-conversation", n: "04", label: "From interest to conversation" },
  { id: "right-fit", n: "05", label: "Not every enquiry is the right fit" },
  { id: "success", n: "06", label: "What would success look like?" },
  { id: "your-brand", n: "07", label: "What this means for your brand" },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: `${article.title} ${article.subtitle}`,
  description: article.description,
  datePublished: article.published,
  author: { "@type": "Organization", name: site.name },
  publisher: { "@type": "Organization", name: site.name },
  mainEntityOfPage: `${site.url}${article.href}`,
  articleSection: article.category,
  inLanguage: "en",
};

export default function FromScrollsToSalesPage() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article>
        {/* ---------------------------------------------------------- HERO */}
        <header className="grain relative overflow-hidden bg-ink text-paper">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pt-14 lg:pb-24">
            <div className="lg:col-span-7">
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
                  <li aria-current="page" className="text-paper">From Scrolls to Sales</li>
                </ol>
              </nav>

              <p className="eyebrow mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-ash">
                <span className="rounded-full bg-flame px-3 py-1.5 text-ink">{article.kicker}</span>
                <span>{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </p>

              <h1 className="display mt-8 text-[clamp(3.6rem,12vw,9rem)]">
                From scrolls <br />
                to <span className="text-flame">sales.</span>
              </h1>
              <p className="mt-8 max-w-xl font-serif text-[clamp(1.5rem,3vw,2.1rem)] leading-tight italic text-paper">
                {article.subtitle}
              </p>
              <p className="mt-8 text-sm text-ash">
                By {site.name} · <time dateTime={article.published}>20 October 2026</time>
              </p>
            </div>
            <div className="group mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
              <ScrollToSaleGraphic />
            </div>
          </div>
        </header>

        {/* ---------------------------------------------------------- INTRO */}
        <section aria-labelledby="intro-title" className="bg-paper text-ink [--prose:var(--color-stone)] [--strong:var(--color-ink)]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-8">
              <h2 id="intro-title" className="display text-[clamp(2.4rem,6vw,4.75rem)]">
                Your brand deserves <span className="underline decoration-flame decoration-[0.12em] underline-offset-[0.08em]">more</span> than just likes.
              </h2>
              <div className="mt-10">
                <P lead>
                  You&apos;ve put time into your designs. You&apos;ve developed a style, built your online store,
                  and started showing your products on Instagram or TikTok.
                </P>
                <P>But there&apos;s a question that keeps coming up.</P>
              </div>
              <PullQuote>Are people just looking at your content, or are they actually becoming customers?</PullQuote>
              <P>
                For independent clothing brands, getting attention is only the beginning. The real challenge is
                turning that attention into meaningful interest, trust, and eventually sales.
              </P>
              <P>
                At GARMS MEDIA, we believe good marketing should do more than make a brand look cool. It should help
                the right people discover it, understand its value, and take the next step. That&apos;s what
                social media marketing for clothing brands should really be about.
              </P>
              <P>
                <Em>That&apos;s where a conversion funnel comes in.</Em>
              </P>
            </div>

            {/* Table of contents */}
            <nav aria-label="In this article" className="lg:col-span-4">
              <div className="border-t-4 border-ink pt-5 lg:sticky lg:top-28">
                <p className="eyebrow text-stone">In this article</p>
                <ol className="mt-4 space-y-1">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="group flex items-baseline gap-3 py-1.5 text-ink hover:text-ink">
                        <span className="display text-lg text-ink/30 group-hover:text-flame">{item.n}</span>
                        <span className="font-medium underline-offset-4 group-hover:underline">{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>
          </div>
        </section>

        {/* ---------------------------------------------------------- 01 */}
        <ArticleSection id="what-is-a-funnel" number="01" title={<>What is a conversion funnel, <span className="text-flame">anyway?</span></>} tone="ink">
          <P lead>
            Think of a conversion funnel as the journey someone takes from discovering your brand to deciding they
            want to work with you or buy from you.
          </P>
          <P>
            Not everyone who discovers a brand is ready to make a purchase. Some are looking for inspiration. Others
            are comparing options. A smaller group is ready to take action.
          </P>
          <P>
            <Em>A good funnel helps people move through those stages naturally.</Em>
          </P>
          <P>
            For an independent clothing brand, that could mean someone discovering a styling video, visiting the online
            store, exploring the collection, and eventually making a purchase.
          </P>
          <P>
            For GARMS MEDIA, our goal is slightly different. We want to connect with the people behind those brands:
            founders and marketing managers who could benefit from specialised social media marketing support. In other
            words, we&apos;re a social media agency for clothing brands, so we talk to the decision makers, not the
            people buying the clothes.
          </P>

          <Figure caption="Two different funnels. Your store sells clothes to customers. GARMS MEDIA's funnel is B2B: it connects with brand decision makers.">
            <TwoFunnels />
          </Figure>

          <p className="eyebrow mt-14 text-flame">Our proposed journey</p>
          <p className="mt-4 max-w-[66ch] text-lg leading-relaxed text-ash">
            Google or ChatGPT search <Arrow /> Helpful article <Arrow /> GARMS MEDIA website <Arrow /> Free consultation
            enquiry <Arrow /> Discovery call <Arrow /> Proposal <Arrow /> Potential client
          </p>

          <Figure caption="The six key stages of the GARMS MEDIA funnel. A tailored proposal follows the discovery call before anyone becomes a client.">
            <FunnelGraphic />
          </Figure>

          <P>Let&apos;s break that down.</P>
        </ArticleSection>

        {/* ---------------------------------------------------------- 02 */}
        <ArticleSection id="get-discovered" number="02" title={<>First, we want to be there when you need <span className="underline decoration-flame decoration-[0.12em] underline-offset-[0.08em]">answers.</span></>}>
          <P lead>
            Imagine you&apos;re running an independent clothing brand in Los Angeles. Your latest collection looks great, but your
            Instagram engagement isn&apos;t translating into enough orders.
          </P>
          <P>You might search:</P>
          <List
            items={[
              <>&ldquo;How to grow my clothing brand online&rdquo;</>,
              <>&ldquo;Why am I getting likes but no sales?&rdquo;</>,
              <>&ldquo;Instagram marketing for clothing brands&rdquo;</>,
            ]}
          />
          <Figure>
            <SearchIllustration />
          </Figure>
          <P>That&apos;s exactly the kind of moment when we want GARMS MEDIA to be discoverable.</P>
          <P>
            Our approach starts with creating useful content that answers real questions independent brand owners are
            asking.
          </P>
          <P>
            Instead of immediately pushing our services, we want to offer practical advice, explain common challenges,
            and share ideas that founders can actually use.
          </P>
          <Goal>Attract relevant people by helping them solve problems.</Goal>
        </ArticleSection>

        {/* ---------------------------------------------------------- 03 */}
        <ArticleSection id="build-trust" number="03" title={<>Then, we give people a reason to <span className="inline-block bg-flame px-[0.1em] pt-[0.05em] leading-[1]">trust</span> us.</>}>
          <P lead>Finding an article is one thing. Trusting the people behind it is another.</P>
          <P>
            Once someone discovers GARMS MEDIA, we want them to explore our website and understand what makes us
            different.
          </P>
          <P>
            Our focus is independent clothing brands, including streetwear and urban fashion labels. That means our content and{" "}
            <Link href="/#services" className="font-semibold text-ink underline decoration-flame decoration-2 underline-offset-4 hover:decoration-ink">
              services
            </Link>{" "}
            are built around the realities of clothing brands: product drops, community building, creative storytelling,
            user-generated content, influencer collaborations, and ecommerce growth.
          </P>
          <Figure caption="Original illustrations. Product drops, community, UGC and storytelling are where fashion marketing lives.">
            <LookbookIllustration />
          </Figure>
          <P>
            Through our services,{" "}
            <Link href="/#work" className="font-semibold text-ink underline decoration-flame decoration-2 underline-offset-4 hover:decoration-ink">
              creative concepts
            </Link>
            , and educational content, we want to demonstrate how we think and what we could bring to a brand.
          </P>
          <PullQuote>No exaggerated promises. No pretending that one viral video solves everything.</PullQuote>
          <P>Just relevant ideas, clear strategies, and an understanding of fashion culture.</P>
          <Goal>Turn initial curiosity into genuine interest.</Goal>
        </ArticleSection>

        {/* ---------------------------------------------------------- 04 */}
        <ArticleSection id="start-a-conversation" number="04" title={<>From interest to <span className="text-flame">conversation.</span></>} tone="ink">
          <P lead>
            Let&apos;s say you&apos;ve read one of our articles, explored our services, and started wondering whether
            GARMS MEDIA could help your brand.
          </P>
          <P>
            <Em>The next step should feel simple.</Em>
          </P>
          <P>
            Our planned free initial consultation will give independent brand owners an opportunity to discuss their
            goals, current marketing challenges, and what they want to improve.
          </P>
          <div className="my-12 grid max-w-3xl gap-px bg-paper/15 sm:grid-cols-2">
            <div className="bg-ink p-6">
              <p className="eyebrow text-ash">It&apos;s not about</p>
              <p className="display mt-3 text-3xl text-paper/50 line-through decoration-flame decoration-4">
                Forcing an immediate commitment.
              </p>
            </div>
            <div className="bg-ink p-6">
              <p className="eyebrow text-flame">It&apos;s about</p>
              <p className="display mt-3 text-3xl text-paper">Understanding the brand first.</p>
            </div>
          </div>
          <P>
            We want to learn what you&apos;re selling, who you&apos;re trying to reach, what&apos;s already working, and
            where you feel stuck.
          </P>
          <Goal tone="ink">Make it easy for interested founders to start a meaningful conversation.</Goal>
          <p className="mt-8 flex max-w-[66ch] items-start gap-3 text-sm leading-relaxed text-ash">
            <span className="mt-px shrink-0 rounded-full border border-flame px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-flame">
              Coming soon
            </span>
            <em>Consultation enquiries are coming soon. This feature is not yet available on our website.</em>
          </p>
        </ArticleSection>

        {/* ---------------------------------------------------------- 05 */}
        <ArticleSection id="right-fit" number="05" title={<>Not every enquiry is the right fit, and <span className="underline decoration-flame decoration-[0.12em] underline-offset-[0.08em]">that&apos;s okay.</span></>}>
          <P lead>A successful marketing funnel isn&apos;t just about collecting as many enquiries as possible.</P>
          <P>
            <Em>It&apos;s about finding the right ones.</Em>
          </P>
          <P>
            For GARMS MEDIA, a relevant lead could be an independent clothing brand founder or fashion marketing manager who
            is interested in improving their online presence.
          </P>
          <dl className="my-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            <div className="border-2 border-ink p-6">
              <dt className="display text-4xl">MQL</dt>
              <dd className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-stone">Marketing qualified lead</dd>
              <dd className="mt-3 leading-relaxed text-stone">Someone who fits our target audience and shows meaningful interest.</dd>
            </div>
            <div className="bg-flame p-6 text-ink">
              <dt className="display text-4xl">SQL</dt>
              <dd className="mt-1 text-sm font-semibold uppercase tracking-[0.12em]">Sales qualified lead</dd>
              <dd className="mt-3 leading-relaxed">
                Someone who has also demonstrated that a potential collaboration makes sense.
              </dd>
            </div>
          </dl>
          <P>We consider four important questions:</P>
          <Figure>
            <BantGrid />
          </Figure>
          <P>
            When those pieces align, the next step could be a discovery call, a tailored proposal, and potentially a new
            collaboration.
          </P>
          <P>
            Whether or not we end up working together, we want everyone who gets in touch to leave with something
            useful.
          </P>
          <P>Our planned approach after an enquiry is simple:</P>
          <List
            items={[
              <>Acknowledge every enquiry personally, so no one is left wondering whether their message arrived.</>,
              <>Share relevant educational resources, like our Playbook articles, based on what the brand told us.</>,
              <>Offer a few practical recommendations for the marketing challenge they described.</>,
              <>Follow up thoughtfully, without pressure, to see whether those ideas helped.</>,
            ]}
          />
          <P>
            That&apos;s the Delight stage of inbound marketing: keep adding value after the first conversation, so
            trust keeps growing.
          </P>
          <Goal>Build relationships with brands we can genuinely help.</Goal>
        </ArticleSection>

        {/* ---------------------------------------------------------- 06 */}
        <ArticleSection id="success" number="06" title={<>What would success <span className="underline decoration-flame decoration-[0.12em] underline-offset-[0.08em]">look like?</span></>}>
          <P lead>We want to measure more than website traffic.</P>
          <P>Our initial conversion objectives are:</P>
          <Figure>
            <BenchmarkInfographic />
          </Figure>
          <P>
            The first two targets are informed by classroom benchmarks. The remaining figures are planning assumptions,
            not proven GARMS MEDIA performance.
          </P>
          <P>
            To put this into perspective, 1,000 website visitors could theoretically generate 20 enquiries, 6 MQLs,
            around 2 to 3 SQLs, and an expected 0.48 paying clients.
          </P>
          <Figure>
            <VisitorJourney />
          </Figure>
          <P>That&apos;s a mathematical illustration, not a prediction or a claim about results we&apos;ve achieved.</P>
          <P>
            As we grow, we would track where visitors lose interest, which content attracts relevant enquiries, and how
            many conversations turn into real opportunities.
          </P>
          <PullQuote>Because more traffic doesn&apos;t automatically mean better business.</PullQuote>
          <Goal>Learn, improve, and focus on the conversions that matter.</Goal>
        </ArticleSection>

        {/* ---------------------------------------------------------- 07 */}
        <ArticleSection id="your-brand" number="07" title={<>What does this mean for your <span className="text-flame">clothing brand?</span></>} tone="ink">
          <P lead>Here&apos;s the bigger picture.</P>
          <P>
            The same principles we want to use to grow GARMS MEDIA can also help an independent clothing brand build a
            stronger digital presence. If you&apos;ve been wondering how to grow a clothing brand online, start here.
          </P>
          <ol className="my-12 grid gap-px bg-paper/15 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Get discovered.", "Create content that speaks to your audience's interests, questions, and style."],
              ["Build interest.", "Show your products in context through storytelling, styling ideas, community content, and authentic creative work."],
              ["Earn trust.", "Make your brand identity, product information, and customer experience clear and consistent."],
              ["Make the next step easy.", "Help people move from discovering a product to exploring your store and making a purchase."],
              ["Keep learning.", "Pay attention to what actually drives visits, enquiries, and orders, not just views and likes."],
            ].map(([title, body], i) => (
              <li key={title} className="group bg-ink p-6 transition-colors duration-300 hover:bg-[#1c1c1c] sm:p-8">
                <span aria-hidden="true" className="display text-5xl text-flame">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display mt-4 text-3xl text-paper">{title}</h3>
                <p className="mt-3 leading-relaxed text-ash">{body}</p>
              </li>
            ))}
            <li className="flex items-end bg-flame p-6 text-ink sm:p-8">
              <p className="font-serif text-3xl leading-tight italic">Creativity, with a clear purpose.</p>
            </li>
          </ol>
          <P>A strong social media strategy connects creativity with a clear purpose.</P>
          <PullQuote tone="ink">And for an independent brand, that connection can make all the difference.</PullQuote>
        </ArticleSection>

        {/* ---------------------------------------------------------- MORE GUIDES */}
        <section aria-labelledby="more-guides-title" className="bg-paper px-5 pt-20 text-ink sm:px-8 lg:pt-28">
          <div className="mx-auto max-w-7xl border-t-4 border-ink pt-6">
            <p className="eyebrow text-stone">Keep reading</p>
            <h2 id="more-guides-title" className="display mt-4 text-[clamp(2.25rem,5vw,3.75rem)]">
              More from the GARMS Playbook
            </h2>
            <ul className="mt-10 grid gap-px bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide) => (
                <li key={guide.slug} className="bg-paper">
                  <Link href={guide.href} className="group flex h-full flex-col p-6 transition-colors duration-300 hover:bg-ink/[0.04]">
                    <span className="eyebrow text-stone">{guide.shortTitle}</span>
                    <span className="mt-3 text-lg font-bold leading-snug text-ink group-hover:underline group-hover:decoration-flame group-hover:decoration-2">
                      {guide.h1}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------------------------------------------------- CTA */}
        <section aria-labelledby="article-cta-title" className="bg-paper px-5 py-20 sm:px-8 lg:py-28">
          <div className="grain relative mx-auto max-w-7xl overflow-hidden bg-flame text-ink on-flame">
            <span aria-hidden="true" className="display pointer-events-none absolute -right-6 -bottom-12 text-[clamp(8rem,26vw,22rem)] leading-none text-ink/10">
              GARMS
            </span>
            <div className="relative grid gap-10 px-6 py-14 sm:px-10 lg:grid-cols-12 lg:px-16 lg:py-20">
              <div className="lg:col-span-8">
                <p className="eyebrow">The next step</p>
                <h2 id="article-cta-title" className="display mt-5 text-[clamp(3rem,8vw,6.5rem)]">
                  Let&apos;s talk about your brand.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
                  Whether you&apos;re preparing your next drop, trying to build a more engaged community, or wondering
                  why your social media isn&apos;t translating into growth, we believe every good strategy starts with
                  understanding the brand behind the content.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ButtonLink href="/#contact" variant="dark">Learn more about GARMS MEDIA</ButtonLink>
                  <ButtonLink href="/#services" variant="dark" arrow={false} className="!bg-transparent !text-ink ring-2 ring-ink hover:!bg-ink hover:!text-paper">
                    Explore our services
                  </ButtonLink>
                </div>
                <p className="mt-6 flex items-center gap-3 text-sm font-semibold">
                  <span className="rounded-full border-2 border-ink px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.14em]">
                    Coming soon
                  </span>
                  <em className="font-normal">Free initial consultations coming soon.</em>
                </p>
              </div>
              <div className="flex flex-col justify-end lg:col-span-4">
                <p className="display text-4xl">GARMS MEDIA</p>
                <p className="mt-3 font-serif text-2xl leading-snug italic">
                  Creative thinking. Fashion culture. Social media with a purpose.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 text-ink sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="inline-flex items-center gap-2 font-semibold underline underline-offset-4 hover:no-underline">
              <Icon name="arrow" className="size-4 rotate-180" />
              Back to the homepage
            </Link>
            <p className="text-sm text-stone">
              {site.name} is a university project exploring a social media marketing agency for independent clothing brands in Los Angeles.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}

function Arrow() {
  return (
    <span aria-label="then" className="mx-1 inline-block text-flame">
      →
    </span>
  );
}
