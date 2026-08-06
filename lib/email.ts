import { Resend } from "resend";
import {
  getInlineLogoAttachment,
  usesInlineLogo,
} from "@/emails/assets";
import {
  internalQuoteNotificationEmail,
  quoteRequestConfirmationEmail,
} from "@/emails";
import { siteConfig } from "@/lib/site";

export type ContactEmailPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  message: string;
  drawing?: {
    filename: string;
    content: Buffer;
    contentType?: string;
  } | null;
};

function requireEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(
      `${name} is not set. Add it in the Vercel project Environment Variables (Production), then redeploy.`,
    );
  }
  return value;
}

function getResend() {
  return new Resend(requireEnv("RESEND_API_KEY"));
}

function fromAddress() {
  const raw =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    `${siteConfig.name} <onboarding@resend.dev>`;
  // Dashboard/env pastes sometimes keep wrapping quotes
  return raw.replace(/^["']|["']$/g, "");
}

function toAddress() {
  return requireEnv("CONTACT_TO_EMAIL");
}

function logoAttachments() {
  if (!usesInlineLogo()) return [];
  const logo = getInlineLogoAttachment();
  return logo ? [logo] : [];
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const resend = getResend();
  const to = toAddress();
  const from = fromAddress();
  const inlineLogo = logoAttachments();

  const internal = internalQuoteNotificationEmail({
    customer_name: payload.name,
    email: payload.email,
    company_name: payload.company,
    phone: payload.phone,
    project_type: payload.projectType,
    message: payload.message,
    drawing_filename: payload.drawing?.filename,
    cta_link: `${siteConfig.url}/contact`,
  });

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: internal.subject,
    html: internal.html,
    text: internal.text,
    attachments: [
      ...inlineLogo,
      ...(payload.drawing
        ? [
            {
              filename: payload.drawing.filename,
              content: payload.drawing.content,
              contentType: payload.drawing.contentType,
            },
          ]
        : []),
    ],
  });

  if (error) {
    throw new Error(error.message);
  }

  // Best-effort confirmation to the prospect (don’t fail the enquiry if this bounces)
  try {
    const confirmation = quoteRequestConfirmationEmail({
      customer_name: payload.name,
      company_name: payload.company,
      phone: payload.phone,
      project_type: payload.projectType,
      message: payload.message,
      drawing_filename: payload.drawing?.filename,
      cta_link: `${siteConfig.url}/contact`,
    });

    await resend.emails.send({
      from,
      to: [payload.email],
      replyTo: siteConfig.email,
      subject: confirmation.subject,
      html: confirmation.html,
      text: confirmation.text,
      attachments: inlineLogo,
    });
  } catch (confirmationError) {
    console.error("Contact confirmation email failed:", confirmationError);
  }

  return data;
}
