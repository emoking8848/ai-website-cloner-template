import type { Metadata } from "next";

import { JohnLewisCategoryPage } from "@/components/john-lewis-category-page";

export const metadata: Metadata = {
  title: "Always Competitively Priced",
  description: "Always Competitively Priced",
};

export default function CategoryPage() {
  return <JohnLewisCategoryPage />;
}
