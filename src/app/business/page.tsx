import type { Metadata } from "next";

import { JohnLewisBusinessPage } from "@/components/john-lewis-business-page";

export const metadata: Metadata = {
  title: "Joheiewisepro Business | JOHEIEWISE & PARTNERS",
  description: "Recreated JOHEIEWISE & PARTNERS Business landing page.",
};

export default function BusinessPage() {
  return <JohnLewisBusinessPage />;
}
