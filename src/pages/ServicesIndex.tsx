import { Link } from "react-router-dom";
import { services } from "../data/services";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import CtaBand from "../components/sections/CtaBand";
import { ArrowUpRight } from "../components/icons";
import { usePageMeta } from "../hooks/usePageMeta";

/**
 * A numbered index rather than a card grid. Carson's note on the old build
 * was that every section was cards and they all looked bad.
 */
export default function ServicesIndex() {
  usePageMeta({
    title: "Services | Cider Hill Construction",
    description:
      "Renovations, handyman work, kitchens and bathrooms, flooring, trim, siding, doors and windows, fixtures, roofing repair and commercial work in Bluffton, SC.",
    path: "/services",
  });

  return (
    <>
      <PageHeader
        label="Services"
        title="What we take on"
        intro="Eleven kinds of work, all of it done by the same crew. If what you need is not listed, it is still worth asking."
      />

      <div className="container-x pb-20">
        <ul className="rule-t">
          {services.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={i * 40}>
              <Link
                to={`/services/${service.slug}`}
                className="group grid items-baseline gap-x-6 gap-y-2 border-b border-[var(--hairline)] py-7 md:grid-cols-[4rem_minmax(0,18rem)_1fr_auto]"
              >
                <span className="type-label text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="type-display text-[1.35rem] transition-colors group-hover:text-copper">
                  {service.title}
                </h2>
                <p className="text-[0.875rem] leading-relaxed text-ink-soft">
                  {service.summary}
                </p>
                <ArrowUpRight className="hidden h-5 w-5 text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:text-copper md:block" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>

      <CtaBand />
    </>
  );
}
