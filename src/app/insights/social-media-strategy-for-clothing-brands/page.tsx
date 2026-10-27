import { GuidePage, guideMetadata } from "@/components/guide/GuidePage";
import { guide } from "@/content/guides/social-media-strategy-for-clothing-brands";

export const metadata = guideMetadata(guide);

export default function Page() {
  return <GuidePage guide={guide} />;
}
