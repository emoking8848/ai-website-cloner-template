import type { Metadata } from "next";

import { JohnLewisProductPage } from "@/components/john-lewis-product-page";

export const metadata: Metadata = {
  title: "NEOM Wellbeing London, Your Moment of Wellbeing Set | JOHEIEWISE & PARTNERS Clone",
  description:
    "Product page clone inspired by the JOHEIEWISE & PARTNERS NEOM Wellbeing London Your Moment of Wellbeing Set detail page.",
};

export default function NeomWellbeingSetPage() {
  return <JohnLewisProductPage />;
}
