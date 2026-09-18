import { business, serviceAreas, reviews } from "../data/site";
import PageHeader from "../components/ui/PageHeader";
import FullBleedBand from "../components/sections/FullBleedBand";
import CtaBand from "../components/sections/CtaBand";
import { usePageMeta } from "../hooks/usePageMeta";

export default function About() {
  usePageMeta({
    title: "About | Cider Hill Construction",
    description:
      "Cider Hill Construction is owner-operated, run by Tristan Swanson out of Bluffton, South Carolina, with New England carpentry training behind it.",
    path: "/about",
  });

  return (
    <>
      <PageHeader
        label="About"
        title="One crew, a few jobs at a time"
        intro="Cider Hill Construction is owner-operated. That is not a tagline, it is the scheduling model."
      />

      <div className="container-x grid max-w-5xl gap-12 pb-20 lg:grid-cols-2">
        <div className="space-y-5 text-[1rem] leading-relaxed text-ink-soft">
          <p>
            {business.founder} trained in New England, where the building
            problems are frost heave and ice dams, and now works in the
            Lowcountry, where they are humidity, salt air and driven rain. The
            climate is the opposite. The standard for what a finished job looks
            like did not change.
          </p>
          <p>
            Most contractors this size solve the scheduling problem by taking on
            more work and spreading themselves across it. Cider Hill takes on
            fewer jobs instead, which is slower to book and better to live with.
            You deal with the same person from the estimate to the last piece of
            trim.
          </p>
          <p>
            The work runs from full renovations down to a list of small repairs
            that has been sitting on the fridge for a year. Both are worth doing
            properly.
          </p>
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="type-label text-ink-faint">Where we work</h2>
            <ul className="mt-5 grid grid-cols-2 gap-y-2.5 text-[0.9375rem] text-ink-soft">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="type-label text-ink-faint">Details</h2>
            <dl className="mt-5 rule-t text-[0.9375rem]">
              <div className="flex justify-between border-b border-[var(--hairline)] py-3">
                <dt className="text-ink-faint">Based</dt>
                <dd className="text-ink-soft">{business.location}</dd>
              </div>
              <div className="flex justify-between border-b border-[var(--hairline)] py-3">
                <dt className="text-ink-faint">Phone</dt>
                <dd>
                  <a
                    href={business.phoneHref}
                    className="text-ink-soft transition-colors hover:text-copper"
                  >
                    {business.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between border-b border-[var(--hairline)] py-3">
                <dt className="text-ink-faint">Cover</dt>
                <dd className="text-ink-soft">Licensed and insured</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <FullBleedBand
        label="On site"
        blurb="Stair carpentry, cut and assembled in place. Rise and run have to stay consistent the whole way up or you feel it underfoot."
        linkTo="/work"
        linkLabel="see the work"
        media="stairs"
        alt="Exterior stair construction with railing"
      />

      {/* Reviews are empty by design. Rather than fabricate any, ask for them. */}
      {reviews.length === 0 && (
        <section className="container-x py-20 text-center">
          <h2 className="type-display text-[clamp(1.2rem,2.6vw,1.75rem)]">
            Worked with us?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
            Reviews go here as they come in. If Cider Hill has done work for you,
            a few honest lines on Facebook helps more than anything else we could
            put on this page.
          </p>
          <a
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block bg-ink px-6 py-3 text-[0.8125rem] font-bold text-paper transition-colors hover:bg-copper"
          >
            Leave a review
          </a>
        </section>
      )}

      <CtaBand />
    </>
  );
}
