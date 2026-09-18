/* ------------------------------------------------------------------
   Business details and site-wide structure.

   Deleted in the 2026-09 redesign: `serviceAreaCopy` (never rendered,
   and it was the city-list keyword paragraph), `gallery` (dead),
   `trustBadges` (the hero badge row is gone), and `services` (moved to
   services.ts as the single source of truth).
------------------------------------------------------------------- */

export const business = {
  name: "Cider Hill Construction and Handyman Services LLC",
  shortName: "Cider Hill Construction",
  founder: "Tristan Swanson",
  phoneDisplay: "(207) 337-3008",
  phoneHref: "tel:+12073373008",
  email: "ciderhillconstruction@gmail.com",
  emailHref: "mailto:ciderhillconstruction@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61582238305331",
  quoteLink:
    "https://www.simplywise.com/booking-link/ciderhillconstruction.simplywise.com/",
  location: "Bluffton, SC 29910",
} as const;

/**
 * Kept as structured data for the footer and the about page. It is
 * deliberately never rendered as a run-on "serving X, Y, Z and nearby
 * communities" sentence, which is what it used to be.
 */
export const serviceAreas = [
  "Bluffton",
  "Hilton Head Island",
  "Okatie",
  "Hardeeville",
  "Beaufort",
  "Ridgeland",
] as const;

export const nav = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

/** Three honest, checkable statements. No invented numbers. */
export const proofPoints = [
  {
    label: "Licensed & Insured",
    detail: "Covered work, on residential and commercial sites.",
    still: "exterior",
  },
  {
    label: "Owner-Operated",
    detail: "The person quoting the job is the person doing it.",
    still: "stairs",
  },
  {
    label: "Free Estimates",
    detail: "A real scope and a real number before anything starts.",
    still: "kitchen",
  },
] as const;

/* ------------------------------------------------------------------
   REVIEWS — do not invent reviews. Add real ones as they come in.
   While this is empty the homepage renders no testimonial section at
   all, rather than an empty-state placeholder.
------------------------------------------------------------------- */
export type Review = {
  name: string;
  text: string;
};

export const reviews: Review[] = [];
