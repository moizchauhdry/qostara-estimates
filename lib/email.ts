import { Resend } from "resend";
import { getInlineLogoAttachment } from "@/emails/assets";
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

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not set. Add it to .env.local to enable contact emails.",
    );
  }
  return new Resend(apiKey);
}

function fromAddress() {
  return (
    process.env.CONTACT_FROM_EMAIL ??
    `${siteConfig.name} <onboarding@resend.dev>`
  );
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const resend = getResend();
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from = fromAddress();
  const logo = getInlineLogoAttachment();

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
      logo,
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
      attachments: [logo],
    });
  } catch (confirmationError) {
    console.error("Contact confirmation email failed:", confirmationError);
  }

  return data;
}
