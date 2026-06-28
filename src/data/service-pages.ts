export type ServicePageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  servicesList: string[];
  relatedSlugs: string[];
};

export const servicePages: ServicePageData[] = [
  {
    slug: "home-renovations",
    metaTitle: "Home Renovations in Bluffton, SC | Cider Hill Construction",
    metaDescription:
      "Home renovations in Bluffton, SC. Kitchens, bathrooms, flooring, trim, siding, and finish work. Owner-operated. Call (207) 337-3008 for a free quote.",
    h1: "Home Renovations in Bluffton, SC",
    eyebrow: "Home Renovations",
    intro:
      "Cider Hill Construction handles home renovations for homeowners throughout Bluffton, Hilton Head, and the Lowcountry. From kitchens and bathrooms to flooring, trim, siding, and finish work — complete renovation support with quality craftsmanship and dependable communication.",
    servicesList: [
      "Kitchen renovation and updates",
      "Bathroom remodeling",
      "Laundry room and closet improvements",
      "Flooring installation",
      "Interior and exterior trim",
      "Siding repair and replacement",
      "Finish work and detail carpentry",
      "Door and window work",
      "Fixture installation",
    ],
    relatedSlugs: [
      "kitchen-bathroom-renovations",
      "flooring",
      "vinyl-siding-hardie-board",
    ],
  },
  {
    slug: "handyman-services",
    metaTitle: "Handyman Services in Bluffton, SC | Cider Hill Construction",
    metaDescription:
      "Handyman services in Bluffton, SC. Everyday repairs, punch-list work, fixtures, doors, trim, flooring, and more. Call (207) 337-3008 for a free quote.",
    h1: "Handyman Services in Bluffton, SC",
    eyebrow: "Handyman",
    intro:
      "Cider Hill Construction provides handyman services throughout Bluffton, Hilton Head, and the surrounding Lowcountry. No job is too small. Whether it is a punch list from a home inspection, a repair that has been waiting, or an install that needs to be done right — Cider Hill handles it.",
    servicesList: [
      "Everyday home repairs",
      "Home inspection punch list work",
      "Property maintenance tasks",
      "Fixture installation and replacement",
      "Door and window adjustments",
      "Trim and carpentry repairs",
      "Flooring repairs",
      "General maintenance and small project support",
    ],
    relatedSlugs: [
      "home-renovations",
      "fixture-installation",
      "doors-windows-hardware",
    ],
  },
  {
    slug: "kitchen-bathroom-renovations",
    metaTitle:
      "Kitchen & Bathroom Renovations in Bluffton, SC | Cider Hill Construction",
    metaDescription:
      "Kitchen and bathroom renovations in Bluffton, SC. Tile, flooring, fixtures, vanities, trim, and finish work. Call (207) 337-3008 for a free quote.",
    h1: "Kitchen & Bathroom Renovations in Bluffton, SC",
    eyebrow: "Kitchen & Bath",
    intro:
      "Cider Hill Construction handles kitchen and bathroom renovation work for homeowners in Bluffton, Hilton Head, and across the Lowcountry. From tile and flooring to fixtures, vanities, and finish work — quality updates that make a real difference.",
    servicesList: [
      "Bathroom remodeling and updates",
      "Kitchen improvements and updates",
      "Tile installation and repair",
      "Flooring installation in kitchens and bathrooms",
      "Fixture and vanity installation",
      "Trim and finish work",
      "Wallpaper and interior finishes",
      "Cabinet hardware and small upgrades",
    ],
    relatedSlugs: [
      "flooring",
      "fixture-installation",
      "laundry-rooms-closets",
    ],
  },
  {
    slug: "flooring",
    metaTitle:
      "Flooring Installation and Repair in Bluffton, SC | Cider Hill Construction",
    metaDescription:
      "Flooring installation, repair, and upgrades in Bluffton, SC. Owner-operated and licensed. Call (207) 337-3008 for a free quote.",
    h1: "Flooring Installation and Repair in Bluffton, SC",
    eyebrow: "Flooring",
    intro:
      "Cider Hill Construction installs and repairs flooring for homes throughout Bluffton, Hilton Head, and the Lowcountry. Whether you are upgrading a single room or installing new floors throughout a renovation, the work is done cleanly and with care.",
    servicesList: [
      "Hardwood and engineered flooring installation",
      "Luxury vinyl plank (LVP) flooring installation",
      "Tile flooring installation",
      "Flooring repair and patch work",
      "Subfloor repair and prep",
      "Flooring as part of kitchen, bathroom, or home renovation projects",
    ],
    relatedSlugs: [
      "kitchen-bathroom-renovations",
      "home-renovations",
      "laundry-rooms-closets",
    ],
  },
  {
    slug: "interior-exterior-trim",
    metaTitle:
      "Interior & Exterior Trim Repair in Bluffton, SC | Cider Hill Construction",
    metaDescription:
      "Baseboards, crown molding, door casing, and exterior trim repair in Bluffton, SC. Owner-operated. Call (207) 337-3008 for a free quote.",
    h1: "Interior & Exterior Trim Repair in Bluffton, SC",
    eyebrow: "Trim & Carpentry",
    intro:
      "Clean trim work makes a real difference in how a home looks and feels. Cider Hill Construction handles interior and exterior trim repair throughout Bluffton, Hilton Head, and the Lowcountry — baseboards, crown molding, door casing, and more.",
    servicesList: [
      "Baseboard installation and repair",
      "Crown molding installation",
      "Door casing and window casing",
      "Exterior trim repair",
      "Wood rot repair and trim replacement",
      "Finish carpentry and detail work",
      "Trim as part of renovation projects",
    ],
    relatedSlugs: [
      "home-renovations",
      "vinyl-siding-hardie-board",
      "kitchen-bathroom-renovations",
    ],
  },
  {
    slug: "vinyl-siding-hardie-board",
    metaTitle:
      "Vinyl Siding & Hardie Board Installation in Bluffton, SC | Cider Hill Construction",
    metaDescription:
      "Vinyl siding and Hardie board installation and repair in Bluffton, SC. Exterior upgrades for Lowcountry homes. Call (207) 337-3008 for a free quote.",
    h1: "Vinyl Siding & Hardie Board Installation and Repair in Bluffton, SC",
    eyebrow: "Siding & Exterior",
    intro:
      "Cider Hill Construction handles siding repair, replacement, and Hardie board installation for homes in Bluffton, Hilton Head, and the surrounding Lowcountry. Quality exterior work that holds up to the South Carolina climate.",
    servicesList: [
      "Vinyl siding installation and replacement",
      "Hardie board (fiber cement) siding installation",
      "Siding repair and patch work",
      "Exterior panel replacement",
      "Siding upgrades as part of renovation projects",
      "Trim and exterior finish work alongside siding",
    ],
    relatedSlugs: [
      "interior-exterior-trim",
      "home-renovations",
      "doors-windows-hardware",
    ],
  },
  {
    slug: "doors-windows-hardware",
    metaTitle:
      "Window & Door Installation and Repair in Bluffton, SC | Cider Hill Construction",
    metaDescription:
      "Interior doors, exterior doors, window repair, trim, and hardware installation in Bluffton, SC. Call (207) 337-3008 for a free quote.",
    h1: "Window & Door Installation and Repair in Bluffton, SC",
    eyebrow: "Doors & Windows",
    intro:
      "Cider Hill Construction handles door and window work for homes in Bluffton, Hilton Head, and surrounding Lowcountry communities. From interior door installation to exterior door replacement and window repair, quality work that functions and looks right.",
    servicesList: [
      "Interior door installation and replacement",
      "Exterior door installation and replacement",
      "Window repair and hardware replacement",
      "Door and window trim installation",
      "Weatherstripping and door hardware",
      "Door and window work as part of renovation projects",
    ],
    relatedSlugs: [
      "interior-exterior-trim",
      "handyman-services",
      "home-renovations",
    ],
  },
  {
    slug: "fixture-installation",
    metaTitle:
      "Fixture Installation in Bluffton, SC | Cider Hill Construction",
    metaDescription:
      "Light fixture, ceiling fan, chandelier, and hardware installation in Bluffton, SC. Owner-operated, licensed and insured. Call (207) 337-3008 for a free quote.",
    h1: "Fixture Installation in Bluffton, SC",
    eyebrow: "Fixture Installation",
    intro:
      "Cider Hill Construction handles fixture installation for homes and businesses in Bluffton, Hilton Head, and across the Lowcountry. From ceiling fans and light fixtures to chandeliers and hardware, every install is done cleanly and correctly.",
    servicesList: [
      "Light fixture installation and replacement",
      "Ceiling fan installation",
      "Chandelier installation",
      "Hardware and small fixture installs",
      "Interior and exterior fixture upgrades",
      "Fixture installation as part of larger renovation projects",
    ],
    relatedSlugs: [
      "handyman-services",
      "kitchen-bathroom-renovations",
      "interior-exterior-trim",
    ],
  },
  {
    slug: "laundry-rooms-closets",
    metaTitle:
      "Laundry Room & Closet Upgrades in Bluffton, SC | Cider Hill Construction",
    metaDescription:
      "Laundry room and closet upgrades in Bluffton, SC. Shelving, storage, trim, doors, and finish work. Call (207) 337-3008 for a free quote.",
    h1: "Laundry Room & Closet Upgrades in Bluffton, SC",
    eyebrow: "Laundry & Closets",
    intro:
      "Cider Hill Construction helps homeowners in Bluffton and the Lowcountry upgrade laundry rooms and closets with better storage, improved layouts, and clean finish work. Small spaces done right make a home more organized and more enjoyable to use.",
    servicesList: [
      "Shelving and storage installation",
      "Closet layout improvements",
      "Laundry room updates and improvements",
      "Interior doors and trim",
      "Finish work and detail carpentry",
      "Flooring in laundry rooms and closets",
      "Hardware and fixture installation",
    ],
    relatedSlugs: [
      "kitchen-bathroom-renovations",
      "flooring",
      "interior-exterior-trim",
    ],
  },
  {
    slug: "roofing-repairs",
    metaTitle: "Roofing Repairs in Bluffton, SC | Cider Hill Construction",
    metaDescription:
      "Minor roofing repairs and exterior repairs for homes in Bluffton, SC. Owner-operated. Call (207) 337-3008 for a free quote.",
    h1: "Roofing Repairs in Bluffton, SC",
    eyebrow: "Roofing Repairs",
    intro:
      "Cider Hill Construction handles minor roof repairs and exterior repair work for homes in Bluffton and the Lowcountry. If you have a repair need, reach out and we will talk through what the project looks like.",
    servicesList: [
      "Minor roof repair work",
      "Exterior repair and maintenance",
      "Inspection-ready repair support",
      "Roof repair as part of broader exterior projects",
    ],
    relatedSlugs: [
      "vinyl-siding-hardie-board",
      "handyman-services",
      "home-renovations",
    ],
  },
  {
    slug: "commercial-construction",
    metaTitle:
      "Commercial Construction & Property Improvements in Bluffton, SC | Cider Hill Construction",
    metaDescription:
      "Commercial repairs, tenant improvements, finish work, and property updates in Bluffton, SC. Call (207) 337-3008 for a free commercial quote.",
    h1: "Commercial Construction & Property Improvements in Bluffton, SC",
    eyebrow: "Commercial Work",
    intro:
      "Cider Hill Construction works with local businesses and property owners in Bluffton and the Lowcountry on commercial repairs, tenant improvements, interior finish work, and property update projects. Dependable work, clear communication, delivered on time.",
    servicesList: [
      "Commercial interior repairs and maintenance",
      "Tenant improvement projects",
      "Interior finish work and carpentry",
      "Property updates and upgrades",
      "Small commercial build-out support",
      "Flooring, trim, and fixture installation for commercial spaces",
      "Exterior repairs for commercial properties",
    ],
    relatedSlugs: [
      "handyman-services",
      "flooring",
      "fixture-installation",
    ],
  },
  {
    slug: "stair-construction",
    metaTitle: "Stair Construction in Bluffton, SC | Cider Hill Construction",
    metaDescription:
      "Custom stair construction and carpentry in Bluffton, SC. Framing, finish work, and structural carpentry. Call (207) 337-3008 for a free quote.",
    h1: "Stair Construction in Bluffton, SC",
    eyebrow: "Stair Construction",
    intro:
      "Cider Hill Construction builds and repairs stairs for homes throughout Bluffton, Hilton Head, and the Lowcountry. Custom stair builds, framing, finish carpentry, and structural work — done with precision and care on every project.",
    servicesList: [
      "Custom stair framing and construction",
      "Interior stair builds",
      "Exterior stair and deck stair construction",
      "Stair repair and replacement",
      "Railing and baluster installation",
      "Finish carpentry and tread work",
      "Structural framing alongside stair projects",
    ],
    relatedSlugs: [
      "interior-exterior-trim",
      "home-renovations",
      "handyman-services",
    ],
  },
  {
    slug: "kitchen-remodel",
    metaTitle:
      "Kitchen Remodeling in Bluffton, SC | Cider Hill Construction",
    metaDescription:
      "Kitchen remodeling and renovation in Bluffton, SC. Cabinetry, countertops, tile, fixtures, and finish work. Call (207) 337-3008 for a free quote.",
    h1: "Kitchen Remodeling in Bluffton, SC",
    eyebrow: "Kitchen Remodel",
    intro:
      "Cider Hill Construction handles kitchen remodels and updates for homeowners in Bluffton, Hilton Head, and across the Lowcountry. From cabinetry and countertops to tile, fixtures, and finish work — quality kitchen renovations from start to finish.",
    servicesList: [
      "Full kitchen remodels and renovations",
      "Cabinet installation and updates",
      "Countertop installation",
      "Backsplash and tile work",
      "Kitchen fixture installation",
      "Flooring in kitchen spaces",
      "Finish carpentry and trim",
      "Paint and interior finish work",
    ],
    relatedSlugs: [
      "kitchen-bathroom-renovations",
      "flooring",
      "fixture-installation",
    ],
  },
  {
    slug: "exterior-renovation",
    metaTitle:
      "Exterior Home Renovation in Bluffton, SC | Cider Hill Construction",
    metaDescription:
      "Exterior home renovation, siding, trim, and curb appeal upgrades in Bluffton, SC. Owner-operated. Call (207) 337-3008 for a free quote.",
    h1: "Exterior Home Renovation in Bluffton, SC",
    eyebrow: "Exterior Renovation",
    intro:
      "Cider Hill Construction handles exterior home renovations for properties in Bluffton, Hilton Head, and the surrounding Lowcountry. From siding and trim to full exterior overhauls — clean, lasting work that holds up to the South Carolina climate.",
    servicesList: [
      "Full exterior renovation and makeovers",
      "Siding repair and replacement",
      "Exterior trim and finish work",
      "Wood rot repair",
      "Deck and porch repairs",
      "Exterior painting prep",
      "Curb appeal improvements",
      "Exterior projects alongside home renovation work",
    ],
    relatedSlugs: [
      "vinyl-siding-hardie-board",
      "interior-exterior-trim",
      "home-renovations",
    ],
  },
];

export function getServicePageBySlug(
  slug: string,
): ServicePageData | undefined {
  return servicePages.find((p) => p.slug === slug);
}
