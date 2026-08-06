import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BrickWall,
  Building2,
  Calculator,
  ClipboardList,
  Clock3,
  Cpu,
  DraftingCompass,
  Droplets,
  Fence,
  FileSpreadsheet,
  Hammer,
  HardHat,
  Layers,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Target,
  Thermometer,
  Trees,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  Icon: LucideIcon;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "construction-cost-estimation",
    title: "Construction Cost Estimation",
    short:
      "Bid-ready cost models that reflect current market rates, labour, and contingency.",
    description:
      "Full project estimates that combine quantity takeoffs with live pricing so you know exactly what to bid — and where the margin lives.",
    Icon: Calculator,
    benefits: [
      "CSI-formatted cost breakdowns",
      "Regional labour and material rates",
      "Risk and contingency modelling",
      "Revision tracking across addenda",
    ],
  },
  {
    slug: "material-takeoff",
    title: "Material Takeoff",
    short:
      "Digitised material counts that leave nothing on the floor of the drawing set.",
    description:
      "Layer-by-layer takeoffs from PDF, CAD, and Revit drawings. Every length, area, and count is tagged to a clear source sheet.",
    Icon: Ruler,
    benefits: [
      "PDF, DWG, and Revit inputs",
      "Colour-coded measurement layers",
      "Waste factors by trade",
      "Export to Excel and Bluebeam",
    ],
  },
  {
    slug: "quantity-surveying",
    title: "Quantity Surveying",
    short:
      "Independent quantity survey for owners, developers, and design-build teams.",
    description:
      "Independent verification of scope and quantities — used for feasibility, value engineering, and change-order defence.",
    Icon: ClipboardList,
    benefits: [
      "Feasibility and concept budgets",
      "Bill of quantities (BOQ)",
      "Value-engineering options",
      "Change-order validation",
    ],
  },
  {
    slug: "bid-preparation",
    title: "Bid Preparation",
    short:
      "Proposal packages that put your numbers next to a clear narrative of scope.",
    description:
      "From bid calendar to final submission package. We assemble the takeoff, the pricing, and the clarifications that keep you competitive.",
    Icon: FileSpreadsheet,
    benefits: [
      "Bid calendar management",
      "Scope clarification letters",
      "Subcontractor quote review",
      "Submission-ready binders",
    ],
  },
  {
    slug: "design-build-estimates",
    title: "Design-Build Estimates",
    short:
      "Estimates that evolve with the design instead of fighting it at every stage.",
    description:
      "Progressive estimating for design-build and IPD teams — conceptual, schematic, and construction-document priced as one continuous model.",
    Icon: DraftingCompass,
    benefits: [
      "Concept through CD pricing",
      "Design-option comparisons",
      "Target-value design support",
      "Shared cost models for teams",
    ],
  },
  {
    slug: "labor-cost-analysis",
    title: "Labor Cost Analysis",
    short:
      "Crew-level productivity models so labour hours stop being a guess.",
    description:
      "We model crew composition, productivity factors, and overtime so your labour line holds up when the schedule compresses.",
    Icon: HardHat,
    benefits: [
      "Union and open-shop rates",
      "Crew productivity factors",
      "Overtime and shift premiums",
      "Regional wage databases",
    ],
  },
];

export type Trade = {
  slug: string;
  name: string;
  description: string;
  Icon: LucideIcon;
  industries: string[];
};

