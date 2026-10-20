/**
 * Contact form validation — shared by the browser (instant feedback) and the
 * server action (the source of truth). Keep this file free of server-only code.
 */
import { serviceOptions } from "@/content/services";

export type ContactField = "fullName" | "email" | "brand" | "website" | "service" | "message" | "consent";

export type ContactInput = {
  fullName: string;
  email: string;
  brand: string;
  website: string;
  service: string;
  message: string;
  consent: boolean;
};

export type FieldErrors = Partial<Record<ContactField, string>>;

export const LIMITS = {
  fullName: 100,
  email: 254,
  brand: 120,
  website: 200,
  messageMin: 10,
  message: 2000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const HANDLE_RE = /^@[A-Za-z0-9._]{1,30}$/;

function isValidLink(value: string) {
  if (HANDLE_RE.test(value)) return true;
  try {
    const url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    return (url.protocol === "https:" || url.protocol === "http:") && url.hostname.includes(".");
  } catch {
    return false;
  }
}

/** Reads and trims the expected fields from submitted form data. */
export function readContactForm(formData: FormData): ContactInput {
  const text = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
  };
  return {
    fullName: text("fullName"),
    email: text("email"),
    brand: text("brand"),
    website: text("website"),
    service: text("service"),
    message: text("message"),
    consent: formData.get("consent") === "on",
  };
}

export function validateContact(input: ContactInput): FieldErrors {
  const errors: FieldErrors = {};

  if (input.fullName.length < 2) errors.fullName = "Please enter your full name.";
  else if (input.fullName.length > LIMITS.fullName) errors.fullName = "That name is a little too long.";

  if (!input.email) errors.email = "Please enter your email address.";
  else if (input.email.length > LIMITS.email || !EMAIL_RE.test(input.email))
    errors.email = "Please enter a valid email address, like name@brand.com.";

  if (!input.brand) errors.brand = "Please tell us your brand or company name.";
  else if (input.brand.length > LIMITS.brand) errors.brand = "That name is a little too long.";

  if (input.website) {
    if (input.website.length > LIMITS.website || !isValidLink(input.website))
      errors.website = "Please enter a website (brand.com) or Instagram handle (@brand).";
  }

  if (!serviceOptions.some((option) => option.value === input.service))
    errors.service = "Please choose the service you're interested in.";

  if (input.message.length < LIMITS.messageMin)
    errors.message = `Please tell us a bit more (at least ${LIMITS.messageMin} characters).`;
  else if (input.message.length > LIMITS.message)
    errors.message = `Please keep your message under ${LIMITS.message} characters.`;

  if (!input.consent) errors.consent = "Please confirm we can use your details to reply to you.";

  return errors;
}
