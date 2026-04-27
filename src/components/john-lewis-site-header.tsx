/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import { SiteLink } from "@/components/site-link";
import { getHeaderNavigationGroups } from "@/lib/navigation-config";
import { shouldHideLabel, siteRoutes } from "@/lib/site-routes";

const utilityLinks = [
  { label: "My Joheiewisepro", href: siteRoutes.login, underlined: true },
  { label: "Ways to shop", href: siteRoutes.category, chevron: true },
  { label: "Help", href: siteRoutes.contact, chevron: true },
  { label: "Joheiewisepro Money", href: "#", chevron: true },
  { label: "Our stores", href: siteRoutes.popularProducts, underlined: true },
];

const promoBannerMessage = "150th Anniversary: Thanks to you, 50% off merchandise while stocks last.";

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

function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <Link href={siteRoutes.home} className="flex items-center justify-center">
      <img
        src="/joheiewisepro-logo.svg"
        alt="Joheiewisepro"
        className={compact ? "w-[11rem] h-auto object-contain" : "w-[14.5rem] h-auto object-contain"}
      />
    </Link>
  );
}

export function JohnLewisSiteHeader() {
  const navigationGroups = getHeaderNavigationGroups();

  return (
    <header className="border-b border-[#ece7df] bg-white text-[#141414]">
      <div className="bg-[#123232] px-4 py-[0.42rem] text-white">
        <div className="jl-header-shell flex items-center justify-center text-[0.7rem] uppercase tracking-[0.18em] text-white/78 md:justify-between">
          <span className="text-center text-white/88">Never Knowingly Undersold</span>
          <div className="hidden items-center justify-end gap-x-5 gap-y-2 md:flex">
            {utilityLinks.filter((link) => !shouldHideLabel(link.label)).map((link) => (
              <SiteLink
                key={link.label}
                label={link.label}
                href={link.href}
                className={`inline-flex items-center gap-1.5 ${link.underlined ? "underline underline-offset-[0.24rem]" : ""}`}
              >
                <span>{link.label}</span>
                {link.chevron ? <ChevronDownIcon className="h-3.5 w-3.5" /> : null}
              </SiteLink>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="hidden border-b border-[#e7e1d9] px-4 py-4 md:block">
          <div className="jl-header-shell grid items-center justify-center md:grid-cols-[14.5rem_25.5rem_14.5rem]">
            <div className="flex w-[14.5rem] shrink-0 justify-center">
              <BrandLockup />
            </div>

            <form
              action="#"
              className="flex h-[36px] w-[25.5rem] items-center overflow-hidden border border-[#cfc8c0] bg-white"
            >
              <button
                type="submit"
                aria-label="Search"
                className="inline-flex h-full items-center justify-center px-4 text-[#141414]"
              >
                <SearchIcon className="h-[1rem] w-[1rem]" />
              </button>
              <input
                type="search"
                name="search-term"
                placeholder="Search product or brand"
                className="h-full w-full border-0 bg-transparent px-5 text-[13px] leading-[18px] text-[#141414] placeholder:text-[#7e776f] focus:outline-none"
              />
            </form>

            <div className="flex w-[16.5rem] shrink-0 items-center justify-end gap-5 pl-6 text-[#141414]">
              <a
                href={siteRoutes.popularProducts}
                className="inline-flex items-center gap-[0.38rem] text-[14px] font-medium leading-none tracking-[-0.01em] text-[#141414] transition-colors hover:text-[#5b544d]"
              >
                <StoreIcon className="h-[1.08rem] w-[1.08rem]" />
                <span>Stores</span>
              </a>
              <a
                href={siteRoutes.login}
                className="inline-flex items-center gap-[0.38rem] text-[14px] font-medium leading-none tracking-[-0.01em] text-[#141414] transition-colors hover:text-[#5b544d]"
              >
                <UserIcon className="h-[1.08rem] w-[1.08rem]" />
                <span>Account</span>
              </a>
              <a
                href={siteRoutes.cart}
                className="inline-flex items-center gap-[0.38rem] text-[14px] font-medium leading-none tracking-[-0.01em] text-[#141414] transition-colors hover:text-[#5b544d]"
              >
                <BasketIcon className="h-[1.08rem] w-[1.08rem]" />
                <span>Basket</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-b border-[#e7e1d9] px-4 py-3 md:hidden">
          <div className="jl-header-shell flex items-start justify-between gap-4">
            <BrandLockup compact />
            <div className="flex items-start gap-4 text-[0.68rem] uppercase tracking-[0.16em] text-[#141414]">
              <a href={siteRoutes.popularProducts} className="flex flex-col items-center gap-1">
                <StoreIcon className="h-5 w-5" />
                <span>Stores</span>
              </a>
              <a href={siteRoutes.login} className="flex flex-col items-center gap-1">
                <UserIcon className="h-5 w-5" />
                <span>Account</span>
              </a>
              <a href={siteRoutes.cart} className="flex flex-col items-center gap-1">
                <BasketIcon className="h-5 w-5" />
                <span>Basket</span>
              </a>
              <details className="relative">
                <summary className="flex cursor-pointer list-none flex-col items-center gap-1">
                  <MenuIcon className="h-5 w-5" />
                  <span>Menu</span>
                </summary>
                <div className="absolute right-0 top-full z-50 mt-3 w-[min(24rem,calc(100vw-2rem))] rounded-[1.4rem] border border-[#d8d2cb] bg-white p-4 shadow-[0_30px_80px_-50px_rgba(20,20,20,0.45)]">
                  <div className="space-y-3">
                    {navigationGroups.map((group) => (
                      group.href ? (
                        <Link
                          key={group.label}
                          href={group.href}
                          className="flex rounded-[1rem] border border-[#ece7df] px-4 py-3 text-sm font-medium text-[#141414] transition-colors hover:bg-[#fbfaf7]"
                        >
                          {group.label}
                        </Link>
                      ) : (
                        <details key={group.label} className="rounded-[1rem] border border-[#ece7df] px-4 py-3">
                          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-[#141414]">
                            <span className={group.accent ? "text-[#b64a2b]" : ""}>{group.label}</span>
                            <ChevronDownIcon className="h-3.5 w-3.5 text-[#6d675f]" />
                          </summary>
                          <div className="mt-3 grid gap-4">
                            {group.sections.map((section) => (
                              <div key={section.heading}>
                                <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#8c847b]">
                                  {section.heading}
                                </p>
                                <div className="mt-2 grid gap-2">
                                  {section.links.map((link) => (
                                    <Link
                                      key={link.href}
                                      href={link.href}
                                      className="text-sm leading-6 text-[#141414]"
                                    >
                                      {link.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </details>
                      )
                    ))}
                  </div>
                </div>
              </details>
            </div>
          </div>
          <form
            action="#"
            className="mt-4 flex h-[2.9rem] items-center overflow-hidden border border-[#cfc8c0] bg-white"
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

        <div className="hidden border-b border-[#e7e1d9] px-4 md:block">
          <nav className="jl-header-shell flex min-w-max items-center justify-center gap-5 py-0 text-[14px] leading-[22px] xl:gap-7">
            {navigationGroups.map((group) => (
              group.href ? (
                <Link
                  key={group.label}
                  href={group.href}
                  className={`jl-header-link inline-flex h-[54px] items-center ${
                    group.accent ? "font-medium text-[#b64a2b]" : "text-[#141414]"
                  }`}
                >
                  {group.label}
                </Link>
              ) : (
                <div key={group.label} className="group relative">
                  <button
                    type="button"
                    className={`jl-header-link inline-flex h-[54px] items-center gap-2 ${
                      group.accent ? "font-medium text-[#b64a2b]" : "text-[#141414]"
                    }`}
                  >
                    <span>{group.label}</span>
                    <ChevronDownIcon className="h-3.5 w-3.5 text-[#6d675f]" />
                  </button>
                  <div className="invisible absolute left-0 top-full z-50 w-[min(56rem,88vw)] pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="rounded-[1.5rem] border border-[#ddd8d1] bg-white p-6 shadow-[0_24px_70px_-45px_rgba(20,20,20,0.38)]">
                      <div className={`grid gap-8 ${group.sections.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"}`}>
                        {group.sections.map((section) => (
                          <div key={section.heading}>
                            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#8c847b]">
                              {section.heading}
                            </p>
                            <div className="mt-4 grid gap-3">
                              {section.links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="text-[0.98rem] leading-6 text-[#141414] transition-colors hover:text-[#5d5750]"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </nav>
        </div>
      </div>

      <div className="bg-black px-4 py-[0.42rem] text-white">
        <div className="jl-header-shell flex items-center justify-center">
          <div className="max-w-[72rem] text-center text-[0.86rem] font-medium tracking-[-0.01em]">
            {promoBannerMessage}
          </div>
        </div>
      </div>
    </header>
  );
}
