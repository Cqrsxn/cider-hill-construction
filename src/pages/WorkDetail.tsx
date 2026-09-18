import { Link, useParams } from "react-router-dom";
import { getProject, projects } from "../data/projects";
import { services } from "../data/services";
import PageHeader from "../components/ui/PageHeader";
import BracketLink from "../components/ui/BracketLink";
import LazyVideo from "../components/ui/LazyVideo";
import CtaBand from "../components/sections/CtaBand";
import NotFound from "./NotFound";
import { usePageMeta } from "../hooks/usePageMeta";

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  usePageMeta({
    title: project
      ? `${project.title} | Cider Hill Construction`
      : "Not found | Cider Hill Construction",
    description: project?.blurb,
    path: project ? `/work/${project.slug}` : undefined,
  });

  if (!project) return <NotFound />;

  const used = project.services
    .map((s) => services.find((x) => x.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <PageHeader label={project.category} title={project.title}>
        <div className="mt-8">
          <BracketLink to="/work">all projects</BracketLink>
        </div>
      </PageHeader>

      <div className="container-x pb-16">
        <div className="overflow-hidden bg-ink">
          <LazyVideo name={project.video} alt={project.title} aspect="16 / 9" />
        </div>
      </div>

      <div className="container-x grid gap-12 pb-20 lg:grid-cols-[1fr_18rem]">
        <div className="max-w-2xl space-y-5">
          {project.body.map((paragraph) => (
            <p key={paragraph} className="text-[1rem] leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="space-y-10">
          <div>
            <h2 className="type-label text-ink-faint">Scope</h2>
            <ul className="mt-5 rule-t">
              {project.scope.map((item) => (
                <li
                  key={item}
                  className="border-b border-[var(--hairline)] py-3 text-[0.875rem] text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="type-label text-ink-faint">Services used</h2>
            <ul className="mt-5 space-y-2.5">
              {used.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-[0.875rem] text-ink-soft transition-colors hover:text-copper"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <section className="container-x rule-t py-16">
        <h2 className="type-label text-ink-faint">More work</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {others.map((other) => (
            <Link key={other.slug} to={`/work/${other.slug}`} className="group block">
              <img
                src={`/media/still/${other.video}-poster.jpg`}
                alt={other.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <h3 className="type-display mt-3 text-[1rem] transition-colors group-hover:text-copper">
                {other.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
