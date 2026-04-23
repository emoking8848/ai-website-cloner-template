export const siteRoutes = {
  home: "/",
  category: "/category",
  product: "/product",
  about: "/business",
  contact: "/customer-services/contact-us",
  privacy: "/customer-services/shopping-with-us/privacy-notice",
  terms: "/terms-and-conditions",
  delivery: "/customer-services/contact-us",
  returns: "/customer-services/contact-us",
} as const;

function slugifySegment(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getCategoryRoute(...segments: string[]) {
  const cleanedSegments = segments.map(slugifySegment).filter(Boolean);

  return cleanedSegments.length > 0
    ? `${siteRoutes.category}/${cleanedSegments.join("/")}`
    : siteRoutes.category;
}

export function getProductRoute(id: number | string) {
  return `${siteRoutes.product}/${id}`;
}

const routeByLabel = new Map<string, string>([
  ["About Us", siteRoutes.about],
  ["About the Joheiewisepro Partnership", siteRoutes.about],
  ["Joheiewisepro for Business", siteRoutes.about],
  ["Contact us", siteRoutes.contact],
  ["Contact Us", siteRoutes.contact],
  ["Customer services", siteRoutes.contact],
  ["Help", siteRoutes.contact],
  ["Privacy notice", siteRoutes.privacy],
  ["Privacy policy", siteRoutes.privacy],
  ["Privacy Policy", siteRoutes.privacy],
  ["Terms and conditions", siteRoutes.terms],
  ["Terms & Conditions", siteRoutes.terms],
  ["Delivery & collection", siteRoutes.delivery],
  ["Delivery Information", siteRoutes.delivery],
  ["Returns & refunds", siteRoutes.returns],
  ["Returns & Refunds", siteRoutes.returns],
  ["Ways to shop", siteRoutes.category],
  ["Women", getCategoryRoute("women")],
  ["Men", getCategoryRoute("men")],
  ["Home & Garden", getCategoryRoute("home-and-garden")],
  ["Furniture & Lights", getCategoryRoute("furniture-and-lights")],
  ["Electricals", getCategoryRoute("electricals")],
  ["Baby & Kids", getCategoryRoute("baby-and-kids")],
  ["Beauty", getCategoryRoute("beauty")],
  ["Sport & Travel", getCategoryRoute("sport-and-travel")],
  ["Sports & Fitness", getCategoryRoute("sports-and-fitness")],
  ["Holiday Shop", getCategoryRoute("holiday-shop")],
  ["Gifts", getCategoryRoute("gifts")],
  ["Brands", getCategoryRoute("brands")],
  ["Brands A-Z", getCategoryRoute("brands", "a-z")],
  ["Sale & Offers", getCategoryRoute("sale-and-offers")],
  ["Offers", getCategoryRoute("sale-and-offers")],
  ["Services", getCategoryRoute("services")],
  ["Buying guides", getCategoryRoute("buying-guides")],
  ["Inspiration", getCategoryRoute("inspiration")],
  ["Events", getCategoryRoute("events")],
  ["Leave feedback", siteRoutes.contact],
  ["Visit customer services", siteRoutes.contact],
]);

const hiddenLabels = new Set<string>([
  "Joheiewisepro Money",
  "Payment plans",
  "Partnership Credit Card",
  "Travel money",
  "Insurance",
  "Home insurance",
  "Pet insurance",
  "Car insurance",
  "Loans",
  "Protect+",
  "Partnership Card",
  "Foreign Currency",
  "Visit Joheiewisepro Partnership Card",
  "Visit Joheiewisepro Insurance",
  "Visit Joheiewisepro Foreign Currency",
]);

export function getSiteRouteForLabel(label: string, fallback?: string) {
  return routeByLabel.get(label) ?? (fallback?.startsWith("/") ? fallback : undefined);
}

export function shouldHideLabel(label: string) {
  return hiddenLabels.has(label);
}

export function shouldHideHeading(heading: string) {
  return heading === "Joheiewisepro Money";
}
