/**
 * Site-wide configuration.
 *
 * PLACEHOLDERS: any value set to `null` is not confirmed yet. Components show
 * a clearly labelled "coming soon" state instead of inventing a handle or address.
 * Replace `null` with the real value once GARMS has confirmed it.
 */

export const site = {
  name: "GARMS MEDIA",
  shortName: "GARMS",
  title: "GARMS MEDIA | Social Media Marketing for Independent Clothing Brands",
  description:
    "GARMS MEDIA is a creative social media marketing agency concept helping independent clothing brands, including streetwear and urban fashion labels, build communities and grow online.",
  positioning:
    "Social media marketing for independent clothing brands in Los Angeles.",
  location: "Los Angeles, California",

  /**
   * GARMS MEDIA is a university demonstration project, not a real agency.
   * While false, the contact form works as a demo only: nothing typed into it
   * is sent to the server or stored. The Supabase lead storage stays in place
   * for possible future use.
   */
  enquiriesOpen: false,

  /** Shown after a valid demo submission (when enquiriesOpen is false). */
  demoSubmitMessage:
    "Demo only: your message was not sent or stored. GARMS MEDIA is a university project and isn't accepting enquiries.",

  /** Contact for privacy questions (shown on /privacy). */
  privacyEmail: "garmsmedia.agency@gmail.com",

  /** Public site URL. Set NEXT_PUBLIC_SITE_URL in Vercel once a domain exists. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),

  /** PLACEHOLDER — confirmed contact email, e.g. "hello@yourdomain.com". */
  email: null as string | null,

  /** PLACEHOLDER — full profile URLs, e.g. "https://www.instagram.com/handle". */
  social: {
    instagram: null as string | null,
    tiktok: null as string | null,
    linkedin: null as string | null,
  },
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/#contact" },
] as const;
