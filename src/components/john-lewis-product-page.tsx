"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Eye,
  Heart,
  MapPin,
  Menu,
  Plus,
  RotateCcw,
  Search,
  ShoppingBasket,
  Star,
  Store,
  Truck,
  User,
} from "lucide-react";

import { SiteLink } from "@/components/site-link";
import { shouldHideHeading, shouldHideLabel, siteRoutes } from "@/lib/site-routes";

type UtilityNavItem = {
  label: string;
  href: string;
  chevron?: boolean;
  underlined?: boolean;
};

type Swatch = {
  label: string;
  color: string;
};

type DeliveryLine = {
  label: string;
  icon: "collect" | "delivery" | "returns";
};

type Specification = {
  label: string;
  value: string;
};

type DeliveryOption = {
  title: string;
  price: string;
  description: string;
};

type RelatedProduct = {
  brand: string;
  title: string;
  image?: string;
  price: string;
  salePrice?: string;
  reviews?: number;
  rating?: number;
  swatches?: string[];
  promo?: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "pinterest" | "youtube" | "tiktok" | "x";
};

type FooterColumn = {
  heading: string;
  items: string[];
};

const utilityLinks: UtilityNavItem[] = [
  { label: "My Joheiewisepro", href: "#", underlined: true },
  { label: "Ways to shop", href: "#", chevron: true },
  { label: "Help", href: "#", chevron: true },
  { label: "Joheiewisepro Money", href: "#", chevron: true },
  { label: "Our stores", href: "#", underlined: true },
];

const departmentLinks = [
  "Women",
  "Men",
  "Home & Garden",
  "Furniture & Lights",
  "Electricals",
  "Baby & Kids",
  "Beauty",
  "Sports & Fitness",
  "Holiday Shop",
  "Gifts",
  "Brands",
  "Sale & Offers",
];

const breadcrumbs = ["Homepage", "Women", "Tights", "Shop all Joheiewisepro"];

const galleryImages = [
  {
    alt: "Product image 1 of 3, which shows Joheiewisepro 60 Denier Velvet Touch Tights, Black, S",
    src: "https://media.johnlewiscontent.com/i/JohnLewis/010270729?fmt=auto&$background-off-white$",
  },
  {
    alt: "Product image 2 of 3, which shows Joheiewisepro 60 Denier Velvet Touch Tights, Black, S",
    src: "https://media.johnlewiscontent.com/i/JohnLewis/010270729alt1?fmt=auto&$background-off-white$",
  },
  {
    alt: "Product image 3 of 3, which shows Joheiewisepro 60 Denier Velvet Touch Tights, Black, S",
    src: "https://media.johnlewiscontent.com/i/JohnLewis/010270729alt2?fmt=auto&$background-off-white$",
  },
];

const swatches: Swatch[] = [
  { label: "Black", color: "#262626" },
  { label: "Navy", color: "#3d3d57" },
  { label: "Teal", color: "#0d8b88" },
  { label: "Brown", color: "#5b3d34" },
  { label: "Green", color: "#0f6f57" },
  { label: "Grey", color: "#5f635a" },
  { label: "Purple", color: "#59486a" },
  { label: "Claret", color: "#7d2e31" },
  { label: "Red", color: "#8d2534" },
];

const sizes = ["S", "M", "L", "XL"];

const deliveryLines: DeliveryLine[] = [
  { label: "Free click & collect over £40, otherwise £2.95", icon: "collect" },
  { label: "Free standard delivery over £50, otherwise from £4.50", icon: "delivery" },
  { label: "Free returns", icon: "returns" },
];

const specifications: Specification[] = [
  { label: "Brand", value: "Joheiewisepro" },
  { label: "Care instructions", value: "Machine wash at 40 degrees delicate / Wash with similar colours" },
  { label: "Composition", value: "84% nylon, 15% elastane, 1% cotton" },
  { label: "Country of origin", value: "Italy" },
  { label: "Denier", value: "60" },
  { label: "Drying instructions", value: "Do not tumble dry" },
  { label: "Finish", value: "Matte" },
  { label: "Hosiery finish", value: "Matte" },
  { label: "Hosiery type", value: "Opaque Tights" },
  { label: "Iron", value: "Do not iron" },
  { label: "Single or multipack", value: "Single" },
  { label: "Washing instructions", value: "Do Not Use Bleach, Machine Washable at 40°C" },
];

const deliveryOptions: DeliveryOption[] = [
  {
    title: "Standard Delivery",
    price: "£4.50",
    description: "UK delivery within 2 to 5 days, 8am - 8pm, Monday to Saturday. Free on orders over £50, otherwise £4.50.",
  },
  {
    title: "Click & Collect",
    price: "£2.95",
    description: "Free on orders over £40, £2.95 if you spend less. Choose a collection day at checkout, next day available at some locations. Available at Waitrose, selected Joheiewisepro shops and Booths stores.",
  },
  {
    title: "Local Collection Network",
    price: "£2.95",
    description: "Free on orders over £40, £2.95 if you spend less. Collect your delivery from thousands of local convenience shops. Your next available collection day will show at checkout.",
  },
  {
    title: "Evening Delivery within London M25",
    price: "£9.95",
    description: "Order before 10am to get same day evening delivery within London M25. Available 7 days a week, delivery between 6 - 11pm on a day of your choice. We'll text you a 1-hour delivery window on the day. Delivered by 100% electric vehicles.",
  },
  {
    title: "Next or Named Day Delivery",
    price: "£7.95",
    description: "Delivery on the day of your choice, 8am - 8pm, 7 days a week. You'll receive a text on the morning of delivery with a 1-hour delivery window.",
  },
  {
    title: "Morning Delivery",
    price: "£10.95",
    description: "Delivery on the day of your choice, by 11.30am available 7 days a week.",
  },
];

