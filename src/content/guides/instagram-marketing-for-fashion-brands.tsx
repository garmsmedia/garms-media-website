import { Em, List, P } from "@/components/article/ArticleParts";
import { Callout, ExternalLink, Table, TextLink } from "@/components/guide/GuideParts";
import { guideBySlug, type Guide } from "./index";

const meta = guideBySlug("instagram-marketing-for-fashion-brands")!;

export const guide: Guide = {
  ...meta,
  readTime: "7 min read",
  answer: [
    "Clothing brands grow on Instagram by pairing a recognizable visual identity with consistent Reels, carousels and Stories that show how their products look, fit and feel in real life.",
    "Growth usually comes from content people save, share and send to friends, combined with active replies in comments and DMs and collaborations with creators your customers already follow.",
    "Optimize your profile so new visitors immediately understand what you sell and where to buy it, then track reach, saves, shares, profile visits and link clicks to see what drives results.",
  ],
  definition: {
    term: "Instagram marketing for fashion brands",
    text: "is the planned use of Instagram’s profile, feed posts, Reels, Stories, DMs, creator collaborations and ads to build a following of potential customers and move them toward a purchase.",
  },
  sections: [
    {
      id: "profile",
      title: "What makes an Instagram profile convert visitors?",
      body: (
        <>
          <P lead>Your profile is a landing page. Someone who arrives from a Reel should understand within seconds what you sell, who it is for and how to buy.</P>
          <List
            items={[
              <><Em>Professional account.</Em> Switch to a business or creator account to unlock Insights and business tools.</>,
              <><Em>Name and bio.</Em> Say what you make in plain words, such as “Small-batch workwear for women, made in LA”, and mention the next drop or restock.</>,
              <><Em>Link.</Em> Point to a collection or new-arrivals page rather than a generic homepage, and keep it current.</>,
              <><Em>Highlights.</Em> Answer buying questions: sizing and fit, shipping and returns, store hours if you have a shop, and customer photos shared with permission.</>,
              <><Em>Pinned posts.</Em> Pin your brand story, a bestseller and how to buy or what is coming next.</>,
            ]}
          />
          <P>
            Instagram explains how to set up a professional account and where to find your data in its{" "}
            <ExternalLink href="https://help.instagram.com/775104229257413">Help Center article on account insights</ExternalLink>.
          </P>
        </>
      ),
    },
    {
      id: "reels",
      title: "How should fashion brands use Reels?",
      body: (
        <>
          <P lead>Reels are the format most likely to reach people who don’t follow you yet, so they carry most of your discovery work.</P>
          <List
            items={[
              <>Show the product in the first two seconds. A strong opening frame matters more than a long intro.</>,
              <>Film fit and movement: walking, sitting, turning, close-ups of fabric and stitching.</>,
              <>Use repeatable series people can recognize, such as “one piece, three ways” or “packing your orders”.</>,
              <>Add on-screen text so the Reel makes sense with the sound off.</>,
              <>Answer real questions from your comments and DMs in short videos.</>,
            ]}
          />
          <Callout label="Example">
            A small knitwear brand could film the same cardigan on three team members of different heights and sizes, label
            each size on screen and end with “Sizing guide in our highlights.” It answers the most common buying question and
            gives people a reason to save the Reel.
          </Callout>
          <P>
            Instagram publishes tips for creators and businesses on{" "}
            <ExternalLink href="https://creators.instagram.com/">Instagram for Creators</ExternalLink>, and you can see how
            each Reel performs in its{" "}
            <ExternalLink href="https://help.instagram.com/202865988324236">Reel insights</ExternalLink>.
          </P>
        </>
      ),
    },
    {
      id: "product-storytelling",
      title: "How do you tell product stories on Instagram?",
      body: (
        <>
          <P lead>People buy clothes they can picture themselves wearing and stories they want to be part of.</P>
          <List
            items={[
              <><Em>Carousels for detail.</Em> Fabric close-ups, measurements, fit on different bodies and care instructions in one swipeable post.</>,
              <><Em>Captions that answer questions.</Em> Explain why a piece exists, what it pairs with and who it suits.</>,
              <><Em>Stories for the everyday.</Em> Sampling, restocks, polls on colorways and quick answers to DMs.</>,
              <><Em>Founder voice.</Em> Short, honest updates from the person behind the brand build trust that product shots alone cannot.</>,
            ]}
          />
          <P>
            For a full list of formats and a sample weekly mix, see{" "}
            <TextLink href="/insights/content-creation-for-clothing-brands">
              what content independent clothing brands should post
            </TextLink>
            .
          </P>
        </>
      ),
    },
    {
      id: "visual-identity",
      title: "How do you build a consistent visual identity?",
      body: (
        <>
          <P lead>Recognition matters more than a perfect grid, because most people see your posts in their feed, not on your profile.</P>
          <List
            items={[
              <>Choose two or three brand colors and one or two typefaces for text on graphics and Reels covers.</>,
              <>Keep lighting and editing consistent, whether you shoot on a phone or with a photographer.</>,
              <>Repeat recognizable formats so followers know a post is yours before they read the handle.</>,
              <>Write a short style note for anyone who creates content for you, including creators.</>,
            ]}
          />
        </>
      ),
    },
    {
      id: "community-and-creators",
      title: "How should you engage your community and work with creators?",
      body: (
        <>
          <P lead>Engagement is a two-way habit, not a metric you wait for.</P>
          <List
            items={[
              <>Reply to comments soon after posting, while the conversation is active, and answer DMs the same day where you can.</>,
              <>Use Story stickers such as polls and questions to invite low-effort replies.</>,
              <>Reshare customer posts, always with permission and credit.</>,
              <>Use Collab posts with creators so the post appears on both profiles.</>,
            ]}
          />
          <P>
            Paid or gifted creator posts need clear disclosure. Our guide to{" "}
            <TextLink href="/insights/influencer-marketing-for-small-fashion-brands">
              influencer marketing for small fashion brands
            </TextLink>{" "}
            explains how to choose creators, brief them and follow FTC rules.
          </P>
        </>
      ),
    },
    {
      id: "metrics",
      title: "Which Instagram metrics should clothing brands track?",
      body: (
        <>
          <P lead>Track the few numbers that connect content to buying intent.</P>
          <Table
            caption="Instagram metrics and what they tell you"
            head={["Metric", "What it tells you"]}
            rows={[
              ["Reach (non-followers)", "Whether content is finding new people"],
              ["Saves", "Whether people found it useful or want to come back to it"],
              ["Shares and sends", "Whether people think it is worth recommending to friends"],
              ["Profile visits", "Whether content makes people curious about the brand"],
              ["Link taps and website sessions", "Whether interest turns into store visits"],
              ["Orders from Instagram", "Whether it drives revenue, tracked with UTM links in your store analytics"],
            ]}
          />
          <P>
            Compare months against your own baseline. Engagement benchmarks published online vary widely by source and
            account size, so they are a rough guide at best.
          </P>
        </>
      ),
    },
  ],
  faq: [
    {
      question: "Are Reels or carousels better for clothing brands?",
      answer:
        "Use both. Reels tend to reach new people, while carousels are better for showing detail such as fabric, fit and measurements to people who are already interested.",
    },
    {
      question: "How many hashtags should a fashion brand use?",
      answer:
        "A handful of specific, relevant hashtags is enough. Clear captions with words people search for, such as the product type and style, matter as much as hashtags.",
    },
    {
      question: "Should a clothing brand buy followers?",
      answer:
        "No. Bought followers don’t buy clothes, they distort your data and inauthentic activity can put your account at risk.",
    },
    {
      question: "What is a good engagement rate on Instagram?",
      answer:
        "There is no single reliable benchmark, because published figures vary by source, industry and account size. Track your own trend over time and focus on saves, shares and link taps.",
    },
    {
      question: "Can I sell directly on Instagram?",
      answer:
        "Eligible businesses can tag products in posts and link them to product pages. Availability depends on your location and account, so check Instagram’s current shopping requirements.",
    },
  ],
  sources: [
    {
      title: "How can I see insights for my Instagram account?",
      publisher: "Instagram Help Center",
      href: "https://help.instagram.com/775104229257413",
      note: "How to access reach, engagement and audience data with a professional account.",
    },
    {
      title: "View insights on your Instagram reels",
      publisher: "Instagram Help Center",
      href: "https://help.instagram.com/202865988324236",
      note: "What Reel-level metrics Instagram shows and where to find them.",
    },
    {
      title: "Instagram for Creators",
      publisher: "Instagram",
      href: "https://creators.instagram.com/",
      note: "Instagram’s own guidance and updates on Reels, content and creator tools.",
    },
  ],
  related: ["content-creation-for-clothing-brands", "influencer-marketing-for-small-fashion-brands", "social-media-marketing-for-clothing-brands"],
};
