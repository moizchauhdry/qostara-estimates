import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

type Action = { label: string; href: string };

type ContactBannerProps = {
  title?: string;
  paragraphs?: string[];
  primary?: Action;
  /** Omit on service pages, which carry a single call to action. */
  secondary?: Action | null;
};

export function ContactBanner({
  title = "Ready to Build Your Next Bid?",
  paragraphs = [
    "Send us your plans and project requirements. Our team will review your documents and help determine the estimating services your project requires.",
  ],
  primary = { label: "Request an Estimate", href: "/contact" },
  secondary = {
    label: "Contact Qostara Estimates",
    href: `mailto:${siteConfig.email}`,
  },
}: ContactBannerProps) {
  return (
    <section className="shell py-10 sm:py-14">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink-950 px-8 py-14 text-center sm:px-12 sm:py-16 lg:px-16">
          <Photo
            image={images.blueprintMep}
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="absolute inset-0 -z-10 bg-ink-950"
            imageClassName="opacity-40"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(70%_80%_at_50%_50%,rgba(11,27,41,0.55),rgba(11,27,41,0.9))]"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold text-balance text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <div className="mx-auto mt-4 max-w-xl space-y-3 text-base leading-relaxed text-ink-200 sm:text-lg">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-signal-600 px-7 text-base text-white shadow-signal hover:bg-signal-500"
              >
                <Link href={primary.href}>
                  {primary.label}
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              </Button>
              {secondary && (
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/25 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white"
                >
                  <a href={secondary.href}>{secondary.label}</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
