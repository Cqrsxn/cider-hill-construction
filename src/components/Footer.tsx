import { business, nav, serviceAreas, services } from "../data/site";
import {
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  ShieldIcon,
  MapPinIcon,
  ArrowRight,
} from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-cream/80">
      {/* Pre-footer CTA band */}
      <div className="border-b border-white/8 bg-navy">
        <div className="container-x py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="font-display text-2xl text-cream">
                Ready to start your project?
              </p>
              <p className="mt-1 text-cream/65">
                Tell us what you need done and we'll help you plan the next step.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
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
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-white/8"
              >
                <PhoneIcon className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand — real logo */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/images/ciderhillLOGO.jpg"
                alt="Cider Hill Construction and Handyman Services LLC"
                className="h-16 w-16 rounded-full object-cover ring-1 ring-copper/30"
              />
              <div className="leading-tight">
                <p className="font-display text-lg font-semibold text-cream">
                  Cider Hill Construction
                </p>
                <p className="text-xs text-cream/50">Construction &amp; Handyman Services</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/65">
              {business.name}. Owner-operated construction and handyman services
              bringing reliable New England craftsmanship to Lowcountry homes and
              businesses.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-cream/80">
              <ShieldIcon className="h-4 w-4 text-forest-light" />
              Licensed &amp; Insured
            </p>
            <div className="mt-5 flex items-center gap-1.5 text-xs text-cream/55">
              <MapPinIcon className="h-3.5 w-3.5 shrink-0" />
              Bluffton, SC 29910
            </div>
          </div>

          {/* Site nav */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-cream/65 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 7).map((service) => (
                <li key={service.title}>
                  {service.slug ? (
                    <a
                      href={`/services/${service.slug}`}
                      className="text-cream/65 transition-colors hover:text-cream"
                    >
                      {service.title}
                    </a>
                  ) : (
                    <span className="text-cream/65">{service.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-2 text-cream/75 transition-colors hover:text-cream"
                >
                  <PhoneIcon className="h-4 w-4 text-forest-light" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={business.emailHref}
                  className="inline-flex items-center gap-2 break-all text-cream/75 transition-colors hover:text-cream"
                >
                  <MailIcon className="h-4 w-4 text-forest-light" />
                  {business.email}
                </a>
              </li>
              <li>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cream/75 transition-colors hover:text-cream"
                >
                  <FacebookIcon className="h-4 w-4 text-forest-light" />
                  Facebook Page
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={business.quoteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-copper/90 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-copper"
                >
                  Book a Free Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Service areas */}
        <div className="mt-10 border-t border-white/8 pt-8">
          <p className="text-xs text-cream/45">
            <span className="font-semibold text-cream/60">Service Areas: </span>
            {serviceAreas.join(" · ")} · and surrounding Lowcountry communities
          </p>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-white/8 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>Quality New England Craftsmanship · Licensed &amp; Insured · Bluffton, SC</p>
        </div>
      </div>
    </footer>
  );
}
