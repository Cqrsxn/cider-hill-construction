/* ------------------------------------------------------------------
   Cider Hill Construction — Single source of truth for site content.
   Edit business details, services, and copy here.
------------------------------------------------------------------- */

export const business = {
  name: "Cider Hill Construction and Handyman Services LLC",
  shortName: "Cider Hill Construction",
  owner: "Cider Hill Construction",
  phoneDisplay: "(207) 337-3008",
  phoneHref: "tel:+12073373008",
  email: "ciderhillconstruction@gmail.com",
  emailHref: "mailto:ciderhillconstruction@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61582238305331",
  quoteLink:
    "https://www.simplywise.com/booking-link/ciderhillconstruction.simplywise.com/",
  tagline: "Quality New England Craftsmanship",
  location: "Bluffton, SC 29910",
} as const;

export const trustBadges = [
  "Licensed & Insured",
  "Owner-Operated",
  "Quality New England Craftsmanship",
  "Serving the Lowcountry",
] as const;

export const serviceAreas = [
  "Bluffton",
  "Hilton Head Island",
  "Okatie",
  "Hardeeville",
  "Beaufort",
  "Ridgeland",
  "Sun City",
  "Palmetto Bluff",
  "Hampton Hall",
  "Rose Hill",
] as const;

export const serviceAreaCopy =
  "Cider Hill Construction serves Bluffton, Hilton Head Island, Okatie, Hardeeville, Beaufort, Ridgeland, Sun City, Palmetto Bluff, Hampton Hall, Rose Hill, and nearby Lowcountry communities.";

export type Service = {
  title: string;
  description: string;
  slug?: string;
};

export const services: Service[] = [
  {
    title: "Home Renovations",
    slug: "home-renovations",
    description:
      "Kitchens, bathrooms, laundry rooms, closets, flooring, trim, siding, and finish work for homes throughout Bluffton and the Lowcountry.",
  },
  {
    title: "Handyman Services",
    slug: "handyman-services",
    description:
      "Everyday repairs, punch-list work, property maintenance, fixtures, doors, trim, and general repairs handled with the same care as larger projects.",
  },
  {
    title: "Kitchen & Bathroom Renovations",
    slug: "kitchen-bathroom-renovations",
    description:
      "Bathroom updates, kitchen improvements, tile, flooring, fixtures, vanities, trim, and finish work for spaces that look and function better.",
  },
  {
    title: "Flooring",
    slug: "flooring",
    description:
      "Flooring installation, repair, and upgrade work for homes in Bluffton, Hilton Head, and across the Lowcountry.",
  },
  {
    title: "Interior & Exterior Trim",
    slug: "interior-exterior-trim",
    description:
      "Baseboards, crown molding, door casing, exterior trim repair, and detail work that gives homes a cleaner, more finished look.",
  },
  {
    title: "Vinyl Siding & Hardie Board",
    slug: "vinyl-siding-hardie-board",
    description:
      "Siding repair, replacement, Hardie board installation, and exterior upgrade work for homes in Bluffton and surrounding areas.",
  },
  {
    title: "Doors, Windows & Hardware",
    slug: "doors-windows-hardware",
    description:
      "Interior doors, exterior doors, window repair, trim, hardware installation, and weatherproofing for Lowcountry homes.",
  },
  {
    title: "Fixture Installation",
    slug: "fixture-installation",
    description:
      "Light fixtures, ceiling fans, chandeliers, hardware, and small installation work completed cleanly and correctly.",
  },
  {
    title: "Laundry Rooms & Closets",
    slug: "laundry-rooms-closets",
    description:
      "Shelving, storage solutions, layout improvements, trim, doors, and finish work for laundry rooms and closets.",
  },
  {
    title: "Roofing Repairs",
    slug: "roofing-repairs",
    description:
      "Minor roof repairs and exterior repair work for homes in Bluffton and the Lowcountry.",
  },
  {
    title: "Commercial Construction",
    slug: "commercial-construction",
    description:
      "Commercial repairs, tenant improvements, finish work, and property updates for businesses and property owners throughout Bluffton.",
  },
];

export type Reason = {
  title: string;
  description: string;
};

export const reasons: Reason[] = [
  {
    title: "Owner-Operated",
    description:
      "Work directly with the owner from start to finish — no middlemen, no handoffs.",
  },
  {
    title: "Licensed & Insured",
    description: "Professional service backed by proper licensing and insurance for your peace of mind.",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "Clean, durable work rooted in New England craftsmanship and applied to every Lowcountry project.",
  },
  {
    title: "Reliable Communication",
    description:
      "Clear estimates, honest timelines, and dependable follow-through from call to completion.",
  },
  {
    title: "Major Renovations to Everyday Repairs",
    description:
      "Whether it is a full renovation or a small repair, Cider Hill brings the same focus to every job.",
  },
];

/* ------------------------------------------------------------------
   GALLERY — set `image` once real photos are added
------------------------------------------------------------------- */
export type GalleryItem = {
  label: string;
  category: string;
  image?: string;
};

export const gallery: GalleryItem[] = [
  { label: "Renovation Project", category: "Renovations" },
  { label: "Handyman Repair", category: "Repairs" },
  { label: "Carpentry Detail", category: "Carpentry" },
  { label: "Outdoor Repair", category: "Outdoor Projects" },
  { label: "Trim & Finish Work", category: "Carpentry" },
  { label: "Before & After", category: "Before & After" },
];

/* ------------------------------------------------------------------
   REVIEWS — do not invent reviews. Add real ones as they come in.
------------------------------------------------------------------- */
export type Review = {
  name: string;
  text: string;
};

export const reviews: Review[] = [];

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
