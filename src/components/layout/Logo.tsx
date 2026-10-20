import Image from "next/image";
import logo from "@/assets/brand/garms-media-logo.png";

/**
 * Official GARMS MEDIA logo (white "garms" hanger + orange "media").
 *
 * Rules (see AGENTS.md → Logo):
 * - Use the supplied file only. Never redraw, recolour, crop into, stretch or distort it.
 *   Size it by HEIGHT only; width follows the original aspect ratio.
 * - It has a transparent background and white artwork, so place it on DARK
 *   (ink) backgrounds only.
 */
export function Logo({
  className = "h-10 w-auto",
  sizes = "160px",
  preload = false,
  alt = "GARMS MEDIA",
}: {
  className?: string;
  /** Rendered width hint for responsive image selection. */
  sizes?: string;
  preload?: boolean;
  alt?: string;
}) {
  return (
    <Image
      src={logo}
      alt={alt}
      sizes={sizes}
      preload={preload}
      quality={90}
      className={`block select-none ${className}`}
      draggable={false}
    />
  );
}
