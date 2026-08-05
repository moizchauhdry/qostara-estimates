import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock3, Search } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { Section, SectionHeading } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogCategories, blogPosts } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on quantity takeoffs, bid discipline, design-build costing, and regional labour trends from the Datum estimating team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog — ${siteConfig.name}`,
    description:
      "Estimating guides, market notes, and process playbooks for contractors and preconstruction teams.",
    url: `${siteConfig.url}/blog`,
  },
};

const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];
const gridPosts = blogPosts.filter((post) => post.slug !== featuredPost.slug);

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Estimating insight that holds up in the bid room"
        description="Guides, market notes, and process playbooks from estimators who measure sets for a living — not marketers who have never opened a plan."
      />

      <Section tone="surface" className="pb-12 sm:pb-16">
        <Reveal>
          <article className="panel group overflow-hidden shadow-lifted transition duration-500 hover:shadow-float lg:grid lg:grid-cols-2">
            <div className="relative flex min-h-56 flex-col justify-end bg-gradient-to-br from-ink-900 via-ink-800 to-signal-900 p-8 sm:p-10 lg:min-h-80">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />
              <Badge className="relative w-fit border-white/20 bg-white/10 text-white hover:bg-white/10">
                Featured · {featuredPost.category}
              </Badge>
              <h2 className="relative mt-4 text-2xl font-semibold text-balance text-white sm:text-3xl lg:text-4xl">
                {featuredPost.title}
              </h2>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="text-base leading-relaxed text-ink-500">
                {featuredPost.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-ink-400">
                <time dateTime={featuredPost.date}>{featuredPost.date}</time>
                <span aria-hidden>·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="size-3.5" aria-hidden />
                  {featuredPost.readTime}
                </span>
              </div>
              <Button
                asChild
                className="mt-8 h-11 w-fit rounded-full bg-signal-600 px-6 text-white shadow-signal hover:bg-signal-700"
              >
                <Link href={`/blog/${featuredPost.slug}`}>
                  Read article
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </article>
        </Reveal>
      </Section>

      <Section tone="white" className="pt-0">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative max-w-md flex-1">
            <Search
              className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-ink-400"
              aria-hidden
            />
            <Input
              type="search"
              placeholder="Search articles…"
              aria-label="Search articles (coming soon)"
              disabled
              className="h-11 rounded-full border-ink-200 bg-surface pl-10 text-sm shadow-xs"
            />
          </div>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter by category (coming soon)"
          >
            {blogCategories.map((category) => (
              <button
                key={category}
                type="button"
                disabled
                aria-pressed={category === "All"}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  category === "All"
                    ? "bg-ink-950 text-white shadow-soft"
                    : "bg-surface text-ink-600 ring-1 ring-ink-950/6"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gridPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <article className="panel group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-lifted">
                <Badge
                  variant="secondary"
                  className="w-fit bg-signal-50 text-signal-700 hover:bg-signal-50"
                >
                  {post.category}
                </Badge>
                <h3 className="mt-4 text-lg font-semibold text-balance text-ink-950 transition group-hover:text-signal-700">
                  <Link href={`/blog/${post.slug}`} className="outline-none">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-ink-100 pt-5 text-xs text-ink-400">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="size-3.5" aria-hidden />
                    {post.readTime}
                  </span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="ink">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="Newsletter"
              title="One estimating note per month"
              description="Regional rate shifts, addenda habits, and bid-room tactics — no fluff, no daily drip."
              tone="dark"
            />
            <form
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
              aria-label="Newsletter signup (coming soon)"
            >
              <Input
                type="email"
                placeholder="you@company.com"
                disabled
                aria-label="Email address"
                className="h-11 rounded-full border-white/15 bg-white/10 px-5 text-sm text-white placeholder:text-ink-400 focus-visible:ring-signal-400/30 sm:min-w-72"
              />
              <Button
                type="button"
                disabled
                className="h-11 rounded-full bg-signal-500 px-7 text-white hover:bg-signal-400"
              >
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-xs text-ink-400">
              Unsubscribe anytime. We never share your address.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
