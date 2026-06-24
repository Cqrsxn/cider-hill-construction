import { business, trustBadges } from "../data/site";
import { CheckIcon, ArrowRight } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background video — new updated hero */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/herovideoupdated.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Dark gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(14,26,44,0.90) 0%, rgba(14,26,44,0.78) 55%, rgba(14,26,44,0.52) 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-dark/60 to-transparent"
      />

      <div className="container-x relative z-10 py-32 pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          {/* Copy */}
          <div className="max-w-2xl">
            {/* Location tag */}
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-copper-light backdrop-blur-sm">
              Bluffton, SC &amp; the Lowcountry
            </span>

            <h1 className="font-display text-4xl leading-[1.07] text-cream sm:text-5xl lg:text-6xl">
              Quality Construction &amp; Handyman Services{" "}
              <span className="text-copper-light">in Bluffton, SC</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
              From renovations and repairs to trim, siding, flooring, roofing, and
              fixture installation — Cider Hill Construction brings reliable New
              England craftsmanship to Lowcountry homes and businesses.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.quoteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-4 text-base font-semibold text-white shadow-lift transition-all hover:bg-copper-light"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-4 text-base font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                View Our Work
              </a>
            </div>

            {/* Trust badges */}
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {trustBadges.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-2 text-sm font-medium text-cream/85"
                >
                  <CheckIcon className="h-4 w-4 shrink-0 text-forest-light" />
                  {badge}
                </li>
              ))}
            </ul>

            {/* Service area line */}
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-cream/60">
              Serving Bluffton, Hilton Head, Okatie, Hardeeville, Beaufort,
              Ridgeland, Sun City, Palmetto Bluff, Hampton Hall, Rose Hill, and
              surrounding Lowcountry communities.
            </p>
          </div>

          {/* Logo badge — visible on lg screens */}
          <div className="hidden lg:flex lg:flex-col lg:items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-xl" />
              <img
                src="/images/ciderhillLOGO.jpg"
                alt="Cider Hill Construction and Handyman Services LLC logo"
                className="relative h-52 w-52 rounded-full object-cover shadow-[0_0_60px_rgba(178,122,69,0.35)] ring-2 ring-copper/30 xl:h-60 xl:w-60"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-xs font-medium uppercase tracking-widest text-cream/40">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-cream/40 to-transparent" />
      </div>
    </section>
  );
}
