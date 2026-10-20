import "server-only";

/**
 * Basic in-memory rate limit: max 5 submissions per IP per 10 minutes.
 *
 * Note: on serverless hosting (Vercel) each instance has its own memory, so this
 * is a light first line of defence, not a guarantee. For stronger protection add
 * Vercel Firewall rate-limiting rules or a shared store (e.g. Upstash Redis).
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

export function isRateLimited(key: string, now = Date.now()) {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  // Keep memory bounded.
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }
  return recent.length > MAX_REQUESTS;
}
