import { Link } from "react-router-dom";
import { business, nav, serviceAreas } from "../data/site";
import { services } from "../data/services";
import Wordmark from "./ui/Wordmark";

/**
 * The sitemap footer Carson asked for.
 *
 * Four columns, then the oversized wordmark. Service links are react-router
 * <Link>s now; they used to be raw <a href> which forced a full page reload
 * on every footer click. There is no newsletter column: Cider Hill does not
 * send a newsletter, so the fourth column is how to actually start a job.
 */
export default function Footer() {
  return (
    <footer className="rule-t bg-paper">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <h2 className="type-label text-ink-faint">Office</h2>
          <address className="mt-5 space-y-2 text-[0.875rem] not-italic leading-relaxed text-ink-soft">
            <p className="font-bold text-ink">{business.shortName}</p>
            <p>{business.location}</p>
            <p>
              <a href={business.phoneHref} className="transition-colors hover:text-copper">
                {business.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={business.emailHref} className="transition-colors hover:text-copper">
                {business.email}
              </a>
            </p>
          </address>
          <p className="mt-5 text-[0.8125rem] text-ink-faint">Licensed and insured</p>
        </div>

        <div>
          <h2 className="type-label text-ink-faint">Site</h2>
          <ul className="mt-5 space-y-2.5 text-[0.875rem] text-ink-soft">
            <li>
              <Link to="/" className="transition-colors hover:text-copper">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-copper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="type-label text-ink-faint">Services</h2>
          <ul className="mt-5 space-y-2.5 text-[0.875rem] text-ink-soft">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="transition-colors hover:text-copper"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="type-label text-ink-faint">Start a project</h2>
          <p className="mt-5 text-[0.875rem] leading-relaxed text-ink-soft">
            Tell us what needs doing and we will come and look at it.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block bg-ink px-6 py-3 text-[0.8125rem] font-bold text-paper transition-colors hover:bg-copper"
          >
            Get a free estimate
          </Link>
          <p className="mt-6 text-[0.8125rem] text-ink-soft">
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-copper"
            >
              Facebook
            </a>
          </p>
          <p className="mt-6 text-[0.8125rem] leading-relaxed text-ink-faint">
            Working in {serviceAreas.slice(0, 3).join(", ")} and the surrounding
            area.
          </p>
        </div>
      </div>

      <div className="container-x pb-6">
        <Wordmark className="text-ink/12" />
      </div>

      <div className="rule-t">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-5 text-[0.75rem] text-ink-faint">
          <p>
            &copy; {new Date().getFullYear()} {business.name}
          </p>
          <p>
            <a
              href="https://handrandevelopment.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-copper"
            >
              Site by Handran Development
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
