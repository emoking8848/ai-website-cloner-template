/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import { JohnLewisSiteFooter } from "@/components/john-lewis-site-footer";
import { JohnLewisSiteHeader } from "@/components/john-lewis-site-header";
import { SiteLink } from "@/components/site-link";
import { getCategoryRoute } from "@/lib/site-routes";
import type { CatalogProduct } from "@/lib/catalog-data";
import { getCatalogProducts } from "@/lib/catalog-data";
import { shouldHideHeading, shouldHideLabel, siteRoutes } from "@/lib/site-routes";
import type {
  JohnLewisFooterColumn,
  JohnLewisLink,
  JohnLewisOffer,
  JohnLewisProduct,
  JohnLewisPromoCard,
  JohnLewisRecommendationProduct,
} from "@/types/john-lewis";

type UtilityNavItem = JohnLewisLink & {
  chevron?: boolean;
  underlined?: boolean;
};

type SocialLink = {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "pinterest" | "youtube" | "tiktok" | "x";
};

const utilityLinks: UtilityNavItem[] = [
  {
    label: "My Joheiewisepro",
    href: "#",
    underlined: true,
  },
  { label: "Ways to shop", href: "#", chevron: true },
  { label: "Help", href: "#", chevron: true },
  {
    label: "Joheiewisepro Money",
    href: "#",
    chevron: true,
  },
  {
    label: "Our stores",
    href: "#",
    underlined: true,
  },
];

const departmentLinks: JohnLewisLink[] = [
  { label: "Women", href: "#" },
  { label: "Men", href: "#" },
  { label: "Home & Garden", href: "#" },
  { label: "Furniture & Lights", href: "#" },
  { label: "Electricals", href: "#" },
  { label: "Baby & Kids", href: "#" },
  { label: "Beauty", href: "#" },
  { label: "Sport & Travel", href: "#" },
  { label: "Holiday Shop", href: "#" },
  { label: "Gifts", href: "#" },
  { label: "Brands", href: "#" },
  { label: "Sale & Offers", href: "#" },
];

const heroCards: JohnLewisPromoCard[] = [
  {
    title: "Wedding guest dresses",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/2026SUMMERLOOKBOOKDAY2202641830?fmt=auto&wid=600&sm=aspect&aspect=1:1",
    alt: "Fashion model in pale yellow sleeveless midi dress with ruffle hem.",
  },
  {
    title: "Race day dresses",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/012912418?fmt=auto&wid=600&sm=aspect&aspect=1:1",
    alt: "Model wearing a cobalt blue midi dress in studio.",
  },
  {
    title: "Mother of the Bride",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/009706862alt4?fmt=auto&wid=600&sm=aspect&aspect=1:1",
    alt: "Studio portrait of a woman in an olive green tie-neck dress.",
  },
  {
    title: "Hats and fascinators",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/114312752?fmt=auto&wid=600&sm=aspect&aspect=1:1",
    alt: "Model wearing a white and navy fascinator hat.",
  },
  {
    title: "Evening and clutch bags",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/114343975alt1?fmt=auto&wid=600&sm=aspect&aspect=1:1",
    alt: "Editorial portrait with a gold clutch bag.",
  },
  {
    title: "Jewellery",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/114390680alt1?fmt=auto&wid=600&sm=aspect&aspect=1:1",
    alt: "Editorial jewellery portrait.",
  },
];

const offers: JohnLewisOffer[] = [
  {
    badge: "Up to 70% off",
    label: "Joheiewisepro Women's swimwear",
    href: "#",
  },
  {
    badge: "Up to 70% off",
    label: "Joheiewisepro lingerie",
    href: "#",
  },
  {
    badge: "Up to 50% off",
    label: "Joheiewisepro Women's nightwear",
    href: "#",
  },
  {
    badge: "Up to 70% off",
    label: "Joheiewisepro furniture",
    href: "#",
  },
  {
    badge: "Up to 70% off",
    label: "Joheiewisepro cooking and dining",
    href: "#",
  },
  {
    badge: "20% off",
    label: "Elemis",
    href: "#",
  },
];

const trendingCards: JohnLewisPromoCard[] = [
  {
    title: "Garden furniture",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/2026OUTDOORDAY03HERITAGELOUNGE1548?fmt=auto&wid=900&sm=aspect&aspect=1:1",
    alt: "Modern outdoor lounge set with white cushions and blue pillows.",
  },
  {
    title: "Holiday Shop",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/2026summerwrapperbikini?fmt=auto&wid=900&sm=aspect&aspect=1:1",
    alt: "Holiday shop beach portrait.",
  },
  {
    title: "Outdoor dining",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/2026OUTDOORDAY01TIMELESSTABLETOP0407?fmt=auto&wid=900&sm=aspect&aspect=1:1",
    alt: "Outdoor tableware and dining setting.",
  },
  {
    title: "Men's occasionwear",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/2026%20SUM%20WRAPPER%20SHOT%2009%20082?fmt=auto&wid=900&sm=aspect&aspect=1:1",
    alt: "Man in light grey suit on stair balcony.",
  },
];

