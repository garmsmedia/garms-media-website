import { services } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="grain bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading index="02" eyebrow="Services" id="services-title">
              What we bring <br className="hidden sm:block" />
              to the table.
            </SectionHeading>
          </Reveal>
          <Reveal delay={100} className="max-w-sm">
            <p className="text-lg leading-relaxed text-ash">
              Six ways we help independent labels show up, stand out and sell — pick one or build a
              full program.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-sm bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={(i % 3) * 100} className="bg-ink">
              <article className="group relative flex h-full flex-col p-8 transition-colors duration-300 hover:bg-[#1a1a1a] lg:p-10">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-flame transition-transform duration-300 group-hover:scale-x-100"
                />
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-full border border-paper/20 text-flame transition-colors duration-300 group-hover:border-flame group-hover:bg-flame group-hover:text-ink">
                    <Icon name={service.icon} />
                  </span>
                  <span aria-hidden="true" className="text-sm font-semibold text-ash">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="display mt-10 text-3xl">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-ash">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-2xl italic text-paper">Not sure where to start? That&apos;s what the first call is for.</p>
          <ButtonLink href="#contact">Let&apos;s Build Your Strategy</ButtonLink>
        </div>
      </div>
    </section>
  );
}
