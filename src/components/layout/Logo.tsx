/**
 * Official GARMS MEDIA logo (white "garms" hanger + orange "media").
 *
 * Served as LOSSLESS PNGs pre-sized from the original upload
 * (src/assets/brand/garms-media-logo.png, 2558×1039) into public/brand/.
 * The browser picks the smallest file that is sharp at the device's pixel
 * density, so the logo is never upscaled or re-compressed.
 *
 * Rules (see AGENTS.md → Logo):
 * - Never redraw, recolour, crop into, stretch or distort it.
 *   Size it by HEIGHT only; width follows the original aspect ratio.
 * - White artwork: place it on DARK (ink) backgrounds only.
 * - If the master file changes, regenerate the sizes (see README → Logo and icons).
 */

const WIDTHS = [160, 240, 320, 420, 480, 600] as const;
const srcSet = WIDTHS.map((w) => `/brand/garms-media-logo-${w}w.png ${w}w`).join(", ");

// Intrinsic aspect ratio of the original logo artwork.
const RATIO_W = 2558;
const RATIO_H = 1039;

export function Logo({
  className = "h-10 w-auto",
  sizes = "160px",
  priority = false,
  alt = "GARMS MEDIA",
}: {
  className?: string;
  /** Rendered CSS width at each breakpoint, so the right file is chosen. */
  sizes?: string;
  /** Load immediately (use for the header). */
  priority?: boolean;
  alt?: string;
}) {
  return (
    // A plain <img> with a lossless srcset gives exact colours and crisp edges;
    // next/image would re-encode to lossy WebP/AVIF.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/garms-media-logo-320w.png"
      srcSet={srcSet}
      sizes={sizes}
      width={RATIO_W}
      height={RATIO_H}
      alt={alt}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      draggable={false}
      className={`block select-none ${className}`}
    />
  );
}
