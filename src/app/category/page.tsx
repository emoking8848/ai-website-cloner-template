import type { Metadata } from "next";

import { JohnLewisCategoryPage } from "@/components/john-lewis-category-page";

export const metadata: Metadata = {
  title: "Category | Joheiewisepro & Partners | NeverKnowingly",
  description: "Category landing page for Joheiewisepro & Partners.",
};

export default function CategoryPage() {
  return <JohnLewisCategoryPage />;
}
