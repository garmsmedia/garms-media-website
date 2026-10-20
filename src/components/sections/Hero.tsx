import { ButtonLink } from "@/components/ui/Button";
import { HoodieGraphic } from "@/components/visuals/HoodieGraphic";

const marqueeItems = [
  "Strategy",
  "Content",
  "Community",
  "UGC & Creators",
  "Paid Social",
  "Analytics",
  "Independent clothing brands",
  "Streetwear",
  "Urban fashion",
  "Los Angeles",
];

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="grain relative overflow-hidden bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pt-14 lg:pb-20">
        {/* Copy */}
        <div className="lg:col-span-7 lg:pt-2">
          <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2 text-ash">
            <span className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-3 py-1.5 text-paper">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-flame" />
              Social media marketing agency
            </span>
            <span>Independent clothing brands</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>Los Angeles</span>
          </p>

          {/* Primary message: what we do and who for. Four deliberate lines on every screen size. */}
          <h1
            id="hero-title"
            className="display mt-7 text-[clamp(3rem,min(13.5vw,10.5vh),6.5rem)] text-paper"
          >
            We grow <br />
            independent <br />
            <span className="text-flame">
              clothing <br />
              brands.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-xl leading-snug font-medium text-paper sm:text-2xl">
            Through social media strategy, creative content, and campaigns that convert.
          </p>

          {/* Original GARMS slogan, kept as a secondary tagline. */}
          <p className="mt-5 flex items-center gap-3 font-serif text-xl text-ash italic sm:text-2xl">
            <span aria-hidden="true" className="h-0.5 w-8 shrink-0 bg-flame" />
            Your brand deserves more than just likes.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#contact">Let&apos;s Grow Your Brand</ButtonLink>
            <ButtonLink href="#services" variant="outline-light" arrow={false}>
              Explore Our Services
            </ButtonLink>
          </div>
        </div>

        {/* Editorial collage (decorative) */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none" aria-hidden="true">
          <div className="relative aspect-[4/5]">
            {/* back card */}
            <div className="absolute inset-y-6 left-0 w-[62%] -rotate-6 overflow-hidden bg-flame text-ink shadow-2xl transition-transform duration-500 motion-safe:hover:-rotate-3">
              <p className="display absolute top-5 bottom-5 left-4 rotate-180 text-[clamp(1.25rem,3.4vw,2.15rem)] whitespace-nowrap [writing-mode:vertical-rl]">
                Culture → Community → Commerce
              </p>
              <p className="eyebrow absolute right-5 bottom-5 text-[0.6rem]">Our playbook</p>
            </div>

            {/* front card */}
            <div className="absolute top-0 right-0 w-[72%] rotate-3 bg-paper p-4 text-ink shadow-2xl transition-transform duration-500 motion-safe:hover:rotate-1">
              <div className="flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-stone">
                <span>Look 01</span>
                <span>Oversized hoodie</span>
              </div>
              <div className="mt-3 flex aspect-[4/5] items-center justify-center bg-ash/50">
                <HoodieGraphic className="h-[80%] w-auto drop-shadow-xl" />
              </div>
              <p className="mt-3 font-serif text-xl italic leading-tight">
                One product. Endless stories.
              </p>
            </div>

            {/* sticker */}
            <div className="absolute bottom-0 right-4 flex size-28 items-center justify-center rounded-full bg-ink text-paper ring-1 ring-paper/20 sm:size-32">
              <svg viewBox="0 0 100 100" className="absolute inset-0 size-full motion-safe:animate-[spin_24s_linear_infinite]">
                <defs>
                  <path id="sticker-circle" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
                </defs>
                <text className="fill-paper text-[9.5px] font-semibold uppercase tracking-[0.2em]">
                  <textPath href="#sticker-circle">Independent brands only · Los Angeles ·</textPath>
                </text>
              </svg>
              <span className="display text-3xl text-flame">G</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-y border-paper/10 bg-ink py-4">
        <div className="flex overflow-hidden" aria-hidden="true">
          <ul className="flex shrink-0 animate-marquee items-center gap-8 pr-8 motion-reduce:animate-none">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <li key={i} className="flex items-center gap-8 whitespace-nowrap">
                <span className="display text-2xl text-paper/90 sm:text-3xl">{item}</span>
                <span className="text-flame">✦</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="sr-only">
          Services: social media strategy, content creation, community management, UGC and creator
          collaborations, paid social and analytics for independent clothing brands, including
          streetwear and urban fashion, in Los Angeles.
        </p>
      </div>
    </section>
  );
}
