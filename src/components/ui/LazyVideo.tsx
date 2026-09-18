import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { cn } from "../../lib/cn";

type Props = {
  /** Base name shared by /media/video/<name>.mp4 and /media/still/<name>-poster.jpg */
  name: string;
  /** Real description of the footage. */
  alt: string;
  /** Prevents layout shift before the poster resolves. */
  aspect?: string;
  className?: string;
  /** Set only on the hero. Everything else waits for the viewport. */
  eager?: boolean;
};

/**
 * Poster paints first, always.
 *
 * Deliberately has no autoPlay attribute and uses preload="none". The old
 * build had nine autoplaying videos at preload="metadata", which fired nine
 * requests and nine decoders on load. Here the source is attached only when
 * the clip is near the viewport, playback starts only while it is actually
 * on screen, and it pauses again when it leaves.
 */
export default function LazyVideo({
  name,
  alt,
  aspect = "16 / 9",
  className,
  eager = false,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [armed, setArmed] = useState(eager);
  const reduced = usePrefersReducedMotion();

  // 1. Attach <source> once we are within 300px of the viewport.
  useEffect(() => {
    if (armed) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setArmed(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArmed(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [armed]);

  // 2. React inserting <source> children does NOT make the element
  //    re-evaluate its sources. Without this call, arming does nothing.
  useEffect(() => {
    if (armed) ref.current?.load();
  }, [armed]);

  // 3. Play only while visible. Reduced motion means the poster stands alone.
  useEffect(() => {
    const el = ref.current;
    if (!el || !armed || reduced) return;
    if (typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {
            /* autoplay refused, e.g. iOS Low Power Mode. Poster stands in. */
          });
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [armed, reduced]);

  return (
    <video
      ref={ref}
      className={cn("h-full w-full object-cover", className)}
      poster={`/media/still/${name}-poster.jpg`}
      style={{ aspectRatio: aspect }}
      muted
      loop
      playsInline
      preload="none"
      aria-label={alt}
    >
      {armed && <source src={`/media/video/${name}.mp4`} type="video/mp4" />}
    </video>
  );
}
