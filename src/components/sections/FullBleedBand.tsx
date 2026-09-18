import LazyVideo from "../ui/LazyVideo";
import BracketLink from "../ui/BracketLink";

type Props = {
  label: string;
  blurb: string;
  linkTo: string;
  linkLabel: string;
  /** Base name in /media/video and /media/still. */
  media: string;
  alt: string;
};

/**
 * Full-bleed band: small label top-left, blurb bottom-left, CTA bottom-right.
 *
 * Uses the video rather than a still on purpose. The source footage is 720p
 * phone video, and motion carries a 100vw band far better than an upscaled
 * frame of it does.
 */
export default function FullBleedBand({
  label,
  blurb,
  linkTo,
  linkLabel,
  media,
  alt,
}: Props) {
  return (
    <section className="relative h-[78svh] min-h-[440px] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <LazyVideo name={media} alt={alt} aspect="16 / 9" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/50"
      />

      <div className="container-x relative flex h-full flex-col justify-between py-12 md:py-14">
        <p className="type-label text-paper">{label}</p>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="max-w-sm text-[0.9375rem] leading-relaxed text-paper/85">
            {blurb}
          </p>
          <BracketLink to={linkTo} tone="paper">
            {linkLabel}
          </BracketLink>
        </div>
      </div>
    </section>
  );
}