const editorialCards: JohnLewisPromoCard[] = [
  {
    title: "Join the running club",
    description: "New gear for every strider",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/2026%20SUM%20WRAPPER%20DAY%2001%20SHOT%2012%200455%20(1)?fmt=auto&wid=900&sm=aspect&aspect=1:1",
    href: "#",
    cta: "Shop running",
    alt: "Running shoes, bottle and sports accessories on a court.",
  },
  {
    title: "Fresh spring beauty",
    description: "From Medik8, Estee Lauder and Skin Rocks",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/2025_SPR_WRAPPER_MW_SHOT_8_2238_ITGproofedRGB?fmt=auto&wid=900&sm=aspect&aspect=1:1",
    href: "#",
    cta: "Shop new in beauty",
    alt: "Beauty portrait in warm evening light.",
  },
  {
    title: "Next-level tech",
    description: "For your next finish line",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/2026%20SUM%20WRAPPER%20DAY%2001%20SHOT%2010%200421?fmt=auto&wid=900&sm=aspect&aspect=1:1",
    href: "#",
    cta: "Shop wearables",
    alt: "Yellow smartwatch on a wooden stair rail.",
  },
];

const featuredProducts: JohnLewisProduct[] = [
  {
    title: "Joheiewisepro Godet Cap Sleeve Top, Cream",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/010870910?fmt=auto&$background-off-white$&wid=540&hei=720",
    price: "\u00A349.00",
  },
  {
    title: "Joheiewisepro Nyle Cushion, Multi",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/113778052?fmt=auto&$background-off-white$&wid=540&hei=720",
    price: "\u00A350.00",
  },
  {
    title: "Joheiewisepro Cotton Linen Blend Trousers",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/010362492?fmt=auto&$background-off-white$&wid=540&hei=720",
    price: "\u00A355.00",
  },
  {
    title: "Joheiewisepro Egyptian Cotton Percale Easy Care 400 Thread Count Bedding",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/012286038?fmt=auto&$background-off-white$&wid=540&hei=720",
    price: "\u00A325.00",
  },
  {
    title: "Joheiewisepro Linen Sleeveless Shell Top",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/010592291?fmt=auto&$background-off-white$&wid=540&hei=720",
    price: "\u00A345.00",
  },
  {
    title: "Joheiewisepro Hollies Woven Leather Ballet Flats, Bordeaux",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/010418280?fmt=auto&$background-off-white$&wid=540&hei=720",
    price: "\u00A385.00",
  },
  {
    title: "Joheiewisepro Hand Painted Stoneware Shell Side Plate, White/Blue",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/114234360?fmt=auto&$background-off-white$&wid=540&hei=720",
    price: "\u00A310.00",
  },
  {
    title: "Joheiewisepro x Sanderson Rattan Round Placemat, Set of 2",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/113421977?fmt=auto&$background-off-white$&wid=540&hei=720",
    price: "\u00A328.00",
  },
  {
    title: "Joheiewisepro Dropped Waist Short Sleeve Midi Dress, Khaki",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/010739065?fmt=auto&$background-off-white$&wid=540&hei=720",
    price: "\u00A399.00",
  },
  {
    title: "Joheiewisepro Linen Wide Stripe Shirt, Blue/White",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/011251708?fmt=auto&$background-off-white$&wid=540&hei=720",
    price: "\u00A355.00",
  },
];

