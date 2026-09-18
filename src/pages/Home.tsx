import Hero from "../components/sections/Hero";
import StatementBlock from "../components/sections/StatementBlock";
import ServiceCoverflow from "../components/sections/ServiceCoverflow";
import SelectedWork from "../components/sections/SelectedWork";
import FullBleedBand from "../components/sections/FullBleedBand";
import ProofTiles from "../components/sections/ProofTiles";
import PullQuote from "../components/sections/PullQuote";
import CtaBand from "../components/sections/CtaBand";
import Rule from "../components/ui/Rule";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "Cider Hill Construction | Bluffton, SC",
    description:
      "Owner-operated construction and handyman work in Bluffton, South Carolina. Renovations, repairs, trim, siding, flooring and finish work. Licensed and insured.",
    path: "/",
    scrollTop: false,
  });

  return (
    <>
      <Hero />

      <StatementBlock
        text="Cider Hill runs a handful of jobs at a time so the person who quoted your work is the person standing in your house doing it."
        linkTo="/about"
        linkLabel="our approach"
      />

      <Rule />
      <ServiceCoverflow />
      <Rule />

      <SelectedWork />

      <FullBleedBand
        label="Why Cider Hill"
        blurb="Trained in New England, working in the Lowcountry since. Different climate, same standard for what a finished job should look like."
        linkTo="/about"
        linkLabel="about the work"
        media="exterior"
        alt="Exterior renovation work on a Lowcountry cottage"
      />

      <ProofTiles />

      <PullQuote text="Anyone can make it look right on handover day. The job is making it still look right in five years." />

      <CtaBand />
    </>
  );
}
