import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the GARMS MEDIA university project collects, stores and uses information sent through its contact form.",
  alternates: { canonical: "/privacy" },
};

/**
 * Privacy policy for the university project site, written for the stored
 * contact form (site.enquiriesOpen = true). Update it whenever that changes.
 */
export default function PrivacyPage() {
  const email = site.email ? (
    <a href={`mailto:${site.email}`} className="font-semibold text-ink underline underline-offset-4 hover:no-underline">
      {site.email}
    </a>
  ) : null;

  return (
    <main id="main" className="bg-paper text-ink">
      <article className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="eyebrow text-stone">Last updated 27 October 2026</p>
        <h1 className="display mt-6 text-[clamp(3rem,9vw,5.5rem)]">Privacy Policy</h1>
        <p className="mt-6 text-lg leading-relaxed text-stone">
          {site.name} is a university project run by a student team. It demonstrates a social media
          marketing agency for independent clothing brands in Los Angeles. It is not a registered
          business or an operating marketing agency. This policy explains how the project team
          handles information sent through the contact form on this website.
        </p>

        <div className="mt-12 space-y-10 leading-relaxed text-stone [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
          <section>
            <h2>What we collect</h2>
            <p className="mt-3">When you send the contact form, we collect:</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>your full name</li>
              <li>your email address</li>
              <li>your brand or company name</li>
              <li>your website or Instagram handle (optional)</li>
              <li>the service you are interested in</li>
              <li>your message</li>
              <li>your confirmation that we may use these details, and the time you gave it</li>
            </ul>
            <p className="mt-3">We only collect what you type into the form.</p>
          </section>
          <section>
            <h2>How we use it</h2>
            <p className="mt-3">
              We use your information solely for academic purposes as part of the {site.name}{" "}
              university project, including replying to your message. We do not sell it, and we do
              not use it for email marketing.
            </p>
          </section>
          <section>
            <h2>Where it is stored and who can see it</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Your submission is stored securely in a database run by Supabase, in its London (UK) region.</li>
              <li>
                Only authorised members of the {site.name} project team who manage form submissions
                can access it.
              </li>
            </ul>
          </section>
          <section>
            <h2>How long we keep it</h2>
            <p className="mt-3">
              We delete each submission within 6 months of receiving it. If you ask us to delete it
              sooner, we will.
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
              . When you send the form, our website also reads your IP address briefly to stop spam.
              It is not saved with your submission.
            </p>
          </section>
          <section>
            <h2>Cookies and analytics</h2>
            <p className="mt-3">
              This website does not set cookies and does not use analytics or advertising trackers.
            </p>
          </section>
          <section>
            <h2>Your choices and contact</h2>
            <p className="mt-3">
              You can ask us to see, correct or delete the information you sent
              {email ? <>. Email {email}</> : null}. We will use your email only to reply to your
              request.
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
