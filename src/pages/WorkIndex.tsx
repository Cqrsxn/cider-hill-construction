import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import CtaBand from "../components/sections/CtaBand";
import { usePageMeta } from "../hooks/usePageMeta";

export default function WorkIndex() {
  usePageMeta({
    title: "Work | Cider Hill Construction",
    description:
      "Completed Cider Hill jobs in and around Bluffton, South Carolina. Fencing, stair carpentry, kitchens, exteriors, interior finishes and commercial fit-out.",
    path: "/work",
  });

  return (
    <>
      <PageHeader
        label="Work"
        title="Jobs we have finished"
        intro="Every clip and photograph here is a real Cider Hill job. No stock, no renders."
      />

      <div className="container-x pb-20">
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 90}>
              <Link to={`/work/${project.slug}`} className="group block">
                <div className="overflow-hidden bg-ink/5">
                  <img
                    src={`/media/still/${project.video}-poster.jpg`}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <p className="type-label mt-4 text-ink-faint">{project.category}</p>
                <h2 className="type-display mt-2 text-[1.3rem] transition-colors group-hover:text-copper">
                  {project.title}
                </h2>
                <p className="mt-2 max-w-md text-[0.875rem] leading-relaxed text-ink-soft">
                  {project.blurb}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
