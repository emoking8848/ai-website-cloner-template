import type { Metadata } from "next";

import { JohnLewisElectricalOffersPage } from "@/components/john-lewis-electrical-offers-page";

export const metadata: Metadata = {
  title: "Tech & Electronics Offers",
  description: "Electrical offers across TVs, laptops, tablets, headphones and smart tech.",
};

export default function ElectricalOffersRoute() {
  return <JohnLewisElectricalOffersPage />;
}
