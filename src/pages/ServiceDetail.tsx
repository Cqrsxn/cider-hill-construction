import { Link, useParams } from "react-router-dom";
import { getService, services } from "../data/services";
import { projects } from "../data/projects";
import PageHeader from "../components/ui/PageHeader";
import BracketLink from "../components/ui/BracketLink";
import CtaBand from "../components/sections/CtaBand";
import NotFound from "./NotFound";
import { usePageMeta } from "../hooks/usePageMeta";
import { CheckIcon } from "../components/icons";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  usePageMeta({
    title: service
      ? `${service.title} | Cider Hill Construction`
      : "Not found | Cider Hill Construction",
    description: service?.summary,
    path: service ? `/services/${service.slug}` : undefined,
  });

  if (!service) return <NotFound />;

  const related = service.related
    .map((s) => services.find((x) => x.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relatedWork = projects.filter((p) => p.services.includes(service.slug));

  return (
    <>
      <PageHeader label="Service" title={service.title} intro={service.intro}>
        <div className="mt-8">
          <BracketLink to="/services">all services</BracketLink>
        </div>
      </PageHeader>

      <div className="container-x pb-20">
        <img
          src={`/media/still/${service.still}-poster.jpg`}
          alt={service.title}
          loading="lazy"
          decoding="async"
          className="aspect-[21/9] w-full object-cover"
        />
      </div>

      <div className="container-x grid gap-12 pb-20 lg:grid-cols-[1fr_20rem]">
        <section>
          <h2 className="type-label text-ink-faint">What the job covers</h2>
          <ul className="mt-6 rule-t">
            {service.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-b border-[var(--hairline)] py-4 text-[0.9375rem] text-ink-soft"
              >
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-copper" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <aside className="space-y-10">
          {relatedWork.length > 0 && (
            <div>
              <h2 className="type-label text-ink-faint">Jobs like this</h2>
              <ul className="mt-5 space-y-3">
                {relatedWork.map((project) => (
                  <li key={project.slug}>
                    <Link
                      to={`/work/${project.slug}`}
                      className="group flex items-center gap-4"
                    >
                      <img
                        src={`/media/still/${project.video}-poster.jpg`}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="h-14 w-20 shrink-0 object-cover"
                      />
                      <span className="text-[0.875rem] text-ink-soft transition-colors group-hover:text-copper">
                        {project.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="type-label text-ink-faint">Related services</h2>
            <ul className="mt-5 space-y-2.5">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/services/${r.slug}`}
                    className="text-[0.875rem] text-ink-soft transition-colors hover:text-copper"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <CtaBand />
    </>
  );
}