const recommendationProducts: JohnLewisRecommendationProduct[] = [
  {
    title: "Joheiewisepro Textured Weave Pair Blackout Lined Pencil Pleat Curtains, Duck Egg",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/238909825alt10?fmt=auto&$background-off-white$&wid=800&hei=1066",
    alt: "Joheiewisepro Textured Weave Pair Blackout Lined Pencil Pleat Curtains, Duck Egg",
    price: "\u00A350.00 - \u00A3150.00",
  },
  {
    title: "Joheiewisepro Brushed Herringbone Pair Blackout Lined Pencil Pleat Curtains, Alabaster",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/010054574alt4?fmt=auto&$background-off-white$&wid=800&hei=1066",
    alt: "Joheiewisepro Brushed Herringbone Pair Blackout Lined Pencil Pleat Curtains, Alabaster",
    price: "\u00A3100.00 - \u00A3205.00",
  },
  {
    title: "Joheiewisepro Velvet Pair Lined Pencil Pleat Curtains, Champagne",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/004899391alt1?fmt=auto&$background-off-white$&wid=800&hei=1066",
    alt: "Joheiewisepro Velvet Pair Lined Pencil Pleat Curtains, Champagne",
    price: "\u00A395.00 - \u00A3200.00",
  },
  {
    title: "Joheiewisepro Velvet Pair Lined Eyelet Curtains, Cream",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/010030535?fmt=auto&$background-off-white$&wid=800&hei=1066",
    alt: "Joheiewisepro Velvet Pair Lined Eyelet Curtains, Cream",
    price: "\u00A341.85 - \u00A3200.00",
  },
  {
    title: "Joheiewisepro Rustic Twill Pair Blackout Lined Pencil Pleat Curtains, Laurel Green",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/010894646?fmt=auto&$background-off-white$&wid=800&hei=1066",
    alt: "Joheiewisepro Rustic Twill Pair Blackout Lined Pencil Pleat Curtains, Laurel Green",
    price: "\u00A385.00 - \u00A3165.00",
  },
];

const storyCards: JohnLewisPromoCard[] = [
  {
    title: "New beauty arrivals",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/beauty-arrivals-april-homepage-010426D?fmt=auto&wid=900&sm=aspect&aspect=1:1",
    alt: "Bobbi Brown makeup and lip gloss on a silver tray floating in a swimming pool.",
    description: "The latest launches from the brands you love",
    cta: "Read & Shop",
  },
  {
    title: "How to wear a trouser suit",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/edit-trousers-suit-homepage-040325?fmt=auto&wid=900&sm=aspect&aspect=1:1",
    alt: "Fashion model in green suit on rocky coastline.",
    description: "Get set for wedding season and be the best-dressed guest",
    cta: "Read & Shop",
  },
  {
    title: "The great outdoors",
    href: "#",
    image:
      "https://media.johnlewiscontent.com/i/JohnLewis/the-great-outdoors-hp-block-260326?fmt=auto&wid=900&sm=aspect&aspect=1:1",
    alt: "Outdoor entertaining table setting by a pool.",
    description: "Creative director Laura Jackson's entertaining guide",
    cta: "Read & Shop",
  },
];

const footerColumns: JohnLewisFooterColumn[] = [
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
    items: [
      "Gift Cards & vouchers",
      "Services",
      "Buying guides",
      "My Joheiewisepro",
      "Basket",
      "Wish List",
      "Brands A-Z",
      "Inspiration",
      "Offers",
      "Events",
    ],
  },
  {
    heading: "More from us",
    items: [
      "Jobs",
      "Waitrose & Partners",
      "About the Joheiewisepro Partnership",
      "Joheiewisepro for Business",
      "Happier futures",
      "Protect+",
    ],
  },
  {
    heading: "Joheiewisepro Money",
    items: [
      "Payment plans",
      "Partnership Credit Card",
      "Travel money",
      "Home insurance",
      "Pet insurance",
      "Car insurance",
      "Loans",
    ],
  },
  {
    heading: "Terms",
    items: [
      "Terms and conditions",
      "Secure shopping",
      "Product recalls and safety notices",
      "Modern slavery statement",
      "Privacy notice",
      "Cookies",
      "Sustainability",
      "Accessibility",
      "Reviews policy",
    ],
  },
];

const footerTerms = [
  "Terms and conditions",
  "Secure shopping",
  "Product recalls",
  "Privacy notice",
  "Cookies",
];

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Pinterest", href: "#", icon: "pinterest" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "TikTok", href: "#", icon: "tiktok" },
  { label: "X", href: "https://x.com/jlandpartners", icon: "x" },
];

const announcementMessages = [
  "Free Click & Collect for orders over £50",
  "Save an additional 10% on selected reduced to clear lines",
];

const brandPromiseExcerpt =
  "Proudly shaping British life for over 150 years, John Lewis blends timeless tradition with contemporary living. Discover a unique blend of modern design and enduring quality for your home and wardrobe. From beautifully curated fashion and homeware that expresses your individuality, to the latest technology and beauty favourites, every piece is chosen with care by our Partners. This is our promise to you, and it is anchored by our commitment to never be knowingly undersold on quality, service, and price...";

const homepageCategorySources = [
  { label: "Women", slug: "new-in-womenswear", route: getCategoryRoute("women", "new-in-womenswear") },
  { label: "Men", slug: "new-in-men-s-clothing-latest-men-s-fashion", route: getCategoryRoute("men", "new-in-men-s-clothing-latest-men-s-fashion") },
  { label: "Garden", slug: "new-in-garden", route: getCategoryRoute("home-and-garden", "new-in-garden") },
  { label: "Beauty", slug: "new-in-beauty", route: getCategoryRoute("beauty", "new-in-beauty") },
  { label: "Sport", slug: "sports-equipment-sports-accessories", route: getCategoryRoute("sport-and-travel", "sports-equipment-sports-accessories") },
  { label: "Gifts", slug: "gifts-for-her-gifts-for-women", route: getCategoryRoute("gifts", "gifts-for-her-gifts-for-women") },
] as const;

