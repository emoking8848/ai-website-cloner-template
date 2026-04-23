import { SiteLink } from "@/components/site-link";
import { shouldHideHeading, shouldHideLabel } from "@/lib/site-routes";

type FooterColumn = {
  heading: string;
  links: Array<{ label: string; href: string }>;
};

type SocialLink = {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "pinterest" | "youtube" | "tiktok" | "x";
};

const footerColumns: FooterColumn[] = [
  {
    heading: "Help",
    links: [
      { label: "Contact us", href: "#" },
      { label: "Customer services", href: "#" },
      { label: "Product support", href: "#" },
      { label: "Our shops", href: "#" },
      { label: "Price promise", href: "#" },
    ],
  },
  {
    heading: "Delivery",
    links: [
      { label: "Delivery & collection", href: "#" },
      { label: "Track your order", href: "#" },
      { label: "Returns & refunds", href: "#" },
    ],
  },
  {
    heading: "Shopping",
    links: [
      { label: "Gift Cards & vouchers", href: "#" },
      { label: "Services", href: "#" },
      { label: "Buying guides", href: "#" },
      { label: "My Joheiewisepro", href: "#" },
      { label: "Basket", href: "#" },
      { label: "Wish List", href: "#" },
      { label: "Brands A-Z", href: "#" },
      { label: "Offers", href: "#" },
    ],
  },
  {
    heading: "More from us",
    links: [
      { label: "Jobs", href: "https://www.jlpjobs.com/" },
      { label: "Waitrose & Partners", href: "https://www.waitrose.com/" },
      { label: "About the Joheiewisepro Partnership", href: "#" },
      { label: "Joheiewisepro for Business", href: "#" },
      { label: "Protect+", href: "#" },
    ],
  },
  {
    heading: "Joheiewisepro Money",
    links: [
      { label: "Payment plans", href: "#" },
      { label: "Partnership Credit Card", href: "#" },
      { label: "Travel money", href: "#" },
      { label: "Insurance", href: "#" },
      { label: "Loans", href: "#" },
    ],
  },
  {
    heading: "Terms",
    links: [
      { label: "Terms and conditions", href: "#" },
      { label: "Secure shopping", href: "#" },
      { label: "Product recalls and safety notices", href: "#" },
      { label: "Privacy notice", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Accessibility", href: "#" },
      { label: "Reviews policy", href: "#" },
    ],
  },
];

const footerTerms = [
  { label: "Terms and conditions", href: "#" },
  { label: "Secure shopping", href: "#" },
  { label: "Product recalls", href: "#" },
  { label: "Privacy notice", href: "#" },
  { label: "Cookies", href: "#" },
];

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Pinterest", href: "#", icon: "pinterest" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "TikTok", href: "#", icon: "tiktok" },
  { label: "X", href: "https://x.com/jlandpartners", icon: "x" },
];

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  switch (icon) {
    case "facebook":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M13.3 21v-7.8h2.6l.4-3h-3v-1.9c0-.9.2-1.5 1.5-1.5H16V4.1c-.7-.1-1.6-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.1H7v3h2.2V21h4.1Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "pinterest":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M12.1 3.5c-4.5 0-6.8 3.2-6.8 5.9 0 1.6.6 3.1 2 3.6.2.1.4 0 .4-.2l.4-1.5c.1-.2 0-.3-.1-.5-.4-.5-.6-1.2-.6-2 0-2.6 2-5 5.2-5 2.8 0 4.4 1.7 4.4 4 0 3-1.3 5.5-3.3 5.5-1.1 0-1.9-.9-1.6-2 .3-1.3.9-2.6.9-3.5 0-.8-.4-1.5-1.4-1.5-1.1 0-2 1.1-2 2.7 0 1 .3 1.7.3 1.7L8.8 17c-.4 1.7-.1 3.8 0 4 .1.1.2.1.3 0 .1-.2 1.2-1.4 1.6-3.2l.7-2.7c.3.5 1.2 1 2.2 1 2.9 0 4.9-2.7 4.9-6.2 0-2.7-2.3-5.1-5.8-5.1Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M21 8.4c-.2-1.2-1.1-2.2-2.3-2.4C17.2 5.7 12 5.7 12 5.7s-5.2 0-6.7.3C4.1 6.2 3.2 7.2 3 8.4c-.3 1.6-.3 3.6-.3 3.6s0 2 .3 3.6c.2 1.2 1.1 2.2 2.3 2.4 1.5.3 6.7.3 6.7.3s5.2 0 6.7-.3c1.2-.2 2.1-1.2 2.3-2.4.3-1.6.3-3.6.3-3.6s0-2-.3-3.6ZM10.2 15.2V8.8l5.5 3.2-5.5 3.2Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M14.9 4h2.7c.2 1.7 1.2 3.1 2.8 3.8v2.8c-1.1 0-2.2-.3-3.2-.8v5.2c0 3-2.4 5.4-5.4 5.4S6.4 18 6.4 15s2.4-5.4 5.4-5.4c.3 0 .6 0 .9.1v2.8c-.3-.1-.6-.2-.9-.2-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7V4Z" />
        </svg>
      );
    case "x":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M4 4h3.9l4.5 6.1L17.6 4H20l-6.4 7.3L20.8 20H17l-4.8-6.5L6.5 20H4l7-8Z" />
        </svg>
      );
  }
}

export function JohnLewisSiteFooter() {
  return (
    <footer className="mt-auto bg-[#102b2b] text-white">
      <section className="border-t border-white/15 px-4 py-3 md:py-8">
        <div className="jl-footer-shell hidden gap-8 px-4 md:grid md:grid-cols-2 xl:grid-cols-6">
          {footerColumns.filter((column) => !shouldHideHeading(column.heading)).map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-white/65">{column.heading}</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                {column.links.filter((link) => !shouldHideLabel(link.label)).map((link) => (
                  <li key={link.label}>
                    <SiteLink label={link.label} href={link.href} className="jl-footer-link">
                      {link.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="jl-footer-shell space-y-2 px-4 md:hidden">
          {footerColumns.filter((column) => !shouldHideHeading(column.heading)).map((column) => (
            <details key={column.heading} className="jl-footer-summary border-b border-white/15 py-3">
              <summary className="cursor-pointer list-none text-sm font-medium uppercase tracking-[0.22em] text-white/80">
                {column.heading}
              </summary>
              <ul className="mt-4 space-y-3 pb-1 text-sm text-white/85">
                {column.links.filter((link) => !shouldHideLabel(link.label)).map((link) => (
                  <li key={link.label}>
                    <SiteLink label={link.label} href={link.href} className="jl-footer-link">
                      {link.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-white/15 px-4 py-6">
        <div className="jl-footer-shell flex flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <a
            href="#"
            className="text-[1.05rem] uppercase tracking-[0.34em] text-white"
          >
            Never Knowingly Undersold
          </a>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/90 transition-colors hover:border-white hover:text-white"
              >
                <SocialIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/15 px-4 py-5">
        <div className="jl-footer-shell space-y-4 px-4 text-sm text-white/68">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <ul className="hidden flex-wrap gap-x-5 gap-y-2 md:flex">
              {footerTerms.filter((item) => !shouldHideLabel(item.label)).map((item) => (
                <li key={item.label}>
                  <SiteLink label={item.label} href={item.href} className="jl-footer-link !text-white/70">
                    {item.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
            <p>Copyright (c) Joheiewisepro plc 2001 - 2026</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
