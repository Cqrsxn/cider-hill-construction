import { Link } from "react-router-dom";
import { services, business } from "../data/site";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./icons";

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title="Construction & Handyman Services in Bluffton, SC"
          intro="From full home renovations to small repairs, Cider Hill brings dependable workmanship and clear communication to every project in Bluffton, Hilton Head, and across the Lowcountry."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative flex flex-col rounded-2xl border border-cream-dark bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-6 h-8 w-1 rounded-r-full bg-forest transition-all duration-300 group-hover:h-12 group-hover:bg-copper"
              />
              <h3 className="text-xl text-navy">{service.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal-soft">
                {service.description}
              </p>
              {service.slug && (
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-forest transition-colors hover:text-copper"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </article>
          ))}

          {/* CTA card */}
          <article className="group relative flex flex-col rounded-2xl border border-copper/25 bg-copper/5 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
            <span
              aria-hidden="true"
              className="absolute left-0 top-6 h-8 w-1 rounded-r-full bg-copper transition-all duration-300 group-hover:h-12"
            />
            <h3 className="text-xl text-navy">Need Something Else?</h3>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal-soft">
              Don't see your project listed? Cider Hill Construction handles a
              wide range of home repairs, improvements, and custom handyman work
              throughout Bluffton and the Lowcountry. Reach out and ask if we
              can help.
            </p>
            <a
              href={business.quoteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 self-start rounded-full bg-copper px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-copper-light"
            >
              Ask About Your Project
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </article>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-navy-soft"
          >
            Talk through your project
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
