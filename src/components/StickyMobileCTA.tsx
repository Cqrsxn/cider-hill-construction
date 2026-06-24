import { business } from "../data/site";
import { PhoneIcon, ArrowRight } from "./icons";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={business.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-4 py-3 text-sm font-semibold text-cream"
        >
          <PhoneIcon className="h-4 w-4" />
          Call Now
        </a>
        <a
          href={business.quoteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-4 py-3 text-sm font-semibold text-white"
        >
          Free Quote
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
