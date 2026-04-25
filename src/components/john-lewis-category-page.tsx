import Image from "next/image";
import Link from "next/link";

import { getCatalogPayload, getCategoryNameBySlug, humanizeCategoryLabel } from "@/lib/catalog-data";
import { JohnLewisSiteFooter } from "@/components/john-lewis-site-footer";
import { JohnLewisSiteHeader } from "@/components/john-lewis-site-header";

type JohnLewisCategoryPageProps = {
  categoryPath?: string[];
};

function formatPrice(price: string) {
  return price.startsWith("\u00A3") ? price : `\u00A3${price}`;
}

export function JohnLewisCategoryPage({ categoryPath }: JohnLewisCategoryPageProps) {
  const activeCategorySlug = categoryPath?.at(-1);
  const fallbackCategoryName = activeCategorySlug
    ? getCategoryNameBySlug(activeCategorySlug) ?? humanizeCategoryLabel(activeCategorySlug)
    : "Shop all";
  const { categoryName, products } = getCatalogPayload(activeCategorySlug);
  const heading = categoryName ?? fallbackCategoryName;

  return (
    <>
      <JohnLewisSiteHeader />
      <main className="flex-1 bg-[linear-gradient(180deg,#fbfaf7_0%,#f4efe8_100%)]">
        <section className="border-b border-[#ece7df] bg-white/80 px-4 py-10 backdrop-blur-sm sm:py-14">
          <div className="jl-shell">
            <p className="jl-eyebrow text-[#6f665e]">Joheiewisepro edit</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="max-w-[18ch] text-[2.35rem] leading-[0.94] tracking-[-0.05em] text-[#141414] sm:text-[3.4rem]">
                  {heading}
                </h1>
                <p className="mt-3 text-sm leading-7 text-[#5d5750] sm:text-base">
                  {products.length} products available in this category.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:py-14">
          <div className="jl-shell">
            <div className="grid auto-rows-fr grid-cols-2 items-stretch gap-6 md:grid-cols-4">
              {products.map((product) => (
                <article
                  key={product.id}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-[#d8d2cb] bg-white shadow-[0_24px_60px_-45px_rgba(20,20,20,0.42)] transition-transform duration-200 hover:-translate-y-1 ${
                    product.stockStatus === "outofstock" ? "grayscale opacity-50" : ""
                  }`}
                >
                  <a
                    href={product.wpPermalink ?? product.href}
                    className="block overflow-hidden bg-[#f4efe8]"
                    aria-label={`Open ${product.title}`}
                  >
                    <div className="aspect-[3/4] w-full overflow-hidden bg-[#f4efe8] group-hover:opacity-90">
                      <Image
                        src={product.imageUrl}
                        alt={product.title}
                        width={400}
                        height={500}
                        unoptimized={true}
                        className="block h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  </a>

                  <div className="flex flex-1 flex-col space-y-3 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#8a8178]">
                        SKU {product.sku}
                      </p>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] ${
                          product.stockStatus === "outofstock"
                            ? "bg-[#e7ddd4] text-[#7a5b45]"
                            : "bg-[#e4f0ea] text-[#2e6650]"
                        }`}
                      >
                        {product.stockStatus === "outofstock" ? "Out of Stock" : "In Stock"}
                      </span>
                    </div>

                    <a href={product.wpPermalink ?? product.href} className="block">
                      <h2 className="h-[4.5rem] overflow-hidden text-sm font-medium leading-6 text-[#141414] transition-colors hover:text-[#5d5750]">
                        {product.title}
                      </h2>
                    </a>

                    <p className="mt-auto text-base font-semibold text-[#141414]">
                      {formatPrice(product.price)}
                    </p>

                    <a
                      href={product.wpPermalink ?? product.href}
                      className="mt-auto inline-flex w-full items-center justify-center rounded-full border border-transparent bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2f2f2f]"
                    >
                      Flash Sale - 50% OFF
                    </a>
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
