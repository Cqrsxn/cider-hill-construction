import { business } from "../data/site";
import { ArrowRight } from "./icons";

export default function WorkWeHaveDone() {
  return (
    <section id="work" className="bg-cream py-20 md:py-28">
      <div className="container-x">
        {/* Section header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
            Work We've Done
          </span>
          <h2 className="mt-3 text-3xl text-navy sm:text-4xl">
            Built, Repaired, and Finished with Care
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal-soft">
            See the kind of detailed work Cider Hill Construction brings to homes
            across Bluffton and the Lowcountry. From exterior repairs and fence
            work to finish details, we focus on clean craftsmanship, dependable
            communication, and results that look right.
          </p>
        </div>

        {/* Featured fence project */}
        <div className="mt-12 grid items-center gap-8 overflow-hidden rounded-3xl border border-cream-dark bg-white shadow-lift lg:grid-cols-[1.2fr_1fr]">
          {/* Video */}
          <div
            className="relative min-h-[240px] overflow-hidden sm:min-h-[300px] lg:min-h-0"
            aria-label="Fence construction project video"
          >
            <video
              className="aspect-video w-full object-cover lg:aspect-auto lg:h-full"
              poster="/images/fence-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/images/fence.mp4" type="video/mp4" />
            </video>
            {/* Play overlay label */}
            <div className="absolute left-4 top-4 rounded-full bg-navy/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream backdrop-blur-sm">
              Exterior &amp; Fence Work
            </div>
          </div>

          {/* Copy */}
          <div className="p-8 lg:py-12 lg:pr-12">
            <span className="inline-block rounded-full border border-copper/30 bg-copper/8 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-copper">
              Featured Project
            </span>
            <h3 className="mt-4 font-display text-2xl text-navy sm:text-3xl">
              Exterior Repairs &amp; Fencing
            </h3>
            <p className="mt-4 leading-relaxed text-charcoal-soft">
              Cider Hill handles exterior repairs, fence work, trim, siding, and
              home improvement projects throughout Bluffton and the Lowcountry.
              Clean work, done right, on time.
            </p>
            <ul className="mt-5 space-y-2 text-sm font-medium text-navy">
              {[
                "Fence construction & repair",
                "Exterior trim & siding",
                "Deck & outdoor repairs",
                "Property improvement projects",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={business.quoteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-copper-light"
            >
              Need a project like this?
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Mid-section CTA */}
        <div className="mt-14 rounded-2xl bg-navy px-8 py-10 text-center shadow-soft">
          <p className="font-display text-2xl text-cream sm:text-3xl">
            Ready to start your project?
          </p>
          <p className="mx-auto mt-3 max-w-lg text-cream/75">
            Tell us what you need done and we'll help you plan the next step.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={business.quoteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-copper-light"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-white/10"
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
