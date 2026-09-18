/* ------------------------------------------------------------------
   Completed work. This used to be hardcoded JSX inside
   WorkWeHaveDone.tsx plus a component-local array in InteriorWork.tsx,
   which meant no detail pages and no reuse. It lives here now.

   `video` is the base name in /media/video and /media/still.
------------------------------------------------------------------- */

export type Project = {
  slug: string;
  title: string;
  /** Short label shown over the still. */
  category: string;
  /** One line for the homepage. */
  blurb: string;
  /** Body copy for the detail page. */
  body: string[];
  /** What the job involved. */
  scope: string[];
  video: string;
  /** Service slugs this job draws on. */
  services: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "exterior-repairs-fencing",
    title: "Exterior Repairs and Fencing",
    category: "Exterior",
    blurb: "Fence line rebuilt and the siding behind it put right.",
    body: [
      "Fence work usually arrives bundled with something else. Posts had shifted and the run had pulled away from level, and once it was off the wall the siding behind it needed attention before anything went back up.",
      "Doing both at once is the cheaper order of operations. Re-hanging a fence against siding you are going to replace next season means paying for the same labour twice.",
    ],
    scope: [
      "Fence construction and repair",
      "Post setting and levelling",
      "Exterior trim and siding",
      "Deck and outdoor repair",
    ],
    video: "fence",
    services: ["handyman-services", "vinyl-siding-hardie-board", "interior-exterior-trim"],
    featured: true,
  },
  {
    slug: "stair-construction",
    title: "Stair Construction and Carpentry",
    category: "Carpentry",
    blurb: "A stair run built on site, with the skirt and treads cut to fit.",
    body: [
      "Stairs are the least forgiving carpentry in a house. Rise and run have to stay consistent the whole way up or people feel it underfoot, and building codes are specific about how little variation is allowed between steps.",
      "This run was cut and assembled on site rather than ordered in, which is the only way to deal with a floor-to-floor height that is not quite what the drawings said.",
    ],
    scope: [
      "Stringer layout and cutting",
      "Tread and riser installation",
      "Skirt board and trim detail",
      "Railing and baluster fitting",
    ],
    video: "stairs",
    services: ["interior-exterior-trim", "home-renovations"],
    featured: true,
  },
  {
    slug: "kitchen-remodel",
    title: "Kitchen Remodel",
    category: "Renovation",
    blurb: "Cabinetry, counters and finish work through a working kitchen.",
    body: [
      "A kitchen remodel is a scheduling problem as much as a building one. The room comes out of service for the duration, so the work is sequenced to get the sink and one run of counter back as early as possible.",
      "Cabinetry sets the tolerance for everything after it. If the boxes are level and square the counters and trim follow easily, and if they are not, every later trade pays for it.",
    ],
    scope: [
      "Cabinet installation and levelling",
      "Countertop fitting",
      "Tile and backsplash",
      "Flooring and trim-out",
    ],
    video: "kitchen",
    services: ["kitchen-bathroom-renovations", "home-renovations", "flooring"],
    featured: true,
  },
  {
    slug: "exterior-renovation",
    title: "Home Exterior Renovation",
    category: "Exterior",
    blurb: "Siding, trim and weatherproofing across the full elevation.",
    body: [
      "Exterior renovation on a Lowcountry house is mostly about water. Salt air and driven rain find every unsealed joint, and the damage shows up inside months later as soft trim and staining.",
      "The elevation was taken back far enough to deal with what was behind the siding, then rebuilt with flashing and clearances set to shed water properly.",
    ],
    scope: [
      "Siding replacement",
      "Exterior trim and fascia",
      "Flashing and water management",
      "Rot repair",
    ],
    video: "exterior",
    services: ["vinyl-siding-hardie-board", "interior-exterior-trim", "roofing-repairs"],
    featured: false,
  },
  {
    slug: "bathroom-detail-work",
    title: "Bathroom Detail Work",
    category: "Interior",
    blurb: "Wallpaper, trim and fixture work in a small, unforgiving room.",
    body: [
      "Small bathrooms show every mistake. There is nowhere for a seam to hide and the sightlines are short, so pattern match and trim returns have to be right the first time.",
      "Fixture mounting in a bathroom also needs real backing. Towel bars and mirrors pulled out of plain drywall are one of the most common callbacks in this trade.",
    ],
    scope: [
      "Wallpaper hanging and pattern matching",
      "Trim and finish detail",
      "Fixture and hardware mounting",
      "Blocking and backing",
    ],
    video: "bathroom",
    services: ["kitchen-bathroom-renovations", "fixture-installation"],
    featured: false,
  },
  {
    slug: "interior-finishes",
    title: "Interior Finishes",
    category: "Interior",
    blurb: "Wallpaper and finish work across the main living space.",
    body: [
      "Wallpaper across a large wall is a patience job. The wall has to be prepared flat and clean first, because paper telegraphs every ridge and patch underneath it.",
      "Running it across a full living space means keeping the pattern true over a long distance, with no convenient corner to absorb the drift.",
    ],
    scope: [
      "Wall preparation and patching",
      "Wallpaper hanging",
      "Trim and baseboard",
      "Finish detail",
    ],
    video: "wallpaper",
    services: ["home-renovations", "interior-exterior-trim"],
    featured: false,
  },
  {
    slug: "commercial-property-work",
    title: "Commercial Property Work",
    category: "Commercial",
    blurb: "Tenant improvements handled around the business staying open.",
    body: [
      "Commercial work runs against the clock in a way residential does not. Every day the space is unusable is revenue the tenant is not making, so the schedule is built backwards from reopening.",
      "That usually means after-hours and weekend work, and staging materials so the space is presentable again each morning whether the job is finished or not.",
    ],
    scope: [
      "Tenant improvement work",
      "Finish and fit-out",
      "Repair and maintenance",
      "After-hours scheduling",
    ],
    video: "commercial",
    services: ["commercial-construction", "interior-exterior-trim"],
    featured: false,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
