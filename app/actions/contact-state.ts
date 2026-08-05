/**
 * Shape shared by the contact form and its Server Action. This lives outside
 * the `"use server"` module because such files may only export async functions
 * — exporting a plain object from one leaves it undefined on the client.
 */

export const contactFields = [
  "name",
  "email",
  "company",
  "phone",
  "projectType",
  "message",
  "consent",
] as const;

export type ContactField = (typeof contactFields)[number];

export type ContactFormState = {
  status: "idle" | "invalid" | "sent";
  message: string;
  errors: Partial<Record<ContactField | "drawings", string>>;
  /** Echoed back so a rejected submission never loses what was typed. */
  values: Partial<Record<ContactField, string>>;
};

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
  values: {},
};

export const projectTypes = [
  "Construction cost estimation",
  "Material takeoff",
  "Quantity surveying",
  "Bid preparation",
  "Design-build estimate",
  "Labor cost analysis",
  "Other / not sure",
] as const;
