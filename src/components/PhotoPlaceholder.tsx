import { CameraIcon } from "./icons";
import { cn } from "../lib/cn";

type Props = {
  /** Caption shown under the camera icon. */
  label?: string;
  /** Small badge top-left, e.g. a category. */
  badge?: string;
  /** Extra classes for sizing/aspect ratio. */
  className?: string;
  /** Use the darker navy treatment (good on cream backgrounds). */
  tone?: "cream" | "navy";
};

/**
 * Polished placeholder used until real photos are added.
 * Clearly communicates "photo coming soon" without looking unfinished.
 */
export default function PhotoPlaceholder({
  label = "Project photo coming soon",
  badge,
  className,
  tone = "cream",
}: Props) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl border",
        tone === "navy"
          ? "border-white/10 bg-navy-soft/40 text-cream/70"
          : "border-cream-dark bg-cream-dark/50 text-charcoal-soft",
        className,
      )}
      role="img"
      aria-label={label}
    >
      {/* subtle crosshatch texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 14px)",
          opacity: 0.06,
        }}
      />
      {badge && (
        <span
          className={cn(
            "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
            tone === "navy"
              ? "bg-cream/10 text-cream"
              : "bg-navy/90 text-cream",
          )}
        >
          {badge}
        </span>
      )}
      <div className="flex flex-col items-center gap-3 px-6 text-center">
        <CameraIcon className="h-8 w-8 opacity-60" />
        <span className="text-sm font-medium">{label}</span>
      </div>
    </div>
  );
}
