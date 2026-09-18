import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import LazyVideo from "./LazyVideo";
import { ArrowLeft, ArrowRight } from "../icons";
import { cn } from "../../lib/cn";

export type CoverflowItem = {
  slug: string;
  title: string;
  summary: string;
  still: string;
  video?: string;
};

type Props = {
  items: CoverflowItem[];
  /** Prefix for each slide link, e.g. "/services". */
  base: string;
  label: string;
};

/** Slides further than this from centre are not painted. */
const VISIBLE_SPAN = 2;

export default function Coverflow({ items, base, label }: Props) {
  const [active, setActive] = useState(Math.floor(items.length / 2));
  const [drag, setDrag] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const liveId = useId();

  const clamp = useCallback(
    (n: number) => Math.max(0, Math.min(items.length - 1, n)),
    [items.length],
  );

  const go = useCallback((n: number) => setActive((a) => clamp(n ?? a)), [clamp]);

  /* ---------------- pointer drag, with axis locking ---------------- */
  const gesture = useRef<{
    id: number;
    x: number;
    y: number;
    axis: "none" | "x" | "y";
    width: number;
  } | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    if (reduced) return;
    gesture.current = {
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      axis: "none",
      width: trackRef.current?.clientWidth ?? 1,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const g = gesture.current;
    if (!g || g.id !== e.pointerId) return;

    const dx = e.clientX - g.x;
    const dy = e.clientY - g.y;

    // Lock the axis on the first meaningful movement. Without this a
    // diagonal swipe hijacks vertical page scrolling, which is the single
    // most common way a touch carousel ruins a phone.
    if (g.axis === "none") {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      g.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      if (g.axis === "x") {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      }
    }
    if (g.axis !== "x") return;

    // One slide of travel per 55% of the track width.
    setDrag(-dx / (g.width * 0.55));
  };

  const endGesture = (e: React.PointerEvent) => {
    const g = gesture.current;
    if (!g || g.id !== e.pointerId) return;
    if (g.axis === "x") {
      setActive((a) => clamp(Math.round(a + drag)));
    }
    setDrag(0);
    gesture.current = null;
  };

  /* ---------------- keyboard ---------------- */
  const onKeyDown = (e: React.KeyboardEvent) => {
    const keys: Record<string, number> = {
      ArrowLeft: active - 1,
      ArrowRight: active + 1,
      Home: 0,
      End: items.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      go(keys[e.key]);
    }
  };

  /* Keep the active slide in view when the list is navigated by keyboard. */
  useEffect(() => {
    if (!reduced) return;
    const el = trackRef.current?.querySelector<HTMLElement>(`[data-slide="${active}"]`);
    el?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [active, reduced]);

  /* ------------------------------------------------------------------
     Reduced motion: a plain horizontal scroll-snap row. No transforms,
     so there is no interaction between snap positions and 3D transforms.
  ------------------------------------------------------------------ */
  if (reduced) {
    return (
      <div
        ref={trackRef}
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-[10vw] py-4"
      >
        {items.map((item, i) => (
          <div key={item.slug} data-slide={i} className="w-[72vw] shrink-0 snap-center sm:w-[340px]">
            <Slide item={item} base={base} index={i} total={items.length} isActive />
          </div>
        ))}
      </div>
    );
  }

  const offsetOf = (i: number) => i - active - drag;

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endGesture}
        onPointerCancel={endGesture}
        className="relative h-[clamp(380px,56vh,540px)] touch-pan-y select-none"
        style={{ perspective: "1600px" }}
      >
        {items.map((item, i) => {
          const d = offsetOf(i);
          const ad = Math.abs(d);
          if (ad > VISIBLE_SPAN) return null;

          return (
            <div
              key={item.slug}
              data-slide={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
              onFocusCapture={() => go(i)}
              className="coverflow-slide absolute left-1/2 top-1/2 w-[64vw] max-w-[320px] sm:w-[300px]"
              style={{
                height: "clamp(340px, 50vh, 480px)",
                transform: `translate(-50%, -50%) translateX(${d * 58}%) rotateY(${
                  Math.max(-30, Math.min(30, d * -22))
                }deg) translateZ(${-ad * 90}px) scale(${Math.max(0.6, 1 - ad * 0.09)})`,
                opacity: Math.max(0.28, 1 - ad * 0.22),
                zIndex: 100 - Math.round(ad * 10),
                transition: gesture.current?.axis === "x" ? "none" : "transform .55s cubic-bezier(.22,1,.36,1), opacity .55s",
                transformStyle: "preserve-3d",
                // Quantised so it only repaints when a threshold is crossed
                // rather than on every frame, and exposed as a custom property
                // so CSS can switch it off entirely on small screens.
                ["--blur" as string]: ad > 1.5 ? "2px" : ad > 0.5 ? "1px" : "0px",
              }}
            >
              <Slide
                item={item}
                base={base}
                index={i}
                total={items.length}
                isActive={Math.round(active + drag) === i}
              />
            </div>
          );
        })}
      </div>

      <Controls
        active={active}
        total={items.length}
        onGo={go}
        liveId={liveId}
        titles={items.map((i) => i.title)}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Slide({
  item,
  base,
  index,
  total,
  isActive,
}: {
  item: CoverflowItem;
  base: string;
  index: number;
  total: number;
  isActive: boolean;
}) {
  return (
    <Link
      to={`${base}/${item.slug}`}
      className="group relative block h-full w-full overflow-hidden bg-ink/5"
      draggable={false}
    >
      {/* Only the centre slide mounts a video. Siblings stay as stills, which
          caps concurrent decoders at one. */}
      {isActive && item.video ? (
        <LazyVideo name={item.video} alt={item.title} aspect="3 / 4" className="absolute inset-0" />
      ) : (
        <img
          src={`/media/still/${item.still}-poster.jpg`}
          alt={item.title}
          draggable={false}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="type-label text-paper/60">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <h3 className="type-display mt-2 text-[1.45rem] text-paper">{item.title}</h3>
        <p className="mt-2 text-[0.8125rem] leading-snug text-paper/75">{item.summary}</p>
      </div>
    </Link>
  );
}

function Controls({
  active,
  total,
  onGo,
  liveId,
  titles,
}: {
  active: number;
  total: number;
  onGo: (n: number) => void;
  liveId: string;
  titles: string[];
}) {
  return (
    <div className="mt-8 flex items-center justify-center gap-5">
      <button
        type="button"
        onClick={() => onGo(active - 1)}
        disabled={active === 0}
        aria-label="Previous service"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      <div className="flex items-center gap-2">
        {titles.map((title, i) => (
          <button
            key={title}
            type="button"
            onClick={() => onGo(i)}
            aria-label={title}
            aria-current={i === active ? "true" : undefined}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === active ? "w-6 bg-ink" : "w-1.5 bg-ink/25 hover:bg-ink/50",
            )}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => onGo(active + 1)}
        disabled={active === total - 1}
        aria-label="Next service"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
      >
        <ArrowRight className="h-4 w-4" />
      </button>

      <p id={liveId} aria-live="polite" className="sr-only">
        {titles[active]}, {active + 1} of {total}
      </p>
    </div>
  );
}
