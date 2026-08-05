"use server";

import {
  contactFields,
  type ContactField,
  type ContactFormState,
} from "./contact-state";

// Deliberately permissive: the mail server is the real authority on deliverability.
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Record<ContactField, string>) {
  const errors: Partial<Record<ContactField, string>> = {};

  if (values.name.length < 2) {
    errors.name = "Please tell us your name.";
  }

  if (!emailPattern.test(values.email)) {
    errors.email = "Enter a work email we can reply to.";
  }

  if (values.message.length < 10) {
    errors.message = "A sentence or two about your setup helps us prepare.";
  }

  if (values.consent !== "on") {
    errors.consent = "We need your permission before we get in touch.";
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

  const errors = validate(values);

  if (Object.keys(errors).length > 0) {
    return {
      status: "invalid",
      message: "Please check the highlighted fields and try again.",
      errors,
      values,
    };
  }

  // Hand off to your CRM, ticketing system, or transactional email provider here.
  // Keep the await so the pending state reflects real network latency.
  await Promise.resolve();

  return {
    status: "sent",
    message: `Thanks ${values.name.split(" ")[0]} — your message is with our team. Expect a reply within one business day.`,
    errors: {},
    values: {},
  };
}
