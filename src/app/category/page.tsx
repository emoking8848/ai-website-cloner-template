import type { Metadata } from "next";

import { JohnLewisCategoryPage } from "@/components/john-lewis-category-page";

export const metadata: Metadata = {
  title: "Category | JOHEIEWISE & PARTNERS",
  description: "Local JSON driven product category page for JOHEIEWISE & PARTNERS.",
};

export default function CategoryPage() {
  return <JohnLewisCategoryPage />;
}
