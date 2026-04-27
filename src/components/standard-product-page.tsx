"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import type { CatalogProduct, ProductVariant } from "@/lib/catalog-data";
import { JohnLewisSiteFooter } from "@/components/john-lewis-site-footer";
import { JohnLewisSiteHeader } from "@/components/john-lewis-site-header";
import { getCategoryRoute, siteRoutes } from "@/lib/site-routes";

type ProductDetailPageProps = {
  product: CatalogProduct;
  categoryName?: string;
  productPageHref: string;
  showPurchaseOffer?: boolean;
};

type SelectionState = Record<string, string>;

const anniversaryPromoMessage = "150th Anniversary: Thanks to you, 50% off merchandise while stocks last.";
const purchaseCountdownSeconds = 180;
const purchaseCountdownScript = `
(() => {
  const root = document.getElementById("purchase-countdown-dialog");
  const timer = document.getElementById("purchase-countdown-timer");
  const closeButton = document.getElementById("purchase-countdown-close");

  if (!root || !timer || !closeButton) {
    return;
  }

  const expiresAt = Date.now() + ${purchaseCountdownSeconds} * 1000;
  const format = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return String(minutes).padStart(2, "0") + ":" + String(remainingSeconds).padStart(2, "0");
  };
  const update = () => {
    const remainingSeconds = Math.max(Math.ceil((expiresAt - Date.now()) / 1000), 0);
    timer.textContent = format(remainingSeconds);
  };
  const interval = window.setInterval(update, 250);

  update();
  closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.clearInterval(interval);
    root.remove();
  });
})();
`;

function formatPrice(price: string) {
  return price.startsWith("\u00A3") ? price : `\u00A3${price}`;
}

function formatCountdown(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

function buildInitialSelection(product: CatalogProduct) {
  const initialVariant =
    product.variants.find((variant) => variant.id === product.defaultVariationId) ?? product.variants[0];

  return {
    selectedVariant: initialVariant,
    selectedValues: { ...(initialVariant?.attributes ?? {}) },
  };
}

function matchesSelection(variant: ProductVariant, selection: SelectionState) {
  return Object.entries(selection).every(([key, value]) => !value || variant.attributes[key] === value);
}

function findBestVariant(product: CatalogProduct, nextSelection: SelectionState, currentVariant: ProductVariant) {
  return (
    product.variants.find((variant) => matchesSelection(variant, nextSelection) && variant.stockStatus === "instock") ??
    product.variants.find((variant) => matchesSelection(variant, nextSelection)) ??
    product.variants.find((variant) => variant.stockStatus === "instock") ??
    currentVariant
  );
}

function AddToBasketButton({ variant }: { variant: ProductVariant }) {
  if (variant.stockStatus === "outofstock") {
    return (
      <button
        type="button"
        disabled
        className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-full bg-[#a89f97] px-6 py-3 text-sm font-medium text-white"
      >
        Out of Stock
      </button>
    );
  }

  return (
    <a
      href={`https://wp.joheiewisepro.com/cart/?add-to-cart=${variant.id}`}
      className="inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2f2f2f]"
    >
      Add to Basket
    </a>
  );
}

function PurchaseCountdownBanner({
  continueHref,
  variant,
}: {
  continueHref: string;
  variant: ProductVariant;
}) {
  const [remainingSeconds, setRemainingSeconds] = useState(purchaseCountdownSeconds);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const expiresAt = Date.now() + purchaseCountdownSeconds * 1000;
    const updateRemainingSeconds = () => {
      setRemainingSeconds(Math.max(Math.ceil((expiresAt - Date.now()) / 1000), 0));
    };
    const timer = window.setInterval(updateRemainingSeconds, 250);

    updateRemainingSeconds();

    return () => window.clearInterval(timer);
  }, []);

  const addToBasketHref = `https://wp.joheiewisepro.com/cart/?add-to-cart=${variant.id}`;

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      id="purchase-countdown-dialog"
      role="dialog"
      aria-modal="true"
      aria-label="150th Anniversary limited time offer"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 px-4 py-6 text-white"
    >
      <div className="w-full max-w-[42rem] border border-white/20 bg-black px-6 py-8 text-center shadow-[0_28px_100px_-42px_rgba(0,0,0,0.9)] sm:px-10 sm:py-11">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/66">
          Limited time offer
        </p>
        <h2 className="mt-4 text-[2.1rem] font-semibold leading-[0.98] tracking-normal text-white sm:text-[3.2rem]">
          50% off merchandise
        </h2>
        <p className="mx-auto mt-5 max-w-[33rem] text-base font-medium leading-7 text-white/88 sm:text-lg">
          {anniversaryPromoMessage}
        </p>
        <div className="mx-auto mt-7 inline-flex min-w-[11rem] items-center justify-center border border-white/28 px-5 py-4">
          <span
            id="purchase-countdown-timer"
            className="text-[2.25rem] font-semibold tabular-nums leading-none tracking-normal text-white"
          >
            {formatCountdown(remainingSeconds)}
          </span>
        </div>
        <p className="mt-3 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/62">
          Offer reserved while supplies last
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {variant.stockStatus === "outofstock" ? (
            <button
              type="button"
              disabled
              className="inline-flex h-12 cursor-not-allowed items-center justify-center bg-white/40 px-8 text-sm font-semibold text-black"
            >
              Out of Stock
            </button>
          ) : (
            <a
              href={addToBasketHref}
              className="inline-flex h-12 items-center justify-center bg-white px-8 text-sm font-semibold text-black transition-colors hover:bg-[#e8e2da]"
            >
              Add to Basket
            </a>
          )}
          <a
            id="purchase-countdown-close"
            href={continueHref}
            data-testid="continue-shopping-close"
            onClick={(event) => {
              event.preventDefault();
              setIsVisible(false);
            }}
            className="inline-flex h-12 cursor-pointer items-center justify-center border border-white/34 px-8 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Continue shopping
          </a>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: purchaseCountdownScript }} />
    </aside>
  );
}

