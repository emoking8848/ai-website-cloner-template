import productsData from "@/data/products.json";
import categoryTermMapData from "@/data/wp_category_term_map.json";
import wpSyncData from "@/data/wp_sync_result.json";
import { getProductRoute } from "@/lib/site-routes";

type BaseProduct = {
  id: number;
  title: string;
  price: string;
  image_urls: string[];
  description?: string;
};

type RawWpSyncItem = {
  wp_variation_id?: number | string;
  wp_parent_id?: number | string;
  wp_product_id?: number | string;
  wp_permalink?: string;
  parent_sku?: string;
  sku?: string;
  title?: string;
  product_title?: string;
  price?: string | number;
  stock_status?: string;
  attributes?: Record<string, string>;
  source_url?: string;
  category_slugs?: string[];
  category_names?: string[];
  category_term_ids?: number[];
  remote_image_url?: string;
  image_urls?: string[];
  image_url?: string;
  description?: string;
  short_description?: string;
};

type CategoryTermRecord = {
  id: number;
  slug: string;
  name: string;
  count: number;
};

export type ProductVariant = {
  id: number;
  parentId: number;
  title: string;
  price: string;
  stockStatus: "instock" | "outofstock";
  sku: string;
  imageUrl: string;
  attributes: Record<string, string>;
};

export type CatalogProduct = {
  id: number;
  title: string;
  price: string;
  stockStatus: "instock" | "outofstock";
  sku: string;
  imageUrl: string;
  imageUrls: string[];
  href: string;
  categorySlugs: string[];
  categoryNames: string[];
  productType: "simple" | "standard" | "complex";
  attributeKeys: string[];
  attributeOptions: Array<{
    name: string;
    values: string[];
  }>;
  variants: ProductVariant[];
  defaultVariationId: number;
  description: string;
  sourceUrl?: string;
  wpPermalink?: string;
};

type CatalogPayload = {
  categoryName?: string;
  products: CatalogProduct[];
};

const baseProducts = productsData as BaseProduct[];
const baseProductById = new Map(baseProducts.map((product) => [product.id, product]));
const rawItems = wpSyncData as RawWpSyncItem[];
const categoryTermMap = categoryTermMapData as Record<string, CategoryTermRecord>;
const fallbackImage = "/brand/barcode-logo.png";

function decodeHtml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
}

function toNumber(value: number | string | null | undefined) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim().length > 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

function normalizePrice(value: string | number | undefined, fallback = "0.00") {
  if (typeof value === "number") {
    return value.toFixed(2);
  }

  if (typeof value === "string" && value.trim().length > 0) {
    return value.replace(/^\u00A3/, "");
  }

  return fallback.replace(/^\u00A3/, "");
}

function normalizeStockStatus(value: string | undefined) {
  return value?.toLowerCase() === "outofstock" ? "outofstock" : "instock";
}

function stripHtml(value: string) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildImageUrl(item: RawWpSyncItem, parentId: number) {
  if (typeof item.remote_image_url === "string" && item.remote_image_url.trim().length > 0) {
    return item.remote_image_url;
  }

  if (Array.isArray(item.image_urls) && item.image_urls.length > 0) {
    return item.image_urls[0];
  }

  if (typeof item.image_url === "string" && item.image_url.trim().length > 0) {
    return item.image_url;
  }

  return baseProductById.get(parentId)?.image_urls?.[0] ?? fallbackImage;
}

function buildDescription(item: RawWpSyncItem, fallbackTitle: string, fallbackSku: string) {
  const richDescription = typeof item.description === "string" && item.description.trim().length > 0
    ? stripHtml(item.description)
    : typeof item.short_description === "string" && item.short_description.trim().length > 0
      ? stripHtml(item.short_description)
      : "";

  if (richDescription.length > 0) {
    return richDescription;
  }

  const skuSuffix = fallbackSku.length > 0 ? ` SKU: ${fallbackSku}.` : "";

  return `${fallbackTitle} is part of the current Joheiewisepro edit.${skuSuffix} Availability, pricing and imagery are synced from the latest local product handoff.`;
}

function getCategoryDisplayName(slug: string) {
  return decodeHtml(categoryTermMap[slug]?.name ?? slug);
}

function getRawCategoryNames(item: RawWpSyncItem) {
  if (Array.isArray(item.category_names) && item.category_names.length > 0) {
    return item.category_names.map((name) => decodeHtml(name));
  }

  if (Array.isArray(item.category_slugs)) {
    return item.category_slugs.map(getCategoryDisplayName);
  }

  return [];
}

