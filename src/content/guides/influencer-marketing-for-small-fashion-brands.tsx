import { Em, List, P } from "@/components/article/ArticleParts";
import { Callout, ExternalLink, Steps, Table, TextLink } from "@/components/guide/GuideParts";
import { guideBySlug, type Guide } from "./index";

const meta = guideBySlug("influencer-marketing-for-small-fashion-brands")!;

export const guide: Guide = {
  ...meta,
  readTime: "8 min read",
  answer: [
    "Small clothing brands can use influencer marketing by partnering with creators whose audience matches their customers, often micro-influencers with engaged niche communities rather than celebrities with huge follower counts.",
    "Start with a clear objective for each collaboration, such as awareness, content or sales, and choose the format that fits it, from gifted product and paid posts to UGC made for your own channels.",
    "In the US, the FTC expects paid and gifted partnerships to be clearly disclosed, and results should be tracked with unique links, discount codes and content performance rather than follower counts alone.",
  ],
  definition: {
    term: "Influencer marketing for fashion brands",
    text: "is a partnership in which a creator features a brand’s clothing to their own audience, usually in exchange for payment, free product or both, with the aim of building awareness, trust or sales.",
  },
  sections: [
    {
      id: "micro-influencers",
      title: "Why do micro-influencers suit small clothing brands?",
      body: (
        <>
          <P lead>For a small label, relevance beats reach. A creator whose followers genuinely share your customers’ style is worth more than a bigger account with a mixed audience.</P>
          <P>
            Creators are often grouped by size. Micro-influencers are commonly described as accounts with roughly 10,000 to
            100,000 followers and nano-influencers as smaller than that, although definitions vary. Smaller creators tend to
            be more affordable, more open to gifted or long-term partnerships and closer to their communities.
          </P>
          <Callout label="Example">
            A Los Angeles brand making plus-size workwear might partner with five local creators who post office outfits and
            styling tips, instead of one lifestyle account with a far larger but less specific audience.
          </Callout>
        </>
      ),
    },
    {
      id: "choosing-creators",
      title: "How do you choose the right creators?",
      body: (
        <>
          <P lead>Check fit before you check follower count.</P>
          <List
            items={[
              <><Em>Audience fit.</Em> Ask for audience location, age and gender from their insights. A US brand needs a mostly US audience.</>,
              <><Em>Style fit.</Em> Would they genuinely wear your pieces? Their past outfits are the best evidence.</>,
              <><Em>Real engagement.</Em> Read the comments. Conversations are a better sign than emoji strings or sudden follower spikes.</>,
              <><Em>Content quality.</Em> Lighting, framing and voice that would sit naturally next to your own content.</>,
              <><Em>Values and history.</Em> Past partnerships, how they disclose them and whether anything they post would worry your customers.</>,
            ]}
          />
        </>
      ),
    },
    {
      id: "ugc-vs-influencers",
      title: "What is the difference between UGC and influencer partnerships?",
      body: (
        <>
          <P lead>They overlap, but you are paying for different things.</P>
          <Table
            caption="UGC creators compared with influencer partnerships"
            head={["", "UGC creator content", "Influencer partnership"]}
            rows={[
              ["What you get", "Photos or videos for your own channels and ads", "A post to the creator’s audience"],
              ["Audience needed", "No, the content is what you buy", "Yes, their audience is the point"],
              ["Best for", "A steady supply of authentic content and ad creative", "Awareness and trust with a new audience"],
              ["Key agreement point", "Usage rights: where and how long you can use it", "Deliverables, timing and disclosure"],
            ]}
          />
          <P>
            Many brands combine both: a creator posts to their audience, and the agreement also lets you reuse the content in
            ads. See{" "}
            <TextLink href="/insights/content-creation-for-clothing-brands">content creation for clothing brands</TextLink>{" "}
            for how UGC fits a weekly content mix.
          </P>
        </>
      ),
    },
    {
      id: "outreach",
      title: "How should you reach out to creators?",
      body: (
        <>
          <Steps
            items={[
              { title: "Engage first.", body: "Follow and genuinely interact with their content for a while before you pitch." },
              { title: "Send a short, personal message.", body: "Say why you chose them, what you are offering and what you would like in return." },
              { title: "Agree a clear brief.", body: "Deliverables, key messages, dos and don’ts, posting dates, usage rights and how the post will be disclosed." },
              { title: "Put it in writing.", body: "Even for gifting, a simple written agreement avoids misunderstandings about expectations and rights." },
              { title: "Review before posting.", body: "Checking drafts before they go live is easier than fixing posts afterwards." },
            ]}
          />
          <Callout label="Example message">
            “Hi Maya, we’re a small LA label making relaxed tailoring, and your thrifted-workwear Reels are exactly how our
            customers dress. We’d love to send you our new linen set to style however you like. If you post, we’d pay your
            usual rate for one Reel and ask you to tag it as a paid partnership. Interested?”
          </Callout>
        </>
      ),
    },
    {
      id: "disclosure",
      title: "What are the disclosure rules for influencer posts?",
      body: (
        <>
          <P lead>
            In the US, the Federal Trade Commission says creators must disclose any material connection to a brand,
            including payment, free or discounted products, and personal or family relationships.
          </P>
          <List
            items={[
              <>The disclosure should be clear and placed where people will see it with the endorsement, not hidden at the end or behind a “more” link.</>,
              <>Plain words such as “ad”, “sponsored” or “thanks to [brand] for the free jacket” work. Vague tags such as “sp” or “collab” are not enough.</>,
              <>Platform tools like Instagram’s paid partnership label can be used, but the FTC says creators should not rely on them alone.</>,
              <>Brands have responsibilities too: the FTC expects advertisers to ask creators to disclose and to make a reasonable effort to monitor what they post.</>,
            ]}
          />
          <P>
            Read the FTC’s{" "}
            <ExternalLink href="https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers">
              Disclosures 101 for Social Media Influencers
            </ExternalLink>{" "}
            and its{" "}
            <ExternalLink href="https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking">
              Endorsement Guides FAQ
            </ExternalLink>{" "}
            for the full guidance. This page is general information, not legal advice.
          </P>
        </>
      ),
    },
    {
      id: "measuring-results",
      title: "How do you measure influencer marketing results?",
      body: (
        <>
          <P lead>Measure against the objective you set before the collaboration started.</P>
          <Table
            caption="Influencer marketing measures by objective"
            head={["Objective", "What to track"]}
            rows={[
              ["Awareness", "Reach and views of the creator’s posts, profile visits and new followers during the campaign"],
              ["Content", "Number of usable assets and how they perform when reused on your channels or in ads"],
              ["Sales", "Orders from each creator’s unique discount code or UTM link, and cost per order including product and shipping"],
            ]}
          />
          <P>
            Ask creators to share screenshots of their post insights after a week. Compare creators against each other, keep
            working with the ones who perform and fit, and consider{" "}
            <TextLink href="/insights/meta-ads-for-clothing-brands">running their best content as partnership ads</TextLink>{" "}
            if your agreement allows it.
          </P>
        </>
      ),
    },
  ],
  faq: [
    {
      question: "How much should a small brand pay influencers?",
      answer:
        "Rates vary widely with audience size, deliverables and usage rights, so ask creators for their rates and compare. Budget for product and shipping as well as fees.",
    },
    {
      question: "Is gifting product enough?",
      answer:
        "Sometimes, especially with smaller creators, but a gift creates no obligation to post. If they do post, the free product still needs to be disclosed.",
    },
    {
      question: "Do I need a contract with an influencer?",
      answer:
        "A written agreement is strongly recommended. It should cover deliverables, dates, payment, usage rights, review of drafts and disclosure.",
    },
    {
      question: "Can I use influencer content in my ads?",
      answer:
        "Only if your agreement gives you those usage rights. On Instagram and Facebook, creators can also give you permission to run their posts as partnership ads.",
    },
    {
      question: "How many creators should a small brand start with?",
      answer:
        "A small test with around five creators lets you compare results without committing a large budget. Scale up with the ones who perform and fit your brand.",
    },
  ],
  sources: [
    {
      title: "Disclosures 101 for Social Media Influencers",
      publisher: "Federal Trade Commission",
      href: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers",
      note: "The FTC’s plain-language guide to when and how creators should disclose brand relationships.",
    },
    {
      title: "FTC’s Endorsement Guides: What People Are Asking",
      publisher: "Federal Trade Commission",
      href: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking",
      note: "Answers for businesses, including what brands should do to train and monitor the creators they work with.",
    },
    {
      title: "Use the paid partnership tool to tag organic branded content",
      publisher: "Instagram Help Center",
      href: "https://help.instagram.com/2467529163409127",
      note: "How Instagram’s paid partnership label works for creators and brands.",
    },
  ],
  related: ["content-creation-for-clothing-brands", "instagram-marketing-for-fashion-brands", "meta-ads-for-clothing-brands"],
};
