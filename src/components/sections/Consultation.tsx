import { consultation } from "@/content/consultation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink, buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { isLeadStorageConfigured } from "@/lib/contact/leads";

/**
 * Free Consultation call-to-action, placed just before Contact.
 * Uses the same "enquiries open" condition as the contact form: until lead
 * storage is configured, the CTA is visibly disabled with a "Coming soon" note.
 */
export function Consultation() {
  const open = isLeadStorageConfigured();

  return (
    <section id="consultation" aria-labelledby="consultation-title" className="bg-paper px-5 pt-24 text-paper sm:px-8 lg:pt-32">
      <Reveal className="grain relative mx-auto max-w-7xl overflow-hidden bg-ink">
        {/* Decorative oversized type */}
        <span
          aria-hidden="true"
          className="display pointer-events-none absolute -right-4 -bottom-10 select-none text-[clamp(8rem,24vw,20rem)] leading-none text-paper/[0.05]"
        >
          Free
        </span>

        <div className="relative grid gap-12 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:px-16 lg:py-20">
          <div className="lg:col-span-7">
            <p className="mb-8 inline-flex items-center gap-2 rounded-full bg-flame px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-ink">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-ink" />
              {consultation.highlight}
            </p>

            <SectionHeading index="06" eyebrow="Next step" id="consultation-title" eyebrowClassName="text-ash">
              {consultation.headline.before}{" "}
              <span className="text-flame">{consultation.headline.accent}</span>
            </SectionHeading>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ash sm:text-xl">{consultation.body}</p>

            <div className="mt-10 flex flex-col items-start gap-4">
              {open ? (
                <ButtonLink href="#contact">{consultation.cta}</ButtonLink>
              ) : (
                <>
                  {/* Visibly disabled until enquiries open; not focusable, explained by the note below. */}
                  <a
                    role="link"
                    aria-disabled="true"
                    aria-describedby="consultation-status"
                    className={buttonClasses(
                      "primary",
                      "pointer-events-none cursor-not-allowed opacity-50 hover:!bg-flame",
                    )}
                  >
                    {consultation.cta}
                  </a>
                  <p id="consultation-status" className="flex max-w-md items-start gap-2 text-sm leading-relaxed text-ash">
                    <span className="mt-px shrink-0 rounded-full border border-flame px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-flame">
                      Coming soon
                    </span>
                    <span>{consultation.comingSoon}</span>
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-20">
            <p className="font-serif text-2xl text-paper italic">What we&apos;d talk about</p>
            <ol className="mt-6 border-t border-paper/15">
              {consultation.topics.map((topic, i) => (
                <li key={topic.title} className="group flex gap-5 border-b border-paper/15 py-6">
                  <span aria-hidden="true" className="display text-3xl leading-none text-flame">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="flex items-center gap-2 font-bold text-paper">
                      {topic.title}
                      <Icon
                        name="arrowUpRight"
                        className="size-4 text-flame opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </h3>
                    <p className="mt-1 leading-relaxed text-ash">{topic.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
