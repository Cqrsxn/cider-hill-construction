import { business } from "../data/site";
import { CheckIcon, ArrowRight, ShieldIcon } from "./icons";

const highlights = [
  "Owner-operated — work directly with the person on the job",
  "Licensed and insured for your peace of mind",
  "Honest communication and clear estimates",
  "Major renovations to everyday repairs",
  "Quality New England craftsmanship",
  "Serving Bluffton, Hilton Head & the Lowcountry",
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Logo visual */}
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <div className="relative">
            {/* Glow ring behind logo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 scale-110 rounded-full bg-forest/10 blur-2xl"
            />
            <img
              src="/images/ciderhillLOGO.jpg"
              alt="Cider Hill Construction and Handyman Services LLC"
              className="relative h-56 w-56 rounded-full object-cover shadow-lift ring-4 ring-copper/20 sm:h-64 sm:w-64"
            />
          </div>

          {/* Trust badges below logo */}
          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-forest/30 bg-forest-soft px-4 py-2 text-sm font-semibold text-forest">
              <ShieldIcon className="h-4 w-4" />
              Licensed &amp; Insured
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper/8 px-4 py-2 text-sm font-semibold text-copper">
              Owner-Operated
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-navy/5 px-4 py-2 text-sm font-semibold text-navy">
              Bluffton, SC
            </span>
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
            About Us
          </span>
          <h2 className="mt-3 text-3xl text-navy sm:text-4xl">
            About Cider Hill Construction in Bluffton, SC
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-charcoal-soft">
            Cider Hill Construction and Handyman Services LLC provides dependable
            construction, renovation, repair, and handyman services throughout
            Bluffton and the surrounding Lowcountry.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-charcoal-soft">
            From everyday repairs to larger home improvement projects, the focus
            is clean craftsmanship, clear communication, and work done with care.
            Whether you need help with a bathroom update, exterior repairs,
            flooring, trim, siding, or a custom project, Cider Hill delivers
            quality New England craftsmanship to your Lowcountry home or business.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[15px] font-medium text-navy"
              >
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={business.quoteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-forest-light"
          >
            Get a Free Quote
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