const alsoViewed: RelatedProduct[] = [
  {
    brand: "Charnos",
    title: "60 Denier Tights",
    image: "https://media.johnlewiscontent.com/i/JohnLewis/006441390?fmt=auto&$background-off-white$&wid=480&hei=640",
    price: "£8.00",
    reviews: 38,
    rating: 4.8,
    swatches: ["#292929", "#4d5061", "#6a6c70", "#8e8e8e", "#b29d82"],
  },
  {
    brand: "Joheiewisepro ANYDAY",
    title: "40 Denier Opaque Tights, Pack of 3",
    image: "https://media.johnlewiscontent.com/i/JohnLewis/010270715?fmt=auto&$background-off-white$&wid=480&hei=640",
    price: "£8.50",
    reviews: 92,
    rating: 4.5,
    swatches: ["#222222", "#4a5779"],
  },
  {
    brand: "Joheiewisepro",
    title: "100 Denier Premium Cotton Rich Tights, Black",
    image: "https://media.johnlewiscontent.com/i/JohnLewis/010270696?fmt=auto&$background-off-white$&wid=480&hei=640",
    price: "£10.00",
    reviews: 53,
    rating: 4.3,
    swatches: ["#242424", "#46506e", "#7a7f7a"],
  },
  {
    brand: "White Stuff",
    title: "Patty Organic Cotton Blend Opaque Tights",
    image: "https://media.johnlewiscontent.com/i/JohnLewis/008580192?fmt=auto&$background-off-white$&wid=480&hei=640",
    price: "£15.00",
    salePrice: "£12.00",
    reviews: 6,
    rating: 4,
    swatches: ["#5b5d64", "#6c7191", "#593f59"],
    promo: "Save 20% on selected products",
  },
  {
    brand: "Charnos",
    title: "60 Denier Matte Tights, Fuchsia",
    image: "https://media.johnlewiscontent.com/i/JohnLewis/008874194?fmt=auto&$background-off-white$&wid=480&hei=640",
    price: "£7.00",
    reviews: 10,
    rating: 4.9,
  },
];

const alsoBought: RelatedProduct[] = [
  {
    brand: "Charnos",
    title: "80 Denier Opaque Tights, Black",
    price: "£10.00",
    reviews: 9,
    rating: 4.9,
  },
  {
    brand: "Joheiewisepro",
    title: "100 Denier Matte Finish Bodyshaper Tights, Black",
    price: "£12.00",
    reviews: 22,
    rating: 4.5,
  },
  {
    brand: "Charnos",
    title: "40 Denier Sheer Tights, Pack of 2",
    price: "£6.50",
    reviews: 20,
    rating: 4,
    swatches: ["#d7c7bb", "#111111"],
  },
  {
    brand: "Charnos",
    title: "Extra Fine Cotton Blend Tights",
    price: "£12.00",
    swatches: ["#151515", "#7a7a7a", "#e0dfdc"],
  },
  {
    brand: "Charnos",
    title: "120 Denier Opaque Tights, Black",
    price: "£12.00",
    reviews: 7,
    rating: 4.9,
  },
];

const footerColumns: FooterColumn[] = [
  {
    heading: "Help",
    items: ["Contact us", "Customer services", "Product support", "Our shops", "Price promise"],
  },
  {
    heading: "Delivery",
    items: ["Delivery & collection", "Track your order", "Returns & refunds"],
  },
  {
    heading: "Shopping",
    items: ["Gift Cards & vouchers", "Services", "Buying guides", "My Joheiewisepro", "Basket", "Wish List", "Brands A-Z", "Inspiration", "Offers", "Events"],
  },
  {
    heading: "More from us",
    items: ["Jobs", "About the Joheiewisepro Partnership", "Joheiewisepro for Business", "Happier futures", "Protect+"],
  },
  {
    heading: "Joheiewisepro Money",
    items: ["Payment plans", "Partnership Credit Card", "Travel money", "Home insurance", "Pet insurance", "Car insurance", "Loans"],
  },
  {
    heading: "Terms",
    items: ["Terms and conditions", "Secure shopping", "Product recalls and safety notices", "Modern slavery statement", "Privacy notice", "Cookies", "Sustainability", "Accessibility", "Reviews policy"],
  },
];

