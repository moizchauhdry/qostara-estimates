import { emailBrand } from "../brand";
import {
  emailContactBlock,
  emailCtaBand,
  emailDocument,
  emailFeatureCards,
  emailHeroSection,
  emailParagraph,
  emailStats,
  emailTestimonial,
} from "../components";
import { firstName, withDefaults, type NewsletterVars } from "../types";

export function newsletterEmail(vars: NewsletterVars = {}) {
  const v = withDefaults(vars);
  const name = firstName(v.customer_name);

  const html = emailDocument({
    preheader:
      v.issue_summary ||
      "Bid tips, takeoff workflows, and field-tested estimating notes from Qostara.",
    title: v.issue_title || `${emailBrand.name} Newsletter`,
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: "Newsletter",
        headline: v.issue_title || "Estimating notes worth opening",
        description:
          v.issue_summary ||
          `Hi ${name} — this month’s roundup: cleaner takeoffs, fewer bid-day surprises, and process habits from teams who win more work.`,
        primaryCta: { href: v.cta_link, label: "Read the full issue" },
        imageUrl:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Active construction site at dusk",
      }),
      emailFeatureCards([
        {
          icon: "→",
          title: "Addenda discipline",
          description:
            "How top GCs capture every revision without slowing the bid desk.",
        },
        {
          icon: "→",
          title: "MEP coordination",
          description:
            "A checklist for catching clashes before they hit your contingency.",
        },
        {
          icon: "→",
          title: "Turnaround SLAs",
          description:
            "When to rush, when to wait, and how to set client expectations.",
        },
        {
          icon: "→",
          title: "Field feedback loops",
          description:
            "Closing the gap between estimated quantities and buyout reality.",
        },
      ]),
      emailStats(),
      emailCtaBand({
        headline: "Have a set on your desk?",
        body: "Send drawings today — we’ll confirm scope before we start.",
        primaryHref: `${emailBrand.url}/contact`,
        primaryLabel: "Get a free estimate",
      }),
      emailParagraph("You’re receiving this because you subscribed to Qostara updates.", {
        muted: true,
      }),
      emailContactBlock(),
    ].join("\n"),
  });

  return {
    subject: v.issue_title || `${emailBrand.name} Newsletter`,
    html,
    text: `${v.issue_title || "Newsletter"}\n\n${v.issue_summary || ""}\n\nRead: ${v.cta_link}`,
  };
}

export type PromoVars = NewsletterVars & {
  offer_title?: string;
  offer_detail?: string;
};

export function promotionalCampaignEmail(vars: PromoVars = {}) {
  const v = withDefaults(vars);
  const name = firstName(v.customer_name);

  const html = emailDocument({
    preheader:
      v.offer_detail ||
      "Limited offer for contractors who need bid-ready takeoffs this month.",
    title: v.offer_title || "Special offer",
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: "Limited offer",
        badgeTone: "accent",
        headline: v.offer_title || "Win more bids this month",
        description:
          v.offer_detail ||
          `Hi ${name} — for a limited time, new projects booked this month include priority turnaround and a complimentary scope review call.`,
        primaryCta: { href: v.cta_link, label: "Claim offer" },
        secondaryCta: {
          href: `${emailBrand.url}/pricing`,
          label: "See pricing",
        },
        imageUrl:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Construction crane against blue sky",
      }),
      emailFeatureCards([
        {
          icon: "✓",
          title: "Priority queue",
          description: "Move ahead of standard turnaround when bid dates are tight.",
        },
        {
          icon: "✓",
          title: "Scope review call",
          description: "15 minutes with a senior estimator before work begins.",
        },
        {
          icon: "✓",
          title: "Clear exclusions",
          description: "Defendable assumptions your bid team can stand behind.",
        },
        {
          icon: "✓",
          title: "Revision buffer",
          description: "One round of addenda updates included on qualifying sets.",
        },
      ]),
      emailTestimonial(),
      emailCtaBand({
        headline: "Offer ends soon",
        body: "Mention this email when you submit drawings — we’ll apply the promotion.",
        primaryHref: v.cta_link,
        primaryLabel: "Start now",
      }),
      emailContactBlock(),
    ].join("\n"),
  });

  return {
    subject: v.offer_title || `Special offer from ${emailBrand.name}`,
    html,
    text: `${v.offer_title}\n\n${v.offer_detail}\n\nClaim: ${v.cta_link}`,
  };
}

export type AnnouncementVars = NewsletterVars & {
  announcement_title?: string;
  announcement_body?: string;
};

export function serviceAnnouncementEmail(vars: AnnouncementVars = {}) {
  const v = withDefaults(vars);
  const name = firstName(v.customer_name);

  const html = emailDocument({
    preheader:
      v.announcement_body ||
      "An update from Qostara about our services and delivery.",
    title: v.announcement_title || "Service announcement",
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: "Announcement",
        headline: v.announcement_title || "What’s new at Qostara",
        description:
          v.announcement_body ||
          `Hi ${name}, we’re expanding MEP estimating capacity and tightening standard turnaround on commercial packages. Here’s what changes for your next bid.`,
        primaryCta: { href: v.cta_link, label: "Learn more" },
      }),
      emailFeatureCards([
        {
          icon: "1",
          title: "Faster MEP",
          description: "Additional senior capacity for HVAC, plumbing, and electrical.",
        },
        {
          icon: "2",
          title: "Clearer SLAs",
          description: "Published turnaround windows by package size and trade count.",
        },
        {
          icon: "3",
          title: "Same standards",
          description: "Senior review on every deliverable — no shortcuts.",
        },
        {
          icon: "4",
          title: "Questions?",
          description: "Your usual contacts remain the same. We’re here to help.",
        },
      ]),
      emailCtaBand({
        headline: "Planning an upcoming bid?",
        body: "Tell us the bid date early and we’ll reserve capacity.",
        primaryHref: `${emailBrand.url}/contact`,
        primaryLabel: "Talk to us",
      }),
      emailContactBlock(),
    ].join("\n"),
  });

  return {
    subject: v.announcement_title || `Update from ${emailBrand.name}`,
    html,
    text: `${v.announcement_title}\n\n${v.announcement_body}\n\n${v.cta_link}`,
  };
}
