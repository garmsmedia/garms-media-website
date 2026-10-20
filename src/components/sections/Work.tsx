import { concepts } from "@/content/concepts";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConceptMockup } from "@/components/visuals/ConceptMockup";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <SectionHeading index="03" eyebrow="Selected Concepts / Speculative Work" id="work-title" eyebrowClassName="text-stone">
              Our creative thinking, <br className="hidden md:block" />
              <em className="font-serif font-normal normal-case">in action.</em>
            </SectionHeading>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4">
            <p className="text-lg leading-relaxed text-stone">
              Three concepts that show how we think: educational, product-led and community-first
              content made for independent streetwear brands.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {concepts.map((concept, i) => (
            <Reveal as="li" key={concept.id} delay={i * 120} className={i === 1 ? "lg:mt-16" : ""}>
              <article className="group" aria-labelledby={`concept-${concept.id}`}>
                <ConceptMockup concept={concept} />
                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
                  <span className="rounded-full bg-ink px-3 py-1 text-paper">{concept.platform}</span>
                  <span className="rounded-full border border-ink/25 px-3 py-1 text-stone">{concept.format}</span>
                </div>
                <h3 id={`concept-${concept.id}`} className="display mt-5 text-3xl lg:text-4xl">
                  {concept.title}
                </h3>
                <p className="mt-3 leading-relaxed text-stone">
                  <span className="font-semibold text-ink">Objective: </span>
                  {concept.objective}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        <p className="mt-16 flex items-start gap-3 border-t border-ink/15 pt-6 text-sm text-stone">
          <Icon name="info" className="mt-0.5 size-5 shrink-0 text-ink" />
          <span>
            Concept work created to demonstrate GARMS MEDIA&apos;s creative and strategic approach. Not
            commissioned client campaigns.
          </span>
        </p>
      </div>
    </section>
  );
}
