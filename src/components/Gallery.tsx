import { useMemo, useState } from "react";
import { gallery } from "../data/site";
import SectionHeading from "./SectionHeading";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { cn } from "../lib/cn";

export default function Gallery() {
  const categories = useMemo(() => {
    const set = new Set(gallery.map((g) => g.category));
    return ["All", ...Array.from(set)];
  }, []);

  const [active, setActive] = useState("All");

  const items =
    active === "All" ? gallery : gallery.filter((g) => g.category === active);

  const hasRealPhotos = gallery.some((g) => g.image);

  return (
    <section id="work" className="bg-cream-dark/40 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Work"
          title="Recent Work"
          intro="A look at the kind of projects Cider Hill takes on — from full renovations to the small repairs that make a home better to live in."
        />

        {/* Filter chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === cat
                  ? "bg-navy text-cream"
                  : "bg-white text-charcoal-soft hover:bg-cream-dark",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <figure
              key={`${item.label}-${i}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-soft"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.label}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <PhotoPlaceholder
                  badge={item.category}
                  label={`${item.label} — photo coming soon`}
                  className="aspect-[4/3] w-full rounded-none border-0"
                />
              )}
              <figcaption className="flex items-center justify-between px-5 py-4">
                <span className="font-display text-lg text-navy">
                  {item.label}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-copper">
                  {item.category}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {!hasRealPhotos && (
          <p className="mx-auto mt-10 max-w-xl rounded-xl border border-dashed border-copper/40 bg-copper/5 px-5 py-4 text-center text-sm text-charcoal-soft">
            <span className="font-semibold text-copper">Placeholder gallery.</span>{" "}
            Real project photos will replace these cards. Add images to{" "}
            <code className="rounded bg-white px-1.5 py-0.5 text-xs">
              website/public/images/
            </code>{" "}
            and update <code className="rounded bg-white px-1.5 py-0.5 text-xs">src/data/site.ts</code>.
          </p>
        )}
      </div>
    </section>
  );
}
