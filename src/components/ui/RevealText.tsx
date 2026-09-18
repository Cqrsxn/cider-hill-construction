import { useInView } from "../../hooks/useInView";
import { cn } from "../../lib/cn";

type Props = {
  text: string;
  className?: string;
  as?: "h2" | "p" | "h1";
};

/**
 * Orwell's faint-to-ink wipe. Splits on words and staggers the colour
 * transition. Words stay selectable and readable as one string to a
 * screen reader because the wrapper keeps normal text flow.
 */
export default function RevealText({ text, className, as: Tag = "h2" }: Props) {
  const { ref, inView } = useInView<HTMLHeadingElement>();
  const words = text.split(" ");

  return (
    <Tag
      ref={ref}
      className={cn("reveal-block text-balance", inView && "is-visible", className)}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="reveal-word"
          style={{ ["--i" as string]: i }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