const footerTerms = [
  "Terms and conditions",
  "Secure shopping",
  "Product recalls and safety notices",
  "Modern slavery statement",
  "Privacy notice",
  "Cookies",
  "Sustainability",
  "Accessibility",
  "Reviews policy",
];

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "X", href: "https://x.com/jlandpartners", icon: "x" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "Pinterest", href: "#", icon: "pinterest" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "TikTok", href: "#", icon: "tiktok" },
];

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  switch (icon) {
    case "facebook":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M13.5 21v-7h2.8l.5-3h-3.3V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.4-.1-1.4-.2-2.4-.2-2.3 0-3.9 1.4-3.9 4V11H8v3h2.7v7h2.8Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "pinterest":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M12.2 3C7.4 3 5 6.4 5 10c0 2.2.8 4.1 2.7 4.8.3.1.5 0 .6-.2l.5-1.9c.1-.2 0-.4-.2-.6-.5-.6-.8-1.4-.8-2.5 0-3.2 2.4-6.1 6.2-6.1 3.4 0 5.2 2.1 5.2 4.9 0 3.7-1.6 6.8-4.1 6.8-1.3 0-2.2-1.1-1.9-2.4.4-1.5 1.1-3 1.1-4 0-.9-.5-1.7-1.6-1.7-1.2 0-2.2 1.3-2.2 3 0 1.1.4 1.9.4 1.9l-1.5 6.2c-.4 1.8-.1 4 .1 5 .1.3.4.4.6.1.3-.4 1.2-1.8 1.6-3.5.1-.5.7-2.6.7-2.6.4.8 1.5 1.5 2.7 1.5 3.6 0 6-3.3 6-7.7C21 6.1 17.6 3 12.2 3Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M21.6 7.8a2.8 2.8 0 0 0-2-2C17.9 5.3 12 5.3 12 5.3s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2A29.2 29.2 0 0 0 2 12a29.2 29.2 0 0 0 .4 4.2 2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2A29.2 29.2 0 0 0 22 12a29.2 29.2 0 0 0-.4-4.2ZM10 15.2V8.8l5.5 3.2Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M14.5 3h2.5c.1 1 .5 2 1.2 2.7.7.7 1.7 1.2 2.8 1.3v2.6a7.1 7.1 0 0 1-4-1.2v6.1c0 3.1-2.5 5.5-5.6 5.5A5.5 5.5 0 0 1 6 14.5C6 11.4 8.4 9 11.4 9c.4 0 .8 0 1.1.1v2.7a2.7 2.7 0 0 0-1.1-.2 2.9 2.9 0 1 0 2.9 2.9V3Z" />
        </svg>
      );
    case "x":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M18.9 4H21l-6.2 7.1L22 20h-5.7l-4.5-5.8L6.7 20H4.5l6.7-7.7L4 4h5.8l4 5.2L18.9 4Zm-2 14.3h1.2L8.6 5.6H7.3Z" />
        </svg>
      );
  }
}

function RatingStars({ rating, reviews }: { rating: number; reviews: number }) {
  const filledStars = Math.round(rating);

  return (
    <div className="flex items-center gap-2.5 text-[#141414]">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-[0.95rem] w-[0.95rem] ${index < filledStars ? "fill-current text-[#141414]" : "fill-transparent text-[#bdb8b1]"}`}
          />
        ))}
      </div>
      <a href="#reviews" className="border-b border-[#141414] pb-px text-[1rem] leading-none">
        {reviews} Reviews
      </a>
    </div>
  );
}

function PricePromise() {
  return (
    <div className="inline-flex items-center gap-2 text-[1.05rem] text-[#2c2c2c]">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#b6da4a] text-[#141414]">
        <Check className="h-4 w-4" strokeWidth={2.4} />
      </span>
      <span>Price promise</span>
      <CircleHelp className="h-5 w-5" strokeWidth={1.8} />
    </div>
  );
}

function MiniSwatches({ swatches: miniSwatches }: { swatches?: string[] }) {
  if (!miniSwatches?.length) {
    return null;
  }

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      {miniSwatches.map((swatch, index) => (
        <span
          key={`${swatch}-${index}`}
          className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#beb8b1] bg-white p-[2px]"
        >
          <span className="h-full w-full rounded-full" style={{ backgroundColor: swatch }} />
        </span>
      ))}
    </div>
  );
}

function ProductRailCard({ product }: { product: RelatedProduct }) {
  return (
    <article className="min-w-[10.75rem] max-w-[10.75rem] bg-white sm:min-w-[11.25rem] sm:max-w-[11.25rem]">
      {product.image ? (
        <div className="relative overflow-hidden bg-[#f3f1ec]">
          <img src={product.image} alt={`${product.brand} ${product.title}`} className="aspect-[4/5] h-auto w-full object-cover" />
          <button
            type="button"
            aria-label={`Quick view ${product.title}`}
            className="absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center bg-white text-[#141414] shadow-[0_1px_3px_rgba(20,20,20,0.15)]"
          >
            <Eye className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </div>
      ) : (
        <div className="flex min-h-[6.75rem] items-start justify-between border-b border-[#e1ddd7] pb-4 text-[1rem] leading-6">
          <p className="max-w-[8rem]">{product.title}</p>
          <Eye className="mt-0.5 h-4 w-4 shrink-0 text-[#141414]" strokeWidth={1.8} />
        </div>
      )}

      <button
        type="button"
        className={`mt-4 inline-flex h-12 w-full items-center justify-center bg-[#171717] text-[1.05rem] font-medium text-white transition-colors hover:bg-black ${product.image ? "" : "mt-6"}`}
      >
        Add to basket
      </button>

      <div className="mt-4 border-b border-[#ddd8d1] pb-4">
        <p className={`text-[1rem] ${product.brand.includes("ANYDAY") ? "text-[#f06424]" : "text-[#141414]"}`}>{product.brand}</p>
        <h3 className="mt-1 text-[1rem] leading-6 text-[#35312c]">{product.title}</h3>
      </div>

      <div className="mt-4 border-b border-[#ddd8d1] pb-4">
        <div className="flex items-baseline gap-2">
          {product.salePrice ? <span className="text-[0.95rem] text-[#6d675f] line-through">{product.price}</span> : null}
          <span className={`text-[1.35rem] leading-none ${product.salePrice ? "text-[#e13c23]" : "text-[#141414]"}`}>
            {product.salePrice ?? product.price}
          </span>
        </div>
      </div>

      {typeof product.reviews === "number" ? (
        <div className="mt-4 flex items-center gap-2 border-b border-[#ddd8d1] pb-4 text-[0.98rem] text-[#141414]">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`h-[0.9rem] w-[0.9rem] ${index < Math.round(product.rating ?? 0) ? "fill-current text-[#141414]" : "fill-transparent text-[#cfc8c0]"}`}
              />
            ))}
          </div>
          <span>{product.reviews}</span>
        </div>
      ) : null}

      <MiniSwatches swatches={product.swatches} />

      {product.promo ? <p className="mt-4 text-[0.98rem] leading-6 text-[#e63d28]">{product.promo}</p> : null}
    </article>
  );
}

