import { MessageSquare, Plus } from "lucide-react";
import { SectionHeading } from "./section";

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: "How long does it take to get up and running?",
    answer:
      "Most teams send their first estimate the same day they sign up. If you bring a price list, an onboarding specialist imports it and builds your first two templates within five business days at no extra cost.",
  },
  {
    question: "Can Quotely match our existing branding?",
    answer:
      "Yes. Every template carries your logo, colours, typography, and terms, and estimates are delivered from your own domain. Clients never see Quotely branding unless you want them to.",
  },
  {
    question: "Does it work with QuickBooks and Xero?",
    answer:
      "Two-way sync is included on every paid plan. Approved estimates become invoices in your ledger, and payments reconcile automatically. Stripe, HubSpot, Salesforce, and Zapier are supported, plus a REST API and webhooks for anything custom.",
  },
  {
    question: "What happens when a client approves an estimate?",
    answer:
      "They sign in the browser, pay the deposit you requested, and the estimate converts to a scheduled job and an invoice. Your team gets a notification, and the client gets a receipt and a copy of the signed scope.",
  },
  {
    question: "How do you price seats for seasonal crews?",
    answer:
      "Seats are billed monthly and can be deactivated at any time, so you only pay for the crew that is actually quoting. Annual plans include a pool of flexible seats for your busy season.",
  },
  {
    question: "Is our pricing data secure?",
    answer:
      "Quotely is SOC 2 Type II certified with encryption in transit and at rest, SAML single sign-on, granular role permissions, and a full audit trail on every version of every estimate you send.",
  },
];

/** Structured data so the questions can surface directly in search results. */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32">
      <script
        type="application/ld+json"
        // Static, developer-authored content — no user input is interpolated.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            align="left"
            title="Questions, answered"
            description="Everything teams ask us before they switch. If yours is not here, we usually reply within a couple of hours."
          />

          <a
            href="#contact"
            className="pill mt-10 bg-brand-600 px-7 py-3.5 text-sm text-white shadow-brand hover:bg-brand-700 hover:shadow-brand-lifted"
          >
            <MessageSquare className="size-4" aria-hidden />
            Ask us anything
          </a>
        </div>

        <ul data-reveal-group className="space-y-4">
          {faqs.map(({ question, answer }) => (
            <li key={question}>
              <details className="card group overflow-hidden transition duration-500 ease-smooth open:shadow-lifted hover:ring-brand-200/70">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-left sm:p-7 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-semibold transition-colors duration-300 group-hover:text-brand-700 sm:text-lg">
                    {question}
                  </h3>
                  <span
                    aria-hidden
                    className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition duration-500 ease-smooth group-hover:bg-brand-600 group-hover:text-white group-open:rotate-45"
                  >
                    <Plus className="size-4" />
                  </span>
                </summary>
                <p className="px-6 pb-7 leading-relaxed text-pretty text-slate-500 sm:px-7">
                  {answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
