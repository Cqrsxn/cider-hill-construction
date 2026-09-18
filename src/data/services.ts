/* ------------------------------------------------------------------
   Services. Single source of truth for the services index, the
   coverflow, the footer sitemap and every /services/:slug page.

   The three entries that used to sit in this list but are really
   finished jobs rather than offerings (stair construction, kitchen
   remodel, exterior renovation) moved to projects.ts.
------------------------------------------------------------------- */

export type Service = {
  slug: string;
  title: string;
  /** One line. Used on cards and in the coverflow. */
  summary: string;
  /** Opening paragraph of the service page. */
  intro: string;
  /** What the job actually covers. */
  includes: string[];
  /** Base name in /media/still. */
  still: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "home-renovations",
    title: "Home Renovations",
    summary: "Whole rooms taken back to studs and finished properly.",
    intro:
      "Renovation work on Bluffton homes, from a single room to the whole floor plan. Cider Hill handles demolition, framing, finish carpentry and the detail work at the end that decides whether a room looks finished or nearly finished.",
    includes: [
      "Kitchens and bathrooms",
      "Laundry rooms and closets",
      "Flooring and subfloor repair",
      "Trim, casing and finish carpentry",
      "Siding and exterior repair",
    ],
    still: "exterior",
    related: ["kitchen-bathroom-renovations", "flooring", "interior-exterior-trim"],
  },
  {
    slug: "handyman-services",
    title: "Handyman Services",
    summary: "The punch list nobody else will show up for.",
    intro:
      "Small jobs get the same attention as large ones. Most handyman work is a list of unrelated repairs that has been waiting months, and Cider Hill will work straight down it in a visit or two.",
    includes: [
      "Punch-list and repair work",
      "Door and hardware adjustment",
      "Drywall patching",
      "Fixture swaps",
      "Property maintenance",
    ],
    still: "fence",
    related: ["fixture-installation", "doors-windows-hardware", "roofing-repairs"],
  },
  {
    slug: "kitchen-bathroom-renovations",
    title: "Kitchen & Bathroom Renovations",
    summary: "The two rooms where finish quality actually shows.",
    intro:
      "Kitchens and bathrooms are unforgiving. Tile that is out by a degree and trim that does not close cleanly will bother you every day. Cider Hill works to tolerances that hold up once the room is back in daily use.",
    includes: [
      "Tile and waterproofing",
      "Vanities and cabinetry",
      "Countertop and fixture fitting",
      "Flooring",
      "Trim and finish detail",
    ],
    still: "kitchen",
    related: ["home-renovations", "flooring", "fixture-installation"],
  },
  {
    slug: "flooring",
    title: "Flooring",
    summary: "Level subfloor first. Everything else follows from it.",
    intro:
      "Most flooring complaints trace back to what was underneath. Cider Hill checks and corrects the subfloor before anything goes down, which is the difference between a floor that stays flat and one that telegraphs every seam within a year.",
    includes: [
      "Subfloor assessment and repair",
      "Luxury vinyl plank and tile",
      "Hardwood and laminate",
      "Transitions and thresholds",
      "Baseboard and shoe moulding",
    ],
    still: "wallpaper",
    related: ["home-renovations", "kitchen-bathroom-renovations", "interior-exterior-trim"],
  },
  {
    slug: "interior-exterior-trim",
    title: "Interior & Exterior Trim",
    summary: "Tight joints, clean returns, no caulk hiding the gaps.",
    intro:
      "Trim is where careless work becomes obvious. Cider Hill cuts to fit rather than cutting to caulk, inside and out, on new installs and on repairs to trim that has opened up with the Lowcountry humidity.",
    includes: [
      "Baseboard and crown moulding",
      "Door and window casing",
      "Stair skirt and railing detail",
      "Exterior trim repair and replacement",
      "Rot repair and weatherproofing",
    ],
    still: "stairs",
    related: ["home-renovations", "vinyl-siding-hardie-board", "doors-windows-hardware"],
  },
  {
    slug: "vinyl-siding-hardie-board",
    title: "Vinyl Siding & Hardie Board",
    summary: "Exterior skin that survives salt air and storm season.",
    intro:
      "Coastal exposure is hard on siding. Cider Hill installs and repairs vinyl and fiber cement with proper flashing and clearances, because most siding failures here start as a water management problem rather than a material problem.",
    includes: [
      "Vinyl siding repair and replacement",
      "Hardie board installation",
      "Flashing and water management",
      "Soffit and fascia",
      "Storm damage repair",
    ],
    still: "exterior",
    related: ["interior-exterior-trim", "roofing-repairs", "home-renovations"],
  },
  {
    slug: "doors-windows-hardware",
    title: "Doors, Windows & Hardware",
    summary: "Doors that shut the same way in August as in January.",
    intro:
      "A door that sticks seasonally is usually a framing or hardware problem rather than a door problem. Cider Hill hangs and adjusts interior and exterior doors, replaces failed windows, and sets hardware so it stays set.",
    includes: [
      "Interior and exterior door hanging",
      "Window replacement and repair",
      "Lockset and hardware installation",
      "Weatherstripping and thresholds",
      "Casing and trim-out",
    ],
    still: "exterior",
    related: ["interior-exterior-trim", "handyman-services", "vinyl-siding-hardie-board"],
  },
  {
    slug: "fixture-installation",
    title: "Fixture Installation",
    summary: "Mounted into structure, not into drywall and hope.",
    intro:
      "Light fixtures, fans and heavy hardware need real backing behind them. Cider Hill locates or adds blocking before mounting anything with weight, which is why these installs do not loosen up a year later.",
    includes: [
      "Light fixtures and chandeliers",
      "Ceiling fans",
      "Bath hardware and mirrors",
      "Shelving and storage",
      "Blocking and structural backing",
    ],
    still: "bathroom",
    related: ["handyman-services", "laundry-rooms-closets", "kitchen-bathroom-renovations"],
  },
  {
    slug: "laundry-rooms-closets",
    title: "Laundry Rooms & Closets",
    summary: "Small rooms, reworked so they hold what you own.",
    intro:
      "Laundry rooms and closets are usually the last space anyone plans and the first to stop working. Cider Hill rebuilds the layout, adds real shelving and finishes them to the same standard as the rest of the house.",
    includes: [
      "Shelving and rod systems",
      "Built-in storage",
      "Layout changes",
      "Trim, doors and finish work",
      "Flooring",
    ],
    still: "wallpaper",
    related: ["fixture-installation", "home-renovations", "flooring"],
  },
  {
    slug: "roofing-repairs",
    title: "Roofing Repairs",
    summary: "Targeted repair work, before it becomes a ceiling problem.",
    intro:
      "Cider Hill takes on roof repair rather than full replacement. Lifted shingles, failed flashing and small leaks are worth catching early, because the ceiling and insulation damage underneath costs more than the roof work does.",
    includes: [
      "Shingle repair and replacement",
      "Flashing and boot repair",
      "Leak tracing",
      "Storm damage assessment",
      "Soffit, fascia and gutter detail",
    ],
    still: "exterior",
    related: ["vinyl-siding-hardie-board", "handyman-services", "interior-exterior-trim"],
  },
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    summary: "Tenant work scheduled around your opening hours.",
    intro:
      "Commercial repairs and tenant improvements for Bluffton businesses and property owners. The constraint on this work is rarely the build, it is doing it without closing the business, so Cider Hill schedules around trading hours.",
    includes: [
      "Tenant improvements",
      "Commercial repair and maintenance",
      "Finish and fit-out work",
      "Property updates",
      "Scheduled after-hours work",
    ],
    still: "commercial",
    related: ["home-renovations", "handyman-services", "interior-exterior-trim"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
