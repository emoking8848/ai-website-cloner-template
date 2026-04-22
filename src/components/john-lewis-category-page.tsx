import Image from "next/image";

import { JohnLewisSiteFooter } from "@/components/john-lewis-site-footer";
import { JohnLewisSiteHeader } from "@/components/john-lewis-site-header";
import productsData from "@/data/products.json";
import wpSyncSeedData from "@/data/wp_sync_result.json";

type BaseCategoryProduct = {
  id: number;
  title: string;
  price: string;
  image_urls: string[];
};

type WpSyncRecord = {
  id?: number | string;
  product_id?: number | string;
  source_product_id?: number | string;
  title?: string;
  price?: number | string;
  image_urls?: string[];
  image_url?: string;
  stock_status?: string;
  wp_variation_id?: number | string | null;
};

type CategoryProduct = BaseCategoryProduct & {
  stock_status: "instock" | "outofstock";
  wp_variation_id: number | null;
};

const baseProducts: BaseCategoryProduct[] = productsData;

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

function normalizeStockStatus(value: string | undefined) {
  return value?.toLowerCase() === "outofstock" ? "outofstock" : "instock";
}

function normalizeImageUrls(syncRecord: WpSyncRecord | undefined, fallbackImages: string[]) {
  if (Array.isArray(syncRecord?.image_urls) && syncRecord.image_urls.length > 0) {
    return syncRecord.image_urls;
  }

  if (typeof syncRecord?.image_url === "string" && syncRecord.image_url.length > 0) {
    return [syncRecord.image_url];
  }

  return fallbackImages;
}

function extractSyncArray(payload: unknown): WpSyncRecord[] {
  if (Array.isArray(payload)) {
    return payload as WpSyncRecord[];
  }

  if (payload && typeof payload === "object") {
    const record = payload as Record<string, unknown>;

    if (Array.isArray(record.results)) {
      return record.results as WpSyncRecord[];
    }

    if (Array.isArray(record.products)) {
      return record.products as WpSyncRecord[];
    }
  }

  return [];
}

const wpSyncResults = extractSyncArray(wpSyncSeedData);
const wpSyncByProductId = new Map<number, WpSyncRecord>();

for (const record of wpSyncResults) {
  const sourceProductId = toNumber(record.source_product_id ?? record.product_id ?? record.id);

  if (sourceProductId !== null) {
    wpSyncByProductId.set(sourceProductId, record);
  }
}

const products: CategoryProduct[] = baseProducts.map((product) => {
  const syncRecord = wpSyncByProductId.get(product.id);
  const wpVariationId = toNumber(syncRecord?.wp_variation_id) ?? product.id;

  return {
    ...product,
    image_urls: normalizeImageUrls(syncRecord, product.image_urls),
    price: typeof syncRecord?.price === "string" || typeof syncRecord?.price === "number"
      ? String(syncRecord.price)
      : product.price,
    stock_status: normalizeStockStatus(syncRecord?.stock_status),
    title: syncRecord?.title ?? product.title,
    wp_variation_id: wpVariationId,
  };
});

function formatPrice(price: string) {
  return price.startsWith("\u00A3") ? price : `\u00A3${price}`;
}

export function JohnLewisCategoryPage() {
  return (
    <>
      <JohnLewisSiteHeader />
      <main className="flex-1 bg-[linear-gradient(180deg,#fbfaf7_0%,#f4efe8_100%)]">
        <section className="border-b border-[#ece7df] bg-white/80 px-4 py-10 backdrop-blur-sm sm:py-14">
          <div className="jl-shell">
            <p className="jl-eyebrow text-[#6f665e]">Category edit</p>
            <h1 className="mt-4 max-w-[14ch] text-[2.35rem] leading-[0.94] tracking-[-0.05em] text-[#141414] sm:text-[3.4rem]">
              Local JSON driven product grid
            </h1>
            <p className="mt-4 max-w-[44rem] text-[1rem] leading-7 text-[#5d5750] sm:text-[1.05rem]">
              This category page now reads product cards from a local JSON file instead of hard-coded
              JSX blocks, so future refreshes only need updated data and images.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#5d5750]">
              <span className="rounded-full border border-[#d8d2cb] bg-white px-4 py-2">
                {products.length} products
              </span>
              <span className="rounded-full border border-[#d8d2cb] bg-white px-4 py-2">
                Source: <code>products.json + wp_sync_result.json</code>
              </span>
              <span className="rounded-full border border-[#d8d2cb] bg-white px-4 py-2">
                Images: <code>public/images/category</code>
              </span>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:py-14">
          <div className="jl-shell">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {products.map((product) => (
                <article
                  key={product.id}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-[#d8d2cb] bg-white shadow-[0_24px_60px_-45px_rgba(20,20,20,0.42)] transition-transform duration-200 hover:-translate-y-1 ${
                    product.stock_status === "outofstock" ? "grayscale opacity-50" : ""
                  }`}
                >
                  <div className="block overflow-hidden bg-[#f4efe8]">
                    <div className="aspect-[4/5] bg-[#f4efe8] group-hover:opacity-90">
                      <Image
                        src={product.image_urls[0]}
                        alt={product.title}
                        width={400}
                        height={500}
                        unoptimized={true}
                        className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col space-y-3 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#8a8178]">
                        WP ID {product.id}
                      </p>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] ${
                          product.stock_status === "outofstock"
                            ? "bg-[#e7ddd4] text-[#7a5b45]"
                            : "bg-[#e4f0ea] text-[#2e6650]"
                        }`}
                      >
                        {product.stock_status === "outofstock" ? "Out of Stock" : "In Stock"}
                      </span>
                    </div>
                    <h2 className="min-h-[3rem] text-sm font-medium leading-6 text-[#141414]">
                      {product.title}
                    </h2>
                    <p className="text-base font-semibold text-[#141414]">
                      {formatPrice(product.price)}
                    </p>

                    {product.stock_status === "outofstock" ? (
                      <button
                        type="button"
                        disabled
                        className="mt-auto inline-flex w-full cursor-not-allowed items-center justify-center rounded-full border border-transparent bg-[#a89f97] px-4 py-2 text-sm font-medium text-white"
                      >
                        Out of Stock
                      </button>
                    ) : (
                      <a
                        href={`https://wp.joheiewisepro.com/cart/?add-to-cart=${product.wp_variation_id}`}
                        className="mt-auto inline-flex w-full items-center justify-center rounded-full border border-transparent bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2f2f2f]"
                      >
                        Add to Basket
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <JohnLewisSiteFooter />
    </>
  );
}