export const trades: Trade[] = [
  {
    slug: "concrete",
    name: "Concrete",
    description:
      "Formwork, rebar, cast-in-place, and precast — counted by pour and by member.",
    Icon: Layers,
    industries: ["Commercial", "Infrastructure", "Multifamily"],
  },
  {
    slug: "electrical",
    name: "Electrical",
    description:
      "Devices, feeders, fixtures, and gear — from rough-in through final trim.",
    Icon: Zap,
    industries: ["Healthcare", "Data centers", "Retail"],
  },
  {
    slug: "mechanical",
    name: "Mechanical",
    description:
      "Piping, equipment, and hydronics with complete accessory schedules.",
    Icon: Wrench,
    industries: ["Industrial", "Labs", "Hospitality"],
  },
  {
    slug: "steel",
    name: "Steel",
    description:
      "Structural and misc. metals with connection details and shop-drawing checks.",
    Icon: Building2,
    industries: ["High-rise", "Industrial", "Bridges"],
  },
  {
    slug: "drywall",
    name: "Drywall",
    description:
      "Partitions, shaft walls, ceilings, and specialty assemblies by linear foot.",
    Icon: Fence,
    industries: ["Office", "Education", "Hospitality"],
  },
  {
    slug: "painting",
    name: "Painting",
    description:
      "Interior and exterior coatings with substrate prep and mil thickness.",
    Icon: Paintbrush,
    industries: ["Residential", "Retail", "Healthcare"],
  },
  {
    slug: "roofing",
    name: "Roofing",
    description:
      "Membrane, metal, and steep-slope systems including flashings and insulation.",
    Icon: Layers,
    industries: ["Warehouse", "Multifamily", "Institutional"],
  },
  {
    slug: "masonry",
    name: "Masonry",
    description:
      "CMU, brick, stone, and veneer with reinforcement and accessory counts.",
    Icon: BrickWall,
    industries: ["Education", "Municipal", "Mixed-use"],
  },
  {
    slug: "flooring",
    name: "Flooring",
    description:
      "VCT, LVT, tile, carpet, and specialty floors with underlayment allowances.",
    Icon: Sparkles,
    industries: ["Healthcare", "Hospitality", "Retail"],
  },
  {
    slug: "hvac",
    name: "HVAC",
    description:
      "Ductwork, equipment, controls, and insulation with airflow verification.",
    Icon: Thermometer,
    industries: ["Labs", "Office", "Data centers"],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    description:
      "Domestic water, DWV, fixtures, and specialties with fixture-unit checks.",
    Icon: Droplets,
    industries: ["Multifamily", "Hospitality", "Healthcare"],
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    description:
      "Hardscape, planting, irrigation, and site furnishings for the civil set.",
    Icon: Trees,
    industries: ["Parks", "Campus", "Mixed-use"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Submit Drawings",
    description:
      "Upload plans, specs, and addenda. PDF, DWG, and Revit are all welcome.",
  },
  {
    step: "02",
    title: "Project Review",
    description:
      "A senior estimator scopes the set, flags missing sheets, and confirms the bid date.",
  },
  {
    step: "03",
    title: "Detailed Quantity Takeoff",
    description:
      "Every trade is measured layer by layer with colour-coded source references.",
  },
  {
    step: "04",
    title: "Pricing Analysis",
    description:
      "Current regional rates, subcontractor quotes, and productivity factors are applied.",
  },
  {
    step: "05",
    title: "Final Estimate",
    description:
      "You receive a CSI-formatted cost report, Excel export, and mark-up PDFs.",
  },
  {
    step: "06",
    title: "Delivery & Support",
    description:
      "We walk the numbers with your team and revise for addenda until the bid is sealed.",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Highly Accurate Estimates",
    description:
      "Dual review on every takeoff. Average variance under two percent against awarded jobs.",
    Icon: Target,
  },
  {
    title: "Fast Turnaround",
    description:
      "Most commercial packages return in 3–5 business days. Rush windows available.",
    Icon: Clock3,
  },
  {
    title: "Certified Estimators",
    description:
      "AACE and ASPE-credentialed leads on every account, not just the sales call.",
    Icon: BadgeCheck,
  },
  {
    title: "Latest Pricing Database",
    description:
      "Regional cost libraries refreshed weekly across labour, materials, and equipment.",
    Icon: Cpu,
  },
  {
    title: "Dedicated Support",
    description:
      "One named estimator for your account. Same person from kickoff through award.",
    Icon: Users,
  },
  {
    title: "Cost Saving Strategies",
    description:
      "Value-engineering options flagged before you bid, not after you lose the job.",
    Icon: ShieldCheck,
  },
] as const;

export type Project = {
  title: string;
  type: string;
  budget: string;
  location: string;
  completed: string;
  variant: "tower" | "campus" | "span" | "grid";
};

export const projects: Project[] = [
  {
    title: "Harborline Logistics Hub",
    type: "Industrial / Tilt-up",
    budget: "$48M",
    location: "Oakland, CA",
    completed: "2025",
    variant: "grid",
  },
  {
    title: "Northridge Medical Pavilion",
    type: "Healthcare",
    budget: "$112M",
    location: "Austin, TX",
    completed: "2024",
    variant: "campus",
  },
  {
    title: "Riverbend Residences",
    type: "Multifamily",
    budget: "$76M",
    location: "Denver, CO",
    completed: "2025",
    variant: "tower",
  },
  {
    title: "Pacific Span Pedestrian Bridge",
    type: "Infrastructure",
    budget: "$19M",
    location: "Portland, OR",
    completed: "2024",
    variant: "span",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Qostara turned a 400-sheet healthcare set around in four days and caught two missing fire-rated assemblies our previous estimator had missed. We won the job.",
    name: "Elena Vargas",
    role: "Chief Estimator",
    company: "Forge & Field GC",
    initials: "EV",
    rating: 5,
  },
  {
    quote:
      "The takeoffs arrive colour-coded to the sheet. My supers can open the PDF and see exactly where every quantity came from. That alone cut our bid reviews in half.",
    name: "Marcus Chen",
    role: "VP Preconstruction",
    company: "Apex Structures",
    initials: "MC",
    rating: 5,
  },
  {
    quote:
      "We used Qostara for three design-build pursuits last year and awarded two. Their progressive cost model kept the design team honest without slowing anyone down.",
    name: "Priya Nair",
    role: "Project Director",
    company: "Lumen Design-Build",
    initials: "PN",
    rating: 5,
  },
  {
    quote:
      "Clear communication, no fluff in the report, and they stayed available through addendum five. That is rare for an outsourced estimating partner.",
    name: "Jonah Hale",
    role: "Owner",
    company: "Hale Electric Co.",
    initials: "JH",
    rating: 5,
  },
];

export const trustStats = [
  {
    value: 10000,
    suffix: "+",
    label: "Projects completed",
    detail: "Commercial, healthcare & industrial",
  },
  {
    value: 98.4,
    suffix: "%",
    decimals: 1,
    label: "Avg. takeoff accuracy",
    detail: "Measured vs awarded cost",
  },
  {
    value: 22,
    suffix: "%",
    prefix: "+",
    label: "Win-rate lift",
    detail: "Median after 90 days",
  },
  {
    value: 4,
    suffix: " days",
    label: "Typical turnaround",
    detail: "Most commercial packages",
  },
] as const;

export const impactStats = [
  { value: 10000, suffix: "+", label: "Projects" },
  { value: 98, suffix: "%", label: "Accuracy" },
  { value: 500, suffix: "+", label: "Happy clients" },
  { value: 25, suffix: "+", label: "Estimators" },
] as const;

export const faqs = [
  {
    question: "What drawing formats do you accept?",
    answer:
      "PDF is the most common. We also work from DWG, DXF, and Revit models. If you have a Bluebeam session or Procore link, we can pull from that too.",
  },
  {
    question: "How long does a typical estimate take?",
    answer:
      "Most commercial packages return in 3–5 business days. Large healthcare and industrial sets are scoped individually. Rush turnarounds are available when bid dates demand it.",
  },
  {
    question: "Do you estimate every trade?",
    answer:
      "Yes. Our team covers concrete, steel, envelope, MEP, finishes, and site work. Specialty trades like fire protection and cleanroom systems are handled by dedicated estimators.",
  },
  {
    question: "How do you keep pricing current?",
    answer:
      "Regional cost libraries are refreshed weekly from supplier quotes, union wage updates, and awarded-job feedback. Clients can also supply preferred vendor pricing.",
  },
  {
    question: "Can you work with our existing templates?",
    answer:
      "Absolutely. We deliver in your CSI structure, Excel workbook, or estimating software export — including Sage, Destini, and HeavyBid formats on request.",
  },
  {
    question: "What happens when an addendum drops?",
    answer:
      "We revise the takeoff and the cost model, highlight the delta, and return an updated package. Active bids include addendum support through the submission date.",
  },
  {
    question: "Is my project data kept confidential?",
    answer:
      "Yes. Every engagement is covered by an NDA. Drawings live in encrypted storage and are purged on a schedule you set after the bid is sealed.",
  },
  {
    question: "Do you offer ongoing estimating support?",
    answer:
      "Many clients keep Qostara on retainer for a book of work. That gives you priority scheduling and a named estimator who already knows your standards.",
  },
  {
    question: "Can owners and developers hire Qostara directly?",
    answer:
      "Yes. We produce independent quantity surveys and conceptual budgets for owners, developers, and lenders who need a second set of eyes on cost.",
  },
  {
    question: "How do we get started?",
    answer:
      "Share drawings through the contact form or book a 15-minute scoping call. We confirm scope, timeline, and fee before any work begins — no surprises.",
  },
] as const;

export const team = [
  {
    name: "Amelia Rowe",
    role: "Founder & Principal Estimator",
    bio: "Former GC chief estimator. Built Qostara to give mid-market contractors the same preconstruction depth as the nationals.",
    initials: "AR",
  },
  {
    name: "Devon Park",
    role: "Director of Quantity Surveying",
    bio: "Leads the QS practice across design-build and IPD pursuits. Eighteen years in healthcare and labs.",
    initials: "DP",
  },
  {
    name: "Sofia Mendes",
    role: "Head of MEP Estimating",
    bio: "Specialises in complex mechanical and electrical systems for data centers and research campuses.",
    initials: "SM",
  },
  {
    name: "Kai Nakamura",
    role: "Client Success Lead",
    bio: "Keeps every active bid on schedule and makes sure addenda never fall through the cracks.",
    initials: "KN",
  },
] as const;

export const values = [
  {
    title: "Precision over volume",
    description:
      "We take fewer jobs so every takeoff can survive a peer review. Accuracy is the product.",
    Icon: Target,
  },
  {
    title: "Clarity in every deliverable",
    description:
      "If a superintendent cannot find the source of a quantity, the estimate is not finished.",
    Icon: Ruler,
  },
  {
    title: "Partnership, not a black box",
    description:
      "You always know who is working the set and how the numbers were built.",
    Icon: Users,
  },
  {
    title: "Craft with modern tools",
    description:
      "Digitised takeoff platforms, live cost libraries — applied by people who have swung hammers.",
    Icon: Hammer,
  },
] as const;

export const timeline = [
  {
    year: "2008",
    title: "Founded in San Francisco",
    description:
      "Amelia Rowe opens a two-person estimating desk serving Bay Area general contractors.",
  },
  {
    year: "2013",
    title: "National reach",
    description:
      "Remote delivery model lets Qostara support projects across the continental U.S.",
  },
  {
    year: "2018",
    title: "MEP practice launches",
    description:
      "Dedicated mechanical and electrical team opens, doubling capacity for complex sets.",
  },
  {
    year: "2022",
    title: "Design-build desk",
    description:
      "Progressive estimating service launches for IPD and design-build clients.",
  },
  {
    year: "2026",
    title: "25+ estimators",
    description:
      "A distributed team serving 500+ contractors, owners, and specialty trades.",
  },
] as const;

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Single Project",
    price: "From $1,200",
    period: "per estimate",
    description: "One-off takeoffs for contractors bidding a specific job.",
    features: [
      "Full quantity takeoff",
      "CSI cost report + Excel",
      "One addendum revision",
      "48-hour kickoff",
      "Email support",
    ],
    cta: "Request a quote",
  },
  {
    name: "Growth Retainer",
    price: "$4,800",
    period: "per month",
    description: "Priority capacity for teams bidding every week.",
    features: [
      "Up to 4 estimates / month",
      "Named estimator",
      "Unlimited addenda on active bids",
      "Value-engineering notes",
      "Priority turnaround",
      "Monthly pipeline review",
    ],
    cta: "Start retainer",
    highlighted: true,
  },
  {
    name: "Enterprise Desk",
    price: "Custom",
    period: "annual",
    description: "Embedded estimating capacity for regional and national GCs.",
    features: [
      "Dedicated estimating pod",
      "Custom templates & software export",
      "On-site kickoff workshops",
      "SLA-backed turnaround",
      "Quarterly cost benchmarking",
      "NDA and SOC 2 controls",
    ],
    cta: "Talk to sales",
  },
];