function uniqueStrings(values: string[]) {
  return Array.from(new Set(values.filter((value) => value.trim().length > 0)));
}

function buildCatalogProducts(): CatalogProduct[] {
  const grouped = new Map<number, RawWpSyncItem[]>();

  for (const item of rawItems) {
    const parentId =
      toNumber(item.wp_parent_id) ??
      toNumber(item.wp_product_id) ??
      toNumber(item.wp_variation_id);

    if (parentId === null) {
      continue;
    }

    const existing = grouped.get(parentId) ?? [];
    existing.push(item);
    grouped.set(parentId, existing);
  }

  return Array.from(grouped.entries()).map(([parentId, items]) => {
    const attributeKeys = uniqueStrings(
      items.flatMap((item) => Object.keys(item.attributes ?? {})),
    );
    const productTitle =
      items.find((item) => typeof item.product_title === "string" && item.product_title.trim().length > 0)?.product_title?.trim() ??
      items[0]?.title?.trim() ??
      baseProductById.get(parentId)?.title ??
      `Product ${parentId}`;
    const variants: ProductVariant[] = items.map((item, index) => {
      const variationId = toNumber(item.wp_variation_id) ?? parentId + index;

      return {
        id: variationId,
        parentId,
        title: item.title?.trim() || productTitle,
        price: normalizePrice(item.price, baseProductById.get(parentId)?.price ?? "0.00"),
        stockStatus: normalizeStockStatus(item.stock_status),
        sku: item.sku?.trim() || item.parent_sku?.trim() || String(variationId),
        imageUrl: buildImageUrl(item, parentId),
        attributes: item.attributes ?? {},
      };
    });
    const defaultVariant = variants.find((variant) => variant.stockStatus === "instock") ?? variants[0];
    const imageUrls = uniqueStrings(variants.map((variant) => variant.imageUrl));
    const categorySlugs = uniqueStrings(items.flatMap((item) => item.category_slugs ?? []));
    const categoryNames = uniqueStrings(items.flatMap(getRawCategoryNames));
    const attributeOptions = attributeKeys.map((name) => ({
      name,
      values: uniqueStrings(
        variants
          .map((variant) => variant.attributes[name])
          .filter((value): value is string => typeof value === "string"),
      ),
    }));
    const productType: CatalogProduct["productType"] =
      variants.length === 1 ? "simple" : attributeKeys.length > 1 ? "complex" : "standard";

    return {
      id: parentId,
      title: productTitle,
      price: defaultVariant?.price ?? normalizePrice(items[0]?.price),
      stockStatus: defaultVariant?.stockStatus ?? "instock",
      sku: defaultVariant?.sku ?? String(parentId),
      imageUrl: imageUrls[0] ?? fallbackImage,
      imageUrls: imageUrls.length > 0 ? imageUrls : [fallbackImage],
      href: getProductRoute(parentId),
      categorySlugs,
      categoryNames,
      productType,
      attributeKeys,
      attributeOptions,
      variants,
      defaultVariationId: defaultVariant?.id ?? parentId,
      description: buildDescription(items[0], productTitle, defaultVariant?.sku ?? String(parentId)),
      sourceUrl: items[0]?.source_url,
      wpPermalink: items[0]?.wp_permalink,
    };
  });
}

const catalogProducts = buildCatalogProducts();

export function humanizeCategoryLabel(value?: string) {
  if (!value) {
    return "Shop all";
  }

  return value
    .split("/")
    .filter(Boolean)
    .pop()
    ?.split("-")
    .map((segment) => (segment.length > 0 ? segment[0].toUpperCase() + segment.slice(1) : segment))
    .join(" ") ?? "Shop all";
}

export function getCatalogProducts(categorySlug?: string) {
  if (!categorySlug) {
    return catalogProducts;
  }

  return catalogProducts.filter((product) => product.categorySlugs.includes(categorySlug));
}

export function getCatalogPayload(categorySlug?: string): CatalogPayload {
  const products = getCatalogProducts(categorySlug);
  const categoryName = categorySlug
    ? getCategoryDisplayName(categorySlug)
    : undefined;

  return {
    categoryName,
    products,
  };
}

export function getCatalogProductById(id: number | string) {
  const numericId = toNumber(id);

  if (numericId === null) {
    return null;
  }

  return catalogProducts.find((product) => product.id === numericId) ?? null;
}

export function getCategoryNameBySlug(slug?: string) {
  return slug ? getCategoryDisplayName(slug) : undefined;
}
