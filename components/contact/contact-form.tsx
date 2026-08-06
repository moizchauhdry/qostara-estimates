"use client";

import {
  useActionState,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  CircleCheck,
  LoaderCircle,
  Send,
  TriangleAlert,
  Upload,
} from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";
import {
  initialContactState,
  projectTypes,
  type ContactFormState,
} from "@/app/actions/contact-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const fieldClassName =
  "h-11 rounded-xl border-ink-200 bg-white px-3.5 text-sm shadow-xs transition duration-300 ease-smooth placeholder:text-ink-400 hover:border-ink-300 focus-visible:ring-signal-500/20";

export function ContactForm() {
  const scrollYRef = useRef(0);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const [projectType, setProjectType] = useState("");

  const [state, formAction, pending] = useActionState(
    async (previous: ContactFormState, formData: FormData) => {
      scrollYRef.current = window.scrollY;
      return submitContactForm(previous, formData);
    },
    initialContactState,
  );

  useEffect(() => {
    if (state.status === "idle") return;

    // Server Actions can reset scroll to the top; keep the user on the form.
    window.scrollTo({ top: scrollYRef.current, behavior: "auto" });

    if (state.status === "invalid" || state.status === "error") {
      const firstError = document.querySelector<HTMLElement>(
        "[aria-invalid=true]",
      );
      firstError?.focus({ preventScroll: true });
    } else if (state.status === "sent") {
      statusRef.current?.focus({ preventScroll: true });
    }
  }, [state]);

  useEffect(() => {
    if (state.status === "sent") {
      setProjectType("");
    } else if (state.values.projectType) {
      setProjectType(state.values.projectType);
    }
  }, [state.status, state.values.projectType]);

  return (
    <form
      action={formAction}
      noValidate
      className="panel w-full min-w-0 max-w-full overflow-hidden p-5 sm:p-7 lg:p-9"
    >
      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          error={state.errors.name}
          className="sm:col-span-1"
        >
          {(props) => (
            <Input
              {...props}
              type="text"
              autoComplete="name"
              placeholder="Jordan Reyes"
              defaultValue={state.values.name}
              className={fieldClassName}
            />
          )}
        </Field>

        <Field label="Work email" name="email" error={state.errors.email}>
          {(props) => (
            <Input
              {...props}
              type="email"
              autoComplete="email"
              placeholder="jordan@company.com"
              defaultValue={state.values.email}
              className={fieldClassName}
            />
          )}
        </Field>

        <Field label="Company" name="company" optional>
          {(props) => (
            <Input
              {...props}
              type="text"
              autoComplete="organization"
              placeholder="Northline Builders"
              defaultValue={state.values.company}
              className={fieldClassName}
            />
          )}
        </Field>

        <Field label="Phone" name="phone" error={state.errors.phone} optional>
          {(props) => (
            <Input
              {...props}
              type="tel"
              autoComplete="tel"
              placeholder="+1 (415) 555-0100"
              defaultValue={state.values.phone}
              className={fieldClassName}
            />
          )}
        </Field>

        <Field
          label="Project type"
          name="projectType"
          error={state.errors.projectType}
          className="sm:col-span-2"
        >
          {() => (
            <>
              <input type="hidden" name="projectType" value={projectType} />
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger
                  id="contact-projectType"
                  aria-invalid={state.errors.projectType ? true : undefined}
                  aria-describedby={
                    state.errors.projectType
                      ? "contact-projectType-error"
                      : undefined
                  }
                  className={cn(
                    fieldClassName,
                    "w-full justify-between data-placeholder:text-ink-400",
                  )}
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  className="w-(--radix-select-trigger-width)"
                >
                  {projectTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </>
          )}
        </Field>

        <Field
          label="Project details"
          name="message"
          error={state.errors.message}
          className="sm:col-span-2"
        >
          {(props) => (
            <Textarea
              {...props}
              rows={5}
              placeholder="Bid date, project type, sheet count, and anything else we should know before we open the set."
              defaultValue={state.values.message}
              className={cn(fieldClassName, "min-h-32 resize-y py-3")}
            />
          )}
        </Field>

        <div className="sm:col-span-2">
          <Label
            htmlFor="contact-drawings"
            className="flex items-baseline justify-between gap-2 text-sm font-medium text-ink-950"
          >
            Drawing upload
            <span className="text-xs font-normal text-ink-400">Optional</span>
          </Label>
          <div className="mt-2">
            <label
              htmlFor="contact-drawings"
              className={cn(
                "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-ink-200 bg-surface px-4 py-8 text-center transition duration-300 hover:border-signal-400 hover:bg-signal-50/50",
                state.errors.drawings && "border-destructive bg-destructive/5",
              )}
            >
              <Upload className="size-5 text-signal-600" aria-hidden />
              <span className="text-sm font-medium text-ink-800">
                Drop PDF or DWG files here
              </span>
              <span className="text-xs text-ink-500">
                Up to 25 MB · plans, specs, or addenda
              </span>
              <Input
                id="contact-drawings"
                name="drawings"
                type="file"
                accept=".pdf,.dwg,application/pdf"
                className="sr-only"
                aria-invalid={state.errors.drawings ? true : undefined}
                aria-describedby={
                  state.errors.drawings ? "contact-drawings-error" : undefined
                }
              />
            </label>
          </div>
          {state.errors.drawings && (
            <FieldError id="contact-drawings-error">
              {state.errors.drawings}
            </FieldError>
          )}
        </div>
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
            className="mt-0.5 size-5 shrink-0 cursor-pointer rounded-md border-ink-300 text-signal-600 transition duration-300 focus-visible:ring-3 focus-visible:ring-signal-500/20 aria-invalid:border-destructive"
          />
          <label
            htmlFor="contact-consent"
            className="cursor-pointer text-sm leading-relaxed text-ink-500"
          >
            I agree that Qostara may contact me about my enquiry and store my
            details in line with the privacy policy.
          </label>
        </div>
        {state.errors.consent && (
          <FieldError id="contact-consent-error">
            {state.errors.consent}
          </FieldError>
        )}
      </div>

      <Button
        type="submit"
        disabled={pending}
        className="mt-8 h-12 w-full rounded-full bg-signal-600 text-base text-white shadow-signal hover:bg-signal-700 disabled:opacity-70"
      >
        {pending ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            Send message
            <Send data-icon="inline-end" />
          </>
        )}
      </Button>

      <p
        ref={statusRef}
        tabIndex={-1}
        aria-live="polite"
        role="status"
        className={cn(
          "mt-5 flex items-start gap-2.5 text-sm outline-none",
          state.status === "sent" && "text-emerald-700",
          (state.status === "invalid" || state.status === "error") &&
            "text-destructive",
          state.status === "idle" && "text-ink-400",
        )}
      >
        {state.status === "sent" && (
          <CircleCheck className="mt-0.5 size-4 shrink-0" aria-hidden />
        )}
        {(state.status === "invalid" || state.status === "error") && (
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
    <div className={cn("min-w-0", className)}>
      <Label
        htmlFor={id}
        className="flex items-baseline justify-between gap-2 text-sm font-medium text-ink-950"
      >
        {label}
        {optional && (
          <span className="text-xs font-normal text-ink-400">Optional</span>
        )}
      </Label>
      <div className="mt-2 min-w-0">
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
    <p
      id={id}
      className="mt-2 flex items-center gap-1.5 text-xs text-destructive"
    >
      <TriangleAlert className="size-3.5 shrink-0" aria-hidden />
      {children}
    </p>
  );
}
