import Image from "next/image";
import { team } from "@/content/team";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="grain bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading index="06" eyebrow="Team" id="team-title">
              The people <br className="hidden sm:block" />
              behind GARMS.
            </SectionHeading>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-ash">
              We&apos;re a creative team bringing together different perspectives on marketing,
              strategy, design, and digital culture.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
          {team.map((member, i) => (
            <Reveal as="li" key={member.name} delay={i * 70}>
              <figure className="group">
                <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-[#1c1c1c] ring-1 ring-paper/10 transition-colors duration-300 group-hover:bg-flame">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`Portrait of ${member.name}`}
                      fill
                      sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="display text-6xl text-paper/80 transition-colors duration-300 group-hover:text-ink"
                    >
                      {initials(member.name)}
                    </span>
                  )}
                </div>
                <figcaption className="mt-4">
                  <span className="block font-semibold">{member.name}</span>
                  {member.role && <span className="mt-1 block text-sm text-ash">{member.role}</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
