import type { Metadata } from "next";

import { JohnLewisTermsPage } from "@/components/john-lewis-terms-page";

export const metadata: Metadata = {
  title: "Terms And Conditions | JOHEIEWISE & PARTNERS",
  description: "Recreated JOHEIEWISE & PARTNERS customer services terms and conditions page.",
};

export default function TermsAndConditionsPage() {
  return <JohnLewisTermsPage />;
}
