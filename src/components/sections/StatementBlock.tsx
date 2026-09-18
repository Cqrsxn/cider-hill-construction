import RevealText from "../ui/RevealText";
import BracketLink from "../ui/BracketLink";

type Props = {
  text: string;
  linkTo: string;
  linkLabel: string;
};

/**
 * The big centered statement that carries the page between sections.
 * Text wipes from faint to ink as it scrolls in.
 */
export default function StatementBlock({ text, linkTo, linkLabel }: Props) {
  return (
    <section className="container-x py-24 text-center md:py-36">
      <RevealText
        text={text}
        className="type-display mx-auto max-w-[22ch] text-[clamp(1.6rem,4.2vw,3.1rem)]"
      />
      <div className="mt-10">
        <BracketLink to={linkTo}>{linkLabel}</BracketLink>
      </div>
    </section>
  );
}
