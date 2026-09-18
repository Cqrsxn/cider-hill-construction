import RevealText from "../ui/RevealText";

/**
 * Oversized brackets around a statement.
 *
 * This is a brand line, not a testimonial, and it is not attributed to anyone.
 * `reviews` in site.ts is empty by design and the codebase carries a standing
 * rule against inventing reviews. When real ones arrive they belong here.
 *
 * The brackets are drawn with borders rather than set as glyphs. The CJK
 * bracket characters this shape is usually built from do not exist in Archivo
 * and would silently fall back to a system font at a different weight.
 */
export default function PullQuote({ text }: { text: string }) {
  return (
    <section className="container-x py-24 md:py-32">
      <figure className="relative mx-auto max-w-3xl px-10 md:px-20">
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-6 border-y-2 border-l-2 border-ink/20 md:w-12"
        />
        <span
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-6 border-y-2 border-r-2 border-ink/20 md:w-12"
        />
        <blockquote className="py-10 text-center md:py-14">
          <RevealText
            as="p"
            text={text}
            className="type-display text-[clamp(1.25rem,3vw,2.15rem)]"
          />
        </blockquote>
      </figure>
    </section>
  );
}
