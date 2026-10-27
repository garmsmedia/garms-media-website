import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How GARMS MEDIA handles information sent through the website contact form.",
  robots: { index: false }, // draft — index once reviewed
};

/**
 * DRAFT privacy policy. Must be reviewed (ideally by a legal professional) and
 * completed before the contact form is connected to real lead storage.
 */
export default function PrivacyPage() {
  return (
    <main id="main" className="bg-paper text-ink">
      <article className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="eyebrow inline-block bg-flame px-3 py-1.5 text-ink">Draft — placeholder</p>
        <h1 className="display mt-6 text-[clamp(3rem,9vw,5.5rem)]">Privacy Policy</h1>
        <p className="mt-6 text-lg leading-relaxed text-stone">
          This is a working draft for a university project. A complete, reviewed version will replace
          it soon.
        </p>

        <div className="mt-12 space-y-10 leading-relaxed text-stone [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
          <section>
            <h2>What we would collect</h2>
            <p className="mt-3">
              If you use the contact form, we would collect the details you choose to give us: your
              name, email address, brand or company name, an optional website or Instagram link, the
              service you are interested in, and your message.
            </p>
          </section>
          <section>
            <h2>Why we would use it</h2>
            <p className="mt-3">
              Only to reply to your enquiry and talk with you about working together. We would not sell
              your data or add you to marketing lists without asking.
            </p>
          </section>
          <section>
            <h2>Where it is stored</h2>
            <p className="mt-3">
              The contact form is live. Enquiries you send through it are stored with our database
              provider, Supabase.
            </p>
          </section>
          <section>
            <h2>Your choices</h2>
            <p className="mt-3">
              You will be able to ask us to see, correct or delete your information.{" "}
              {site.email ? (
                <>
                  Contact us at <a href={`mailto:${site.email}`} className="font-semibold text-ink underline">{site.email}</a>.
                </>
              ) : (
                <>Contact details will be added here once confirmed.</>
              )}
            </p>
          </section>
          <section>
            <h2>To be completed</h2>
            <p className="mt-3">
              Data retention period, legal basis, data controller details for {site.name}, and any
              analytics or cookies used.
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
