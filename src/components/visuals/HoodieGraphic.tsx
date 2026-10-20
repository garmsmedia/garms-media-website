/**
 * Original oversized-hoodie illustration used in the hero collage.
 * Decorative only — replace with real GARMS photography when available.
 */
export function HoodieGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 340" className={className} aria-hidden="true" focusable="false">
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* hood */}
        <path
          d="M103 102 C 92 42, 132 16, 150 16 C 168 16, 208 42, 197 102 Z"
          fill="var(--color-ink)"
        />
        {/* body + sleeves */}
        <path
          d="M105 92 L 62 108 C 40 118, 30 150, 26 190 L 16 292 L 54 298 L 66 202 L 70 324 L 230 324 L 234 202 L 246 298 L 284 292 L 274 190 C 270 150, 260 118, 238 108 L 195 92 C 185 108, 115 108, 105 92 Z"
          fill="var(--color-ink)"
        />
        {/* hood opening */}
        <path
          d="M124 100 C 121 70, 135 50, 150 50 C 165 50, 179 70, 176 100"
          fill="none"
          stroke="var(--color-paper)"
          strokeOpacity=".35"
          strokeWidth="2"
        />
        {/* drawstrings */}
        <path d="M138 104 L 134 156 M162 104 L 166 156" stroke="var(--color-flame)" strokeWidth="3" />
        <circle cx="134" cy="160" r="4" fill="var(--color-flame)" />
        <circle cx="166" cy="160" r="4" fill="var(--color-flame)" />
        {/* kangaroo pocket */}
        <path
          d="M104 228 L 196 228 L 212 286 L 88 286 Z"
          fill="none"
          stroke="var(--color-paper)"
          strokeOpacity=".3"
          strokeWidth="2"
        />
        {/* rib hem + cuffs */}
        <path
          d="M70 306 L 230 306 M18 276 L 56 282 M282 276 L 244 282"
          stroke="var(--color-paper)"
          strokeOpacity=".3"
          strokeWidth="2"
        />
        {/* chest print block */}
        <rect x="126" y="176" width="48" height="16" fill="var(--color-flame)" />
      </g>
    </svg>
  );
}
