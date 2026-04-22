import type { Metadata } from "next";

import { JohnLewisProductPage } from "@/components/john-lewis-product-page";

export const metadata: Metadata = {
  title: "Lauren Ralph Lauren Colour Contrast Cardigan, Red/Navy | JOHEIEWISE & PARTNERS Clone",
  description:
    "Product page clone inspired by the JOHEIEWISE & PARTNERS Lauren Ralph Lauren cardigan detail page.",
};

export default function RalphLaurenCardiganPage() {
  return <JohnLewisProductPage />;
}
