"use server";

import { sendContactEmail } from "@/lib/email";
import {
  contactFields,
  type ContactField,
  type ContactFormState,
} from "./contact-state";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[\d\s().+-]{7,}$/;

const allowedDrawingTypes = new Set([
  "application/pdf",
  "application/acad",
  "image/vnd.dwg",
  "application/x-dwg",
  "application/dwg",
]);
const allowedDrawingExtensions = [".pdf", ".dwg"];

function validateDrawing(file: File | null) {
  if (!file || file.size === 0) return undefined;

  const name = file.name.toLowerCase();
  const hasAllowedExtension = allowedDrawingExtensions.some((ext) =>
    name.endsWith(ext),
  );

  if (!hasAllowedExtension && !allowedDrawingTypes.has(file.type)) {
    return "Upload a PDF or DWG drawing set.";
  }

  if (file.size > 25 * 1024 * 1024) {
    return "Drawings must be 25 MB or smaller.";
  }

  return undefined;
}

function validate(values: Record<ContactField, string>, drawingError?: string) {
  const errors: ContactFormState["errors"] = {};

  if (values.name.length < 2) {
    errors.name = "Please tell us your name.";
  }

  if (!emailPattern.test(values.email)) {
    errors.email = "Enter a work email we can reply to.";
  }

  if (values.phone && !phonePattern.test(values.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!values.projectType) {
    errors.projectType = "Select the type of estimate you need.";
  }

  if (values.message.length < 10) {
    errors.message = "A sentence or two about your project helps us prepare.";
  }

  if (values.consent !== "on") {
    errors.consent = "We need your permission before we get in touch.";
  }

  if (drawingError) {
    errors.drawings = drawingError;
  }

  return errors;
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = Object.fromEntries(
    contactFields.map((field) => [
      field,
      (formData.get(field) as string | null)?.trim() ?? "",
    ]),
  ) as Record<ContactField, string>;

  const drawing = formData.get("drawings");
  const drawingFile =
    drawing instanceof File && drawing.size > 0 ? drawing : null;
  const drawingError = validateDrawing(drawingFile);

  const errors = validate(values, drawingError);

  if (Object.keys(errors).length > 0) {
    return {
      status: "invalid",
      message: "Please check the highlighted fields and try again.",
      errors,
      values,
    };
  }

  try {
    const drawingAttachment = drawingFile
      ? {
          filename: drawingFile.name,
          content: Buffer.from(await drawingFile.arrayBuffer()),
          contentType: drawingFile.type || undefined,
        }
      : null;

    await sendContactEmail({
      name: values.name,
      email: values.email,
      company: values.company,
      phone: values.phone,
      projectType: values.projectType,
      message: values.message,
      drawing: drawingAttachment,
    });
  } catch (error) {
    console.error("Contact form email failed:", error);
    const detail = error instanceof Error ? error.message : "";
    const isConfigIssue =
      /api key|RESEND_API_KEY|CONTACT_TO_EMAIL|invalid_from|only send testing|not authorized|domain|Environment Variables/i.test(
        detail,
      );

    return {
      status: "error",
      message: isConfigIssue
        ? "Email isn’t configured on this deployment. Add RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL in Vercel → Settings → Environment Variables, then redeploy."
        : "We couldn't send your message just now. Please try again or email us directly.",
      errors: {},
      values,
    };
  }

  return {
    status: "sent",
    message: `Thanks ${values.name.split(" ")[0]} — your message is with our team. Expect a reply within one business day.`,
    errors: {},
    values: {},
  };
}
