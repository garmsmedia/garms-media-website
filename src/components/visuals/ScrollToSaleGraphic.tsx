import { HoodieGraphic } from "./HoodieGraphic";
import { BagGraphic } from "./StreetwearIllustrations";
import { Icon } from "@/components/ui/Icon";

/**
 * Original "scroll to sale" illustration: a social post with a hoodie drop that
 * turns into a shopping bag. Used as the article cover and homepage preview.
 * Decorative: the surrounding content carries the meaning.
 */
export function ScrollToSaleGraphic({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`relative aspect-[5/6] w-full ${className}`}>
      {/* Phone with a post */}
      <div className="absolute top-[6%] left-[8%] w-[58%] -rotate-3 rounded-[1.8rem] bg-ink p-2 shadow-2xl ring-2 ring-paper/15 transition-transform duration-500 motion-safe:group-hover:-rotate-1">
        <div className="overflow-hidden rounded-[1.4rem] bg-paper text-ink">
          <div className="flex items-center gap-2 px-3 py-2.5">
            <span className="flex size-6 items-center justify-center rounded-full bg-ink text-[0.6rem] font-bold text-flame">YB</span>
            <span className="text-[0.65rem] font-semibold">your.brand</span>
            <span className="ml-auto text-[0.6rem] text-stone">New drop</span>
          </div>
          <div className="flex aspect-square items-center justify-center bg-ash/60">
            <HoodieGraphic className="h-[78%] w-auto" />
          </div>
          <div className="flex items-center gap-3 px-3 pt-2.5 text-ink">
            <svg viewBox="0 0 24 24" className="size-5 fill-flame" focusable="false">
              <path d="M12 21s-7.5-4.6-9.4-9.3C1.2 8.3 3.4 5 6.7 5c2 0 3.5 1.1 4.3 2.6C11.8 6.1 13.3 5 15.3 5c3.3 0 5.5 3.3 4.1 6.7C19.5 16.4 12 21 12 21z" />
            </svg>
            <Icon name="chat" className="size-5" />
          </div>
          <div className="px-3 pt-2 pb-3">
            <div className="h-1.5 w-3/4 rounded bg-ink/20" />
            <div className="mt-1.5 h-1.5 w-1/2 rounded bg-ink/20" />
            <div className="mt-3 flex items-center justify-center rounded-full bg-ink py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-paper">
              Shop the drop
            </div>
          </div>
        </div>
      </div>

      {/* Scroll arrow sticker */}
      <div className="absolute top-[44%] right-[10%] flex size-20 rotate-6 flex-col items-center justify-center rounded-full bg-flame text-ink sm:size-24">
        <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em]">Scroll</span>
        <Icon name="arrow" className="size-6 rotate-90" />
      </div>

      {/* Bag = sale */}
      <div className="absolute right-[4%] bottom-[2%] w-[38%] rotate-6 bg-paper p-3 shadow-2xl transition-transform duration-500 motion-safe:group-hover:rotate-3">
        <BagGraphic className="mx-auto h-auto w-[70%]" />
        <p className="display mt-2 text-center text-2xl text-ink">Sale.</p>
      </div>
    </div>
  );
}
