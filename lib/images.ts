/**
 * Every photograph on the site lives in /public/images and is described here
 * once — path, intrinsic size, and alt text — so pages reference an image by
 * key and never repeat (or drift from) its dimensions or description.
 */
export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const images = {
  sunsetSite: {
    src: "/images/2.jpeg",
    width: 1584,
    height: 672,
    alt: "Estimator reviewing plans on a tablet in front of a steel-frame building under construction at sunset",
  },
  hospital: {
    src: "/images/3.jpeg",
    width: 1408,
    height: 768,
    alt: "Glass and brick medical building lit from within at dusk",
  },
  planningTeam: {
    src: "/images/4.jpeg",
    width: 1408,
    height: 768,
    alt: "Project team gathered around construction plans at a work table",
  },
  bimDetailer: {
    src: "/images/5.jpeg",
    width: 1408,
    height: 768,
    alt: "Detailer working on a 3D building model beside a set of printed drawings",
  },
  blueprintMep: {
    src: "/images/6.jpeg",
    width: 1408,
    height: 768,
    alt: "Blueprint-style drawing sheet with plumbing, electrical and mechanical symbols",
  },
  residentialFraming: {
    src: "/images/7.jpeg",
    width: 1408,
    height: 768,
    alt: "Wood-framed house under construction with scaffolding and crews at work",
  },
  usNetwork: {
    src: "/images/8.jpeg",
    width: 1408,
    height: 768,
    alt: "Map of the United States overlaid with glowing network lines",
  },
  estimatorsReview: {
    src: "/images/9.jpeg",
    width: 1408,
    height: 768,
    alt: "Two estimators reviewing marked-up floor plans beside a cost spreadsheet",
  },
  scheduleBoard: {
    src: "/images/10.jpeg",
    width: 1408,
    height: 768,
    alt: "Site supervisor updating a construction schedule and milestone board",
  },
  costBreakdown: {
    src: "/images/11.jpeg",
    width: 1408,
    height: 768,
    alt: "Rolled plans, a hard hat and a tablet showing a project cost breakdown",
  },
  industrialSite: {
    src: "/images/12.jpeg",
    width: 1408,
    height: 768,
    alt: "Aerial view of a steel-frame warehouse with site work and equipment underway",
  },
  laserMeasure: {
    src: "/images/13.jpeg",
    width: 1408,
    height: 768,
    alt: "Builder measuring a framed interior with a laser distance meter",
  },
  planMarkup: {
    src: "/images/14.jpeg",
    width: 1408,
    height: 768,
    alt: "Estimator marking up floor plans with a scale ruler, laptop and calculator nearby",
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
