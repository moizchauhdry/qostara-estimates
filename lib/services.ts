import type { LucideIcon } from "lucide-react";
import { Calculator, DraftingCompass, Droplets, Wrench, Zap } from "lucide-react";
import type { ImageKey } from "@/lib/images";

type Titled = { title: string; description: string };

export type ServiceBody =
  | { kind: "none" }
  /** Compact tags — best for long lists of scope items. */
  | { kind: "chips"; items: string[] }
  /** Roomier ticked list — best for benefits and outcomes. */
  | { kind: "checklist"; items: string[] }
  /** Items joined by "+", e.g. coordinated disciplines. */
  | { kind: "formula"; items: string[] }
  | { kind: "cards"; items: Titled[] }
  | { kind: "groups"; items: { title: string; items: string[] }[] }
  /** Numbered process on a dark band. */
  | { kind: "steps"; items: Titled[] }
  /** Ordered workflow, one short label per stage. */
  | { kind: "flow"; items: string[] };

export type ServiceSection = {
  id: string;
  eyebrow?: string;
  title: string;
  paragraphs?: string[];
  body: ServiceBody;
  footnote?: string;
  /** Only honoured for bodies that sit beside it: none, chips, checklist. */
  image?: ImageKey;
  imageSide?: "left" | "right";
};

export type ServicePage = {
  slug: string;
  /** Short name for menus and breadcrumbs. */
  navLabel: string;
  title: string;
  headline: string;
  /** Heading on the home and services cards. */
  cardTitle: string;
  /** One-line description for meta tags and structured data. */
  summary: string;
  metaDescription: string;
  /** Card copy on the home and services pages. */
  cardDescription: string[];
  cardCta: string;
  Icon: LucideIcon;
  image: ImageKey;
  intro: string[];
  cta: { label: string };
  sections: ServiceSection[];
  closing: { title: string; paragraphs: string[]; label: string };
};

