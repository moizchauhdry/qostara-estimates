import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/content";

type FaqProps = {
  items?: readonly (typeof faqs)[number][];
  id?: string;
};

export function Faq({ items = faqs, id = "faq" }: FaqProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <section id={id} className="scroll-mt-28 bg-white py-20 sm:py-24 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            align="left"
            title="Questions, answered"
            description="Everything teams ask before they send the first set of drawings. Still unsure? We reply within one business day."
          />
          <Reveal delay={0.1}>
            <Button
              asChild
              className="mt-8 h-11 rounded-full bg-signal-600 px-6 text-white shadow-signal hover:bg-signal-700"
            >
              <Link href="/contact">
                <MessageSquare data-icon="inline-start" />
                Ask us anything
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="panel border-none px-5 data-[state=open]:shadow-lifted sm:px-6"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-ink-950 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-ink-500 sm:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