const homepageUsedProductIds = new Set<number>();

function getHomepageFamilyKey(product: CatalogProduct, categorySlug: string) {
  const normalizedTitle = product.title.toLowerCase();

  if (categorySlug === "new-in-beauty") {
    return normalizedTitle
      .split(/\s+/)
      .slice(0, 2)
      .join(" ");
  }

  return normalizedTitle
    .replace(/\s-\s[^,]+$/g, "")
    .replace(/,\s.*$/g, "")
    .trim();
}

function pickHomepageProducts(categorySlug: string, count: number, allowReuse = false) {
  const sourceProducts = getCatalogProducts(categorySlug).filter((product) => product.stockStatus === "instock");
  const picks = [];
  const usedFamilies = new Set<string>();

  for (const product of sourceProducts) {
    const familyKey = getHomepageFamilyKey(product, categorySlug);

    if ((allowReuse || !homepageUsedProductIds.has(product.id)) && !usedFamilies.has(familyKey)) {
      picks.push(product);
      usedFamilies.add(familyKey);
      homepageUsedProductIds.add(product.id);
    }

    if (picks.length === count) {
      return picks;
    }
  }

  for (const product of sourceProducts) {
    const familyKey = getHomepageFamilyKey(product, categorySlug);

    if (!picks.some((picked) => picked.id === product.id) && !usedFamilies.has(familyKey)) {
      picks.push(product);
      usedFamilies.add(familyKey);
    }

    if (picks.length === count) {
      return picks;
    }
  }

  return picks;
}

function pickHomepageProductsByBrands(
  categorySlug: string,
  count: number,
  preferredBrands: string[],
) {
  const sourceProducts = getCatalogProducts(categorySlug).filter((product) => product.stockStatus === "instock");
  const picks: CatalogProduct[] = [];
  const usedFamilies = new Set<string>();

  for (const brand of preferredBrands) {
    const match = sourceProducts.find((product) => {
      const familyKey = getHomepageFamilyKey(product, categorySlug);

      return (
        product.title.toLowerCase().startsWith(brand.toLowerCase()) &&
        !homepageUsedProductIds.has(product.id) &&
        !usedFamilies.has(familyKey)
      );
    });

    if (match) {
      picks.push(match);
      homepageUsedProductIds.add(match.id);
      usedFamilies.add(getHomepageFamilyKey(match, categorySlug));
    }

    if (picks.length === count) {
      return picks;
    }
  }

  for (const product of sourceProducts) {
    const familyKey = getHomepageFamilyKey(product, categorySlug);

    if (!homepageUsedProductIds.has(product.id) && !usedFamilies.has(familyKey)) {
      picks.push(product);
      homepageUsedProductIds.add(product.id);
      usedFamilies.add(familyKey);
    }

    if (picks.length === count) {
      return picks;
    }
  }

  return picks;
}

const homepageHeroProduct = pickHomepageProducts("new-in-womenswear", 1, true)[0];

const dynamicHeroCards: JohnLewisPromoCard[] = homepageCategorySources
  .map((category) => {
    const product = pickHomepageProducts(category.slug, 1, true)[0];

    if (!product) {
      return null;
    }

    return {
      title: category.label,
      href: product.wpPermalink ?? product.href,
      image: product.imageUrl,
      alt: product.title,
    };
  })
  .filter(Boolean) as JohnLewisPromoCard[];

const dynamicOffers: JohnLewisOffer[] = homepageCategorySources.map((category) => ({
  badge: `${getCatalogProducts(category.slug).length} items`,
  label: category.label,
  href: category.route,
}));

const dynamicTrendingCards: JohnLewisPromoCard[] = homepageCategorySources
  .slice(0, 4)
  .map((category) => {
    const product = pickHomepageProducts(category.slug, 1)[0];

    if (!product) {
      return null;
    }

    return {
      title: product.title,
      description: category.label,
      image: product.imageUrl,
      href: product.wpPermalink ?? product.href,
      cta: "View product",
      alt: product.title,
    };
  })
  .filter(Boolean) as JohnLewisPromoCard[];

const dynamicEditorialCards: JohnLewisPromoCard[] = homepageCategorySources
  .slice(3, 6)
  .map((category) => {
    const product = pickHomepageProducts(category.slug, 1)[0];

    if (!product) {
      return null;
    }

    return {
      title: product.title,
      description: category.label,
      image: product.imageUrl,
      href: product.wpPermalink ?? product.href,
      cta: "View product",
      alt: product.title,
    };
  })
  .filter(Boolean) as JohnLewisPromoCard[];

