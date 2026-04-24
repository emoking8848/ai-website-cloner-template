import type { Metadata } from "next";

import { JohnLewisCategoryPage } from "@/components/john-lewis-category-page";
import { humanizeCategoryLabel } from "@/lib/catalog-data";

type CategorySlugPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export async function generateMetadata({ params }: CategorySlugPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const label = humanizeCategoryLabel(resolvedParams.slug?.join("/"));

  return {
    title: "NeverKnowingly Undersold",
    description: "NeverKnowingly Undersold",
  };
}

export default async function CategorySlugPage({ params }: CategorySlugPageProps) {
  const resolvedParams = await params;

  return <JohnLewisCategoryPage categoryPath={resolvedParams.slug} />;
}
