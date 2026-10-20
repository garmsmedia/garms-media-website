import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { isLeadStorageConfigured } from "@/lib/contact/leads";
import { site } from "@/content/site";

export function Contact() {
  const configured = isLeadStorageConfigured();

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative bg-paper text-ink">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:py-32">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading index="07" eyebrow="Contact" id="contact-title" eyebrowClassName="text-stone">
              Let&apos;s make your brand{" "}
              <span className="inline-block bg-flame px-[0.12em] pt-[0.06em] leading-[1]">impossible</span> to ignore.
            </SectionHeading>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-stone">
              Building an independent fashion brand? Tell us what you&apos;re working on. We&apos;d
              love to hear about it.
            </p>
            <dl className="mt-10 space-y-4 border-t border-ink/15 pt-6 text-sm">
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 font-semibold uppercase tracking-[0.14em] text-stone">Email</dt>
                <dd>
                  {site.email ? (
                    <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-4">
                      {site.email}
                    </a>
                  ) : (
                    <span className="text-stone">To be confirmed</span>
                  )}
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 font-semibold uppercase tracking-[0.14em] text-stone">Based</dt>
                <dd>{site.location}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm configured={configured} />
        </div>
      </div>
    </section>
  );
}
