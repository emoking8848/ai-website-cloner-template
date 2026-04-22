import type { Metadata } from "next";

import { JohnLewisProductPage } from "@/components/john-lewis-product-page";

export const metadata: Metadata = {
  title: "Joheiewisepro 60 Denier Velvet Touch Tights, Black | JOHEIEWISE & PARTNERS Clone",
  description:
    "Product page clone inspired by the JOHEIEWISE & PARTNERS 60 Denier Velvet Touch Tights detail page.",
};

export default function JohnLewisTightsPage() {
  return <JohnLewisProductPage />;
}
