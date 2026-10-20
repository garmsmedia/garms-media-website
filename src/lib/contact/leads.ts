import "server-only";
import type { ContactInput } from "./validation";

/**
 * Lead storage.
 *
 * Contact-form leads are stored in Supabase once these SERVER-ONLY environment
 * variables are set (never prefix them with NEXT_PUBLIC_):
 *   SUPABASE_URL         e.g. https://<project-ref>.supabase.co
 *   SUPABASE_SECRET_KEY  a secret key (sb_secret_…) or legacy service_role key
 *
 * Until both are set, the site still builds and runs, and the form tells
 * visitors honestly that online enquiries are not switched on yet.
 * Table definition: supabase/migrations/20261020000000_contact_leads.sql
 *
 * Uses Supabase's REST API directly, so no extra dependency is needed.
 */

const TABLE = "contact_leads";

export function isLeadStorageConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SECRET_KEY);
}

export async function saveLead(lead: ContactInput): Promise<{ ok: true } | { ok: false }> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return { ok: false };

  const headers: Record<string, string> = {
    apikey: key,
    "Content-Type": "application/json",
    Prefer: "return=minimal",
  };
  // Legacy JWT keys (service_role) also need a Bearer header; new sb_secret_ keys don't.
  if (!key.startsWith("sb_")) headers.Authorization = `Bearer ${key}`;

  try {
    const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/${TABLE}`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        full_name: lead.fullName,
        email: lead.email,
        brand: lead.brand,
        website: lead.website || null,
        service: lead.service,
        message: lead.message,
        consent: lead.consent,
        consent_at: new Date().toISOString(),
        source: "website",
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      // Log status only — never log the visitor's personal data.
      console.error(`[contact] Supabase insert failed with status ${res.status}`);
      return { ok: false };
    }
    return { ok: true };
  } catch {
    console.error("[contact] Supabase insert failed (network or timeout)");
    return { ok: false };
  }
}
