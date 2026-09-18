import { useEffect, useRef, useState } from "react";
import { business } from "../../data/site";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import BracketLink from "../ui/BracketLink";

/**
 * The poster is a real <img> with fetchpriority="high", so the LCP element is
 * a ~56KB WebP rather than a 1.5MB video. The video layers over it and fades
 * in once it can actually play. If autoplay is refused, which is what iOS Low
 * Power Mode does, the poster simply stays. The previous hero had no poster at
 * all and showed a bare gradient until the 9.3MB file buffered.
 */
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = videoRef.current;
    if (!el) return;
    const onReady = () => setReady(true);
    el.addEventListener("canplay", onReady);
    el.play().catch(() => {
      /* refused; the poster carries the hero */
    });
    return () => el.removeEventListener("canplay", onReady);
  }, [reduced]);

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-ink">
      <picture>
        <source srcSet="/media/still/hero-poster.webp" type="image/webp" />
        <img
          src="/media/still/hero-poster.jpg"
          alt="A Lowcountry home at dusk with the interior lights on"
          // React 18 does not map the camelCase form; the lowercase
          // attribute passes straight through to the DOM.
          {...{ fetchpriority: "high" }}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      {!reduced && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          poster="/media/still/hero-poster.jpg"
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/media/video/hero.mp4" type="video/mp4" />
        </video>
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/45"
      />

      <div className="container-x relative flex h-full flex-col justify-end pb-16 md:pb-20">
        <p className="type-label text-paper/60">Bluffton, South Carolina</p>

        <h1 className="type-display mt-5 text-[clamp(2.1rem,6.4vw,5rem)] text-paper">
          New England craft,
          <br />
          Lowcountry homes
        </h1>

        <p className="mt-6 max-w-md text-[0.9375rem] leading-relaxed text-paper/75">
          Renovation, repair and finish carpentry, run by the person who does
          the work.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <BracketLink to="/work" tone="paper">
            see the work
          </BracketLink>
          <a
            href={business.phoneHref}
            className="text-[0.9375rem] text-paper/80 underline-offset-4 transition-colors hover:text-paper hover:underline"
          >
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
