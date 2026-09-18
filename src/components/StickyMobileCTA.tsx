import { Link } from "react-router-dom";
import { business } from "../data/site";
import { PhoneIcon } from "./icons";

/** Kept from the previous build. It converts. Restyled to the new palette. */
export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-paper/15 bg-ink/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={business.phoneHref}
          className="inline-flex items-center justify-center gap-2 border border-paper/30 px-4 py-3 text-[0.8125rem] font-bold text-paper"
        >
          <PhoneIcon className="h-4 w-4" />
          Call
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-copper px-4 py-3 text-[0.8125rem] font-bold text-paper"
        >
          Free estimate
        </Link>
      </div>
    </div>
  );
}
