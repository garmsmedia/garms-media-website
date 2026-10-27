import { GuidePage, guideMetadata } from "@/components/guide/GuidePage";
import { guide } from "@/content/guides/influencer-marketing-for-small-fashion-brands";

export const metadata = guideMetadata(guide);

export default function Page() {
  return <GuidePage guide={guide} />;
}
