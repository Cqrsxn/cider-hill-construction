import { services } from "../../data/services";
import { projects } from "../../data/projects";
import Coverflow from "../ui/Coverflow";
import BracketLink from "../ui/BracketLink";

/** A service gets video on its centre slide when a real job backs it up. */
const videoFor = (still: string) =>
  projects.find((p) => p.video === still)?.video;

export default function ServiceCoverflow() {
  const items = services.map((s) => ({
    slug: s.slug,
    title: s.title,
    summary: s.summary,
    still: s.still,
    video: videoFor(s.still),
  }));

  return (
    <section id="services" className="overflow-hidden py-20 md:py-28">
      <div className="container-x mb-14 text-center">
        <h2 className="type-display text-[clamp(1.35rem,3vw,2.1rem)]">
          What we take on
        </h2>
      </div>

      <Coverflow items={items} base="/services" label="What we take on" />

      <div className="container-x mt-12 text-center">
        <BracketLink to="/services">all services</BracketLink>
      </div>
    </section>
  );
}
