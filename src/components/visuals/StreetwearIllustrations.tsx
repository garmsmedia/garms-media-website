/**
 * Original streetwear illustrations (decorative, aria-hidden).
 * Drawn in brand colours; no third-party artwork or real brand marks.
 */

type Props = { className?: string };

export function TeeGraphic({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 300 300" className={className} aria-hidden="true" focusable="false">
      <path
        d="M104 40 L 60 58 L 18 104 L 52 140 L 78 118 L 78 268 L 222 268 L 222 118 L 248 140 L 282 104 L 240 58 L 196 40 C 188 62, 112 62, 104 40 Z"
        fill="var(--color-paper)"
        stroke="var(--color-ink)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M118 44 C 128 58, 172 58, 182 44" fill="none" stroke="var(--color-ink)" strokeWidth="4" />
      {/* back-print style graphic */}
      <text
        x="150"
        y="168"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="40"
        fill="var(--color-ink)"
      >
        DROP 01
      </text>
      <rect x="104" y="182" width="92" height="10" fill="var(--color-flame)" />
    </svg>
  );
}

export function CapGraphic({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 300 220" className={className} aria-hidden="true" focusable="false">
      <path
        d="M58 146 C 58 70, 112 36, 160 36 C 214 36, 250 78, 250 146 Z"
        fill="var(--color-ink)"
      />
      <path d="M154 38 C 150 70, 150 110, 156 146" fill="none" stroke="var(--color-paper)" strokeOpacity=".25" strokeWidth="3" />
      <path d="M58 146 L 250 146 C 270 150, 290 160, 292 172 C 240 176, 120 170, 58 160 Z" fill="var(--color-flame)" />
      <circle cx="158" cy="38" r="7" fill="var(--color-flame)" />
      <rect x="92" y="96" width="44" height="22" rx="2" fill="var(--color-paper)" />
    </svg>
  );
}

export function BagGraphic({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 200 220" className={className} aria-hidden="true" focusable="false">
      <path d="M68 70 C 68 30, 132 30, 132 70" fill="none" stroke="var(--color-ink)" strokeWidth="8" strokeLinecap="round" />
      <path d="M30 66 L 170 66 L 182 206 L 18 206 Z" fill="var(--color-flame)" stroke="var(--color-ink)" strokeWidth="5" strokeLinejoin="round" />
      <path d="M72 128 L 92 148 L 130 108" fill="none" stroke="var(--color-ink)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
