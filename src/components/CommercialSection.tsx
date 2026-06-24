import { business } from "../data/site";
import { ArrowRight } from "./icons";

export default function CommercialSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div className="texture-wood pointer-events-none absolute inset-0 opacity-50" />

      <div className="container-x relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Copy */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-copper-light">
              Commercial Work
            </span>
            <h2 className="mt-3 text-3xl text-cream sm:text-4xl">
              Commercial Construction &amp; Property Improvements
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">
              Cider Hill Construction also helps local businesses and property
              owners with commercial repairs, build-outs, finish work, and
              improvement projects throughout Bluffton and the surrounding
              Lowcountry.
            </p>
            <ul className="mt-6 space-y-2.5 text-[15px] text-cream/80">
              {[
                "Commercial repairs & maintenance",
                "Tenant improvements & build-outs",
                "Interior finish work",
                "Property updates & upgrades",
                "Small business project support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-copper-light" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={business.quoteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-copper px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-copper-light"
            >
              Request a Commercial Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Video */}
          <div
            className="overflow-hidden rounded-2xl shadow-lift"
            aria-label="Commercial construction project video"
          >
            <video
              className="aspect-video w-full object-cover"
              src="/images/commercialwork.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
