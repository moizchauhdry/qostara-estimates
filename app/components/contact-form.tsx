"use client";

import { useActionState, type ReactNode } from "react";
import {
  ChevronDown,
  CircleCheck,
  LoaderCircle,
  Send,
  TriangleAlert,
} from "lucide-react";
import { submitContactForm } from "../actions/contact";
import { initialContactState } from "../actions/contact-state";

const teamSizes = ["Just me", "2–10", "11–50", "51–200", "200+"];

const controlStyles =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 shadow-xs transition duration-300 ease-smooth placeholder:text-slate-400 hover:border-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 focus:outline-none aria-invalid:border-rose-400 aria-invalid:focus:ring-rose-500/15";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactState,
  );

  return (
    <form action={formAction} noValidate className="card p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          error={state.errors.name}
          className="sm:col-span-1"
        >
          {(props) => (
            <input
              {...props}
              type="text"
              autoComplete="name"
              placeholder="Jordan Reyes"
              defaultValue={state.values.name}
              className={controlStyles}
            />
          )}
        </Field>

        <Field label="Work email" name="email" error={state.errors.email}>
          {(props) => (
            <input
              {...props}
              type="email"
              autoComplete="email"
              placeholder="jordan@company.com"
              defaultValue={state.values.email}
              className={controlStyles}
            />
          )}
        </Field>

        <Field label="Company" name="company" optional>
          {(props) => (
            <input
              {...props}
              type="text"
              autoComplete="organization"
              placeholder="Northline Builders"
              defaultValue={state.values.company}
              className={controlStyles}
            />
          )}
        </Field>

        <Field label="Team size" name="teamSize" optional>
          {(props) => (
            <div className="relative">
              <select
                {...props}
                defaultValue={state.values.teamSize ?? ""}
                className={`${controlStyles} cursor-pointer appearance-none pr-11`}
              >
                <option value="">Select a size</option>
                {teamSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-slate-400"
                aria-hidden
              />
            </div>
          )}
        </Field>

        <Field
          label="How can we help?"
          name="message"
          error={state.errors.message}
          className="sm:col-span-2"
        >
          {(props) => (
            <textarea
              {...props}
              rows={5}
              placeholder="Tell us how you quote today, which tools you use, and what you would like to change."
              defaultValue={state.values.message}
              className={`${controlStyles} resize-y`}
            />
          )}
        </Field>
      </div>

      <div className="mt-6">
        <div className="flex items-start gap-3">
          <input
            id="contact-consent"
            name="consent"
            type="checkbox"
            defaultChecked={state.values.consent === "on"}
            aria-invalid={state.errors.consent ? true : undefined}
            aria-describedby={
              state.errors.consent ? "contact-consent-error" : undefined
            }
            className="mt-0.5 size-5 shrink-0 cursor-pointer rounded-md border-slate-300 text-brand-600 transition duration-300 focus:ring-4 focus:ring-brand-500/15 aria-invalid:border-rose-400"
          />
          <label
            htmlFor="contact-consent"
            className="cursor-pointer text-sm leading-relaxed text-slate-500"
          >
            I agree that Quotely may contact me about my enquiry and store my
            details in line with the privacy policy.
          </label>
        </div>
        {state.errors.consent && (
          <FieldError id="contact-consent-error">
            {state.errors.consent}
          </FieldError>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="pill mt-8 w-full bg-brand-600 px-8 py-4 text-base text-white shadow-brand hover:bg-brand-700 hover:shadow-brand-lifted disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            Send message
            <Send className="size-4" aria-hidden />
          </>
        )}
      </button>

      <p
        aria-live="polite"
        role="status"
        className={`mt-5 flex items-start gap-2.5 text-sm ${
          state.status === "sent"
            ? "text-emerald-700"
            : state.status === "invalid"
              ? "text-rose-600"
              : "text-slate-400"
        }`}
      >
        {state.status === "sent" && (
          <CircleCheck className="mt-0.5 size-4 shrink-0" aria-hidden />
        )}
        {state.status === "invalid" && (
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
        )}
        {state.message || "We reply to every message within one business day."}
      </p>
    </form>
  );
}

type FieldRenderProps = {
  id: string;
  name: string;
  required?: boolean;
  "aria-invalid"?: true;
  "aria-describedby"?: string;
};

/**
 * Wires up the label, error text, and ARIA relationships once so every control
 * in the form stays accessible without repeating the plumbing.
 */
function Field({
  label,
  name,
  error,
  optional = false,
  className = "",
  children,
}: {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: (props: FieldRenderProps) => ReactNode;
}) {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between gap-2 text-sm font-medium text-slate-800"
      >
        {label}
        {optional && (
          <span className="text-xs font-normal text-slate-400">Optional</span>
        )}
      </label>
      <div className="mt-2">
        {children({
          id,
          name,
          required: optional ? undefined : true,
          "aria-invalid": error ? true : undefined,
          "aria-describedby": error ? errorId : undefined,
        })}
      </div>
      {error && <FieldError id={errorId}>{error}</FieldError>}
    </div>
  );
}

function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-xs text-rose-600">
      <TriangleAlert className="size-3.5 shrink-0" aria-hidden />
      {children}
    </p>
  );
}
