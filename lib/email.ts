import { Resend } from "resend";
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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildText(payload: ContactEmailPayload) {
  const lines = [
    `New contact enquiry from ${payload.name}`,
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "—"}`,
    `Phone: ${payload.phone || "—"}`,
    `Project type: ${payload.projectType}`,
    "",
    "Message:",
    payload.message,
  ];

  if (payload.drawing) {
    lines.push("", `Attachment: ${payload.drawing.filename}`);
  }

  return lines.join("\n");
}

function buildHtml(payload: ContactEmailPayload) {
  const rows: [string, string][] = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Company", payload.company || "—"],
    ["Phone", payload.phone || "—"],
    ["Project type", payload.projectType],
  ];

  return `
    <div style="font-family: ui-sans-serif, system-ui, sans-serif; color: #0f172a; line-height: 1.5;">
      <h1 style="font-size: 18px; margin: 0 0 16px;">New contact enquiry</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 8px 12px 8px 0; vertical-align: top; color: #64748b; white-space: nowrap;">${escapeHtml(label)}</td>
            <td style="padding: 8px 0; vertical-align: top;">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <p style="margin: 20px 0 8px; color: #64748b;">Message</p>
      <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
      ${
        payload.drawing
          ? `<p style="margin: 20px 0 0; color: #64748b;">Attachment: ${escapeHtml(payload.drawing.filename)}</p>`
          : ""
      }
    </div>
  `.trim();
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const resend = getResend();
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    `${siteConfig.name} <onboarding@resend.dev>`;

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `New enquiry: ${payload.projectType} — ${payload.name}`,
    text: buildText(payload),
    html: buildHtml(payload),
    attachments: payload.drawing
      ? [
          {
            filename: payload.drawing.filename,
            content: payload.drawing.content,
            contentType: payload.drawing.contentType,
          },
        ]
      : undefined,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
