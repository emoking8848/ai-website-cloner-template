/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import { JohnLewisSiteFooter } from "@/components/john-lewis-site-footer";
import { JohnLewisSiteHeader } from "@/components/john-lewis-site-header";

const categoryTiles = [
  {
    title: "TV & home cinema offers",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Laptop & MacBook offers",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Smart watch offers",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Headphone offers",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Camera offers",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Tablet & iPad offers",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80",
  },
];

const offerLinks = [
  "Save on selected TVs",
  "Save on selected laptops",
  "Save on selected Apple",
  "Save on selected headphones",
  "Save on selected cameras",
  "Save on selected tablets",
];

const latestOffers = [
  {
    title: "Save up to 20% on selected Samsung TVs",
    detail: "Upgrade movie night with sharp colour, slim profiles and connected viewing.",
  },
  {
    title: "Save on selected Apple MacBook and iPad",
    detail: "Portable power for work, study and everyday browsing.",
  },
  {
    title: "Save on selected headphones and speakers",
    detail: "Wireless audio for commuting, workouts and quiet evenings in.",
  },
];

const serviceCards = [
  "Free standard delivery on many electricals",
  "Click & Collect from selected shops",
  "Protect Plus available on selected tech",
  "Trade in selected devices",
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function JohnLewisElectricalOffersPage() {
  return (
    <>
      <JohnLewisSiteHeader />
      <main className="bg-white text-[#141414]">
        <section className="border-b border-[#e4ded7] bg-[#f7f4ef] px-4 py-8 sm:py-12">
          <div className="jl-shell">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <nav className="mb-5 flex flex-wrap gap-2 text-[13px] leading-5 text-[#5f5952]">
                  <Link href="/" className="underline underline-offset-[3px]">Home</Link>
                  <span>/</span>
                  <span>Special offers</span>
                  <span>/</span>
                  <span>Electrical offers</span>
                </nav>
                <p className="jl-eyebrow text-[#6d665e]">Special offers</p>
                <h1 className="mt-3 max-w-[15ch] text-[38px] font-medium leading-[40px] tracking-normal sm:text-[54px] sm:leading-[56px]">
                  Tech & Electronics Offers
                </h1>
                <p className="mt-4 max-w-[43rem] text-[16px] leading-7 text-[#4d4741]">
                  Discover the latest savings across TVs, laptops, tablets, headphones, cameras and smart tech.
                </p>
              </div>
              <a
                href="#latest-offers"
                className="inline-flex h-[40px] w-fit items-center justify-center border border-[#141414] bg-[#141414] px-5 text-[15px] leading-none text-white transition-colors hover:bg-[#3a332d]"
              >
                Shop latest offers
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 py-9 sm:py-12">
          <div className="jl-shell">
            <h2 className="text-[28px] font-medium leading-[32px] sm:text-[34px] sm:leading-[38px]">
              Electrical offers
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
              {categoryTiles.map((tile) => (
                <a key={tile.title} href="#latest-offers" className="group block">
                  <div className="aspect-square overflow-hidden bg-[#f1eee9]">
                    <img
                      src={tile.image}
                      alt={tile.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </div>
                  <p className="mt-3 text-[15px] leading-5 underline-offset-[4px] group-hover:underline">
                    {tile.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#ded8d1] bg-[#fbfaf7] px-4 py-8">
          <div className="jl-shell">
            <h2 className="text-[26px] font-medium leading-[30px]">Offers by category</h2>
            <div className="mt-5 grid overflow-hidden border border-[#d8d2cb] bg-white md:grid-cols-2 lg:grid-cols-3">
              {offerLinks.map((offer) => (
                <a
                  key={offer}
                  href="#latest-offers"
                  className="flex min-h-[74px] items-center justify-between gap-4 border-b border-r border-[#d8d2cb] px-5 py-4 text-[16px] leading-6 transition-colors hover:bg-[#f7f4ef]"
                >
                  <span>{offer}</span>
                  <ArrowIcon />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="latest-offers" className="px-4 py-10 sm:py-14">
          <div className="jl-shell">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-[30px] font-medium leading-[34px]">Latest offers</h2>
              <p className="text-[14px] leading-6 text-[#5d5750]">Selected lines only, while stocks last.</p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {latestOffers.map((offer) => (
                <article key={offer.title} className="flex min-h-[190px] flex-col border border-[#d8d2cb] bg-white p-5">
                  <p className="jl-eyebrow text-[#8a4330]">Limited time</p>
                  <h3 className="mt-5 text-[22px] font-medium leading-[28px]">{offer.title}</h3>
                  <p className="mt-3 text-[15px] leading-6 text-[#554f49]">{offer.detail}</p>
                  <a href="#" className="jl-underlined-link mt-auto w-fit pt-5 text-[14px] leading-5">
                    Shop now
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#102b2b] px-4 py-9 text-white">
          <div className="jl-shell">
            <div className="grid gap-px overflow-hidden bg-white/30 md:grid-cols-4">
              {serviceCards.map((item) => (
                <div key={item} className="bg-[#102b2b] px-5 py-6 text-center text-[15px] leading-6">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <JohnLewisSiteFooter />
    </>
  );
}
