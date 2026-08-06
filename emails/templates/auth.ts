import { emailBrand } from "../brand";
import {
  emailDocument,
  emailHeroSection,
  emailHighlightBox,
  emailParagraph,
} from "../components";
import { firstName, withDefaults, type AuthEmailVars } from "../types";

export function passwordResetEmail(vars: AuthEmailVars = {}) {
  const v = withDefaults(vars);
  const name = firstName(v.customer_name);
  const link = v.reset_link || v.cta_link;

  const html = emailDocument({
    preheader: "Reset your Qostara password. This link expires soon.",
    title: "Reset your password",
    showNav: false,
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: "Security",
        headline: "Reset your password",
        description: `Hi ${name}, we received a request to reset your ${emailBrand.name} password. Click below to choose a new one.`,
        primaryCta: { href: link, label: "Reset password" },
      }),
      emailHighlightBox({
        title: "This link expires",
        body: `For your security, this link expires in ${v.expires_in || "60 minutes"}. If you didn’t request a reset, you can ignore this email.`,
        tone: "accent",
      }),
      emailParagraph(
        "Never share this email. Our team will never ask for your password.",
        { muted: true },
      ),
    ].join("\n"),
  });

  return {
    subject: `Reset your ${emailBrand.name} password`,
    html,
    text: `Hi ${name},\n\nReset your password: ${link}\nExpires in ${v.expires_in || "60 minutes"}.`,
  };
}

export function emailVerificationEmail(vars: AuthEmailVars = {}) {
  const v = withDefaults(vars);
  const name = firstName(v.customer_name);
  const link = v.verify_link || v.cta_link;

  const html = emailDocument({
    preheader: "Verify your email to finish setting up your Qostara account.",
    title: "Verify your email",
    showNav: false,
    unsubscribeUrl: v.unsubscribe_url,
    children: [
      emailHeroSection({
        badge: "Verify email",
        badgeTone: "primary",
        headline: "Confirm it’s you.",
        description: `Hi ${name}, tap the button below to verify your email and activate your ${emailBrand.name} account.`,
        primaryCta: { href: link, label: "Verify email" },
      }),
      v.code
        ? emailHighlightBox({
            title: "Or enter this code",
            body: v.code,
            tone: "primary",
          })
        : "",
      emailParagraph(
        `This link expires in ${v.expires_in || "24 hours"}. If you didn’t create an account, ignore this message.`,
        { muted: true },
      ),
    ].join("\n"),
  });

  return {
    subject: `Verify your email — ${emailBrand.name}`,
    html,
    text: `Hi ${name},\n\nVerify your email: ${link}${v.code ? `\nCode: ${v.code}` : ""}`,
  };
}
