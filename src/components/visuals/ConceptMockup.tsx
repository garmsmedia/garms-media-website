import Image from "next/image";
import type { Concept } from "@/content/concepts";

const tones = {
  ink: { slide: "bg-ink text-paper", accent: "text-flame", stage: "bg-ash/60" },
  flame: { slide: "bg-flame text-ink", accent: "text-paper", stage: "bg-ink" },
  paper: { slide: "bg-paper text-ink", accent: "text-flame", stage: "bg-ink" },
} as const;

/**
 * Editable placeholder mockup for a concept post.
 * Instagram → 4:5 carousel post. TikTok → 9:16 phone slideshow.
 * If `concept.image` is set, the real artwork is shown instead.
 */
export function ConceptMockup({ concept }: { concept: Concept }) {
  const t = tones[concept.tone];
  const isTikTok = concept.platform === "TikTok";

  return (
    <div className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden ${t.stage}`}>
      {concept.image ? (
        <Image
          src={concept.image}
          alt={concept.imageAlt ?? ""}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className={`relative flex flex-col justify-between p-[6%] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-1.5deg] ${t.slide} ${
              isTikTok ? "h-[82%] aspect-[9/16] rounded-[1.4rem] ring-4 ring-ink/90" : "w-[78%] aspect-[4/5]"
            }`}
          >
            <div className="flex items-center justify-between text-[0.55rem] font-semibold uppercase tracking-[0.2em] opacity-70">
              <span>GARMS Media</span>
              <span>1/{concept.slideCount}</span>
            </div>
            <p className={`display ${isTikTok ? "text-[clamp(1.5rem,4.2vw,2.1rem)]" : "text-[clamp(1.9rem,5.5vw,2.75rem)]"}`}>
              {concept.slides[0]}
              <br />
              <span className={t.accent}>{concept.slides[1]}</span>
            </p>
            <div className="flex items-end justify-between gap-2">
              <span className="font-serif text-sm italic sm:text-base">{concept.slides[2]}</span>
              {!isTikTok && (
                <span className="flex gap-1">
                  {Array.from({ length: Math.min(concept.slideCount, 6) }).map((_, i) => (
                    <span key={i} className={`size-1.5 rounded-full bg-current ${i === 0 ? "" : "opacity-30"}`} />
                  ))}
                </span>
              )}
            </div>
          </div>
          <span className="absolute right-3 bottom-3 rounded-full bg-ink/80 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-paper">
            Placeholder mockup
          </span>
        </>
      )}
    </div>
  );
}
