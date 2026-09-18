import PageHeader from "../components/ui/PageHeader";
import BracketLink from "../components/ui/BracketLink";
import { usePageMeta } from "../hooks/usePageMeta";

/**
 * A real 404. Previously an unmatched path rendered nothing at all.
 */
export default function NotFound() {
  usePageMeta({
    title: "Page not found | Cider Hill Construction",
    description: "That page does not exist.",
  });

  return (
    <div className="min-h-[60svh]">
      <PageHeader
        label="404"
        title="That page does not exist"
        intro="It may have moved, or the link may be wrong."
      >
        <div className="mt-8 flex flex-wrap gap-8">
          <BracketLink to="/">home</BracketLink>
          <BracketLink to="/services">services</BracketLink>
          <BracketLink to="/work">work</BracketLink>
        </div>
      </PageHeader>
    </div>
  );
}
