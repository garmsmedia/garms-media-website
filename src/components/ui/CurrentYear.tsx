import { cacheLife } from "next/cache";

/**
 * Current year for the copyright line.
 * With Cache Components enabled, `new Date()` must run inside a cached scope.
 * The value is cached and refreshed daily, so it rolls over on New Year without a redeploy.
 */
export async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