export const pricingComparison = [
  {
    feature: "Quantity takeoff",
    single: true,
    growth: true,
    enterprise: true,
  },
  {
    feature: "CSI cost report",
    single: true,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Named estimator",
    single: false,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Unlimited addenda",
    single: false,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Value-engineering notes",
    single: false,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Custom software export",
    single: false,
    growth: false,
    enterprise: true,
  },
  {
    feature: "SLA-backed turnaround",
    single: false,
    growth: false,
    enterprise: true,
  },
  {
    feature: "On-site workshops",
    single: false,
    growth: false,
    enterprise: true,
  },
] as const;

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-read-a-quantity-takeoff",
    title: "How to read a quantity takeoff like an estimator",
    excerpt:
      "The five columns that matter, the ones that do not, and how to spot a soft number before the bid meeting.",
    category: "Guides",
    date: "Mar 12, 2026",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "addenda-discipline",
    title: "Addenda discipline: the habit that wins more work",
    excerpt:
      "Most lost bids are not lost on price. They are lost on scope that changed after the first takeoff.",
    category: "Process",
    date: "Feb 28, 2026",
    readTime: "6 min",
  },
  {
    slug: "design-build-cost-models",
    title: "Building a cost model that survives design-build",
    excerpt:
      "Why progressive estimating beats re-bidding the set every time the architecture shifts.",
    category: "Design-Build",
    date: "Feb 10, 2026",
    readTime: "9 min",
  },
  {
    slug: "regional-labour-rates-2026",
    title: "Regional labour rates to watch in 2026",
    excerpt:
      "Where wages moved, which trades are tightest, and how to keep your contingency honest.",
    category: "Market",
    date: "Jan 22, 2026",
    readTime: "7 min",
  },
  {
    slug: "value-engineering-without-cutting-scope",
    title: "Value engineering without cutting the scope that wins the job",
    excerpt:
      "A practical checklist for finding savings that the owner will actually accept.",
    category: "Guides",
    date: "Jan 8, 2026",
    readTime: "5 min",
  },
  {
    slug: "when-to-outsource-estimating",
    title: "When to outsource estimating — and when not to",
    excerpt:
      "A decision framework for growing GCs who are stretched between pursuits and production.",
    category: "Business",
    date: "Dec 14, 2025",
    readTime: "6 min",
  },
];

export const blogCategories = [
  "All",
  "Guides",
  "Process",
  "Design-Build",
  "Market",
  "Business",
] as const;

export const trustPartners = [
  { name: "Forge & Field", mark: "FF", focus: "General contractor" },
  { name: "Apex Structures", mark: "AS", focus: "Structural steel" },
  { name: "Lumen Design-Build", mark: "LD", focus: "Design-build" },
  { name: "Harborline", mark: "HL", focus: "Industrial GC" },
  { name: "Northridge", mark: "NR", focus: "Healthcare" },
  { name: "Hale Electric", mark: "HE", focus: "Electrical" },
] as const;
