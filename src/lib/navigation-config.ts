import categoryTermMapData from "@/data/wp_category_term_map.json";
import { getCategoryRoute, siteRoutes } from "@/lib/site-routes";

type CategoryTermRecord = {
  id: number;
  slug: string;
  name: string;
  count: number;
};

type NavigationSectionConfig = {
  heading: string;
  slugs: string[];
};

type NavigationGroupConfig = {
  label: string;
  routeSegment: string;
  href?: string;
  accent?: boolean;
  sections: NavigationSectionConfig[];
};

export type NavigationLink = {
  label: string;
  href: string;
  slug: string;
};

export type NavigationMenuGroup = {
  label: string;
  routeSegment: string;
  href?: string;
  accent?: boolean;
  sections: Array<{
    heading: string;
    links: NavigationLink[];
  }>;
};

const categoryLabelOverrides: Record<string, string> = {
  "new-in-womenswear": "New In Womenswear",
  "women-s-dresses": "Women's Dresses",
  "women-s-trending-now": "Women's Trending Now",
  "new-in-men-s-clothing-latest-men-s-fashion": "New In Men's Clothing",
  "john-lewis-men-s-must-haves": "Men's Must Haves",
  "men-s-trending-now": "Men's Trending Now",
  "new-in-beauty": "New In Beauty",
  "new-in-baby-toddler-clothes-for-0-3-years": "New In Baby & Toddler",
  "new-in-garden": "New In Garden",
  "garden-table-chairs-garden-furniture-sets": "Garden Furniture Sets",
  "sports-equipment-sports-accessories": "Sports Equipment",
  "women-s-sports-tops": "Women's Sports Tops",
  "gifts-for-grandparents-gifts-for-grandma-grandad": "Gifts For Grandparents",
  "gifts-for-her-gifts-for-women": "Gifts for Her",
  "gifts-for-him-gifts-for-men": "Gifts for Him",
};

const navigationGroupConfig: NavigationGroupConfig[] = [
  {
    label: "Popular products",
    routeSegment: "popular-products",
    href: siteRoutes.popularProducts,
    sections: [],
  },
  {
    label: "Women",
    routeSegment: "women",
    sections: [
      {
        heading: "Women's categories",
        slugs: ["new-in-womenswear", "women-s-dresses", "women-s-trending-now"],
      },
    ],
  },
  {
    label: "Men",
    routeSegment: "men",
    sections: [
      {
        heading: "Men's categories",
        slugs: ["new-in-men-s-clothing-latest-men-s-fashion", "john-lewis-men-s-must-haves", "men-s-trending-now"],
      },
    ],
  },
  {
    label: "Home & Garden",
    routeSegment: "home-and-garden",
    sections: [
      {
        heading: "Home & garden categories",
        slugs: ["new-in-garden", "garden-table-chairs-garden-furniture-sets"],
      },
    ],
  },
  {
    label: "Furniture & Lights",
    routeSegment: "furniture-and-lights",
    href: getCategoryRoute("furniture-and-lights"),
    sections: [],
  },
  {
    label: "Electricals",
    routeSegment: "electricals",
    href: getCategoryRoute("electricals"),
    sections: [],
  },
  {
    label: "Beauty",
    routeSegment: "beauty",
    sections: [
      {
        heading: "Beauty categories",
        slugs: ["new-in-beauty"],
      },
    ],
  },
  {
    label: "Baby & Kids",
    routeSegment: "baby-and-kids",
    sections: [
      {
        heading: "Baby & kids categories",
        slugs: ["new-in-baby-toddler-clothes-for-0-3-years"],
      },
    ],
  },
  {
    label: "Sport & Travel",
    routeSegment: "sport-and-travel",
    sections: [
      {
        heading: "Sport",
        slugs: ["sports-equipment-sports-accessories", "women-s-sports-tops"],
      },
    ],
  },
  {
    label: "Holiday Shop",
    routeSegment: "holiday-shop",
    href: getCategoryRoute("holiday-shop"),
    sections: [],
  },
  {
    label: "Gifts",
    routeSegment: "gifts",
    accent: true,
    sections: [
      {
        heading: "Gift categories",
        slugs: ["gifts-for-grandparents-gifts-for-grandma-grandad", "gifts-for-her-gifts-for-women", "gifts-for-him-gifts-for-men"],
      },
    ],
  },
];

function decodeHtml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
}

const categoryTermMap = categoryTermMapData as Record<string, CategoryTermRecord>;

export function getCategoryLabel(slug: string) {
  return categoryLabelOverrides[slug] ?? decodeHtml(categoryTermMap[slug]?.name ?? slug);
}

export function getCategoryTermName(slug?: string) {
  if (!slug) {
    return undefined;
  }

  return getCategoryLabel(slug);
}

export function getHeaderNavigationGroups(): NavigationMenuGroup[] {
  return navigationGroupConfig
    .map((group) => ({
      label: group.label,
      routeSegment: group.routeSegment,
      href: group.href,
      accent: group.accent,
      sections: group.sections
        .map((section) => ({
          heading: section.heading,
          links: section.slugs.map((slug) => ({
            label: getCategoryLabel(slug),
            href: getCategoryRoute(group.routeSegment, slug),
            slug,
          })),
        }))
        .filter((section) => section.links.length > 0),
    }))
    .filter((group) => group.href || group.sections.length > 0);
}

export function getNavigationTermSlugs() {
  return navigationGroupConfig.flatMap((group) => group.sections.flatMap((section) => section.slugs));
}