function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details className="group border-b border-[#ddd8d1] bg-white" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-6 text-[1.55rem] leading-none text-[#1f1f1f] sm:px-6 sm:text-[1.85rem] [&::-webkit-details-marker]:hidden">
        <span>{title}</span>
        <span className="inline-flex h-8 w-8 items-center justify-center text-[#141414]">
          <ChevronDown className="h-6 w-6 transition-transform duration-200 group-open:rotate-180" />
        </span>
      </summary>
      <div className="px-4 pb-6 sm:px-6">{children}</div>
    </details>
  );
}

function FooterDisclosure({ column }: { column: FooterColumn }) {
  return (
    <details className="group border-b border-white/20">
      <summary className="flex list-none items-center justify-between gap-3 py-4 text-[1.55rem] leading-none text-white [&::-webkit-details-marker]:hidden">
        <span>{column.heading}</span>
        <ChevronDown className="h-5 w-5 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <ul className="space-y-3 pb-4 text-[1rem] text-white/78">
        {column.items.filter((item) => !shouldHideLabel(item)).map((item) => (
          <li key={item}>
            <SiteLink label={item} href="#" className="jl-footer-link !text-white/78">
              {item}
            </SiteLink>
          </li>
        ))}
      </ul>
    </details>
  );
}

export function JohnLewisProductPage() {
  const [selectedColor, setSelectedColor] = useState(swatches[0]);
  const [selectedSize, setSelectedSize] = useState("S");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const activeImage = galleryImages[currentImageIndex];

  const goToPreviousImage = () => {
    setCurrentImageIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1));
  };

  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#141414]">
      <header className="bg-white">
        <div className="hidden bg-[#123232] text-white md:block">
          <div className="jl-shell flex items-center justify-between px-4 py-2 text-[0.8rem]">
            <span className="tracking-[0.35em] text-white/88">Always Competitively Priced</span>
            <ul className="flex items-center gap-6">
              {utilityLinks.filter((link) => !shouldHideLabel(link.label)).map((link) => (
                <li key={link.label}>
                  <SiteLink
                    label={link.label}
                    href={link.href}
                    className={`inline-flex items-center gap-1.5 ${link.underlined ? "underline underline-offset-[0.2rem]" : ""}`}
                  >
                    <span>{link.label}</span>
                    {link.chevron ? <ChevronDown className="h-3.5 w-3.5" /> : null}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden border-b border-[#ddd8d1] px-4 py-4 md:block">
          <div className="jl-shell grid items-center gap-6 md:grid-cols-[190px_minmax(0,1fr)_auto]">
            <Link href={siteRoutes.home} className="flex items-center">
              <img src="/joheiewisepro-logo.svg" alt="joheiewisepro Logo" className="h-[32px] w-auto object-contain max-w-full" />
            </Link>

            <form
              action="#"
              className="flex h-12 items-center overflow-hidden border border-[#bdb8b1] bg-white"
            >
              <button
                type="submit"
                aria-label="Search"
                className="inline-flex h-full items-center justify-center px-4 text-[#141414]"
              >
                <Search className="h-5 w-5" strokeWidth={2} />
              </button>
              <input
                type="search"
                name="search-term"
                placeholder="Search product or brand"
                className="h-full w-full border-0 bg-transparent pr-5 text-[1.05rem] text-[#141414] placeholder:text-[#726d67] focus:outline-none"
              />
            </form>

            <div className="flex items-center gap-5 text-[1rem] text-[#141414]">
              <a href="#" className="inline-flex items-center gap-2">
                <span>Sign in</span>
                <User className="h-5 w-5" strokeWidth={1.9} />
              </a>
              <a href="#" aria-label="Wish List">
                <Heart className="h-5 w-5" strokeWidth={1.9} />
              </a>
              <a href="#" aria-label="Basket">
                <ShoppingBasket className="h-5 w-5" strokeWidth={1.9} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-b border-[#ddd8d1] px-4 py-4 md:hidden">
          <div className="flex items-start justify-between gap-4">
            <Link href={siteRoutes.home} className="pt-1">
              <img src="/joheiewisepro-logo.svg" alt="joheiewisepro Logo" className="h-[32px] w-auto object-contain max-w-full" />
            </Link>
            <div className="flex items-start gap-4 text-[0.67rem] uppercase tracking-[0.12em] text-[#141414]">
              <a href="#" className="flex flex-col items-center gap-1">
                <Store className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.8} />
                <span>Stores</span>
              </a>
              <a href="#" className="flex flex-col items-center gap-1">
                <User className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.8} />
                <span>Account</span>
              </a>
              <a href="#" className="flex flex-col items-center gap-1">
                <ShoppingBasket className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.8} />
                <span>Basket</span>
              </a>
              <a href="#" className="flex flex-col items-center gap-1">
                <Menu className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.8} />
                <span>Menu</span>
              </a>
            </div>
          </div>

          <form
            action="#"
            className="mt-4 flex h-12 items-center overflow-hidden border border-[#bdb8b1] bg-white"
          >
            <button
              type="submit"
              aria-label="Search"
              className="inline-flex h-full items-center justify-center px-4 text-[#141414]"
            >
              <Search className="h-5 w-5" strokeWidth={2} />
            </button>
            <input
              type="search"
              name="search-term"
              placeholder="Search product or brand"
              className="h-full w-full border-0 bg-transparent pr-4 text-[1.02rem] text-[#141414] placeholder:text-[#726d67] focus:outline-none"
            />
          </form>
        </div>

        <div className="hidden border-b border-[#ddd8d1] px-4 py-3 md:block">
          <nav className="jl-shell flex min-w-max items-center gap-10 text-[1.05rem]">
            {departmentLinks.map((link) => (
              <SiteLink
                key={link}
                label={link}
                href="#"
                className={link === "Sale & Offers" ? "text-[#de2926]" : "text-[#141414]"}
              >
                {link}
              </SiteLink>
            ))}
          </nav>
        </div>

        <div className="bg-black px-4 py-2.5 text-center text-white">
          <div className="jl-shell flex items-center justify-between gap-4">
            <button type="button" aria-label="Previous banner" className="hidden md:inline-flex">
              <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
            </button>
            <p className="mx-auto text-[0.95rem] font-medium leading-snug">
              Joheiewisepro x Rejina Pyo: the new collection redefining classic style.
              <a href="#" className="ml-1 underline underline-offset-[0.18rem]">
                Shop now
              </a>
            </p>
            <button type="button" aria-label="Next banner" className="hidden md:inline-flex">
              <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>

      <section className="px-4 py-3 lg:py-4">
        <div className="jl-shell flex flex-wrap items-center gap-2 text-[0.98rem] text-[#68635d]">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb} className="flex items-center gap-2">
              {index > 0 ? <span>/</span> : null}
              <span className={crumb === "Shop all Joheiewisepro" ? "font-medium text-[#141414]" : ""}>{crumb}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-8 lg:pb-10">
        <div className="jl-shell lg:grid lg:grid-cols-[minmax(0,44rem)_25rem] lg:gap-12">
          <div>
            <div className="space-y-4 lg:hidden">
              <div>
                <p className="text-[2.15rem] leading-none text-[#202020]">Joheiewisepro</p>
                <h1 className="mt-2 text-[2.1rem] leading-[1.12] tracking-[-0.03em] text-[#202020]">
                  60 Denier Velvet Touch Tights, Black
                </h1>
              </div>
              <RatingStars rating={4.6} reviews={96} />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-[2.45rem] font-medium leading-none text-[#141414]">£9.00</p>
                <PricePromise />
              </div>
            </div>

            <div className="mt-4 lg:hidden">
              <div className="relative overflow-hidden bg-[#efede8]">
                <div className="absolute left-0 top-20 z-10 max-w-[17rem] bg-[#ece8e2]/96 px-4 py-3 text-[#1f1f1f]">
                  <p className="text-[1.15rem] font-semibold tracking-[0.26em]">TRENDING</p>
                  <p className="mt-2 text-[1.2rem] leading-7">28 customers added to basket in the last 48 hours</p>
                </div>
                <button
                  type="button"
                  className="absolute right-3 top-3 z-10 inline-flex items-center gap-2 bg-white px-3 py-2 text-[1rem] font-medium shadow-[0_2px_8px_rgba(20,20,20,0.15)]"
                >
                  <Eye className="h-4 w-4" strokeWidth={1.8} />
                  Zoom
                </button>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={goToPreviousImage}
                  className="absolute right-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white shadow-[0_2px_8px_rgba(20,20,20,0.15)]"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={goToNextImage}
                  className="absolute right-3 top-[calc(50%+3.2rem)] z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white shadow-[0_2px_8px_rgba(20,20,20,0.15)]"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
                </button>
                <img src={activeImage.src} alt={activeImage.alt} className="aspect-[9/11] h-auto w-full object-cover" />
                <div className="absolute bottom-3 right-3 bg-white px-3 py-1.5 text-[1rem] font-medium">
                  {currentImageIndex + 1} / {galleryImages.length}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-3">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.alt}
                    type="button"
                    aria-label={`Show image ${index + 1}`}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${index === currentImageIndex ? "w-6 bg-[#141414]" : "w-2.5 bg-[#d5d1cb]"}`}
                  />
                ))}
              </div>
            </div>

            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-2">
              <div className="relative overflow-hidden bg-[#efede8]">
                <div className="absolute left-0 top-0 z-10 w-full max-w-[20rem] bg-[#e9e5df]/95 px-4 py-4 text-[#1f1f1f]">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[1.1rem] font-semibold tracking-[0.25em]">POPULAR</p>
                      <p className="mt-2 text-[1.15rem] leading-7">13 people viewed this in the last few hours</p>
                    </div>
                    <button type="button" aria-label="Dismiss popular banner">
                      <Plus className="h-5 w-5 rotate-45" strokeWidth={1.8} />
                    </button>
                  </div>
                </div>
                <img src={galleryImages[0].src} alt={galleryImages[0].alt} className="aspect-[3/4] h-auto w-full object-cover" />
              </div>
              <div className="overflow-hidden bg-[#efede8]">
                <img src={galleryImages[1].src} alt={galleryImages[1].alt} className="aspect-[3/4] h-auto w-full object-cover" />
              </div>
              <div className="overflow-hidden bg-[#efede8]">
                <img src={galleryImages[2].src} alt={galleryImages[2].alt} className="aspect-[3/4] h-auto w-full object-cover" />
              </div>
              <div className="bg-[#efede8]" />
            </div>
          </div>

          <aside className="mt-6 lg:mt-0 lg:pt-4">
            <div className="lg:sticky lg:top-6">
              <div className="hidden lg:block">
                <p className="text-[2.15rem] leading-none text-[#202020]">Joheiewisepro</p>
                <h1 className="mt-3 text-[2.05rem] leading-[1.12] tracking-[-0.03em] text-[#202020]">
                  60 Denier Velvet Touch Tights, Black
                </h1>
                <div className="mt-6">
                  <RatingStars rating={4.6} reviews={96} />
                </div>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <p className="text-[2.45rem] font-medium leading-none text-[#141414]">£9.00</p>
                  <PricePromise />
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-baseline gap-1 text-[1.15rem]">
                  <span className="text-[#4b4742]">Colour:</span>
                  <span className="font-medium text-[#141414]">{selectedColor.label}</span>
                </div>

                <div className="mt-4 hidden grid-cols-3 gap-2 lg:grid">
                  {swatches.map((swatch) => (
                    <button
                      key={swatch.label}
                      type="button"
                      onClick={() => setSelectedColor(swatch)}
                      className={`flex h-11 items-center gap-3 border px-4 text-[1.05rem] transition-colors ${selectedColor.label === swatch.label ? "border-[#141414]" : "border-[#bdb8b1] hover:border-[#7f7a74]"}`}
                    >
                      <span className="inline-flex h-6 w-6 rounded-full border border-black/10" style={{ backgroundColor: swatch.color }} />
                      <span>{swatch.label}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-2 lg:hidden">
                  {swatches.map((swatch) => (
                    <button
                      key={swatch.label}
                      type="button"
                      aria-label={swatch.label}
                      onClick={() => setSelectedColor(swatch)}
                      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${selectedColor.label === swatch.label ? "border-[#141414]" : "border-transparent"}`}
                    >
                      <span className="inline-flex h-9 w-9 rounded-full border border-black/10" style={{ backgroundColor: swatch.color }} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[1.15rem] font-medium text-[#141414]">Size</p>
                  <button type="button" className="inline-flex items-center gap-2 bg-[#efede8] px-3 py-2 text-[1rem]">
                    <Eye className="h-4 w-4" strokeWidth={1.7} />
                    Size chart
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`h-12 border text-[1.2rem] transition-colors ${selectedSize === size ? "border-[#141414] bg-[#faf8f5]" : "border-[#bdb8b1] bg-white hover:border-[#7f7a74]"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <div className="flex items-start justify-between gap-4 text-[1rem]">
                  <div>
                    <p className="text-[#4b4742]">Customers say this fits:</p>
                    <p className="mt-1 text-[1.35rem] font-medium text-[#141414]">True to Size</p>
                  </div>
                  <a href="#reviews" className="border-b border-[#141414] pb-px text-[#141414]">
                    Read reviews
                  </a>
                </div>
                <div className="mt-4 h-2 bg-[#dfdbd5]">
                  <div className="relative h-full">
                    <span className="absolute left-1/2 top-1/2 h-4 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#141414]" />
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-[1rem] text-[#4b4742]">
                  <span>Very Small</span>
                  <span>Very Big</span>
                </div>
              </div>

              <div className="mt-7 text-center">
                <p className="text-[1.45rem] font-medium text-[#141414]">£9.00</p>
              </div>

              <button
                type="button"
                className="mt-4 inline-flex h-[3.25rem] w-full items-center justify-center bg-[#171717] text-[1.2rem] font-medium text-white transition-colors hover:bg-black"
              >
                Add to basket
              </button>

              <button
                type="button"
                className="mt-3 inline-flex h-[3.1rem] w-full items-center justify-center gap-2 border border-[#bdb8b1] bg-white text-[1.1rem] font-medium text-[#2d2d2d] lg:hidden"
              >
                <Heart className="h-5 w-5" strokeWidth={1.8} />
                Add to wish list
              </button>

              <div className="mt-3 inline-flex h-[3rem] w-full items-center gap-3 bg-[#f1efea] px-4 text-[1rem] text-[#9b958d]">
                <MapPin className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.8} />
                Not available in store
              </div>

              <div className="mt-6 bg-[#f2f0eb] p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-16 items-center justify-center bg-[#7ca02d] px-2 text-center text-[0.55rem] font-medium tracking-[0.22em] text-white">
                    WAITROSE
                  </div>
                  <p className="text-[1.2rem] leading-8 text-[#1f1f1f]">
                    Collect from your nearest Waitrose from 3pm tomorrow for £2.95
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {deliveryLines.map((line) => (
                  <li key={line.label} className="flex items-start gap-3 text-[1.1rem] leading-8 text-[#1f1f1f]">
                    <span className="pt-1 text-[#141414]">
                      {line.icon === "collect" ? <MapPin className="h-5 w-5" strokeWidth={1.8} /> : null}
                      {line.icon === "delivery" ? <Truck className="h-5 w-5" strokeWidth={1.8} /> : null}
                      {line.icon === "returns" ? <RotateCcw className="h-5 w-5" strokeWidth={1.8} /> : null}
                    </span>
                    <span>{line.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4 pb-6 lg:pb-10">
        <div className="jl-shell">
          <div className="bg-white px-4 py-5 sm:px-6">
            <h2 className="text-[1.8rem] leading-none text-[#3a3938] sm:text-[2.05rem]">Take a closer look</h2>
            <p className="mt-3 text-[1.1rem] text-[#8d8780]">Information from the brand</p>
          </div>
          <button
            type="button"
            className="mt-3 inline-flex items-center gap-3 bg-[#68635d] px-4 py-3 text-[1.1rem] text-white"
          >
            Show more
            <Plus className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </section>

      <section id="reviews" className="px-4 py-8 lg:py-10">
        <div className="jl-shell grid gap-4 lg:grid-cols-[0.62fr_1fr]">
          <div className="bg-[#ece8e2] p-4 lg:p-6">
            <p className="text-[1.75rem] leading-none text-[#2d2d2d] sm:text-[2rem]">Average customer rating</p>
            <div className="mt-5 bg-white p-5 lg:p-6">
              <p className="text-[4.6rem] leading-none tracking-[-0.06em] text-[#141414] sm:text-[5.3rem]">4.6/5</p>
              <div className="mt-4 flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current text-[#141414]" />
                ))}
              </div>
              <p className="mt-4 text-[1.15rem] text-[#3f3b36]">Based on 96 reviews</p>
            </div>
          </div>

          <div className="bg-[#ece8e2] p-4 lg:p-6">
            <p className="text-[1.75rem] leading-none text-[#2d2d2d] sm:text-[2rem]">A customer said</p>
            <div className="mt-5 bg-white p-5 lg:p-6">
              <h3 className="text-[1.85rem] leading-tight text-[#202020] sm:text-[2rem]">The Best Tights Ever!</h3>
              <p className="mt-4 max-w-[43rem] text-[1.12rem] leading-8 text-[#3f3b36]">
                Really love the quality of these tights, they have a lovely texture, not too thick but still feel sufficient for cold weather wear. They have a luxe that takes them from day to evening seamlessly! A new go-to for tights.
              </p>
              <div className="mt-6 border-t border-[#d8d2cb] pt-4">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[1.05rem] text-[#4f4a44]">
                  <span className="font-medium text-[#2c2c2c]">Tishtash, Central London</span>
                  <span className="inline-flex items-center gap-2 font-medium text-[#2c2c2c]">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#5e9f49] text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    Verified buyer
                  </span>
                </div>
                <p className="mt-2 text-[1rem] text-[#7b756d]">22 November 2025</p>
              </div>
              <button
                type="button"
                className="mt-6 inline-flex h-12 items-center justify-center border border-[#141414] px-6 text-[1.1rem] font-medium text-[#141414] transition-colors hover:bg-[#141414] hover:text-white"
              >
                View all reviews
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 lg:pb-10">
        <div className="jl-shell overflow-hidden bg-white">
          <AccordionItem title="Product description">
            <div className="max-w-[50rem] space-y-4 text-[1.12rem] leading-8 text-[#3f3b36]">
              <p>Product code: 24790740</p>
              <p>60-denier tights with a smooth, velvety touch.</p>
            </div>
          </AccordionItem>

          <AccordionItem title="Product specification">
            <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-[14rem_minmax(0,1fr)]">
              {specifications.map((spec) => (
                <div key={spec.label} className="contents">
                  <dt className="text-[1.05rem] font-medium text-[#262626]">{spec.label}</dt>
                  <dd className="text-[1.05rem] leading-7 text-[#5a554f]">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </AccordionItem>

          <AccordionItem title="Delivery and returns">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-[1.35rem] font-medium text-[#202020]">Delivery and collection options</h3>
                <div className="mt-5 space-y-5">
                  {deliveryOptions.map((option) => (
                    <div key={option.title} className="border-b border-[#ddd8d1] pb-5 last:border-b-0 last:pb-0">
                      <div className="flex items-baseline justify-between gap-6">
                        <h4 className="text-[1.12rem] font-medium text-[#202020]">{option.title}</h4>
                        <span className="shrink-0 text-[1.12rem] font-medium text-[#202020]">{option.price}</span>
                      </div>
                      <p className="mt-2 text-[1.03rem] leading-7 text-[#57524b]">{option.description}</p>
                    </div>
                  ))}
                </div>
                <a href="#" className="mt-5 inline-flex border-b border-[#141414] pb-px text-[1.03rem] text-[#141414]">
                  More about delivery and collection
                </a>
              </div>

              <div>
                <h3 className="text-[1.35rem] font-medium text-[#202020]">Returns and refunds</h3>
                <div className="mt-5 space-y-4 text-[1.03rem] leading-7 text-[#57524b]">
                  <p>You can return or exchange an unwanted item within 30 days of receiving it.</p>
                  <p>Please allow up to 14 days from sending the item to receive your refund.</p>
                  <h4 className="pt-2 text-[1.12rem] font-medium text-[#202020]">How to return your item</h4>
                  <p>
                    <span className="font-medium text-[#202020]">Small items</span>
                    <br />
                    Return a small item you bought online for free to a Joheiewisepro or Waitrose shop, or one of our return locations. You can also arrange a collection using Evri or Royal Mail.
                  </p>
                  <p>
                    <span className="font-medium text-[#202020]">Large items</span>
                    <br />
                    We&apos;ll collect large items from you. Collections are free if your item is damaged or faulty. If not, we charge a collection fee. To arrange a collection, please contact us.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-[1.03rem]">
                  <a href="#" className="border-b border-[#141414] pb-px text-[#141414]">
                    Read our returns policy
                  </a>
                  <a href="#" className="border-b border-[#141414] pb-px text-[#141414]">
                    More about returns and refunds
                  </a>
                </div>
              </div>
            </div>
          </AccordionItem>
        </div>
      </section>

      <section className="px-4 py-8 lg:py-10">
        <div className="jl-shell bg-white px-4 py-6 sm:px-6 sm:py-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-[1.95rem] leading-none text-[#202020] sm:text-[2.4rem]">Customers also viewed</h2>
            <div className="hidden items-center gap-3 lg:flex">
              <button type="button" aria-label="Previous viewed products" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f1ec] text-[#a8a29a]">
                <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
              </button>
              <button type="button" aria-label="Next viewed products" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f1ec] text-[#141414]">
                <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
              </button>
            </div>
          </div>

          <div className="mt-8 flex gap-6 overflow-x-auto pb-2">
            {alsoViewed.map((product) => (
              <ProductRailCard key={`${product.brand}-${product.title}`} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 lg:py-10">
        <div className="jl-shell bg-white px-4 py-6 sm:px-6 sm:py-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-[1.95rem] leading-none text-[#202020] sm:text-[2.4rem]">Customers also bought</h2>
            <div className="hidden items-center gap-3 lg:flex">
              <button type="button" aria-label="Previous bought products" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f1ec] text-[#a8a29a]">
                <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
              </button>
              <button type="button" aria-label="Next bought products" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f1ec] text-[#141414]">
                <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
              </button>
            </div>
          </div>

          <div className="mt-8 flex gap-6 overflow-x-auto pb-2">
            {alsoBought.map((product) => (
              <ProductRailCard key={`${product.brand}-${product.title}`} product={product} />
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-8 bg-[#123232] text-white">
        <div className="border-b border-white/15 px-4 py-10">
          <div className="jl-shell text-center">
            <p className="jl-eyebrow text-white/78">BE IN THE KNOW</p>
            <p className="mt-4 text-[1.3rem] text-white sm:text-[1.5rem]">
              Get inspiration, new arrivals and the latest offers to your inbox
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center justify-center bg-white px-6 py-3 text-[1.1rem] font-medium text-[#123232]"
            >
              Sign me up for emails
            </a>
          </div>
        </div>

        <div className="border-b border-white/15 px-4 py-8">
          <div className="jl-shell grid gap-6">
            <div className="space-y-4">
              <p className="text-[1.75rem] leading-none sm:text-[1.9rem]">Feedback</p>
              <p className="max-w-[28rem] text-[1.1rem] leading-8 text-white/78">
                Your comments help us improve our website
              </p>
              <SiteLink
                label="Leave feedback"
                href="#"
                className="inline-flex items-center justify-center border border-white/55 px-5 py-3 text-[1.05rem] font-medium text-white"
              >
                Leave feedback
              </SiteLink>
            </div>
          </div>
        </div>

        <div className="border-b border-white/15 px-4 py-8">
          <div className="jl-shell hidden gap-10 md:grid md:grid-cols-2 xl:grid-cols-6">
            {footerColumns.filter((column) => !shouldHideHeading(column.heading)).map((column) => (
              <div key={column.heading}>
                <h3 className="text-[1.65rem] leading-none sm:text-[1.9rem]">{column.heading}</h3>
                <ul className="mt-5 space-y-3 text-[1rem] text-white/78">
                  {column.items.filter((item) => !shouldHideLabel(item)).map((item) => (
                    <li key={item}>
                      <SiteLink label={item} href="#" className="jl-footer-link !text-white/78">
                        {item}
                      </SiteLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="jl-shell md:hidden">
            {footerColumns.filter((column) => !shouldHideHeading(column.heading)).map((column) => (
              <FooterDisclosure key={column.heading} column={column} />
            ))}
          </div>
        </div>

        <div className="border-b border-white/15 px-4 py-6">
          <div className="jl-shell space-y-4 text-[0.95rem] text-white/76">
            <div className="hidden flex-wrap gap-5 md:flex">
              {footerTerms.filter((term) => !shouldHideLabel(term)).map((term) => (
                <SiteLink key={term} label={term} href="#" className="jl-footer-link !text-white/76">
                  {term}
                </SiteLink>
              ))}
            </div>
          </div>
        </div>

        <div className="border-b border-white/15 px-4 py-8">
          <div className="jl-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <p className="text-[1.15rem] tracking-[0.3em] text-white sm:text-[1.2rem]">Always Competitively Priced</p>
            <div className="flex items-center gap-7">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} aria-label={link.label} className="text-white">
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 py-4">
          <div className="jl-shell text-[0.95rem] text-white/78">© Joheiewisepro plc 2001 - 2026</div>
        </div>
      </footer>
    </main>
  );
}
