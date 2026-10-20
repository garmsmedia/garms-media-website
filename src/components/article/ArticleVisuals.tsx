import { bant, benchmarks, funnelStages, journey } from "@/content/articles/from-scrolls-to-sales";
import { Icon } from "@/components/ui/Icon";
import { HoodieGraphic } from "@/components/visuals/HoodieGraphic";
import { CapGraphic, TeeGraphic } from "@/components/visuals/StreetwearIllustrations";

/* ------------------------------------------------------------------ */
/* Six-stage conversion funnel                                         */
/* ------------------------------------------------------------------ */

export function FunnelGraphic() {
  const n = funnelStages.length;
  return (
    <div className="bg-ink p-5 text-paper ring-1 ring-paper/15 sm:p-8 lg:p-10">
      <p className="eyebrow text-flame">The GARMS MEDIA inbound funnel</p>
      <ol className="mt-6 flex flex-col items-center gap-1.5" aria-label="Six funnel stages, from search to client">
        {funnelStages.map((stage, i) => {
          // Each stage is narrower than the last: 100% down to ~42%.
          const width = 100 - (i * 58) / (n - 1);
          const isLast = i === n - 1;
          return (
            <li
              key={stage.label}
              style={{ width: `${width}%` }}
              className={`group flex min-w-[15.5rem] items-center justify-between gap-3 px-4 py-3 transition-transform duration-300 hover:scale-[1.015] sm:px-6 sm:py-4 ${
                isLast ? "bg-flame text-ink" : i % 2 === 0 ? "bg-paper text-ink" : "bg-[#262626] text-paper"
              }`}
            >
              <span className="flex items-baseline gap-3">
                <span className={`display text-xl ${isLast || i % 2 === 0 ? "text-ink" : "text-flame"}`}>{String(i + 1).padStart(2, "0")}</span>
                <span className="display text-xl whitespace-nowrap sm:text-3xl">{stage.label}</span>
              </span>
              <span className={`text-right text-xs font-medium sm:text-sm ${isLast ? "text-ink" : i % 2 === 0 ? "text-stone" : "text-ash"}`}>
                {stage.note}
              </span>
            </li>
          );
        })}
      </ol>
      <p className="mt-6 text-center text-sm text-ash">Fewer people at every stage, but more qualified ones.</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Two different funnels: B2B (GARMS) vs a clothing brand's own store  */
/* ------------------------------------------------------------------ */

export function TwoFunnels() {
  const cols = [
    {
      eyebrow: "Your brand's funnel",
      who: "Clothing customers",
      steps: ["Styling video", "Online store", "Collection", "Purchase"],
      tone: "paper" as const,
    },
    {
      eyebrow: "GARMS MEDIA's funnel",
      who: "Founders and marketing managers",
      steps: ["Search", "Helpful article", "GARMS website", "Consultation"],
      tone: "ink" as const,
    },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cols.map((c) => (
        <div
          key={c.eyebrow}
          className={`p-6 ${c.tone === "ink" ? "bg-ink text-paper ring-1 ring-flame/70" : "border-2 border-ink bg-paper text-ink"}`}
        >
          <p className={`eyebrow ${c.tone === "ink" ? "text-flame" : "text-stone"}`}>{c.eyebrow}</p>
          <p className="display mt-3 text-3xl">{c.who}</p>
          <ol className="mt-5 flex flex-wrap items-center gap-2 text-sm font-semibold">
            {c.steps.map((s, i) => (
              <li key={s} className="flex items-center gap-2">
                <span
                  className={`rounded-full px-3 py-1 ${
                    c.tone === "ink" ? "bg-paper/10 text-paper" : "bg-ink/[0.06] text-ink"
                  }`}
                >
                  {s}
                </span>
                {i < c.steps.length - 1 && <Icon name="arrow" className="size-4 text-flame" />}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Search illustration (section 02)                                    */
/* ------------------------------------------------------------------ */

const queries = [
  "how to grow my streetwear brand online",
  "why am I getting likes but no sales?",
  "instagram marketing for clothing brands",
];

export function SearchIllustration() {
  return (
    <div aria-hidden="true" className="relative overflow-hidden bg-ink p-6 sm:p-10">
      <span className="display pointer-events-none absolute -right-2 -bottom-6 text-[7rem] leading-none text-paper/[0.05] sm:text-[10rem]">
        LA
      </span>
      <div className="relative mx-auto max-w-xl">
        <div className="flex items-center gap-3 rounded-full bg-paper px-5 py-4 text-ink shadow-xl">
          <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
          <span className="min-w-0 truncate text-base font-medium">{queries[0]}</span>
          <span className="ml-auto h-5 w-0.5 shrink-0 animate-pulse bg-flame" />
        </div>
        <ul className="mt-2 overflow-hidden rounded-3xl bg-[#1d1d1d] py-2">
          {queries.map((q, i) => (
            <li key={q} className={`flex items-center gap-3 px-5 py-3 text-sm ${i === 2 ? "text-flame" : "text-ash"}`}>
              <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
              {q}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-flame/60 p-4 text-paper">
          <span className="display text-2xl text-flame">G</span>
          <span className="text-sm">
            A helpful article that answers the question <span className="text-ash">(not an ad)</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Lookbook illustration (section 03)                                  */
/* ------------------------------------------------------------------ */

export function LookbookIllustration() {
  const cards = [
    { label: "Product drops", art: <TeeGraphic className="h-full w-auto" />, rotate: "-rotate-3", bg: "bg-ash/60" },
    { label: "Community & UGC", art: <CapGraphic className="h-[70%] w-auto" />, rotate: "rotate-2", bg: "bg-flame" },
    { label: "Creative storytelling", art: <HoodieGraphic className="h-[85%] w-auto" />, rotate: "-rotate-1", bg: "bg-paper" },
  ];
  return (
    <div aria-hidden="true" className="grid grid-cols-3 gap-3 sm:gap-6">
      {cards.map((c) => (
        <div key={c.label} className={`bg-paper p-2 shadow-xl ring-1 ring-ink/10 transition-transform duration-500 hover:rotate-0 sm:p-3 ${c.rotate}`}>
          <div className={`flex aspect-[3/4] items-center justify-center ${c.bg}`}>{c.art}</div>
          <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-ink sm:text-xs">{c.label}</p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* BANT (section 05)                                                   */
/* ------------------------------------------------------------------ */

export function BantGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {bant.map((b) => (
        <li key={b.title} className="group relative overflow-hidden bg-ink p-6 text-paper sm:p-8">
          <span
            aria-hidden="true"
            className="display absolute -top-4 -right-1 text-[9rem] leading-none text-paper/[0.06] transition-colors duration-300 group-hover:text-flame/25"
          >
            {b.letter}
          </span>
          <h3 className="relative flex items-center gap-3">
            <span aria-hidden="true" className="display flex size-11 items-center justify-center bg-flame text-2xl text-ink">
              {b.letter}
            </span>
            <span className="display text-3xl">{b.title}</span>
          </h3>
          <p className="relative mt-4 text-lg leading-relaxed text-ash">{b.question}</p>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Conversion objectives infographic (section 06)                      */
/* ------------------------------------------------------------------ */

export function BenchmarkInfographic() {
  return (
    <div className="bg-ink p-5 text-paper sm:p-8 lg:p-10">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <p className="eyebrow text-flame">Initial conversion objectives</p>
        <ul className="flex flex-wrap gap-4 text-xs text-ash">
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="size-3 bg-flame" /> Classroom benchmark
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="size-3 border-2 border-flame" /> Planning assumption
          </li>
        </ul>
      </div>
      <ol className="mt-8 space-y-6">
        {benchmarks.map((b) => {
          const solid = b.basis === "Classroom benchmark";
          return (
            <li key={b.from} className="grid items-center gap-x-6 gap-y-3 sm:grid-cols-[minmax(0,15rem)_1fr_auto]">
              <p className="text-sm font-semibold leading-snug">
                {b.from} <Icon name="arrow" className="inline size-3.5 text-flame" /> {b.to}
                <span className="block text-xs font-normal text-ash">{b.basis}</span>
              </p>
              <div className="h-4 bg-paper/10" aria-hidden="true">
                <div
                  className={`h-full ${solid ? "bg-flame" : "border-2 border-flame bg-flame/15"}`}
                  style={{ width: `${b.rate * 2.5}%` }}
                />
              </div>
              <p className="display text-4xl text-flame sm:text-5xl">{b.rate}%</p>
            </li>
          );
        })}
      </ol>
      <p className="mt-8 border-t border-paper/15 pt-5 text-sm leading-relaxed text-ash">
        Bars are drawn to scale (40% fills the bar). These are objectives for planning, not proven GARMS
        MEDIA performance.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 1,000 visitors illustration (section 06)                           */
/* ------------------------------------------------------------------ */

export function VisitorJourney() {
  return (
    <div className="border-2 border-ink bg-paper p-5 text-ink sm:p-8">
      <p className="eyebrow text-stone">Hypothetical journey of 1,000 visitors</p>

      {/* 1,000 dots, the 20 that become enquiries (2%) highlighted */}
      <svg viewBox="0 0 500 200" className="mt-6 w-full" role="img" aria-label="A grid of 1,000 dots with 20 highlighted, showing 2% of visitors becoming enquiries">
        <defs>
          <pattern id="visitor-dot" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="2.6" fill="var(--color-ink)" fillOpacity="0.18" />
          </pattern>
        </defs>
        <rect width="500" height="200" fill="url(#visitor-dot)" />
        {Array.from({ length: 20 }).map((_, i) => (
          <circle key={i} cx={5 + (i % 10) * 10 + 400} cy={5 + Math.floor(i / 10) * 10 + 180} r="3.4" fill="var(--color-flame)" />
        ))}
      </svg>

      <ol className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-5">
        {journey.map((step, i) => (
          <li key={step.label} className="relative">
            <p className={`display text-4xl sm:text-5xl ${i === journey.length - 1 ? "text-ink underline decoration-flame decoration-4 underline-offset-4" : ""}`}>
              {step.value}
            </p>
            <p className="mt-1 text-sm font-semibold">{step.label}</p>
            {step.detail && <p className="text-xs text-stone">{step.detail}</p>}
            {i < journey.length - 1 && (
              <Icon name="arrow" className="absolute top-3 -right-3 hidden size-5 text-flame sm:block" />
            )}
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-stone">
        Each dot is one visitor. The 20 orange dots are the 2% who send an enquiry.
      </p>
    </div>
  );
}
