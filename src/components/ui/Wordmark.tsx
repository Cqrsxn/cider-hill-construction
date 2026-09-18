import { cn } from "../../lib/cn";

/**
 * The oversized footer wordmark. Drawn as SVG with textLength so it spans the
 * full container width at any viewport without a font-size media-query ladder.
 */
export default function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 108"
      className={cn("block w-full", className)}
      role="img"
      aria-label="Cider Hill"
      preserveAspectRatio="xMidYMid meet"
    >
      <text
        x="0"
        y="97"
        textLength="1000"
        lengthAdjust="spacingAndGlyphs"
        fill="currentColor"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: "132px",
          fontWeight: 800,
          fontStretch: "125%",
          textTransform: "uppercase",
        }}
      >
        CIDER HILL
      </text>
    </svg>
  );
}
