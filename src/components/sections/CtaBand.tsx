import { Link } from "react-router-dom";

/** Full-bleed copper band. One link, oversized. */
export default function CtaBand() {
  return (
    <section className="bg-copper">
      <Link
        to="/contact"
        className="container-x group flex items-center justify-center py-14 text-center md:py-20"
      >
        <span className="type-display text-[clamp(1.5rem,5vw,3.2rem)] text-paper underline decoration-paper/40 decoration-1 underline-offset-[0.22em] transition-colors group-hover:decoration-paper">
          Start your project
        </span>
      </Link>
    </section>
  );
}
