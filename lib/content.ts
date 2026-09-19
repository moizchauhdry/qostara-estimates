import type { LucideIcon } from "lucide-react";
import {
  Building2,
  ClipboardList,
  Hammer,
  HardHat,
  Layers,
  Ruler,
  Shovel,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import type { ImageKey } from "@/lib/images";

export type TradeGroup = {
  slug: string;
  name: string;
  items: string[];
  Icon: LucideIcon;
  image: ImageKey;
};

export const tradeGroups: TradeGroup[] = [
  {
    slug: "general-construction",
    name: "General Construction",
    items: [
      "General building construction",
      "Renovation and remodeling",
      "Commercial construction",
      "Residential construction",
      "Industrial construction",
      "Institutional projects",
    ],
    Icon: Building2,
    image: "laserMeasure",
  },
  {
    slug: "structural-architectural",
    name: "Structural & Architectural",
    items: [
      "Concrete",
      "Reinforcing steel",
      "Structural steel",
      "Masonry",
      "Metal framing",
      "Roofing",
      "Doors and hardware",
      "Finishes",
      "Millwork and cabinetry",
    ],
    Icon: Layers,
    image: "sunsetSite",
  },
  {
    slug: "mep",
    name: "MEP",
    items: [
      "Mechanical",
      "HVAC",
      "Plumbing",
      "Electrical",
      "Fire protection",
      "Fire alarm",
      "Low voltage",
      "Telecommunications",
    ],
    Icon: Wrench,
    image: "blueprintMep",
  },
  {
    slug: "site-civil",
    name: "Site & Civil",
    items: [
      "Sitework",
      "Excavation",
      "Earthwork",
      "Utilities",
      "Concrete site work",
      "Other civil scopes",
    ],
    Icon: Shovel,
    image: "industrialSite",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Submit Your Project",
    description:
      "Send us your plans, specifications, scope documents, addendums, and other project information.",
  },
  {
    step: "02",
    title: "Project Review",
    description:
      "Our estimating team reviews the available documentation and identifies the trades, scopes, quantities, and information required for the estimate.",
  },
  {
    step: "03",
    title: "Quantity Takeoff",
    description:
      "We measure, count, and organize project quantities according to the drawings and specifications.",
  },
  {
    step: "04",
    title: "Cost Estimating",
    description:
      "Quantities are developed into detailed costs for materials, labor, equipment, subcontractors, and other applicable expenses.",
  },
  {
    step: "05",
    title: "Quality Review",
    description:
      "The estimate is reviewed for quantity consistency, scope coverage, pricing, assumptions, and exclusions.",
  },
  {
    step: "06",
    title: "Delivery",
    description:
      "Receive a structured estimate that can be used for bidding, budgeting, project planning, and internal review.",
  },
] as const;

export const audiences = [
  {
    title: "General Contractors",
    description:
      "Prepare complete project estimates, review subcontractor scopes, and develop competitive bids.",
    Icon: Building2,
  },
  {
    title: "Subcontractors",
    description:
      "Focus on your trade while we handle the quantity takeoff and estimating work behind your bid.",
    Icon: Wrench,
  },
  {
    title: "Builders & Developers",
    description:
      "Understand project costs earlier and use detailed estimates to support budgeting and planning.",
    Icon: Hammer,
  },
  {
    title: "Construction Professionals",
    description:
      "Outsource estimating when your internal team needs additional capacity or when deadlines are tight.",
    Icon: Users,
  },
] as const;

export const estimateComponents = [
  "Material quantities",
  "Material costs",
  "Labor quantities",
  "Labor costs",
  "Equipment",
  "Subcontractor costs",
  "Assemblies",
  "Allowances",
  "Overhead",
  "Markup",
  "Exclusions",
  "Assumptions",
  "Scope notes",
  "Bid summaries",
] as const;

export const whyChooseUs = [
  {
    title: "Detail That Supports Your Bid",
    description:
      "We break project scopes into measurable and understandable cost components.",
    Icon: Ruler,
  },
  {
    title: "Trade-Specific Expertise",
    description:
      "Our estimating workflow is designed around the requirements of individual construction trades.",
    Icon: HardHat,
  },
  {
    title: "Organized Deliverables",
    description:
      "Receive estimates that are structured for review, budgeting, and bidding.",
    Icon: ClipboardList,
  },
  {
    title: "Flexible Support",
    description:
      "Use Qostara for a single project, a specific trade, or ongoing estimating requirements.",
    Icon: Users,
  },
  {
    title: "Preconstruction Focus",
    description:
      "Identify quantities, costs, assumptions, and potential scope issues before construction begins.",
    Icon: Target,
  },
] as const;

export const projectScales = [
  {
    label: "Residential",
    image: "residentialFraming",
  },
  {
    label: "Commercial",
    image: "hospital",
  },
  {
    label: "Industrial",
    image: "industrialSite",
  },
] as const satisfies readonly { label: string; image: ImageKey }[];

/**
 * Answers are drawn only from what the service pages already state, so the FAQ
 * never promises turnaround times, pricing, or credentials the copy doesn't.
 */
export const faqs = [
  {
    question: "What documents can you work from?",
    answer:
      "Depending on the project, our estimators can work from architectural, structural, MEP, and civil drawings, specifications, addendums, bid documents, scope documents, schedules, existing takeoffs, vendor quotations, and contractor-provided pricing. The more complete the documentation, the more comprehensive the estimate can be.",
  },
  {
    question: "Can you estimate a single trade, or only a full project?",
    answer:
      "Both. Whether you need a single-trade takeoff or a complete multi-trade estimate, we help turn complex construction documents into usable cost information. You can use Qostara for a single project, a specific trade, or ongoing estimating requirements.",
  },
  {
    question: "What does a Qostara estimate include?",
    answer:
      "The exact structure is tailored to your project and scope. An estimate can include material and labor quantities and costs, equipment, subcontractor costs, assemblies, allowances, overhead, markup, exclusions, assumptions, scope notes, and bid summaries.",
  },
  {
    question: "Which trades do you cover?",
    answer:
      "Our estimating capabilities span general construction, structural and architectural scopes, MEP (mechanical, HVAC, plumbing, electrical, fire protection, fire alarm, low voltage, and telecommunications), and site and civil work. We also provide architectural, structural, and MEP shop drawing and detailing services.",
  },
  {
    question: "Who do you work with?",
    answer:
      "General contractors, subcontractors, builders, developers, and other construction professionals — from smaller residential projects to large commercial and industrial developments.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send us your plans and project requirements. Our team will review your documents and help determine the estimating services your project requires.",
  },
] as const;
