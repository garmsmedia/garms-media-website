import { Em, List, P } from "@/components/article/ArticleParts";
import { Callout, CardGrid, ExternalLink, Table, TextLink } from "@/components/guide/GuideParts";
import { guideBySlug, type Guide } from "./index";

const meta = guideBySlug("social-media-strategy-for-clothing-brands")!;

export const guide: Guide = {
  ...meta,
  readTime: "8 min read",
  answer: [
    "You build a social media strategy for an independent clothing brand by defining what social media should achieve for the business, who your target customers are and which platforms they actually use.",
    "From there, you set three to five content pillars, plan them into a realistic content calendar built around your drops and seasons, and choose a small set of KPIs tied to your objectives.",
    "Review results every month and adjust what you post, where and how often based on what drives meaningful actions such as saves, website visits and sales, not just likes.",
  ],
  definition: {
    term: "A social media strategy",
    text: "is a written plan that connects a brand’s business goals to specific audiences, platforms, content themes, a posting schedule and the measures used to judge success.",
  },
  sections: [
    {
      id: "objectives",
      title: "Step 1: What should your social media objectives be?",
      body: (
        <>
          <P lead>Start from the business, not the platform. Ask what the brand needs in the next three to six months.</P>
          <List
            items={[
              <><Em>Online-only brands</Em> usually need traffic and sales: more product page visits, add-to-carts and orders.</>,
              <><Em>Physical stores</Em> often need local awareness and visits: more people nearby who know the shop and come in.</>,
              <><Em>Omnichannel brands</Em> need both, plus consistency between what people see online and find in store.</>,
            ]}
          />
          <Callout label="Example objective">
            “Increase website sessions from Instagram by 25% over the next quarter, compared with last quarter, by posting
            four Reels a week and adding a product link to every launch post.” The number is a target you set from your own
            baseline, not a benchmark.
          </Callout>
        </>
      ),
    },
    {
      id: "target-customers",
      title: "Step 2: Who are your target customers?",
      body: (
        <>
          <P lead>Describe one or two real customer types in enough detail that anyone on the team could picture them.</P>
          <List
            items={[
              <>Who they are: age range, location, job or lifestyle.</>,
              <>What they follow: creators, brands, music and communities.</>,
              <>Why they buy from you, and what nearly stops them, such as price, fit or delivery time.</>,
            ]}
          />
          <P>
            Build this from evidence: post-purchase surveys, DMs, reviews, conversations in store and the audience data in
            your Instagram insights. A short question at checkout, such as “Where did you hear about us?”, is one of the
            most useful things a small brand can add.
          </P>
        </>
      ),
    },
    {
      id: "platforms",
      title: "Step 3: Which platforms should you choose?",
      body: (
        <>
          <P lead>Pick one main platform and, at most, one secondary platform you can run well.</P>
          <P>
            Choose based on where your customers spend time and what content you can produce consistently. Pew Research
            Center’s{" "}
            <ExternalLink href="https://www.pewresearch.org/internet/fact-sheet/social-media/">
              data on Americans’ use of social media
            </ExternalLink>{" "}
            shows how platform use differs by age group, which is a helpful starting point before checking your own
            customers. For a platform-by-platform comparison, read{" "}
            <TextLink href="/insights/social-media-marketing-for-clothing-brands">
              how independent clothing brands can grow through social media marketing
            </TextLink>
            .
          </P>
        </>
      ),
    },
    {
      id: "content-pillars",
      title: "Step 4: What content pillars should you set?",
      body: (
        <>
          <P lead>Content pillars are the three to five recurring themes that every post belongs to. They keep content varied but on-brand.</P>
          <CardGrid
            items={[
              { title: "Product and fit", body: "Try-ons, details, sizing and how pieces are made." },
              { title: "Style inspiration", body: "Outfits, styling ideas and seasonal looks." },
              { title: "Behind the brand", body: "The founder, the studio, sourcing and the design process." },
              { title: "Community", body: "Customer photos, stories, events and collaborations." },
            ]}
          />
          <P>
            Drops and offers then run across these pillars rather than becoming a pillar of their own. For formats and
            examples, see{" "}
            <TextLink href="/insights/content-creation-for-clothing-brands">
              what content independent clothing brands should post
            </TextLink>
            .
          </P>
        </>
      ),
    },
    {
      id: "content-calendar",
      title: "Step 5: How do you plan a content calendar?",
      body: (
        <>
          <P lead>Plan the month around key dates first, then fill the weeks with your pillars.</P>
          <List
            items={[
              <>Mark drops, restocks, sales, US retail moments such as back-to-school, Black Friday and the holidays, and local events.</>,
              <>Set a weekly rhythm, for example four feed posts or Reels and daily Stories.</>,
              <>Assign each slot a pillar and a format, then batch-produce content for the month.</>,
            ]}
          />
          <Table
            caption="Example first week of a content calendar"
            head={["Day", "Pillar", "Post"]}
            rows={[
              ["Monday", "Style inspiration", "Reel: three ways to wear the new overshirt"],
              ["Wednesday", "Product and fit", "Carousel: fit on two body types, with measurements"],
              ["Friday", "Behind the brand", "Reel: sampling the next drop in the studio"],
              ["Sunday", "Community", "Customer photos from the week, shared with permission"],
            ]}
          />
          <P>
            A shared spreadsheet is enough to start. Meta Business Suite also includes a{" "}
            <ExternalLink href="https://www.facebook.com/business/help/1170295510042639">
              calendar for planning and scheduling
            </ExternalLink>{" "}
            Instagram and Facebook posts.
          </P>
        </>
      ),
    },
    {
      id: "kpis",
      title: "Step 6: Which KPIs should you track?",
      body: (
        <>
          <P lead>Choose three to five KPIs that map directly to your objectives.</P>
          <Table
            caption="Example KPIs by objective"
            head={["Objective", "KPI"]}
            rows={[
              ["Awareness", "Reach among non-followers, follower growth"],
              ["Engagement", "Saves and shares per post, DM conversations"],
              ["Traffic", "Link taps and website sessions from social"],
              ["Sales", "Orders and revenue from social, conversion rate"],
              ["Store visits", "Direction requests, event attendance, “saw you on Instagram” mentions at the register"],
            ]}
          />
        </>
      ),
    },
    {
      id: "adjust",
      title: "Step 7: How do you adjust based on results?",
      body: (
        <>
          <P lead>A strategy is a hypothesis. The monthly review is where you find out what is true for your brand.</P>
          <List
            items={[
              <>Which pillar and format drove the most saves, shares and link taps?</>,
              <>Which posts led to orders or store visits?</>,
              <>What can you stop doing to free up time for what works?</>,
              <>What one new thing will you test next month?</>,
            ]}
          />
          <P>
            Every quarter, step back and check whether the objectives themselves still fit the business. Our article{" "}
            <TextLink href="/insights/from-scrolls-to-sales">From Scrolls to Sales</TextLink> explains how to think about
            the journey from attention to sales, which helps you choose what to measure.
          </P>
        </>
      ),
    },
  ],
  faq: [
    {
      question: "How long should a social media strategy cover?",
      answer:
        "Three to six months is practical for a small brand, with a monthly review of results and a bigger review each quarter.",
    },
    {
      question: "How many content pillars should a clothing brand have?",
      answer:
        "Three to five. Fewer can feel repetitive, while more makes it hard to stay consistent and recognizable.",
    },
    {
      question: "What is the difference between a social media strategy and a content calendar?",
      answer:
        "The strategy explains why and for whom: objectives, audiences, platforms and pillars. The calendar is the schedule of specific posts that puts the strategy into action.",
    },
    {
      question: "Do I need a different strategy for Instagram and TikTok?",
      answer:
        "Keep the same objectives, audience and pillars, but adapt formats, pacing and tone to each platform.",
    },
    {
      question: "How do I set goals if I have no data yet?",
      answer:
        "Spend the first month establishing a baseline by posting consistently and recording your numbers, then set targets relative to that baseline.",
    },
  ],
  sources: [
    {
      title: "Americans’ Use of Social Media",
      publisher: "Pew Research Center",
      href: "https://www.pewresearch.org/internet/fact-sheet/social-media/",
      note: "Data on which platforms US adults use, by age and other groups.",
    },
    {
      title: "Best practices for using the calendar in Business Suite",
      publisher: "Meta Business Help Center",
      href: "https://www.facebook.com/business/help/1170295510042639",
      note: "How to plan and schedule Instagram and Facebook posts in one calendar.",
    },
    {
      title: "How can I see insights for my Instagram account?",
      publisher: "Instagram Help Center",
      href: "https://help.instagram.com/775104229257413",
      note: "Where to find the audience and performance data used in Steps 2 and 6.",
    },
  ],
  related: ["social-media-marketing-for-clothing-brands", "content-creation-for-clothing-brands", "instagram-marketing-for-fashion-brands"],
};
