import { cn } from "../lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

/** Reusable section heading for consistent type hierarchy across sections. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "dark",
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl sm:text-4xl",
          tone === "light" ? "text-cream" : "text-navy",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            tone === "light" ? "text-cream/75" : "text-charcoal-soft",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
