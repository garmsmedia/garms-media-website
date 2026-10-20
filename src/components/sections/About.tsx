import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  {
    title: "Culture-first creativity",
    body: "Streetwear lives on references, drops and visual identity. Every idea starts from your culture and your look — then gets shaped for the feed.",
  },
  {
    title: "Community-driven marketing",
    body: "Your best customers are fans first. We help you build the conversations, creators and loyalty that keep people coming back for the next drop.",
  },
  {
    title: "Strategy backed by measurable results",
    body: "Creative is the hook; data is the proof. We track what turns attention into site visits, carts and sales — and adjust from there.",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <SectionHeading index="01" eyebrow="About / Our approach" id="about-title" eyebrowClassName="text-stone">
              We get the culture. <br className="hidden md:block" />
              We build the{" "}
              <span className="underline decoration-flame decoration-[0.12em] underline-offset-[0.1em] [text-decoration-skip-ink:none]">
                strategy.
              </span>
            </SectionHeading>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-stone sm:text-xl">
              Independent fashion brands need more than nice-looking posts. They need a clear
              identity, a loyal community and content that actually drives sales.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              GARMS combines creativity, audience understanding, community building and
              performance-focused marketing — built for{" "}
              <em className="font-serif text-[1.2em] text-ink">independent labels</em>, not
              corporate fashion houses with corporate budgets.
            </p>
          </Reveal>
        </div>

        <ol className="mt-20 grid border-t border-ink/15 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 120}
              className="group border-b border-ink/15 py-10 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            >
              <span className="display block text-6xl text-ink/15 transition-colors duration-300 group-hover:text-flame">
                0{i + 1}
              </span>
              <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-stone">{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
