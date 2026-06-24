import { reasons } from "../data/site";
import SectionHeading from "./SectionHeading";
import { ShieldIcon, HouseIcon, HammerIcon, PhoneIcon, CheckIcon } from "./icons";

const icons = [HouseIcon, ShieldIcon, HammerIcon, PhoneIcon, CheckIcon];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div className="texture-wood pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-x relative">
        <SectionHeading
          tone="light"
          eyebrow="Why Cider Hill"
          title="Why Homeowners Choose Cider Hill"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article
                key={reason.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:bg-white/[0.07]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-cream">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl text-cream">{reason.title}</h3>
                <p className="mt-2 leading-relaxed text-cream/70">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
