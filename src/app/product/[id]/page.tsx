import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getCatalogPayload, getCatalogProductById } from "@/lib/catalog-data";
import { StandardProductPage } from "@/components/standard-product-page";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  const { products } = getCatalogPayload();

  return products.map((product) => ({
    id: String(product.id),
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getCatalogProductById(resolvedParams.id);

  if (!product) {
    return {
      title: "Product | Joheiewisepro & Partners | NeverKnowingly",
    };
  }

  return {
    title: `${product.title} | Joheiewisepro & Partners | NeverKnowingly`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getCatalogProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  const { categoryName } = getCatalogPayload();

  return <StandardProductPage product={product} categoryName={categoryName} />;
}
