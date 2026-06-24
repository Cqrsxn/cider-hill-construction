import { business, serviceAreas } from "../data/site";
import { MapPinIcon, PhoneIcon, ArrowRight } from "./icons";

export default function ServiceArea() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 shadow-lift md:px-12 md:py-20">
          <div className="texture-wood pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-cream">
              <MapPinIcon className="h-7 w-7" />
            </span>
            <h2 className="mt-6 text-3xl text-cream sm:text-4xl">
              Serving Bluffton &amp; the Lowcountry
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cream/80">
              Cider Hill Construction serves homeowners and businesses throughout
              Bluffton, Hilton Head Island, and the surrounding Lowcountry.
            </p>

            {/* Service area grid */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-sm font-medium text-cream/85 backdrop-blur-sm"
                >
                  {area}
                </span>
              ))}
              <span className="rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-sm font-medium text-cream/85 backdrop-blur-sm">
                &amp; surrounding areas
              </span>
            </div>

            <p className="mt-6 text-sm text-cream/60">
              Not sure if we cover your area? Call or email and we'll confirm.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={business.quoteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-copper px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-copper-light"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-white/10"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
