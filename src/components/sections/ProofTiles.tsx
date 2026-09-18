import { proofPoints } from "../../data/site";
import Reveal from "../ui/Reveal";

/**
 * Three tiles over stills.
 *
 * Deliberately non-numeric. There are no verified figures for years in trade
 * or jobs completed anywhere in this project, and inventing them is exactly
 * the sort of filler this redesign is removing. Swap in real numbers here the
 * moment Carson supplies them.
 */
export default function ProofTiles() {
  return (
    <section className="container-x py-20 md:py-24">
      <div className="grid gap-4 md:grid-cols-3">
        {proofPoints.map((point, i) => (
          <Reveal key={point.label} delay={i * 90}>
            <div className="relative h-64 overflow-hidden bg-ink">
              <img
                src={`/media/still/${point.still}-poster.jpg`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/90 to-ink/25"
              />
              <div className="relative flex h-full flex-col justify-end p-6">
                <h3 className="type-display text-[1.3rem] text-paper">
                  {point.label}
                </h3>
                <p className="mt-2 text-[0.8125rem] leading-snug text-paper/70">
                  {point.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
