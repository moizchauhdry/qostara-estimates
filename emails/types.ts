/** Shared dynamic variables used across Qostara email templates */

export type BaseEmailVars = {
  customer_name?: string;
  company_name?: string;
  cta_link?: string;
  unsubscribe_url?: string;
  date?: string;
};

export type ProjectEmailVars = BaseEmailVars & {
  project_name?: string;
  estimate_number?: string;
  project_type?: string;
  bid_date?: string;
};

export type MoneyEmailVars = ProjectEmailVars & {
  amount?: string;
  invoice_number?: string;
  due_date?: string;
  payment_method?: string;
};

export type AuthEmailVars = BaseEmailVars & {
  reset_link?: string;
  verify_link?: string;
  code?: string;
  expires_in?: string;
};

export type MeetingEmailVars = BaseEmailVars & {
  meeting_title?: string;
  meeting_date?: string;
  meeting_time?: string;
  meeting_link?: string;
  location?: string;
};

export type NewsletterVars = BaseEmailVars & {
  issue_title?: string;
  issue_summary?: string;
};

export function firstName(fullName?: string) {
  if (!fullName?.trim()) return "there";
  return fullName.trim().split(/\s+/)[0] ?? "there";
}

export function withDefaults<T extends BaseEmailVars>(vars: T): T & Required<Pick<BaseEmailVars, "cta_link" | "unsubscribe_url" | "date">> {
  return {
    ...vars,
    cta_link: vars.cta_link ?? "https://qostaraestimates.com/contact",
    unsubscribe_url:
      vars.unsubscribe_url ?? "https://qostaraestimates.com/unsubscribe",
    date:
      vars.date ??
      new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
  };
}
