import type { Metadata } from "next";

import { JohnLewisContactPage } from "@/components/john-lewis-contact-page";

export const metadata: Metadata = {
  title: "Contact Us | Customer Services | JOHEIEWISE & PARTNERS",
  description: "Recreated JOHEIEWISE & PARTNERS returns and refunds contact page.",
};

export default function ContactUsPage() {
  return <JohnLewisContactPage />;
}
