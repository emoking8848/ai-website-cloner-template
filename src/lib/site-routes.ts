export const siteRoutes = {
  home: "/",
  category: "/category",
  about: "/business",
  contact: "/customer-services/contact-us",
  privacy: "/customer-services/shopping-with-us/privacy-notice",
  terms: "/terms-and-conditions",
  delivery: "/customer-services/contact-us",
  returns: "/customer-services/contact-us",
} as const;

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
  ["Women", siteRoutes.category],
  ["Men", siteRoutes.category],
  ["Home & Garden", siteRoutes.category],
  ["Furniture & Lights", siteRoutes.category],
  ["Electricals", siteRoutes.category],
  ["Baby & Kids", siteRoutes.category],
  ["Beauty", siteRoutes.category],
  ["Sport & Travel", siteRoutes.category],
  ["Sports & Fitness", siteRoutes.category],
  ["Holiday Shop", siteRoutes.category],
  ["Gifts", siteRoutes.category],
  ["Brands", siteRoutes.category],
  ["Brands A-Z", siteRoutes.category],
  ["Sale & Offers", siteRoutes.category],
  ["Offers", siteRoutes.category],
  ["Services", siteRoutes.category],
  ["Buying guides", siteRoutes.category],
  ["Inspiration", siteRoutes.category],
  ["Events", siteRoutes.category],
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
