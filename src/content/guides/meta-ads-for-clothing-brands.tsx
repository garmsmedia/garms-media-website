import { Em, List, P } from "@/components/article/ArticleParts";
import { Callout, ExternalLink, Table, TextLink } from "@/components/guide/GuideParts";
import { guideBySlug, type Guide } from "./index";

const meta = guideBySlug("meta-ads-for-clothing-brands")!;

export const guide: Guide = {
  ...meta,
  readTime: "8 min read",
  answer: [
    "Clothing brands can use Meta Ads to increase sales by running Instagram and Facebook campaigns with a sales objective, strong product-focused creative and a landing page that makes buying easy.",
    "Small brands usually learn fastest by testing a few creative angles at a time, retargeting people who have already visited the store or engaged with the brand, and giving campaigns enough time and data before judging them.",
    "Accurate conversion tracking with the Meta Pixel and Conversions API is essential, and no budget or setup can guarantee sales, so treat early campaigns as experiments that show you what your customers respond to.",
  ],
  definition: {
    term: "Meta Ads",
    text: "are paid ads created in Meta Ads Manager that can run across Instagram, Facebook, Messenger and Meta’s partner apps, targeted by location, demographics, interests or people who have already interacted with your brand.",
  },
  sections: [
    {
      id: "objectives",
      title: "Which campaign objective should a clothing brand choose?",
      body: (
        <>
          <P lead>The objective tells Meta what result to look for, so choose the one that matches the action you actually want.</P>
          <Table
            caption="Common Meta campaign objectives for clothing brands"
            head={["Objective", "When it fits"]}
            rows={[
              ["Sales", "You sell online and want purchases. Usually the right default once tracking works."],
              ["Traffic", "You want visits, for example to a lookbook or a store page. Clicks are cheaper but less likely to buy."],
              ["Awareness", "A launch, a new store or a local event where reach matters more than immediate clicks."],
              ["Engagement", "Growing interaction with posts or starting conversations in DMs."],
            ]}
          />
          <P>
            Meta explains each objective in its{" "}
            <ExternalLink href="https://www.facebook.com/business/help/1438417719786914">guide to choosing an advertising objective</ExternalLink>
            . The names and options change from time to time, so check what Ads Manager shows in your account.
          </P>
        </>
      ),
    },
    {
      id: "audiences",
      title: "How should you choose audiences?",
      body: (
        <>
          <P lead>Think in two groups: people who don’t know you yet, and people who already do.</P>
          <List
            items={[
              <><Em>New audiences.</Em> Start broad: the locations you ship to, a sensible age range and few or no interests. Test this against a narrower audience rather than assuming either works better, and make sure your creative is clear about who it is for.</>,
              <><Em>Warm audiences.</Em> Website visitors, people who added to cart, Instagram engagers and video viewers. They are smaller but more likely to buy.</>,
              <><Em>Existing customers.</Em> Exclude recent buyers from first-purchase campaigns, or invite them back for a new drop.</>,
              <><Em>Physical stores.</Em> Target a radius around your shop for in-store events, new arrivals and seasonal sales.</>,
            ]}
          />
        </>
      ),
    },
    {
      id: "creative-testing",
      title: "How do you test ad creative?",
      body: (
        <>
          <P lead>Creative is the lever a small brand controls most directly. Test angles, not tiny tweaks.</P>
          <List
            items={[
              <>Run three to five ads per test, each with a different angle, and keep everything else the same.</>,
              <>Use vertical video for Reels and Stories, carousels for several products and single images for a hero piece.</>,
              <>Judge ads on cost per purchase or add-to-cart, not click-through rate alone.</>,
              <>Refresh creative when frequency rises and results fall, which is a sign people have seen the ad too often.</>,
            ]}
          />
          <Callout label="Example">
            For a new jacket drop, a brand might test three angles: a try-on video showing fit on two body types, a styling
            Reel with three outfits, and a close-up of the fabric and details with the price on screen. The angle that wins
            tells you what customers care about, which also shapes your organic content.
          </Callout>
          <P>
            The public{" "}
            <ExternalLink href="https://www.facebook.com/ads/library/">Meta Ad Library</ExternalLink> lets you see the
            active ads other clothing brands are running, which is useful for creative research. Your best organic posts
            and creator content are often your strongest ad candidates; see{" "}
            <TextLink href="/insights/influencer-marketing-for-small-fashion-brands">influencer marketing for small fashion brands</TextLink>.
          </P>
        </>
      ),
    },
    {
      id: "landing-page",
      title: "Why does the landing page matter as much as the ad?",
      body: (
        <>
          <P lead>An ad can only earn the click. The page has to earn the sale.</P>
          <List
            items={[
              <>Send people to the exact product or collection shown in the ad, not your homepage.</>,
              <>Make sure the page loads quickly and reads well on a phone, where people usually see your ads.</>,
              <>Show sizing, fit notes, shipping costs and returns clearly before checkout.</>,
              <>Keep the look and message consistent with the ad, and pause ads for sold-out items.</>,
            ]}
          />
          <P>
            Our article <TextLink href="/insights/from-scrolls-to-sales">From Scrolls to Sales</TextLink> explains why
            making the next step easy is central to turning attention into results.
          </P>
        </>
      ),
    },
    {
      id: "tracking",
      title: "How do you set up conversion tracking?",
      body: (
        <>
          <P lead>Without reliable tracking, Meta can’t optimize for purchases and you can’t tell which ads pay off.</P>
          <List
            items={[
              <><Em>Meta Pixel.</Em> A piece of code on your site that records actions such as viewing a product, adding to cart and purchasing. Many store platforms, including Shopify, offer an integration so you don’t need to code.</>,
              <><Em>Conversions API.</Em> Sends the same events from your server, which helps when browsers block tracking. Use it alongside the Pixel.</>,
              <><Em>Standard events.</Em> Make sure at least ViewContent, AddToCart, InitiateCheckout and Purchase fire correctly, and check them with the test events tool in Events Manager.</>,
              <><Em>UTM parameters.</Em> Tag ad links so your store analytics can confirm what Meta reports.</>,
            ]}
          />
          <P>
            Meta’s help pages explain how to{" "}
            <ExternalLink href="https://www.facebook.com/business/help/952192354843755">set up and install the Meta Pixel</ExternalLink>{" "}
            and how to{" "}
            <ExternalLink href="https://developers.facebook.com/docs/marketing-api/conversions-api/get-started/">
              get started with the Conversions API
            </ExternalLink>
            .
          </P>
        </>
      ),
    },
    {
      id: "small-budgets",
      title: "What should small brands know about budgets?",
      body: (
        <>
          <P lead>A small budget works best when it is focused, patient and tied to your margins.</P>
          <List
            items={[
              <>Concentrate spend in one or two campaigns instead of spreading it thinly across many.</>,
              <>Let a test run for at least a week before making big changes. Meta’s{" "}<ExternalLink href="https://www.facebook.com/business/help/112167992830700/">guide to the learning phase</ExternalLink>{" "}explains that significant edits, such as pausing or changing the audience, creative or optimization event, can restart it.</>,
              <>If purchases are too rare for Meta to learn from, optimize temporarily for an earlier step such as add-to-cart.</>,
              <>Only spend what you can afford to treat as the cost of learning. No campaign is guaranteed to be profitable.</>,
            ]}
          />
          <Callout label="Worked example">
            If a jacket sells for $80 and your gross margin is 60%, you make $48 before advertising. Spending more than $48
            in ads per jacket sold loses money on that order, unless repeat purchases make up the difference. Knowing this
            number before you launch tells you what “good” looks like.
          </Callout>
        </>
      ),
    },
  ],
  faq: [
    {
      question: "Do Meta Ads work for small clothing brands?",
      answer:
        "They can, but results are never guaranteed. Small brands give themselves the best chance when purchase tracking works, the product page converts, creative has been tested organically first and the budget allows a test to run for at least a week.",
    },
    {
      question: "How much should a small clothing brand spend on Meta Ads?",
      answer:
        "There is no universal number. Start with a test budget you can sustain for several weeks without hurting cash flow, and judge it against your margins.",
    },
    {
      question: "Should I boost posts or use Ads Manager?",
      answer:
        "Boosting is quick and fine for extra reach on a single post. Ads Manager gives you objectives, audiences, creative testing and proper conversion tracking, which matter when the goal is sales.",
    },
    {
      question: "Why are my ads getting clicks but no sales?",
      answer:
        "Common causes are a slow or confusing landing page, surprise shipping costs, unclear sizing, an audience that doesn’t match the product or broken purchase tracking.",
    },
    {
      question: "How long should I wait before judging a Meta ad?",
      answer:
        "Usually at least a week, and longer if conversions are infrequent. Early results are noisy, so avoid switching ads off after a day or two.",
    },
    {
      question: "Can a physical clothing store use Meta Ads?",
      answer:
        "Yes. Ads targeted to a radius around the store can promote new arrivals, events and seasonal sales to people nearby.",
    },
  ],
  sources: [
    {
      title: "About the learning phase",
      publisher: "Meta Business Help Center",
      href: "https://www.facebook.com/business/help/112167992830700/",
      note: "How Meta’s delivery system learns after an ad set launches or is significantly edited.",
    },
    {
      title: "Choosing Meta Ads Manager advertising objectives",
      publisher: "Meta Business Help Center",
      href: "https://www.facebook.com/business/help/1438417719786914",
      note: "Meta’s overview of campaign objectives and when to use each.",
    },
    {
      title: "Set up and install the Meta Pixel",
      publisher: "Meta Business Help Center",
      href: "https://www.facebook.com/business/help/952192354843755",
      note: "Step-by-step setup for the Pixel, including partner integrations for store platforms.",
    },
    {
      title: "Get started with the Conversions API",
      publisher: "Meta for Developers",
      href: "https://developers.facebook.com/docs/marketing-api/conversions-api/get-started/",
      note: "Technical documentation for sending web events from your server.",
    },
    {
      title: "Meta Ad Library",
      publisher: "Meta",
      href: "https://www.facebook.com/ads/library/",
      note: "A public, searchable library of active ads across Meta’s apps.",
    },
  ],
  related: ["social-media-marketing-for-clothing-brands", "content-creation-for-clothing-brands", "influencer-marketing-for-small-fashion-brands"],
};