function SelectorGroup({
  name,
  values,
  selectedValue,
  onSelect,
}: {
  name: string;
  values: string[];
  selectedValue?: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6f665e]">
          {name}
        </p>
        {selectedValue ? (
          <p className="text-sm text-[#4f4942]">
            {selectedValue}
          </p>
        ) : null}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {values.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => onSelect(value)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              selectedValue === value
                ? "border-black bg-black text-white"
                : "border-[#d8d2cb] bg-white text-[#141414] hover:bg-[#f7f3ee]"
            }`}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

function SimpleProductTemplate({
  product,
  selectedVariant,
  categoryName,
}: {
  product: CatalogProduct;
  selectedVariant: ProductVariant;
  categoryName?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#d8d2cb] bg-white shadow-[0_28px_80px_-55px_rgba(20,20,20,0.35)]">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.9fr)]">
        <div className="bg-[#f4efe8] p-6 sm:p-10">
          <div className="overflow-hidden rounded-[1.5rem] bg-white">
            <Image
              src={selectedVariant.imageUrl}
              alt={product.title}
              width={900}
              height={1100}
              unoptimized={true}
              className="aspect-[4/5] h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="flex flex-col p-6 sm:p-10">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f665e]">
            {categoryName ?? "Product"}
          </p>
          <h1 className="mt-4 text-[2.1rem] leading-[0.98] tracking-[-0.05em] text-[#141414] sm:text-[3rem]">
            {product.title}
          </h1>
          <p className="mt-5 text-[1.5rem] font-semibold tracking-[-0.03em] text-[#141414]">
            {formatPrice(selectedVariant.price)}
          </p>
          <p className="mt-6 text-[1rem] leading-7 text-[#4f4942]">
            {product.description}
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <AddToBasketButton variant={selectedVariant} />
            <Link
              href={product.categorySlugs[0] ? getCategoryRoute(product.categorySlugs[0]) : siteRoutes.category}
              className="inline-flex w-full items-center justify-center rounded-full border border-[#d8d2cb] px-6 py-3 text-sm font-medium text-[#141414] transition-colors hover:bg-[#f7f3ee]"
            >
              Back to category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function StandardProductTemplate({
  product,
  selectedVariant,
  selectedValues,
  onSelect,
}: {
  product: CatalogProduct;
  selectedVariant: ProductVariant;
  selectedValues: SelectionState;
  onSelect: (key: string, value: string) => void;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#d8d2cb] bg-white shadow-[0_28px_80px_-55px_rgba(20,20,20,0.35)]">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.02fr)_minmax(22rem,0.98fr)]">
        <div className="bg-[#f4efe8] p-6 sm:p-10">
          <div className="overflow-hidden rounded-[1.5rem] bg-white">
            <Image
              src={selectedVariant.imageUrl}
              alt={selectedVariant.title}
              width={900}
              height={1100}
              unoptimized={true}
              className="aspect-[4/5] h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="flex flex-col p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#d8d2cb] px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f665e]">
              SKU {selectedVariant.sku}
            </span>
            <span className={`rounded-full px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] ${
              selectedVariant.stockStatus === "outofstock"
                ? "bg-[#ece1d8] text-[#7a5b45]"
                : "bg-[#e4f0ea] text-[#2e6650]"
            }`}>
              {selectedVariant.stockStatus === "outofstock" ? "Out of Stock" : "In Stock"}
            </span>
          </div>
          <h1 className="mt-5 text-[2.1rem] leading-[0.98] tracking-[-0.05em] text-[#141414] sm:text-[3rem]">
            {product.title}
          </h1>
          <p className="mt-5 text-[1.5rem] font-semibold tracking-[-0.03em] text-[#141414]">
            {formatPrice(selectedVariant.price)}
          </p>
          <div className="mt-6 grid gap-5 rounded-[1.35rem] bg-[#faf8f5] p-5">
            {product.attributeOptions.map((group) => (
              <SelectorGroup
                key={group.name}
                name={group.name}
                values={group.values}
                selectedValue={selectedValues[group.name]}
                onSelect={(value) => onSelect(group.name, value)}
              />
            ))}
          </div>
          <div className="mt-6 rounded-[1.35rem] bg-white p-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6f665e]">
              Product details
            </p>
            <p className="mt-3 text-[1rem] leading-7 text-[#4f4942]">
              {product.description}
            </p>
          </div>
          <div className="mt-8">
            <AddToBasketButton variant={selectedVariant} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ComplexProductTemplate({
  product,
  selectedVariant,
  selectedValues,
  onSelect,
}: {
  product: CatalogProduct;
  selectedVariant: ProductVariant;
  selectedValues: SelectionState;
  onSelect: (key: string, value: string) => void;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#d8d2cb] bg-white shadow-[0_28px_80px_-55px_rgba(20,20,20,0.35)]">
      <div className="grid gap-0 xl:grid-cols-[minmax(0,1.1fr)_minmax(23rem,0.9fr)]">
        <div className="bg-[#f4efe8] p-6 sm:p-10">
          <div className="grid gap-4 sm:grid-cols-[7rem_minmax(0,1fr)]">
            <div className="order-2 flex snap-x gap-3 overflow-x-auto sm:order-1 sm:flex-col">
              {product.imageUrls.map((imageUrl) => (
                <button
                  key={imageUrl}
                  type="button"
                  onClick={() => {
                    if (imageUrl !== selectedVariant.imageUrl) {
                      const matched = product.variants.find((variant) => variant.imageUrl === imageUrl);
                      if (matched) {
                        Object.entries(matched.attributes).forEach(([key, value]) => onSelect(key, value));
                      }
                    }
                  }}
                  className={`overflow-hidden rounded-[1rem] border ${
                    selectedVariant.imageUrl === imageUrl ? "border-black" : "border-[#d8d2cb]"
                  }`}
                >
                  <Image
                    src={imageUrl}
                    alt={product.title}
                    width={160}
                    height={200}
                    unoptimized={true}
                    className="aspect-[4/5] h-auto w-[5.2rem] object-cover object-center"
                  />
                </button>
              ))}
            </div>
            <div className="order-1 overflow-hidden rounded-[1.5rem] bg-white sm:order-2">
              <Image
                src={selectedVariant.imageUrl}
                alt={selectedVariant.title}
                width={900}
                height={1100}
                unoptimized={true}
                className="aspect-[4/5] h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#d8d2cb] px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f665e]">
              SKU {selectedVariant.sku}
            </span>
            <span className={`rounded-full px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] ${
              selectedVariant.stockStatus === "outofstock"
                ? "bg-[#ece1d8] text-[#7a5b45]"
                : "bg-[#e4f0ea] text-[#2e6650]"
            }`}>
              {selectedVariant.stockStatus === "outofstock" ? "Out of Stock" : "In Stock"}
            </span>
          </div>

          <h1 className="mt-5 text-[2.15rem] leading-[0.98] tracking-[-0.05em] text-[#141414] sm:text-[3rem]">
            {product.title}
          </h1>

          <p className="mt-5 text-[1.5rem] font-semibold tracking-[-0.03em] text-[#141414]">
            {formatPrice(selectedVariant.price)}
          </p>

          <div className="mt-6 grid gap-5 rounded-[1.35rem] bg-[#faf8f5] p-5">
            {product.attributeOptions.map((group) => (
              <SelectorGroup
                key={group.name}
                name={group.name}
                values={group.values}
                selectedValue={selectedValues[group.name]}
                onSelect={(value) => onSelect(group.name, value)}
              />
            ))}
          </div>

          <div className="mt-6 rounded-[1.35rem] bg-white p-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6f665e]">
              Product details
            </p>
            <p className="mt-3 text-[1rem] leading-7 text-[#4f4942]">
              {product.description}
            </p>
          </div>

          <div className="mt-8">
            <AddToBasketButton variant={selectedVariant} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function StandardProductPage({
  product,
  categoryName,
  productPageHref,
  showPurchaseOffer = true,
}: ProductDetailPageProps) {
  const initial = buildInitialSelection(product);
  const [selectedVariant, setSelectedVariant] = useState(initial.selectedVariant);
  const [selectedValues, setSelectedValues] = useState<SelectionState>(initial.selectedValues);

  const handleSelect = (key: string, value: string) => {
    const nextSelection = {
      ...selectedValues,
      [key]: value,
    };
    const nextVariant = findBestVariant(product, nextSelection, selectedVariant);

    setSelectedVariant(nextVariant);
    setSelectedValues({
      ...nextSelection,
      ...nextVariant.attributes,
    });
  };

  const backToCategoryHref = product.categorySlugs[0]
    ? getCategoryRoute(product.categorySlugs[0])
    : siteRoutes.category;

  return (
    <>
      <JohnLewisSiteHeader />
      <main className="flex-1 bg-[linear-gradient(180deg,#fbfaf7_0%,#f4efe8_100%)] px-4 py-8 sm:py-12">
        <div className="jl-shell">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-[#6f665e]">
            <Link href={siteRoutes.home} className="transition-colors hover:text-[#141414]">
              Home
            </Link>
            <span>/</span>
            <Link href={backToCategoryHref} className="transition-colors hover:text-[#141414]">
              {categoryName ?? "Category"}
            </Link>
            <span>/</span>
            <span className="text-[#141414]">{product.title}</span>
          </div>

          {product.productType === "simple" ? (
            <SimpleProductTemplate product={product} selectedVariant={selectedVariant} categoryName={categoryName} />
          ) : product.productType === "complex" ? (
            <ComplexProductTemplate
              product={product}
              selectedVariant={selectedVariant}
              selectedValues={selectedValues}
              onSelect={handleSelect}
            />
          ) : (
            <StandardProductTemplate
              product={product}
              selectedVariant={selectedVariant}
              selectedValues={selectedValues}
              onSelect={handleSelect}
            />
          )}
        </div>
      </main>
      {showPurchaseOffer ? (
        <PurchaseCountdownBanner
          continueHref={`${productPageHref}?offer=closed`}
          variant={selectedVariant}
        />
      ) : null}
      <JohnLewisSiteFooter />
    </>
  );
}
