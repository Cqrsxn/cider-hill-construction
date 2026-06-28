import { Link } from "react-router-dom";
import { ArrowRight } from "./icons";

export default function InteriorWork() {
  const cards = [
    {
      title: "Home Exterior & Renovation",
      description:
        "Full exterior home renovations, siding, trim work, and curb appeal upgrades for properties in Bluffton, SC and the surrounding Lowcountry. We handle the details that make a house look finished and well-maintained.",
      tags: ["Exterior Renovation", "Siding", "Trim Work", "Curb Appeal"],
      video: "/images/houseexterior-optimized.mp4",
      label: "Home exterior renovation project video",
      slug: "exterior-renovation",
    },
    {
      title: "Bathroom Wallpaper & Detail Work",
      description:
        "Clean, detailed bathroom updates that refresh the look of your space without needing a full remodel. Cider Hill handles wallpaper installation, bathroom trim, fixture updates, and interior finish work that makes a real difference.",
      tags: ["Bathroom Updates", "Wallpaper", "Trim", "Fixture Install"],
      video: "/images/bathroomwallpaper.mp4",
      label: "Bathroom wallpaper and detail work project video",
      slug: "kitchen-bathroom-renovations",
    },
    {
      title: "Home Wallpaper & Interior Finishes",
      description:
        "Interior finish work for walls, rooms, and home updates that make a space feel complete. From laundry rooms and closets to trim, flooring, and interior repairs — Cider Hill brings precision to every detail.",
      tags: ["Interior Finishes", "Laundry Rooms", "Closets", "Flooring"],
      video: "/images/housewallpaper.mp4",
      label: "Home wallpaper and interior finish work project video",
      slug: "home-renovations",
    },
  ];

  return (
    <section className="bg-cream-dark/40 py-20 md:py-28">
      <div className="container-x">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
            Interior Work
          </span>
          <h2 className="mt-3 text-3xl text-navy sm:text-4xl">
            Interior Updates &amp; Finish Work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal-soft">
            From exterior renovations and bathroom updates to interior finish work,
            Cider Hill handles the detail-focused projects that transform how a
            home looks and feels inside and out.
          </p>
        </div>

        {/* Two-card grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-3xl border border-cream-dark bg-white shadow-soft"
            >
              {/* Video */}
              <div
                className="relative overflow-hidden"
                aria-label={card.label}
              >
                <video
                  className="aspect-video w-full object-cover"
                  src={card.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>

              {/* Copy */}
              <div className="p-7">
                <h3 className="font-display text-xl text-navy sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft">
                  {card.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-copper/25 bg-copper/6 px-3 py-1 text-xs font-semibold text-copper"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/services/${card.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-forest transition-colors hover:text-copper"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Related services note */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-cream-dark bg-white px-8 py-6 shadow-soft">
          <p className="text-center text-sm leading-relaxed text-charcoal-soft">
            <span className="font-semibold text-navy">Related interior services:</span>{" "}
            exterior renovation · bathroom updates · laundry rooms · closets · trim · interior repairs
            · flooring · fixture installation · wallpaper · finish work
          </p>
        </div>
      </div>
    </section>
  );
}