const dynamicStoryCards: JohnLewisPromoCard[] = homepageCategorySources
  .slice()
  .reverse()
  .slice(0, 3)
  .map((category) => {
    const product = pickHomepageProducts(category.slug, 1, true)[0];

    if (!product) {
      return null;
    }

    return {
      title: product.title,
      description: category.label,
      image: product.imageUrl,
      href: product.wpPermalink ?? product.href,
      cta: "View product",
      alt: product.title,
    };
  })
  .filter(Boolean) as JohnLewisPromoCard[];

const homepageProductShelves = [
  {
    title: "Women",
    slug: "new-in-womenswear",
    products: pickHomepageProducts("new-in-womenswear", 8)
      .map((product) => ({
        title: product.title,
        href: product.wpPermalink ?? product.href,
        image: product.imageUrl,
        alt: product.title,
        price: `\u00A3${product.price}`,
      })),
  },
  {
    title: "Men",
    slug: "new-in-men-s-clothing-latest-men-s-fashion",
    products: pickHomepageProducts("new-in-men-s-clothing-latest-men-s-fashion", 8)
      .map((product) => ({
        title: product.title,
        href: product.wpPermalink ?? product.href,
        image: product.imageUrl,
        alt: product.title,
        price: `\u00A3${product.price}`,
      })),
  },
  {
    title: "Garden",
    slug: "new-in-garden",
    products: pickHomepageProducts("new-in-garden", 8)
      .map((product) => ({
        title: product.title,
        href: product.wpPermalink ?? product.href,
        image: product.imageUrl,
        alt: product.title,
        price: `\u00A3${product.price}`,
      })),
  },
  {
    title: "Beauty",
    slug: "new-in-beauty",
    products: pickHomepageProductsByBrands("new-in-beauty", 8, [
      "Aesop",
      "Clinique",
      "DIOR",
      "Bobbi",
      "Chantecaille",
      "Clarins",
      "Cowshed",
      "Body",
    ])
      .map((product) => ({
        title: product.title,
        href: product.wpPermalink ?? product.href,
        image: product.imageUrl,
        alt: product.title,
        price: `\u00A3${product.price}`,
      })),
  },
].filter((shelf) => shelf.products.length > 0);

function SearchIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[1.8]`}>
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

function StoreIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[1.7]`}>
      <path d="M3 6.5h18v13H3z" />
      <path d="M8.5 6.5c0-2 1.6-3.5 3.5-3.5s3.5 1.5 3.5 3.5" />
      <path d="M9 20v-5.2h6V20" />
      <circle cx="12" cy="9.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function UserIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[1.8]`}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.8-3.8 4.4-5.7 7.5-5.7s5.7 1.9 7.5 5.7" />
    </svg>
  );
}

function HeartIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[1.8]`}>
      <path d="M12 20.2 4.7 13c-2.2-2.1-2.3-5.7-.2-7.9 2-2.1 5.3-2.1 7.4 0l.1.1.1-.1c2.1-2.1 5.4-2.1 7.4 0 2.1 2.2 2 5.8-.2 7.9Z" />
    </svg>
  );
}

function BasketIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[1.8]`}>
      <path d="M4 9.5h16l-3.1 9H7.1L4 9.5Z" />
      <path d="M8.5 9.5V7.8c0-2 1.6-3.6 3.5-3.6s3.5 1.6 3.5 3.6v1.7" />
    </svg>
  );
}

function MenuIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[1.8]`}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function ChevronDownIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={`${className} fill-current`}>
      <path d="M2 5.5 8 11l6-5.5V4L8 9.5 2 4z" />
    </svg>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[1.8]`}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CarouselChevronIcon({
  direction,
  className = "h-5 w-5",
}: {
  direction: "left" | "right";
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`${className} fill-none stroke-current stroke-[1.8]`}
    >
      {direction === "left" ? <path d="m15 5-7 7 7 7" /> : <path d="m9 5 7 7-7 7" />}
    </svg>
  );
}

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  switch (icon) {
    case "facebook":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M13.5 21v-7h2.8l.5-3h-3.3V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.4-.1-1.4-.2-2.4-.2-2.3 0-3.9 1.4-3.9 4V11H8v3h2.7v7h2.8Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "pinterest":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M12.2 3C7.4 3 5 6.4 5 10c0 2.2.8 4.1 2.7 4.8.3.1.5 0 .6-.2l.5-1.9c.1-.2 0-.4-.2-.6-.5-.6-.8-1.4-.8-2.5 0-3.2 2.4-6.1 6.2-6.1 3.4 0 5.2 2.1 5.2 4.9 0 3.7-1.6 6.8-4.1 6.8-1.3 0-2.2-1.1-1.9-2.4.4-1.5 1.1-3 1.1-4 0-.9-.5-1.7-1.6-1.7-1.2 0-2.2 1.3-2.2 3 0 1.1.4 1.9.4 1.9l-1.5 6.2c-.4 1.8-.1 4 .1 5 .1.3.4.4.6.1.3-.4 1.2-1.8 1.6-3.5.1-.5.7-2.6.7-2.6.4.8 1.5 1.5 2.7 1.5 3.6 0 6-3.3 6-7.7C21 6.1 17.6 3 12.2 3Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M21.6 7.8a2.8 2.8 0 0 0-2-2C17.9 5.3 12 5.3 12 5.3s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2A29.2 29.2 0 0 0 2 12a29.2 29.2 0 0 0 .4 4.2 2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2A29.2 29.2 0 0 0 22 12a29.2 29.2 0 0 0-.4-4.2ZM10 15.2V8.8l5.5 3.2Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M14.5 3h2.5c.1 1 .5 2 1.2 2.7.7.7 1.7 1.2 2.8 1.3v2.6a7.1 7.1 0 0 1-4-1.2v6.1c0 3.1-2.5 5.5-5.6 5.5A5.5 5.5 0 0 1 6 14.5C6 11.4 8.4 9 11.4 9c.4 0 .8 0 1.1.1v2.7a2.7 2.7 0 0 0-1.1-.2 2.9 2.9 0 1 0 2.9 2.9V3Z" />
        </svg>
      );
    case "x":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M18.9 4H21l-6.2 7.1L22 20h-5.7l-4.5-5.8L6.7 20H4.5l6.7-7.7L4 4h5.8l4 5.2L18.9 4Zm-2 14.3h1.2L8.6 5.6H7.3Z" />
        </svg>
      );
  }
}

function SectionHeading({
  title,
  linkLabel,
}: {
  title: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4 sm:mb-5">
      <h2 className="text-[1.9rem] leading-[1.02] tracking-[-0.04em] text-[#141414] sm:text-[2rem] lg:text-[2rem]">
        {title}
      </h2>
      {linkLabel ? (
        <a href="#" className="jl-underlined-link hidden pb-[0.14rem] text-[0.76rem] uppercase tracking-[0.12em] sm:inline-flex">
          {linkLabel}
        </a>
      ) : null}
    </div>
  );
}

