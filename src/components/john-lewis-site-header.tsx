/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import { SiteLink } from "@/components/site-link";
import { shouldHideLabel, siteRoutes } from "@/lib/site-routes";

const utilityLinks = [
  { label: "My Joheiewisepro", href: "#", underlined: true },
  { label: "Ways to shop", href: "#", chevron: true },
  { label: "Help", href: "#", chevron: true },
  { label: "Joheiewisepro Money", href: "#", chevron: true },
  { label: "Our stores", href: "#", underlined: true },
];

const departmentLinks = [
  { label: "Women", href: "#" },
  { label: "Men", href: "#" },
  { label: "Home & Garden", href: "#" },
  { label: "Furniture & Lights", href: "#" },
  { label: "Electricals", href: "#" },
  { label: "Baby & Kids", href: "#" },
  { label: "Beauty", href: "#" },
  { label: "Sport & Travel", href: "#" },
  { label: "Gifts", href: "#" },
  { label: "Brands", href: "#" },
  { label: "Sale & Offers", href: "#" },
];

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

export function JohnLewisSiteHeader() {
  return (
    <header className="border-b border-[#ece7df] bg-white text-[#141414]">
      <div className="hidden border-b border-[#f0ebe4] px-4 py-2 text-[0.82rem] md:block">
        <div className="jl-shell flex items-center justify-between gap-4">
          <a
            href="#"
            className="text-[0.78rem] uppercase tracking-[0.28em]"
          >
            Never Knowingly Undersold
          </a>
          <div className="flex items-center gap-5 text-[#4f4942]">
            {utilityLinks.filter((link) => !shouldHideLabel(link.label)).map((link) => (
              <SiteLink
                key={link.label}
                label={link.label}
                href={link.href}
                className={`inline-flex items-center gap-1 ${
                  link.underlined ? "underline underline-offset-4" : ""
                }`}
              >
                <span>{link.label}</span>
                {link.chevron ? <ChevronDownIcon className="h-3 w-3 text-[#6d675f]" /> : null}
              </SiteLink>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden px-4 py-5 md:block">
        <div className="jl-shell flex items-center gap-10">
          <Link href={siteRoutes.home} className="shrink-0">
            <img src="/joheiewisepro-logo.svg" alt="joheiewisepro Logo" className="h-[32px] w-auto object-contain max-w-full" />
          </Link>

          <form
            action="#"
            className="flex h-12 flex-1 items-center overflow-hidden rounded-full border border-[#d8d2cb] bg-[#fbfaf7]"
          >
            <button
              type="submit"
              aria-label="Search"
              className="inline-flex h-full items-center justify-center px-4 text-[#141414]"
            >
              <SearchIcon />
            </button>
            <input
              type="search"
              name="search-term"
              placeholder="Search product or brand"
              className="h-full w-full border-0 bg-transparent pr-5 text-[0.95rem] text-[#141414] placeholder:text-[#7e776f] focus:outline-none"
            />
          </form>

          <div className="flex items-center gap-5 text-sm text-[#141414]">
            <a href="#" className="jl-header-tool">
              <StoreIcon />
              <span>Stores</span>
            </a>
            <div className="flex flex-col gap-0.5">
              <a href="#" className="pl-[1.85rem] text-[0.72rem] text-[#6a635b]">
                Sign in
              </a>
              <a href="#" className="jl-header-tool">
                <UserIcon />
                <span>Account</span>
              </a>
            </div>
            <a href="#" className="jl-header-tool">
              <BasketIcon />
              <span>Basket</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-[#ece7df] px-4 py-3 md:hidden">
        <div className="jl-shell flex items-start justify-between gap-4">
          <Link href={siteRoutes.home} className="pt-1">
            <img src="/joheiewisepro-logo.svg" alt="joheiewisepro Logo" className="h-[32px] w-auto object-contain max-w-full" />
          </Link>
          <div className="flex items-start gap-4 text-[0.68rem] uppercase tracking-[0.16em] text-[#141414]">
            <a href="#" className="flex flex-col items-center gap-1">
              <StoreIcon className="h-5 w-5" />
              <span>Stores</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1">
              <UserIcon className="h-5 w-5" />
              <span>Account</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1">
              <BasketIcon className="h-5 w-5" />
              <span>Basket</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1">
              <MenuIcon className="h-5 w-5" />
              <span>Menu</span>
            </a>
          </div>
        </div>
        <form
          action="#"
          className="mt-4 flex h-12 items-center overflow-hidden rounded-full border border-[#d8d2cb] bg-white"
        >
          <button
            type="submit"
            aria-label="Search"
            className="inline-flex h-full items-center justify-center px-4 text-[#141414]"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
          <input
            type="search"
            name="search-term"
            placeholder="Search product or brand"
            className="h-full w-full border-0 bg-transparent pr-4 text-[0.95rem] text-[#141414] placeholder:text-[#7e776f] focus:outline-none"
          />
        </form>
      </div>

      <div className="hidden overflow-x-auto px-4 md:block">
        <nav className="jl-shell flex min-w-max items-center gap-6 py-3 text-[0.94rem]">
          {departmentLinks.map((link) => (
            <SiteLink
              key={link.label}
              label={link.label}
              href={link.href}
              className={link.label === "Sale & Offers" ? "font-medium text-[#b64a2b]" : "text-[#141414]"}
            >
              {link.label}
            </SiteLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
