"use client";

import Link from "next/link";
import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { serviceOptions } from "@/content/services";
import {
  LIMITS,
  readContactForm,
  validateContact,
  type ContactField,
  type FieldErrors,
} from "@/lib/contact/validation";
import { Icon } from "@/components/ui/Icon";
import { buttonClasses } from "@/components/ui/Button";

const initialState: ContactState = { status: "idle" };

const fieldOrder: ContactField[] = ["fullName", "email", "brand", "website", "service", "message", "consent"];

const inputClass =
  "mt-2 block w-full rounded-none border-0 border-b-2 border-ink/25 bg-transparent px-0 py-3 text-base text-ink placeholder:text-stone/70 transition-colors focus:border-ink focus:ring-0 focus-visible:outline-offset-4 aria-[invalid=true]:border-[#b42318]";

/**
 * Contact form. Client-side validation for instant feedback; the server action
 * re-validates and decides what happens to the data.
 * Wrapped by <ContactFormShell> so "send another message" remounts a fresh form.
 */
function ContactFormInner({ configured, onReset }: { configured: boolean; onReset: () => void }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const [clientErrors, setClientErrors] = useState<FieldErrors | null>(null);
  const [message, setMessage] = useState("");
  const startedAt = useRef(0);
  const startedAtInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const errors: FieldErrors = clientErrors ?? state.fieldErrors ?? {};

  // With JavaScript we submit manually (no automatic form reset, so visitors never
  // lose what they typed). Without JavaScript, `action` still posts to the server.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!configured) return;
    const form = e.currentTarget;
    const found = validateContact(readContactForm(new FormData(form)));
    if (Object.keys(found).length > 0) {
      setClientErrors(found);
      const first = fieldOrder.find((f) => found[f]);
      if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setClientErrors(null);
    if (startedAtInput.current) startedAtInput.current.value = String(startedAt.current);
    const data = new FormData(form);
    startTransition(() => formAction(data));
  }

  function clearError(field: ContactField) {
    if (clientErrors?.[field]) setClientErrors({ ...clientErrors, [field]: undefined });
  }

  if (state.status === "success") {
    return (
      <div role="status" className="border-2 border-ink p-8">
        <span className="flex size-12 items-center justify-center rounded-full bg-flame text-ink">
          <Icon name="check" />
        </span>
        <p className="display mt-6 text-4xl">Message received.</p>
        <p className="mt-3 text-stone">{state.message}</p>
        <button type="button" onClick={onReset} className={buttonClasses("outline-dark", "mt-8")}>
          Send another message
        </button>
      </div>
    );
  }

  const showBanner = state.status !== "idle" && state.status !== "invalid";

  return (
    <form action={formAction} onSubmit={handleSubmit} noValidate aria-describedby="form-note" className="space-y-7">
      {!configured && (
        <p id="form-note" className="flex gap-3 border-l-4 border-flame bg-ink/[0.04] p-4 text-sm leading-relaxed text-ink">
          <Icon name="info" className="mt-0.5 size-5 shrink-0" />
          <span>
            <strong>Enquiries aren&apos;t open yet.</strong> This form is disabled while GARMS is a
            university demonstration. It will open once our enquiry system and privacy policy are
            ready.
          </span>
        </p>
      )}
      {/* Disabled (all fields + button) until lead storage is configured. */}
      <fieldset disabled={!configured} className="m-0 min-w-0 space-y-7 border-0 p-0 disabled:opacity-60">
      {configured && <p id="form-note" className="sr-only">All fields are required unless marked optional.</p>}

      {/* Honeypot (hidden from people and assistive tech). */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this field empty
          <input type="text" name="nickname" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <input ref={startedAtInput} type="hidden" name="startedAt" defaultValue="0" />

      <div className="grid gap-7 sm:grid-cols-2">
        <Field id="fullName" label="Full name" error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            maxLength={LIMITS.fullName}
            onChange={() => clearError("fullName")}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={inputClass}
          />
        </Field>
        <Field id="email" label="Email address" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={LIMITS.email}
            onChange={() => clearError("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
          />
        </Field>
        <Field id="brand" label="Brand / company name" error={errors.brand}>
          <input
            id="brand"
            name="brand"
            type="text"
            autoComplete="organization"
            required
            maxLength={LIMITS.brand}
            onChange={() => clearError("brand")}
            aria-invalid={Boolean(errors.brand)}
            aria-describedby={errors.brand ? "brand-error" : undefined}
            className={inputClass}
          />
        </Field>
        <Field id="website" label="Website or Instagram" optional error={errors.website}>
          <input
            id="website"
            name="website"
            type="text"
            autoComplete="url"
            placeholder="brand.com or @brand"
            maxLength={LIMITS.website}
            onChange={() => clearError("website")}
            aria-invalid={Boolean(errors.website)}
            aria-describedby={errors.website ? "website-error" : undefined}
            className={inputClass}
          />
        </Field>
      </div>

      <Field id="service" label="Service you're interested in" error={errors.service}>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          onChange={() => clearError("service")}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "service-error" : undefined}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled>
            Choose one…
          </option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={LIMITS.message}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            clearError("message");
          }}
          placeholder="Tell us about your brand, your goals and where you are right now."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={`message-count${errors.message ? " message-error" : ""}`}
          className={`${inputClass} resize-y`}
        />
        <span id="message-count" className="mt-1 block text-right text-xs text-stone">
          {message.length} / {LIMITS.message}
        </span>
      </Field>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            onChange={() => clearError("consent")}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 size-5 shrink-0 cursor-pointer accent-[#111111]"
          />
          <label htmlFor="consent" className="text-sm leading-relaxed text-stone">
            I agree that GARMS MEDIA may use these details to reply to my enquiry, as described in
            the{" "}
            <Link href="/privacy" className="font-semibold text-ink underline underline-offset-4 hover:no-underline">
              Privacy Policy
            </Link>
            .
          </label>
        </div>
        <ErrorText id="consent-error" message={errors.consent} />
      </div>

      <div aria-live="polite" aria-atomic="true">
        {showBanner && state.message && (
          <p
            className={`flex gap-3 p-4 text-sm leading-relaxed ${
              state.status === "not_configured" ? "border-l-4 border-ink bg-flame/20 text-ink" : "border-l-4 border-[#b42318] bg-[#b42318]/10 text-ink"
            }`}
          >
            <Icon name={state.status === "not_configured" ? "info" : "alert"} className="mt-0.5 size-5 shrink-0" />
            <span>{state.message}</span>
          </p>
        )}
        {(clientErrors || state.status === "invalid") && Object.values(errors).some(Boolean) && (
          <p className="text-sm font-semibold text-[#b42318]">Please fix the highlighted fields and try again.</p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending || !configured}
        className={buttonClasses("primary", "w-full hover:!bg-ink hover:!text-paper disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:!bg-flame disabled:hover:!text-ink sm:w-auto")}
      >
        {!configured ? "Enquiries opening soon" : pending ? "Sending…" : "Let's Talk"}
        {configured && !pending && <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />}
      </button>
      </fieldset>
    </form>
  );
}

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: ContactField;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
        {optional ? (
          <span className="ml-2 font-normal text-stone">(optional)</span>
        ) : (
          <span aria-hidden="true" className="ml-1 text-stone">*</span>
        )}
      </label>
      {children}
      <ErrorText id={`${id}-error`} message={error} />
    </div>
  );
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-sm font-medium text-[#b42318]">
      <Icon name="alert" className="size-4 shrink-0" />
      {message}
    </p>
  );
}

export function ContactForm({ configured }: { configured: boolean }) {
  const [formKey, setFormKey] = useState(0);
  return <ContactFormInner key={formKey} configured={configured} onReset={() => setFormKey((k) => k + 1)} />;
}
