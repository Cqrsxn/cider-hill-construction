import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { business, nav } from "../data/site";
import { cn } from "../lib/cn";
import { PhoneIcon, MenuIcon, CloseIcon, ArrowRight } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy/95 shadow-[0_4px_24px_rgba(14,26,44,0.25)] backdrop-blur"
          : "bg-navy/70 backdrop-blur-sm",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        {/* Brand — logo + name */}
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label={`${business.shortName} — home`}
        >
          <img
            src="/images/ciderhillLOGO.jpg"
            alt="Cider Hill Construction logo"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-copper/40 md:h-12 md:w-12"
          />
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold text-cream md:text-lg">
              Cider Hill
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-copper-light">
              Construction &amp; Handyman
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={isHome ? item.href : `/${item.href}`}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-cream/90 transition-colors hover:text-cream"
          >
            <PhoneIcon className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
          <a
            href={business.quoteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-copper-light"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-cream transition-colors hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden bg-navy-dark transition-[max-height] duration-300 md:hidden",
          open ? "max-h-[520px]" : "max-h-0",
        )}
      >
        {/* Mobile logo + brand */}
        <div className="container-x flex items-center gap-3 border-b border-white/8 pb-4 pt-4">
          <img
            src="/images/ciderhillLOGO.jpg"
            alt="Cider Hill Construction logo"
            className="h-12 w-12 rounded-full object-cover ring-1 ring-copper/40"
          />
          <div className="leading-tight">
            <p className="font-display text-base font-semibold text-cream">
              Cider Hill Construction
            </p>
            <p className="text-xs text-cream/55">Bluffton, SC &amp; the Lowcountry</p>
          </div>
        </div>

        <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={isHome ? item.href : `/${item.href}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-cream/85 transition-colors hover:bg-white/5 hover:text-cream"
            >
              {item.label}
            </a>
          ))}
          <a
            href={business.quoteLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-copper px-5 py-3 text-base font-semibold text-white"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={business.phoneHref}
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 px-5 py-3 text-base font-semibold text-cream"
          >
            <PhoneIcon className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
