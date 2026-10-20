import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    title: "Specialists, not generalists",
    body: "We focus only on independent streetwear and urban-fashion brands.",
  },
  {
    title: "We speak the culture",
    body: "Brand identity, drops and community culture shape every idea we bring.",
  },
  {
    title: "Creative with a plan",
    body: "Every piece of content connects to a marketing strategy and a goal.",
  },
  {
    title: "Outcomes over vanity metrics",
    body: "We care about enquiries, customers and sales — not just follower counts.",
  },
  {
    title: "Built around you",
    body: "A personal approach that fits a growing brand's budget, pace and voice.",
  },
];

/* Orange section: text is always near-black (#111 on #FF5A1F ≈ 6:1 contrast). */
export function WhyGarms() {
  return (
    <section aria-labelledby="why-title" className="on-flame relative overflow-hidden bg-flame text-ink">
      <span
        aria-hidden="true"
        className="display pointer-events-none absolute -right-6 -bottom-16 select-none text-[clamp(10rem,32vw,26rem)] leading-none text-ink/10"
      >
        GARMS
      </span>
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <SectionHeading index="04" eyebrow="Why GARMS?" id="why-title" eyebrowClassName="text-ink">
            Not just content. <br />
            A creative partner.
          </SectionHeading>
        </Reveal>

        <ol className="mt-16 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal
              as="li"
              key={reason.title}
              delay={(i % 3) * 100}
              className="flex gap-5 border-t-2 border-ink py-7"
            >
              <span aria-hidden="true" className="display text-4xl leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-bold">{reason.title}</h3>
                <p className="mt-2 leading-relaxed">{reason.body}</p>
              </div>
            </Reveal>
          ))}
          <Reveal as="li" delay={200} className="flex items-center border-t-2 border-ink py-7">
            <ButtonLink href="#contact" variant="dark">
              Start the conversation
            </ButtonLink>
          </Reveal>
        </ol>
      </div>
    </section>
  );
}
