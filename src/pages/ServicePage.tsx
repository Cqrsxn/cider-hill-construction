import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getServicePageBySlug, servicePages } from "../data/service-pages";
import { business, serviceAreas } from "../data/site";
import { CheckIcon, ArrowRight, PhoneIcon, MailIcon, MapPinIcon } from "../components/icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyMobileCTA from "../components/StickyMobileCTA";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getServicePageBySlug(slug) : undefined;

  useEffect(() => {
    if (page) {
      document.title = page.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", page.metaDescription);
    }
    window.scrollTo(0, 0);
  }, [page]);

  if (!page) {
    return (
      <>
        <Header />
        <main className="flex min-h-screen items-center justify-center bg-cream pt-20">
          <div className="container-x py-20 text-center">
            <h1 className="font-display text-4xl text-navy">Page Not Found</h1>
            <p className="mt-4 text-charcoal-soft">
              That service page doesn't exist.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-copper px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-copper-light"
            >
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedPages = page.relatedSlugs
    .map((s) => servicePages.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="texture-wood pointer-events-none absolute inset-0 opacity-50" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 80% at 80% -10%, rgba(60,115,99,0.35) 0%, transparent 55%)",
            }}
          />
          <div className="container-x relative">
            <div className="flex items-center gap-2 text-xs text-cream/50">
              <Link to="/" className="hover:text-cream">
                Home
              </Link>
              <span>/</span>
              <Link to="/#services" className="hover:text-cream">
                Services
              </Link>
              <span>/</span>
              <span className="text-cream/80">{page.eyebrow}</span>
            </div>
            <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-copper-light">
              {page.eyebrow}
            </span>
            <h1 className="mt-3 font-display text-4xl leading-tight text-cream sm:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/80">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={business.quoteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-copper px-7 py-3.5 text-base font-semibold text-white shadow-lift transition-colors hover:bg-copper-light"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-white/10"
              >
                <PhoneIcon className="h-5 w-5" />
                {business.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* Services list */}
        <section className="bg-cream py-16 md:py-24">
          <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="font-display text-2xl text-navy sm:text-3xl">
                Services Included
              </h2>
              <ul className="mt-6 space-y-3">
                {page.servicesList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                    <span className="text-[16px] leading-relaxed text-charcoal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 font-display text-2xl text-navy sm:text-3xl">
                Why Choose Cider Hill Construction
              </h2>
              <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-charcoal-soft">
                {[
                  "Owner-operated — you work directly with the person doing the job, not a middleman.",
                  "Licensed and insured for your peace of mind.",
                  "Clear estimates and honest communication from start to finish.",
                  "Quality New England craftsmanship applied to every Lowcountry project.",
                  "Available for both large renovation projects and smaller repairs.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* CTA card */}
              <div className="rounded-2xl bg-navy p-7 shadow-lift">
                <h3 className="font-display text-xl text-cream">
                  Ready to Get Started?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  Contact Cider Hill Construction for a free quote on your
                  project in Bluffton or the surrounding Lowcountry.
                </p>
                <div className="mt-5 space-y-3">
                  <a
                    href={business.quoteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 rounded-full bg-copper px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-copper-light"
                  >
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={business.phoneHref}
                    className="flex items-center justify-center gap-2 rounded-full border border-cream/20 px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-white/10"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    {business.phoneDisplay}
                  </a>
                  <a
                    href={business.emailHref}
                    className="flex items-center justify-center gap-2 rounded-full border border-cream/20 px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-white/10"
                  >
                    <MailIcon className="h-4 w-4" />
                    {business.email}
                  </a>
                </div>
              </div>

              {/* Service areas */}
              <div className="rounded-2xl border border-cream-dark bg-white p-6 shadow-soft">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-forest" />
                  <h3 className="font-semibold text-navy">Nearby Service Areas</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-cream-dark bg-cream px-3 py-1 text-xs font-medium text-charcoal-soft"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related services */}
              {relatedPages.length > 0 && (
                <div className="rounded-2xl border border-cream-dark bg-white p-6 shadow-soft">
                  <h3 className="font-semibold text-navy">Related Services</h3>
                  <ul className="mt-4 space-y-2">
                    {relatedPages.map((related) =>
                      related ? (
                        <li key={related.slug}>
                          <Link
                            to={`/services/${related.slug}`}
                            className="flex items-center gap-2 text-sm text-charcoal-soft transition-colors hover:text-copper"
                          >
                            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-copper" />
                            {related.eyebrow}
                          </Link>
                        </li>
                      ) : null,
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-cream-dark/40 py-16">
          <div className="container-x">
            <div className="rounded-3xl bg-navy px-8 py-12 text-center shadow-lift md:px-16">
              <div className="texture-wood pointer-events-none absolute inset-0 rounded-3xl opacity-30" />
              <p className="font-display text-2xl text-cream sm:text-3xl">
                Ready to start your project in Bluffton?
              </p>
              <p className="mx-auto mt-3 max-w-xl text-cream/70">
                Tell us what you need done and Cider Hill Construction will help
                you plan the next step. No obligation, no pressure.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
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
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  );
}
