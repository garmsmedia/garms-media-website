import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the GARMS MEDIA university demonstration website handles your information.",
};

/**
 * Privacy policy for the university demonstration site. It describes the demo
 * contact form (site.enquiriesOpen = false). If enquiries are ever switched on,
 * rewrite this page first: what is collected, who is responsible, retention.
 */
export default function PrivacyPage() {
  return (
    <main id="main" className="bg-paper text-ink">
      <article className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="eyebrow text-stone">Last updated 27 October 2026</p>
        <h1 className="display mt-6 text-[clamp(3rem,9vw,5.5rem)]">Privacy Policy</h1>
        <p className="mt-6 text-lg leading-relaxed text-stone">
          {site.name} is a university project run by a student team. It demonstrates a social media
          marketing agency for independent clothing brands in Los Angeles. It is not a registered
          business and does not accept clients or enquiries.
        </p>

        <div className="mt-12 space-y-10 leading-relaxed text-stone [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
          <section>
            <h2>The contact form is a demonstration</h2>
            <p className="mt-3">
              You can try the contact form, but it does not send or store anything. The details you
              type are checked in your browser only and are never sent to us or saved anywhere.
            </p>
          </section>
          <section>
            <h2>Technical data processed by our host</h2>
            <p className="mt-3">
              This website is hosted by Vercel. Like any web host, Vercel processes technical data
              when you visit, such as your IP address, browser and device details, and the pages you
              request, so it can deliver the site and keep it secure. Vercel handles this data under
              its own{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                className="font-semibold text-ink underline underline-offset-4 hover:no-underline"
              >
                privacy policy
              </a>
              .
            </p>
          </section>
          <section>
            <h2>Cookies and analytics</h2>
            <p className="mt-3">
              This website does not set cookies and does not use analytics or advertising trackers.
            </p>
          </section>
          <section>
            <h2>Questions</h2>
            <p className="mt-3">
              If you have a question about this policy, email{" "}
              <a href={`mailto:${site.privacyEmail}`} className="font-semibold text-ink underline underline-offset-4 hover:no-underline">
                {site.privacyEmail}
              </a>
              . We will use your email only to reply to you.
            </p>
          </section>
          <section>
            <h2>Changes to this policy</h2>
            <p className="mt-3">
              If we change how this website handles information, we will update this page and the
              date at the top.
            </p>
          </section>
        </div>

        <Link href="/" className="mt-14 inline-flex font-semibold text-ink underline underline-offset-4 hover:no-underline">
          ← Back to the homepage
        </Link>
      </article>
    </main>
  );
}
