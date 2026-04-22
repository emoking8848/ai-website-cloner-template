export interface JohnLewisSimpleLink {
  label: string;
  href: string;
}

export type JohnLewisPromoMessage = JohnLewisSimpleLink;

export interface JohnLewisSizeOption {
  label: string;
  available?: boolean;
}

export interface JohnLewisGalleryItem {
  src: string;
  alt: string;
}

export interface JohnLewisDetailItem {
  label: string;
  value: string;
}

export interface JohnLewisDeliveryOption {
  title: string;
  price: string;
  description: string;
}

export interface JohnLewisRelatedProduct {
  title: string;
  href: string;
  image: string;
  alt: string;
  price: string;
  salePrice?: string;
  badge?: string;
}

export type JohnLewisFooterItem = JohnLewisSimpleLink;

export interface JohnLewisFooterSection {
  heading: string;
  items: JohnLewisFooterItem[];
}
