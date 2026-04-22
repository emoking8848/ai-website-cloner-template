export interface JohnLewisLink {
  label: string;
  href: string;
}

export interface JohnLewisPromoCard {
  title: string;
  href: string;
  image: string;
  alt: string;
  description?: string;
  cta?: string;
}

export interface JohnLewisOffer {
  badge: string;
  label: string;
  href: string;
}

export interface JohnLewisProduct {
  title: string;
  href: string;
  image: string;
  price: string;
}

export interface JohnLewisRecommendationProduct {
  title: string;
  href: string;
  image: string;
  alt: string;
  price: string;
}

export interface JohnLewisFooterColumn {
  heading: string;
  items: string[];
}
