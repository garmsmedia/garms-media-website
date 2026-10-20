/**
 * Free Consultation section copy.
 *
 * The CTA stays visibly disabled ("Coming soon") until enquiries are switched on
 * (same condition as the contact form: lead storage configured). It always points
 * to the on-page Contact section — never to an external booking platform.
 */
export const consultation = {
  highlight: "Free initial consultation",
  headline: { before: "Let's talk about", accent: "your brand." },
  body: "Building an independent streetwear brand? Let's explore your goals, challenges, and how GARMS MEDIA could help you grow.",
  cta: "Book a free consultation",
  /** Shown next to a "Coming soon" badge while the CTA is disabled. */
  comingSoon:
    "Consultations aren't open yet. Booking will open here once our enquiry system and privacy policy are ready.",
  /** What the conversation covers — taken directly from the body copy above. */
  topics: [
    { title: "Your goals", body: "Where you want your brand to be, online and in sales." },
    { title: "Your challenges", body: "What's holding your social media back right now." },
    { title: "How we could help", body: "Which GARMS services could fit your stage and budget." },
  ],
};
