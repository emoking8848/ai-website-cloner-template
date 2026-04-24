import type { Metadata } from "next";

import { JohnLewisCategoryPage } from "@/components/john-lewis-category-page";

export const metadata: Metadata = {
  title: "NeverKnowingly Undersold",
  description: "NeverKnowingly Undersold",
};

export default function CategoryPage() {
  return <JohnLewisCategoryPage />;
}
