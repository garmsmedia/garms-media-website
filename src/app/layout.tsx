import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";
import "./globals.css";

/*
 * Fonts are self-hosted (SIL Open Font License — see src/app/fonts/LICENSE-*.txt)
 * and optimised by next/font, so builds never depend on Google's servers.
 */
const anton = localFont({
  src: "./fonts/Anton-Regular.woff2",
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const dmSans = localFont({
  src: "./fonts/DMSans-Variable.woff2",
  weight: "100 1000",
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = localFont({
  src: "./fonts/InstrumentSerif-Italic.woff2",
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "social media marketing agency",
    "streetwear marketing",
    "urban fashion brands",
    "independent clothing brands",
    "Los Angeles",
    "Instagram marketing",
    "TikTok marketing",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark light",
};

// Only facts we can state truthfully: name, description and area served.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  description: site.description,
  url: site.url,
  areaServed: { "@type": "City", name: "Los Angeles" },
  knowsAbout: ["Social media marketing", "Streetwear", "Urban fashion", "E-commerce"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${anton.variable} ${dmSans.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        {/* Enables scroll-reveal styles only when JS runs, so no-JS visitors see everything. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-flame px-5 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
