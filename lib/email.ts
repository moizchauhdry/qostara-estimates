import nodemailer from "nodemailer";
import type { SendMailOptions, Transporter } from "nodemailer";
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

type MailAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
  cid?: string;
};

let transporter: Transporter | null = null;

function requireEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(
      `${name} is not set. Add it to .env on the server, then restart the Node app.`,
    );
  }
  return value;
}

function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST?.trim() || "qostaraestimates.com";
  const port = Number(process.env.SMTP_PORT || 465);

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user: requireEnv("SMTP_USER"),
      pass: requireEnv("SMTP_PASS"),
    },
  });

  return transporter;
}

function fromAddress() {
  const mailbox = process.env.SMTP_USER?.trim() || "info@qostaraestimates.com";
  const raw =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    `${siteConfig.name} <${mailbox}>`;
  // Env pastes sometimes keep wrapping quotes
  return raw.replace(/^["']|["']$/g, "");
}

function toAddress() {
  return requireEnv("CONTACT_TO_EMAIL");
}

function logoAttachments(): MailAttachment[] {
  if (!usesInlineLogo()) return [];
  const logo = getInlineLogoAttachment();
  return logo ? [logo] : [];
}

function toNodemailerAttachments(
  attachments: MailAttachment[],
): NonNullable<SendMailOptions["attachments"]> {
  return attachments.map((attachment) => ({
    filename: attachment.filename,
    content: attachment.content,
    contentType: attachment.contentType,
    cid: attachment.cid,
  }));
}

export async function sendMail({
  to,
  from,
  replyTo,
  subject,
  html,
  text,
  attachments = [],
}: {
  to: string | string[];
  from?: string;
  replyTo?: string;
  subject: string;
  html: string;
  text?: string;
  attachments?: MailAttachment[];
}) {
  const info = await getTransporter().sendMail({
    from: from ?? fromAddress(),
    to,
    replyTo,
    subject,
    html,
    text,
    attachments: toNodemailerAttachments(attachments),
  });

  return info;
}

export async function sendContactEmail(payload: ContactEmailPayload) {
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

  const info = await sendMail({
    from,
    to,
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

  // Best-effort confirmation to the prospect (don't fail the enquiry if this bounces)
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

    await sendMail({
      from,
      to: payload.email,
      replyTo: process.env.SMTP_USER?.trim() || siteConfig.email,
      subject: confirmation.subject,
      html: confirmation.html,
      text: confirmation.text,
      attachments: inlineLogo,
    });
  } catch (confirmationError) {
    console.error("Contact confirmation email failed:", confirmationError);
  }

  return info;
}
