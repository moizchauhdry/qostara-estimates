import { Star } from "lucide-react";
import { Section, SectionHeading } from "./section";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  featured?: boolean;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "We went from three days to about twenty minutes per estimate. The first month on Quotely we closed four jobs we would have lost to a faster competitor.",
    name: "Marcus Idowu",
    role: "Owner, Northline Builders",
    initials: "MI",
    featured: true,
  },
  {
    quote:
      "The read receipts changed how we follow up. I stopped guessing and started calling the people who actually opened the quote twice.",
    name: "Priya Raghunathan",
    role: "Head of Sales, Vertex HVAC",
    initials: "PR",
  },
  {
    quote:
      "Deposits land before we order materials now. Our cash conversion cycle dropped by eleven days without a single awkward conversation.",
    name: "Dana Whitfield",
    role: "CFO, Harbor Group",
    initials: "DW",
  },
  {
    quote:
      "Rolling out to 40 field reps took an afternoon. Templates keep the pricing consistent and I finally trust the numbers in our pipeline report.",
    name: "Tom Escalante",
    role: "VP Operations, Brightpath",
    initials: "TE",
  },
  {
    quote:
      "Clients tell us the estimates look better than the ones from firms twice our size. That credibility is worth the subscription on its own.",
    name: "Sofia Lindqvist",
    role: "Founder, Studio Nord",
    initials: "SL",
  },
  {
    quote:
      "The QuickBooks sync just works. Month-end used to eat a full weekend and now it's a Monday morning coffee.",
    name: "Grace Okonkwo",
    role: "Controller, Meridian Services",
    initials: "GO",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" tone="slate">
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved by the teams doing the quoting"
      />

      <div data-reveal className="mt-8 flex justify-center">
        <p className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 ring-1 ring-slate-900/5 shadow-soft">
          <span className="flex gap-0.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-4 fill-amber-400 text-amber-400"
              />
            ))}
          </span>
          <span className="text-sm font-medium text-slate-600">
            4.9 out of 5 · 2,400+ reviews
          </span>
        </p>
      </div>

      <ul
        data-reveal-group
        className="mt-20 gap-6 space-y-6 sm:columns-2 lg:columns-3 lg:gap-8 lg:space-y-8"
      >
        {testimonials.map((testimonial) => (
          <li key={testimonial.name} className="break-inside-avoid">
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { quote, name, role, initials, featured } = testimonial;

  return (
    <figure
      className={`lift rounded-3xl p-8 sm:p-9 ${
        featured
          ? "bg-gradient-to-br from-brand-600 via-brand-600 to-brand-500 shadow-brand hover:shadow-brand-lifted"
          : "card"
      }`}
    >
      <span className="flex gap-0.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`size-4 ${
              featured
                ? "fill-white text-white"
                : "fill-amber-400 text-amber-400"
            }`}
          />
        ))}
      </span>
      <blockquote
        className={`mt-6 text-lg leading-relaxed text-pretty ${
          featured ? "text-white" : "text-slate-700"
        }`}
      >
        <p>“{quote}”</p>
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <span
          className={`flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
            featured
              ? "bg-white/15 text-white ring-1 ring-white/30"
              : "bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-200/60"
          }`}
          aria-hidden
        >
          {initials}
        </span>
        <span className="min-w-0">
          <span
            className={`block truncate font-semibold ${
              featured ? "text-white" : "text-slate-900"
            }`}
          >
            {name}
          </span>
          <span
            className={`block truncate text-sm ${
              featured ? "text-brand-100" : "text-slate-500"
            }`}
          >
            {role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
