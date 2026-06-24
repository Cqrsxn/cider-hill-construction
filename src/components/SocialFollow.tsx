import { business } from "../data/site";
import { FacebookIcon, ArrowRight } from "./icons";

export default function SocialFollow() {
  return (
    <section className="bg-cream-dark/40 py-20 md:py-24">
      <div className="container-x">
        <div className="overflow-hidden rounded-3xl bg-white shadow-lift">
          <div className="grid items-stretch lg:grid-cols-[1.3fr_1fr]">
            {/* Facebook video preview */}
            <div
              className="relative overflow-hidden"
              aria-label="Recent project footage from Cider Hill Construction"
            >
              <video
                className="h-full min-h-[260px] w-full object-cover lg:min-h-[400px]"
                src="/images/facebookvid.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
              {/* Logo overlay on the video */}
              <div className="absolute left-5 top-5">
                <img
                  src="/images/ciderhillLOGO.jpg"
                  alt="Cider Hill Construction logo"
                  className="h-20 w-20 rounded-full object-cover shadow-lift ring-2 ring-copper/50"
                />
              </div>
              <div className="absolute bottom-5 left-5">
                <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream backdrop-blur-sm">
                  Latest Projects
                </span>
              </div>
            </div>

            {/* Copy + CTA */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              {/* Logo + Facebook pairing */}
              <div className="flex items-center gap-4">
                <img
                  src="/images/ciderhillLOGO.jpg"
                  alt="Cider Hill Construction logo"
                  className="h-16 w-16 rounded-full object-cover ring-1 ring-copper/30 shadow-soft"
                />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1877F2] text-white">
                  <FacebookIcon className="h-6 w-6" />
                </div>
              </div>

              <h2 className="mt-6 font-display text-2xl text-navy sm:text-3xl">
                Follow Our Latest Work
              </h2>
              <p className="mt-4 leading-relaxed text-charcoal-soft">
                See recent projects, updates, and finished work from Cider Hill
                Construction on Facebook.
              </p>
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 self-start rounded-full bg-[#1877F2] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <FacebookIcon className="h-4 w-4" />
                View Facebook Page
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