function PromoCard({ card }: { card: JohnLewisPromoCard }) {
  return (
    <a
      href={card.href}
      className="group block bg-white"
    >
      <div className="aspect-square overflow-hidden bg-[#f4f1ea]">
        <img
          src={card.image}
          alt={card.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
        />
      </div>
      <div className="space-y-1.5 pt-3">
        <p className="text-[0.92rem] leading-5 tracking-[-0.012em] text-[#141414] sm:text-[0.95rem]">
          {card.title}
        </p>
        {card.description ? (
          <p className="max-w-[28rem] text-[0.82rem] leading-5 text-[#3f3a34]">{card.description}</p>
        ) : null}
        {card.cta ? <span className="jl-underlined-link inline-flex pb-[0.12rem] text-[0.76rem] uppercase tracking-[0.12em]">{card.cta}</span> : null}
      </div>
    </a>
  );
}

function HeroNavCard({ card }: { card: JohnLewisPromoCard }) {
  return (
    <a href={card.href} className="group block">
      <div className="overflow-hidden bg-[#f4f1ea]">
        <img
          src={card.image}
          alt={card.alt}
          className="aspect-square h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </div>
      <p className="pt-1.5 text-[0.68rem] leading-[1.2] tracking-[-0.01em] text-[#141414] sm:pt-2 sm:text-[0.77rem]">
        {card.title}
      </p>
    </a>
  );
}

function RecommendationCard({ product }: { product: JohnLewisRecommendationProduct }) {
  return (
    <a
      href={product.href}
      className="group min-w-[13.4rem] snap-start sm:min-w-[14rem] lg:min-w-[14.5rem]"
    >
      <div className="overflow-hidden bg-[#f4f1ea]">
        <img
          src={product.image}
          alt={product.alt}
          className="aspect-[5/6] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
        />
      </div>
      <div className="space-y-1.5 pt-3">
        <p className="text-[0.88rem] leading-5 tracking-[-0.012em] text-[#141414]">{product.title}</p>
        <p className="text-[0.95rem] font-medium tracking-[-0.015em] text-[#141414]">{product.price}</p>
      </div>
    </a>
  );
}

function FooterColumn({ column }: { column: JohnLewisFooterColumn }) {
  return (
    <div className="space-y-4">
      <h3 className="text-[0.67rem] font-medium uppercase tracking-[0.22em] text-white/70">{column.heading}</h3>
      <ul className="space-y-2.5 text-[0.82rem] leading-6 text-white/86">
        {column.items.filter((item) => !shouldHideLabel(item)).map((item) => (
          <li key={item}>
            <SiteLink label={item} href="#" className="jl-footer-link">
              {item}
            </SiteLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterDisclosure({ column }: { column: JohnLewisFooterColumn }) {
  return (
    <details className="group border-b border-white/18 py-4">
      <summary className="jl-footer-summary flex cursor-pointer list-none items-center justify-between gap-3 text-[0.72rem] uppercase tracking-[0.24em] text-white/80">
        <span>{column.heading}</span>
        <ChevronDownIcon className="h-4 w-4 transition-transform group-open:rotate-180" />
      </summary>
      <ul className="space-y-3 pb-1 pt-4 text-sm leading-6 text-white/88">
        {column.items.filter((item) => !shouldHideLabel(item)).map((item) => (
          <li key={item}>
            <SiteLink label={item} href="#" className="jl-footer-link">
              {item}
            </SiteLink>
          </li>
        ))}
      </ul>
    </details>
  );
}

function AppQrCode() {
  return (
    <img
      src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https%3A%2F%2Fwww.johnlewis.com%2Fcustomer-services%2Fshopping-with-us%2Four-apps"
      alt="John Lewis app QR code"
      className="h-20 w-20 bg-white p-[3px]"
    />
  );
}

function AppStoreBadges() {
  return (
    <div className="flex items-center gap-3">
      <a href="https://apps.apple.com/gb/app/john-lewis-partners/id486502369">
        <img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
          alt="Download on the App Store"
          className="h-10 w-auto"
        />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.johnlewis.android&hl=en">
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          className="h-10 w-auto"
        />
      </a>
    </div>
  );
}

export function JohnLewisHomepage() {
  return (
    <>
      <JohnLewisSiteHeader />
      <main className="min-h-screen bg-white text-[#141414]">

      <section className="px-4 pt-0">
        <div className="jl-shell">
          <a
            href={homepageHeroProduct?.wpPermalink ?? homepageHeroProduct?.href ?? siteRoutes.category}
            className="group relative block min-h-[24rem] overflow-hidden bg-[#d9d2c8] sm:min-h-[32rem] lg:min-h-[41rem]"
          >
            <img
              src="/images/home/2026OUTDOORDAY03RUSTICLOUNGE1886ITGproofedCMYK.webp"
              alt="Joheiewisepro homepage hero"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/42 via-black/18 to-transparent" />
            <div className="relative flex h-full max-w-[326px] flex-col justify-end gap-3 px-6 pb-10 pt-8 text-white sm:max-w-[420px] sm:px-8 sm:pb-12 lg:max-w-[620px] lg:px-[44px] lg:pb-[74px] lg:pt-10">
              <span className="jl-eyebrow text-white/84">Women</span>
              <h1 className="max-w-[326px] text-[24px] leading-[28px] font-medium tracking-normal sm:max-w-[420px] sm:text-[34px] sm:leading-[36px] lg:max-w-[620px] lg:text-[48px] lg:leading-[48px]">
                {homepageHeroProduct?.categoryNames?.[0] ?? "New In Womenswear"}
              </h1>
              <p className="max-w-[326px] font-serif text-[16px] leading-[22px] text-white sm:max-w-[420px] sm:text-[18px] sm:leading-[24px] lg:max-w-[620px] lg:text-[20px] lg:leading-[28px]">
                {homepageHeroProduct?.title ?? "Discover the latest arrivals."}
              </p>
              <span className="jl-underlined-link inline-flex w-fit border-white pt-3 text-[16px] leading-[22px] text-white">
                View product
              </span>
            </div>
          </a>
        </div>
      </section>

      <section className="px-4 py-8 sm:py-10">
        <div className="jl-shell">
          <SectionHeading title="Top offers on selected lines" linkLabel="Shop all offers" />
          <div className="grid border-y border-[#d9d2cb] md:grid-cols-2 xl:grid-cols-3">
            {dynamicOffers.map((offer) => (
              <a
                key={offer.label}
                href={offer.href}
                className="border-b border-r border-[#d9d2cb] bg-white px-5 py-4 transition-colors hover:bg-[#faf8f5] xl:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(2n)]:xl:border-r"
              >
                <p className="text-[20px] leading-[28px] text-[#141414]">{offer.badge}</p>
                <p className="mt-1 font-serif text-[20px] leading-[28px] text-[#141414]">{offer.label}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {homepageProductShelves.slice(0, 2).map((shelf) => (
        <section key={shelf.slug} className="px-4 py-8 sm:py-10">
          <div className="jl-shell">
            <SectionHeading title={shelf.title} />
            <div className="jl-hide-scrollbar flex snap-x gap-4 overflow-x-auto pb-2">
              {shelf.products.map((product) => (
                <RecommendationCard key={`${shelf.slug}-${product.href}`} product={product} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-4 py-8 sm:py-10">
        <div className="jl-shell">
          <SectionHeading title="Trending this week" />
          <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-4">
            {dynamicTrendingCards.map((card) => (
              <PromoCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:py-10">
        <div className="jl-shell">
          <SectionHeading title="What's new now" />
          <div className="grid gap-x-5 gap-y-8 lg:grid-cols-3">
            {dynamicEditorialCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="block bg-white"
              >
                <div className="overflow-hidden bg-[#efe8df]">
                  <img src={card.image} alt={card.title} className="aspect-[1/1] h-auto w-full object-cover" />
                </div>
                <p className="mt-3 jl-eyebrow text-[0.63rem] tracking-[0.22em] text-[#6d675f]">What&apos;s new now</p>
                <h3 className="mt-3 text-[1.15rem] leading-[1.08] tracking-[-0.03em] sm:text-[1.35rem]">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-[28rem] text-[0.84rem] leading-6 text-[#58524a] sm:text-[0.88rem]">
                  {card.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-[0.76rem] font-medium uppercase tracking-[0.12em] text-[#141414]">
                  {card.cta}
                  <ArrowRightIcon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {homepageProductShelves.slice(2).map((shelf) => (
        <section key={shelf.slug} className="px-4 py-8 sm:py-10">
          <div className="jl-shell">
            <SectionHeading title={shelf.title} />
            <div className="jl-hide-scrollbar flex snap-x gap-4 overflow-x-auto pb-2">
              {shelf.products.map((product) => (
                <RecommendationCard key={`${shelf.slug}-${product.href}`} product={product} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-4 py-8 sm:py-10">
        <div className="jl-shell">
          <SectionHeading title="Stories" linkLabel="Discover more" />
          <p className="-mt-1 mb-5 text-[0.84rem] text-[#141414]">Read, watch and be inspired...</p>
          <div className="grid gap-x-5 gap-y-8 lg:grid-cols-3">
            {dynamicStoryCards.map((card) => (
              <PromoCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#ded8d1] bg-white px-4 py-4 text-[#141414]">
        <div className="px-0 sm:px-4 lg:px-[52px]">
          <p className="max-w-none text-[14px] leading-[32px] text-[#141414]">
            {brandPromiseExcerpt}
          </p>
          <a href="#" className="mt-1 inline-flex text-[16px] leading-[22px] underline underline-offset-[3px]">
            Read more
          </a>
        </div>
      </section>

      <section className="border-b border-white bg-[#102b2b] px-4 py-8 text-white">
        <div className="jl-signup-shell text-center">
          <p className="jl-eyebrow text-white">Be in the know</p>
          <p className="mt-2 text-[20px] leading-[28px] text-white">
            Get inspiration, new arrivals and the latest offers to your inbox
          </p>
          <a
            href="#"
            className="mt-4 inline-flex h-[37px] items-center justify-center border border-white bg-white px-4 text-[16px] leading-[22px] text-[#141414]"
          >
            Sign me up for emails
          </a>
        </div>
      </section>

      <section className="border-b border-white bg-[#102b2b] px-4 text-white">
        <div className="jl-footer-shell relative flex flex-wrap px-4 py-6 md:px-8">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white" />
          <div className="w-full border-b border-white px-0 py-6 md:w-1/2 md:border-b-0 md:pr-8">
            <p className="jl-eyebrow text-white">Feedback</p>
            <p className="mt-4 text-[20px] font-semibold leading-[28px] text-white">
              Your comments help us improve our website
            </p>
            <a
              href="#"
              className="mt-6 inline-flex h-[38px] items-center justify-center border border-white bg-transparent px-4 text-[16px] leading-[22px] text-white"
            >
              Leave feedback
            </a>
          </div>
          <div className="hidden w-full px-0 py-6 md:block md:w-1/2 md:pl-12">
            <div className="flex items-center gap-4">
              <AppQrCode />
              <a href="#" className="text-[20px] font-semibold leading-[28px] text-white">
                John Lewis App
              </a>
            </div>
          </div>
          <div className="w-full px-0 py-6 md:hidden">
            <p className="jl-eyebrow text-white">Download the John Lewis app</p>
            <div className="mt-4">
              <AppStoreBadges />
            </div>
          </div>
        </div>
      </section>
      </main>
      <JohnLewisSiteFooter />
    </>
  );
}
