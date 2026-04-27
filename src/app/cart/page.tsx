import type { Metadata } from "next";

import { JohnLewisSiteFooter } from "@/components/john-lewis-site-footer";
import { JohnLewisSiteHeader } from "@/components/john-lewis-site-header";
import { siteRoutes } from "@/lib/site-routes";

export const metadata: Metadata = {
  title: "Basket | Joheiewisepro",
  description: "Review your Joheiewisepro basket.",
};

export default function CartPage() {
  return (
    <>
      <JohnLewisSiteHeader />
      <main className="flex-1 bg-white px-4 py-16 text-[#141414] sm:py-24">
        <section className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#f2f0ed] text-[#b7b2ac]">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-12 w-12 fill-none stroke-current stroke-[1.6]">
              <path d="M4 9.5h16l-3.1 9H7.1L4 9.5Z" />
              <path d="M8.5 9.5V7.8c0-2 1.6-3.6 3.5-3.6s3.5 1.6 3.5 3.6v1.7" />
            </svg>
          </div>
          <h1 className="text-[2rem] font-semibold leading-tight tracking-[-0.025em] sm:text-[2.6rem]">
            Your basket is currently empty.
          </h1>
          <p className="mt-5 max-w-[34rem] text-base leading-7 text-[#4f4942]">
            Before you checkout, add some products to your shopping basket. You will find popular products ready to browse.
          </p>
          <a
            href={siteRoutes.popularProducts}
            className="mt-8 inline-flex h-12 items-center justify-center bg-black px-7 text-sm font-semibold uppercase tracking-[0.02em] text-white transition-colors hover:bg-[#111]"
          >
            Return to shop
          </a>
        </section>
      </main>
      <JohnLewisSiteFooter />
    </>
  );
}