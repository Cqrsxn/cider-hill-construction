import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

type Props = {
  to?: string;
  href?: string;
  children: ReactNode;
  tone?: "ink" | "paper";
  className?: string;
};

/**
 * The bracketed CTA:  [ our approach ]
 * Brackets ease outward on hover.
 */
export default function BracketLink({ to, href, children, tone = "ink", className }: Props) {
  const body = (
    <>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 ease-out group-hover:-translate-x-1.5"
      >
        [
      </span>
      <span className="px-3">{children}</span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5"
      >
        ]
      </span>
    </>
  );

  const classes = cn(
    "group inline-flex items-center text-[0.8125rem] lowercase tracking-[0.02em]",
    "transition-colors duration-300",
    tone === "paper"
      ? "text-paper/70 hover:text-paper"
      : "text-ink-soft hover:text-copper",
    className,
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {body}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={classes}>
      {body}
    </Link>
  );
}
