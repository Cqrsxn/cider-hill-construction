import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { business, nav } from "../data/site";
import { MenuIcon, CloseIcon } from "./icons";
import { cn } from "../lib/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Solid whenever the menu is open, when scrolled, or on any page that
  // does not have a dark hero sitting behind the bar.
  const solid = scrolled || open || !overHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "bg-paper/95 backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "container-x flex items-center justify-between py-4 transition-colors",
          solid ? "text-ink" : "text-paper",
        )}
      >
        <Link to="/" className="flex items-center gap-3" aria-label="Cider Hill Construction, home">
          <img
            src="/images/ciderhillLOGO.jpg"
            alt=""
            aria-hidden="true"
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="type-display text-[0.95rem] leading-none">Cider Hill</span>
        </Link>

        {/* Desktop nav. Previously hidden below 1024px while the hamburger was
            hidden above 768px, which left 768-1024px with no navigation at all. */}
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-[0.875rem] transition-opacity hover:opacity-100",
                  isActive ? "opacity-100 underline underline-offset-4" : "opacity-70",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={business.phoneHref}
            className="text-[0.875rem] font-bold tracking-tight"
          >
            {business.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-ink/10 bg-paper lg:hidden"
      >
        <nav className="container-x flex flex-col py-4" aria-label="Main">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="type-display border-b border-ink/10 py-4 text-[1.4rem] text-ink last:border-0"
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={business.phoneHref}
            className="type-display py-4 text-[1.4rem] text-copper"
          >
            {business.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
