import { reviews, business } from "../data/site";
import SectionHeading from "./SectionHeading";
import { QuoteIcon, FacebookIcon } from "./icons";

/**
 * Reviews.
 * IMPORTANT: never invent reviews. When the array in src/data/site.ts is
 * empty, an honest placeholder is shown. Add real testimonials there.
 */
export default function Reviews() {
  const hasReviews = reviews.length > 0;

  return (
    <section id="reviews" className="bg-forest-soft/60 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Local Homeowners"
        />

        {hasReviews ? (
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="flex flex-col rounded-2xl bg-white p-7 shadow-soft"
              >
                <QuoteIcon className="h-8 w-8 text-copper/60" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-charcoal">
                  “{review.text}”
                </blockquote>
                <figcaption className="mt-5 font-semibold text-navy">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-dashed border-forest/30 bg-white/70 p-8 text-center shadow-soft">
            <QuoteIcon className="mx-auto h-10 w-10 text-forest/50" />
            <p className="mt-4 text-lg font-medium text-navy">
              Real customer reviews will be added here once provided.
            </p>
            <p className="mt-3 text-charcoal-soft">
              Have worked with Cider Hill? Share your experience.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-navy-soft"
              >
                <FacebookIcon className="h-4 w-4" />
                Leave a review on Facebook
              </a>
              <a
                href={business.emailHref}
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
              >
                Email your feedback
              </a>
            </div>
            {/* Note for developer: do not fabricate reviews or star ratings. */}
          </div>
        )}
      </div>
    </section>
  );
}
