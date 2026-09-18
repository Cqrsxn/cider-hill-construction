import { Link } from "react-router-dom";
import { featuredProjects } from "../../data/projects";
import Reveal from "../ui/Reveal";
import BracketLink from "../ui/BracketLink";

/**
 * Three jobs, a line each, then out to /work. Carson asked for a short blurb
 * and a subpage rather than the card wall this replaces.
 */
export default function SelectedWork() {
  return (
    <section id="work" className="container-x py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="type-display text-[clamp(1.35rem,3vw,2.1rem)]">
          Selected work
        </h2>
        <BracketLink to="/work">all projects</BracketLink>
      </div>

      <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 90}>
            <Link to={`/work/${project.slug}`} className="group block">
              <div className="relative overflow-hidden bg-ink/5">
                <img
                  src={`/media/still/${project.video}-poster.jpg`}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <p className="type-label mt-4 text-ink-faint">{project.category}</p>
              <h3 className="type-display mt-2 text-[1.15rem] transition-colors group-hover:text-copper">
                {project.title}
              </h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-soft">
                {project.blurb}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
