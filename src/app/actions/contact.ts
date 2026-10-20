"use server";

import { headers } from "next/headers";
import { isLeadStorageConfigured, saveLead } from "@/lib/contact/leads";
import { isRateLimited } from "@/lib/contact/rate-limit";
import { readContactForm, validateContact, type FieldErrors } from "@/lib/contact/validation";

export type ContactState = {
  status: "idle" | "success" | "invalid" | "not_configured" | "rate_limited" | "error";
  message?: string;
  fieldErrors?: FieldErrors;
};

/** Minimum time (ms) a real person needs to fill in the form. */
const MIN_FILL_TIME_MS = 3000;

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // 1. Rate limit by IP.
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (isRateLimited(ip)) {
    return {
      status: "rate_limited",
      message: "You've sent a few messages in a short time. Please wait a few minutes and try again.",
    };
  }

  // 2. Basic bot checks: hidden honeypot field + minimum fill time.
  const honeypot = formData.get("nickname");
  const startedAt = Number(formData.get("startedAt"));
  const elapsed = Date.now() - startedAt;
  if ((typeof honeypot === "string" && honeypot.length > 0) || !startedAt || elapsed < MIN_FILL_TIME_MS) {
    return {
      status: "error",
      message: "We couldn't process that submission. Please wait a moment and try again.",
    };
  }

  // 3. Validate (server is the source of truth).
  const input = readContactForm(formData);
  const fieldErrors = validateContact(input);
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "invalid", message: "Please check the highlighted fields.", fieldErrors };
  }

  // 4. Honest development state: no backend connected yet → nothing is sent or stored.
  if (!isLeadStorageConfigured()) {
    return {
      status: "not_configured",
      message:
        "Your details look good — but online enquiries aren't switched on yet, so this message was NOT sent or stored. Please contact the GARMS team directly for now.",
    };
  }

  // 5. Store the lead.
  const result = await saveLead(input);
  if (!result.ok) {
    return {
      status: "error",
      message: "Something went wrong on our side and your message wasn't sent. Please try again in a moment.",
    };
  }

  return {
    status: "success",
    message: "Thanks — your message is in. We'll get back to you by email soon.",
  };
}