export const servicePages: ServicePage[] = [
  {
    slug: "takeoff-estimating",
    navLabel: "Takeoff & Estimating",
    title: "Construction Takeoff & Estimating Services",
    headline:
      "Turn Construction Drawings Into Detailed, Bid-Ready Cost Information",
    cardTitle: "Quantity Takeoff & Construction Estimating",
    summary:
      "Professional quantity takeoff and construction estimating for contractors, subcontractors, builders, and developers.",
    metaDescription:
      "Professional quantity takeoff and construction estimating services. Qostara Estimates turns drawings and specifications into detailed, bid-ready cost information.",
    cardDescription: [
      "Get detailed material and quantity takeoffs from your construction drawings, followed by organized pricing and cost calculations.",
      "Our estimates can include materials, labor, equipment, subcontractors, allowances, overhead, markup, and other applicable project costs.",
    ],
    cardCta: "Explore Takeoff & Estimating",
    Icon: Calculator,
    image: "estimatorsReview",
    intro: [
      "Qostara Estimates provides professional quantity takeoff and construction estimating services for contractors, subcontractors, builders, and developers.",
      "We review drawings and specifications, quantify project requirements, organize the scope by trade, and develop detailed estimates covering materials, labor, equipment, subcontractors, and other applicable costs.",
    ],
    cta: { label: "Request a Takeoff" },
    sections: [
      {
        id: "what-is-a-takeoff",
        eyebrow: "The basics",
        title: "What Is a Construction Takeoff?",
        paragraphs: [
          "A quantity takeoff identifies and measures the materials and components required to complete a construction project.",
          "Depending on the project, this may include:",
        ],
        body: {
          kind: "chips",
          items: [
            "Quantities",
            "Lengths",
            "Areas",
            "Volumes",
            "Counts",
            "Assemblies",
            "Material specifications",
            "Installation requirements",
          ],
        },
        footnote:
          "The resulting quantities provide the foundation for a detailed construction estimate.",
        image: "laserMeasure",
        imageSide: "right",
      },
      {
        id: "takeoff-to-estimate",
        eyebrow: "Takeoff plus pricing",
        title: "From Quantity Takeoff to Complete Estimate",
        paragraphs: [
          "A takeoff tells you what is required. An estimate helps determine what it will cost.",
          "Qostara combines both processes to provide a more complete picture of your project. Our estimating process can incorporate:",
        ],
        body: {
          kind: "cards",
          items: [
            {
              title: "Materials",
              description: "Detailed material quantities and associated costs.",
            },
            {
              title: "Labor",
              description:
                "Labor quantities, productivity considerations, and applicable labor rates.",
            },
            {
              title: "Equipment",
              description:
                "Equipment requirements and associated costs where applicable.",
            },
            {
              title: "Subcontractors",
              description:
                "Subcontracted scopes and vendor/subcontractor pricing.",
            },
            {
              title: "Overhead & Markup",
              description:
                "Project-specific overhead, profit, and markup calculations.",
            },
            {
              title: "Allowances",
              description:
                "Defined allowances for items where final selections or pricing are not yet available.",
            },
          ],
        },
      },
      {
        id: "trades",
        eyebrow: "Scope",
        title: "Trades We Can Estimate",
        paragraphs: [
          "Our estimating workflow supports a broad range of construction scopes, including:",
        ],
        body: {
          kind: "chips",
          items: [
            "Concrete",
            "Masonry",
            "Structural steel",
            "Metals",
            "Carpentry",
            "Drywall",
            "Roofing",
            "Doors and hardware",
            "Flooring",
            "Painting",
            "Finishes",
            "Mechanical",
            "HVAC",
            "Plumbing",
            "Electrical",
            "Fire protection",
            "Low voltage",
            "Sitework",
            "Excavation",
            "Civil work",
            "Other specialty trades",
          ],
        },
      },
      {
        id: "what-we-review",
        eyebrow: "Documents",
        title: "What We Review",
        paragraphs: [
          "Depending on the project, our estimators can work from:",
        ],
        body: {
          kind: "chips",
          items: [
            "Architectural drawings",
            "Structural drawings",
            "MEP drawings",
            "Civil drawings",
            "Specifications",
            "Addendums",
            "Bid documents",
            "Scope documents",
            "Schedules",
            "Existing takeoffs",
            "Vendor quotations",
            "Contractor-provided pricing",
          ],
        },
        footnote:
          "The more complete the project documentation, the more comprehensive the resulting estimate can be.",
        image: "planMarkup",
        imageSide: "left",
      },
      {
        id: "process",
        eyebrow: "How it works",
        title: "Our Takeoff & Estimating Process",
        body: {
          kind: "steps",
          items: [
            {
              title: "Document Collection",
              description:
                "Submit your project plans, specifications, scope information, and other relevant documents.",
            },
            {
              title: "Drawing Review",
              description:
                "We review the documents and determine the required trades and estimating scope.",
            },
            {
              title: "Quantity Takeoff",
              description: "Project components are measured, counted, and organized.",
            },
            {
              title: "Cost Development",
              description:
                "Quantities are converted into estimated material, labor, equipment, and subcontractor costs.",
            },
            {
              title: "Scope Review",
              description:
                "We review the estimate for scope coverage, assumptions, exclusions, and potential gaps.",
            },
            {
              title: "Estimate Delivery",
              description:
                "Receive an organized estimate prepared for bidding, budgeting, or project planning.",
            },
          ],
        },
      },
      {
        id: "preconstruction-decisions",
        eyebrow: "Why it matters",
        title: "Built for Better Preconstruction Decisions",
        paragraphs: ["A detailed estimate can help you:"],
        body: {
          kind: "checklist",
          items: [
            "Prepare competitive bids",
            "Understand project costs",
            "Compare subcontractor pricing",
            "Establish project budgets",
            "Plan material procurement",
            "Evaluate project feasibility",
            "Identify scope gaps",
            "Review cost assumptions",
            "Improve bid preparation",
          ],
        },
        image: "scheduleBoard",
        imageSide: "right",
      },
    ],
    closing: {
      title: "Need a Takeoff for Your Next Project?",
      paragraphs: [
        "Send your drawings and project information to Qostara Estimates and let our estimating team turn your plans into organized cost information.",
      ],
      label: "Request an Estimate",
    },
  },

  {
    slug: "mechanical-estimating",
    navLabel: "Mechanical Estimating",
    title: "Mechanical & HVAC Estimating Services",
    headline: "Detailed Mechanical Estimates for Confident Project Planning",
    cardTitle: "Mechanical Estimating",
    summary:
      "Mechanical and HVAC estimating for contractors, subcontractors, builders, and developers.",
    metaDescription:
      "Mechanical and HVAC estimating services from Qostara Estimates — detailed quantities and cost information for equipment, ductwork, piping, controls, and installation.",
    cardDescription: [
      "Detailed estimating for HVAC and mechanical systems, including material quantities, equipment, labor, and installation requirements.",
    ],
    cardCta: "Explore Mechanical Estimating",
    Icon: Wrench,
    image: "industrialSite",
    intro: [
      "Qostara Estimates provides mechanical and HVAC estimating services for contractors, subcontractors, builders, and developers.",
      "We analyze mechanical drawings, specifications, equipment schedules, and project requirements to develop detailed quantities and cost information for mechanical systems.",
    ],
    cta: { label: "Request a Mechanical Estimate" },
    sections: [
      {
        id: "plans-to-cost",
        eyebrow: "Scope",
        title: "Mechanical Estimating From Plans to Cost",
        paragraphs: [
          "Mechanical systems can involve equipment, ductwork, piping, insulation, controls, accessories, installation labor, and specialized subcontractor scopes.",
          "Our estimating process organizes these requirements into a clear cost structure.",
          "Depending on project scope, estimates can include:",
        ],
        body: {
          kind: "chips",
          items: [
            "HVAC equipment",
            "Ductwork",
            "Piping",
            "Valves",
            "Fittings",
            "Insulation",
            "Mechanical accessories",
            "Controls",
            "Grilles and diffusers",
            "Equipment connections",
            "Installation labor",
            "Equipment",
            "Subcontractor costs",
            "Other mechanical components",
          ],
        },
      },
      {
        id: "what-we-analyze",
        eyebrow: "Documents",
        title: "What We Analyze",
        paragraphs: ["Our mechanical estimators can review:"],
        body: {
          kind: "chips",
          items: [
            "Mechanical plans",
            "HVAC plans",
            "Equipment schedules",
            "Mechanical details",
            "Project specifications",
            "Scope documents",
            "Addendums",
            "Vendor quotations",
            "Contractor-provided pricing",
          ],
        },
        footnote:
          "This allows the estimating team to understand not only quantities, but also the intended system and installation requirements.",
        image: "blueprintMep",
        imageSide: "right",
      },
      {
        id: "components",
        eyebrow: "Deliverable",
        title: "Mechanical Estimate Components",
        body: {
          kind: "cards",
          items: [
            {
              title: "Material Takeoff",
              description:
                "Identify and quantify mechanical materials and components.",
            },
            {
              title: "Equipment",
              description:
                "Account for major mechanical equipment and associated requirements.",
            },
            {
              title: "Labor",
              description:
                "Develop labor requirements and associated installation costs.",
            },
            {
              title: "Subcontractors",
              description:
                "Include applicable specialty subcontractor scopes and quotations.",
            },
            {
              title: "Additional Costs",
              description:
                "Incorporate equipment, allowances, overhead, markup, and other applicable costs.",
            },
          ],
        },
      },
      {
        id: "why-it-matters",
        eyebrow: "Why it matters",
        title: "Why Mechanical Estimating Matters",
        paragraphs: [
          "A properly developed mechanical estimate can help contractors:",
        ],
        body: {
          kind: "checklist",
          items: [
            "Prepare bids",
            "Establish budgets",
            "Review project feasibility",
            "Plan procurement",
            "Compare vendor pricing",
            "Evaluate labor requirements",
            "Identify scope gaps",
            "Understand project cost exposure",
          ],
        },
      },
      {
        id: "workflow",
        eyebrow: "How it works",
        title: "Mechanical Estimating Workflow",
        body: {
          kind: "flow",
          items: [
            "Plans & Specifications",
            "Mechanical Scope Review",
            "Quantity Takeoff",
            "Material & Equipment Pricing",
            "Labor & Installation Costs",
            "Subcontractor Costs",
            "Overhead & Markup",
            "Reviewed Mechanical Estimate",
          ],
        },
      },
    ],
    closing: {
      title: "Need Mechanical or HVAC Estimating Support?",
      paragraphs: [
        "Send your mechanical plans and project documents to Qostara Estimates.",
        "We'll help convert your mechanical scope into structured quantities and cost information ready for review and bidding.",
      ],
      label: "Request a Mechanical Estimate",
    },
  },

  {
    slug: "electrical-estimating",
    navLabel: "Electrical Estimating",
    title: "Electrical Estimating Services",
    headline: "Detailed Electrical Takeoffs and Estimates for Construction Bids",
    cardTitle: "Electrical Estimating",
    summary:
      "Electrical estimating and quantity takeoff for electrical contractors, general contractors, builders, and developers.",
    metaDescription:
      "Electrical estimating and quantity takeoff services from Qostara Estimates — organized quantities and cost information for lighting, power, distribution, and low-voltage systems.",
    cardDescription: [
      "Accurate electrical quantity takeoffs and cost estimates covering electrical materials, equipment, labor, and project scope.",
    ],
    cardCta: "Explore Electrical Estimating",
    Icon: Zap,
    image: "hospital",
    intro: [
      "Qostara Estimates provides electrical estimating and quantity takeoff services for electrical contractors, general contractors, builders, and developers.",
      "Our team reviews electrical drawings, specifications, schedules, and project requirements to develop organized quantities and cost information for electrical systems.",
    ],
    cta: { label: "Request an Electrical Estimate" },
    sections: [
      {
        id: "detailed-takeoff",
        eyebrow: "Scope",
        title: "Build Your Electrical Bid From a Detailed Takeoff",
        paragraphs: [
          "Electrical estimating requires careful review of drawings, schedules, specifications, equipment, devices, wiring, and installation requirements.",
          "Our estimating workflow can cover the full electrical scope or specific portions of a project.",
          "Depending on the project, quantities may include:",
        ],
        body: {
          kind: "chips",
          items: [
            "Lighting fixtures",
            "Lamps and controls",
            "Receptacles",
            "Switches",
            "Electrical devices",
            "Panels",
            "Distribution equipment",
            "Switchgear",
            "Conduit",
            "Wire and cable",
            "Cable tray",
            "Disconnects",
            "Transformers",
            "Electrical equipment",
            "Low-voltage systems",
            "Fire alarm components",
            "Communication systems",
          ],
        },
      },
      {
        id: "includes",
        eyebrow: "Deliverable",
        title: "Electrical Estimating Includes",
        body: {
          kind: "cards",
          items: [
            {
              title: "Material Takeoff",
              description:
                "Detailed quantities for electrical materials and components.",
            },
            {
              title: "Equipment",
              description:
                "Identification and pricing of applicable electrical equipment.",
            },
            {
              title: "Labor",
              description:
                "Estimated installation labor based on the project scope.",
            },
            {
              title: "Subcontractor Costs",
              description:
                "Applicable subcontractor and specialty-system pricing.",
            },
            {
              title: "Additional Costs",
              description:
                "Allowances, equipment, overhead, markup, and other project-specific costs where applicable.",
            },
          ],
        },
      },
      {
        id: "documents",
        eyebrow: "Documents",
        title: "Documents We Can Review",
        paragraphs: ["Our team can work with:"],
        body: {
          kind: "chips",
          items: [
            "Electrical plans",
            "Lighting plans",
            "Power plans",
            "Single-line diagrams",
            "Panel schedules",
            "Equipment schedules",
            "Specifications",
            "Details",
            "Addendums",
            "Scope documents",
            "Vendor quotations",
          ],
        },
        image: "planningTeam",
        imageSide: "left",
      },
      {
        id: "support",
        eyebrow: "Why it matters",
        title: "Support for Electrical Contractors",
        paragraphs: ["A detailed electrical estimate can help you:"],
        body: {
          kind: "checklist",
          items: [
            "Prepare competitive bids",
            "Understand material requirements",
            "Plan procurement",
            "Review labor requirements",
            "Compare vendor pricing",
            "Evaluate project scope",
            "Identify missing information",
            "Develop project budgets",
          ],
        },
      },
      {
        id: "process",
        eyebrow: "How it works",
        title: "Our Electrical Estimating Process",
        body: {
          kind: "steps",
          items: [
            {
              title: "Submit Plans",
              description:
                "Provide electrical drawings, specifications, and project information.",
            },
            {
              title: "Scope Review",
              description:
                "We identify the electrical systems and estimating requirements.",
            },
            {
              title: "Quantity Takeoff",
              description: "Components are measured, counted, and organized.",
            },
            {
              title: "Pricing",
              description:
                "Material, labor, equipment, and applicable subcontractor costs are developed.",
            },
            {
              title: "Review",
              description:
                "The estimate is checked for scope coverage, assumptions, and exclusions.",
            },
            {
              title: "Delivery",
              description:
                "Receive an organized electrical estimate for bidding or budgeting.",
            },
          ],
        },
      },
    ],
    closing: {
      title: "Get Your Electrical Estimate Started",
      paragraphs: [
        "Send your project documents to Qostara Estimates and let our team develop the electrical quantities and cost information required for your next bid.",
      ],
      label: "Request an Electrical Estimate",
    },
  },

  {
    slug: "plumbing-estimating",
    navLabel: "Plumbing Estimating",
    title: "Plumbing Estimating Services",
    headline: "Accurate Plumbing Takeoffs for Better Bids and Budgets",
    cardTitle: "Plumbing Estimating",
    summary:
      "Detailed plumbing quantity takeoffs and estimating for plumbing contractors, general contractors, builders, and developers.",
    metaDescription:
      "Plumbing takeoff and estimating services from Qostara Estimates — material, labor, equipment, and installation costs from your plumbing plans and specifications.",
    cardDescription: [
      "Detailed plumbing takeoffs and estimates designed to help contractors understand material requirements, labor, equipment, and installation costs.",
    ],
    cardCta: "Explore Plumbing Estimating",
    Icon: Droplets,
    image: "blueprintMep",
    intro: [
      "Qostara Estimates provides detailed plumbing quantity takeoffs and estimating services for plumbing contractors, general contractors, builders, and developers.",
      "We analyze plumbing plans, specifications, schedules, and project requirements to quantify materials and develop labor and cost information for the plumbing scope.",
    ],
    cta: { label: "Request a Plumbing Estimate" },
    sections: [
      {
        id: "detailed-takeoffs",
        eyebrow: "Scope",
        title: "Detailed Plumbing Takeoffs",
        paragraphs: [
          "A plumbing estimate needs to account for the materials, fixtures, equipment, and installation requirements contained within the project documents.",
          "Depending on the scope, our takeoffs can include:",
        ],
        body: {
          kind: "chips",
          items: [
            "Domestic water piping",
            "Sanitary piping",
            "Storm drainage",
            "Gas piping",
            "Valves",
            "Fittings",
            "Fixtures",
            "Plumbing equipment",
            "Pumps",
            "Water heaters",
            "Specialty plumbing systems",
            "Insulation",
            "Supports and accessories",
            "Installation labor",
            "Equipment",
            "Subcontractor scopes",
          ],
        },
      },
      {
        id: "drawings-to-costs",
        eyebrow: "Deliverable",
        title: "From Drawings to Plumbing Costs",
        paragraphs: [
          "Our process connects quantity takeoff with project pricing.",
        ],
        body: {
          kind: "cards",
          items: [
            {
              title: "Quantities",
              description:
                "Measure and count plumbing components from the project documents.",
            },
            {
              title: "Materials",
              description:
                "Identify required materials and associated quantities.",
            },
            {
              title: "Labor",
              description: "Develop labor requirements for installation.",
            },
            {
              title: "Equipment",
              description:
                "Account for applicable equipment and installation resources.",
            },
            {
              title: "Subcontractors",
              description:
                "Include specialty subcontractor scopes and quotations where required.",
            },
            {
              title: "Final Estimate",
              description:
                "Combine the applicable costs into an organized plumbing estimate.",
            },
          ],
        },
      },
      {
        id: "documents",
        eyebrow: "Documents",
        title: "Documents We Review",
        paragraphs: ["Depending on your project, we can review:"],
        body: {
          kind: "chips",
          items: [
            "Plumbing plans",
            "Plumbing riser diagrams",
            "Isometric drawings",
            "Fixture schedules",
            "Equipment schedules",
            "Specifications",
            "Details",
            "Addendums",
            "Scope documents",
            "Vendor quotations",
          ],
        },
        image: "residentialFraming",
        imageSide: "right",
      },
      {
        id: "how-it-helps",
        eyebrow: "Why it matters",
        title: "How a Detailed Plumbing Estimate Helps",
        paragraphs: ["Use your estimate to:"],
        body: {
          kind: "checklist",
          items: [
            "Prepare project bids",
            "Establish budgets",
            "Plan material purchases",
            "Evaluate labor requirements",
            "Review subcontractor pricing",
            "Identify scope gaps",
            "Compare project costs",
            "Support preconstruction planning",
          ],
        },
      },
      {
        id: "workflow",
        eyebrow: "How it works",
        title: "Plumbing Estimating Process",
        body: {
          kind: "flow",
          items: [
            "Project Documents",
            "Plumbing Scope Review",
            "Quantity Takeoff",
            "Material Pricing",
            "Labor & Equipment",
            "Subcontractor Costs",
            "Overhead & Markup",
            "Final Plumbing Estimate",
          ],
        },
      },
    ],
    closing: {
      title: "Ready for Your Next Plumbing Bid?",
      paragraphs: [
        "Send your plumbing plans and project information to Qostara Estimates.",
        "Our team will review the scope and develop the takeoff and estimating information you need.",
      ],
      label: "Request a Plumbing Estimate",
    },
  },

  {
    slug: "shop-drawing-detailing",
    navLabel: "Shop Drawing & Detailing",
    title: "Shop Drawing & Detailing Services",
    headline:
      "Detailed Construction Drawings for Fabrication, Coordination & Installation",
    cardTitle: "Shop Drawing & Detailing",
    summary:
      "Professional shop drawing and detailing services for architectural, structural, and MEP construction scopes.",
    metaDescription:
      "Architectural, structural, and MEP shop drawing and detailing services from Qostara Estimates, supporting fabrication, coordination, review, and installation.",
    cardDescription: [
      "Professional architectural, structural, and MEP shop drawing and detailing services to support fabrication, coordination, installation, and construction documentation.",
    ],
    cardCta: "Explore Shop Drawing Services",
    Icon: DraftingCompass,
    image: "bimDetailer",
    intro: [
      "Qostara Estimates provides professional shop drawing and detailing services for architectural, structural, and MEP construction scopes.",
      "Our detailing team transforms design information into organized construction drawings that can support fabrication, coordination, review, and installation.",
    ],
    cta: { label: "Request Shop Drawings" },
    sections: [
      {
        id: "architectural",
        eyebrow: "Architectural",
        title: "Architectural Shop Drawings",
        paragraphs: [
          "We provide detailing support for architectural components and construction assemblies.",
          "Potential scopes include:",
        ],
        body: {
          kind: "chips",
          items: [
            "Architectural products",
            "Millwork and cabinetry",
            "Wall panels",
            "Cladding",
            "Facades",
            "Stone",
            "Tile",
            "Roofing",
            "Building envelope components",
            "Interior architectural elements",
          ],
        },
        footnote:
          "Our drawings are developed based on the available design documents, project requirements, and applicable detailing standards.",
        image: "hospital",
        imageSide: "right",
      },
      {
        id: "structural",
        eyebrow: "Structural",
        title: "Structural Shop Drawings",
        paragraphs: [
          "Structural detailing can support fabrication and installation for a variety of structural components. Services can include:",
        ],
        body: {
          kind: "groups",
          items: [
            {
              title: "Concrete & Reinforcement",
              items: [
                "Reinforcement detailing",
                "Concrete components",
                "Cast-in-place elements",
                "Precast components",
                "Tilt-up construction",
              ],
            },
            {
              title: "Structural Steel",
              items: [
                "Steel members",
                "Connections",
                "Fabrication details",
                "Erection-related details",
              ],
            },
            {
              title: "Metal Framing",
              items: [
                "Metal framing systems",
                "Component details",
                "Connection information",
              ],
            },
            {
              title: "Masonry",
              items: [
                "CMU",
                "Masonry components",
                "Reinforcement",
                "Related detailing",
              ],
            },
          ],
        },
      },
      {
        id: "mep",
        eyebrow: "MEP",
        title: "MEP Shop Drawings",
        paragraphs: [
          "We provide detailing services for major MEP disciplines.",
        ],
        body: {
          kind: "groups",
          items: [
            {
              title: "Mechanical",
              items: [
                "HVAC systems",
                "Mechanical equipment",
                "Ductwork",
                "Piping",
                "Mechanical components",
              ],
            },
            {
              title: "Electrical",
              items: [
                "Electrical systems",
                "Equipment",
                "Distribution components",
                "Electrical layouts and details",
              ],
            },
            {
              title: "Plumbing",
              items: [
                "Plumbing systems",
                "Piping",
                "Fixtures",
                "Equipment",
                "Installation details",
              ],
            },
            {
              title: "Fire Protection",
              items: [
                "Fire sprinkler systems",
                "Piping",
                "Components",
                "Related details",
              ],
            },
            {
              title: "Fire Alarm & Low Voltage",
              items: [
                "Fire alarm systems",
                "Low-voltage systems",
                "Communication systems",
                "Telecom-related components",
              ],
            },
          ],
        },
      },
      {
        id: "coordination",
        eyebrow: "Coordination",
        title: "Coordination-Focused Detailing",
        paragraphs: [
          "Construction systems often interact within the same space.",
          "Our MEP detailing workflow can help organize information across:",
        ],
        body: {
          kind: "formula",
          items: [
            "Mechanical",
            "Electrical",
            "Plumbing",
            "Fire Protection",
            "Low Voltage",
          ],
        },
        footnote:
          "The objective is to produce clear documentation that supports coordination and reduces ambiguity during fabrication and installation.",
        image: "planningTeam",
        imageSide: "left",
      },
      {
        id: "workflow",
        eyebrow: "How it works",
        title: "Shop Drawing Workflow",
        body: {
          kind: "steps",
          items: [
            {
              title: "Submit Project Documents",
              description:
                "Provide drawings, specifications, design information, and project requirements.",
            },
            {
              title: "Scope Review",
              description:
                "We review the required discipline, components, drawing standards, and deliverables.",
            },
            {
              title: "Detailing",
              description:
                "Our detailing team develops the required shop drawings.",
            },
            {
              title: "Internal Review",
              description:
                "Drawings are reviewed for consistency, completeness, and coordination with the available project information.",
            },
            {
              title: "Revisions",
              description:
                "Required revisions are incorporated based on project review comments.",
            },
            {
              title: "Final Delivery",
              description:
                "Receive the completed shop drawing package in the agreed format.",
            },
          ],
        },
      },
      {
        id: "who-we-support",
        eyebrow: "Who we support",
        title: "Who We Support",
        paragraphs: ["Our shop drawing services are designed for:"],
        body: {
          kind: "chips",
          items: [
            "General contractors",
            "Subcontractors",
            "Fabricators",
            "Manufacturers",
            "Builders",
            "Construction companies",
            "Project teams",
          ],
        },
      },
      {
        id: "documentation",
        eyebrow: "Documentation",
        title: "Better Documentation for the Construction Process",
        paragraphs: ["Detailed shop drawings can help communicate:"],
        body: {
          kind: "checklist",
          items: [
            "Dimensions",
            "Materials",
            "Connections",
            "Assembly information",
            "Installation requirements",
            "Fabrication requirements",
            "Coordination information",
          ],
        },
        footnote:
          "They provide a bridge between design intent and the information needed for construction execution.",
        image: "planMarkup",
        imageSide: "right",
      },
    ],
    closing: {
      title: "Need Professional Shop Drawings?",
      paragraphs: [
        "Send your project drawings and specifications to Qostara Estimates.",
        "Our team can review your requirements and determine the appropriate architectural, structural, or MEP detailing scope.",
      ],
      label: "Request Shop Drawing Services",
    },
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function serviceHref(slug: string) {
  return `/services/${slug}`;
}
