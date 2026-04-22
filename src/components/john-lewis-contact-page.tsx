/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import { SiteLink } from "@/components/site-link";
import { shouldHideHeading, shouldHideLabel, siteRoutes } from "@/lib/site-routes";

type HeaderLink = {
  label: string;
  href: string;
  underlined?: boolean;
  chevron?: boolean;
  accent?: boolean;
};

type DecisionOption = {
  label: string;
  href: string;
};

type SupportCard = {
  logo: string;
  logoAlt: string;
  logoClassName?: string;
  description: string;
  linkLabel: string;
  href: string;
};

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  heading: string;
  links: FooterLink[];
};

type SocialLink = {
  label: string;
  href: string;
  icon: "facebook" | "x" | "youtube" | "pinterest" | "instagram" | "tiktok";
};

const utilityLinks: HeaderLink[] = [
  {
    label: "My Joheiewisepro",
    href: "#",
    underlined: true,
  },
  { label: "Ways to shop", href: "#", chevron: true },
  { label: "Help", href: "#", chevron: true },
  {
    label: "Joheiewisepro Money",
    href: "#",
    chevron: true,
  },
  {
    label: "Our stores",
    href: "#",
    underlined: true,
  },
];

const departmentLinks: HeaderLink[] = [
  { label: "Women", href: "#" },
  { label: "Men", href: "#" },
  { label: "Home & Garden", href: "#" },
  { label: "Furniture & Lights", href: "#" },
  { label: "Electricals", href: "#" },
  { label: "Baby & Kids", href: "#" },
  { label: "Beauty", href: "#" },
  { label: "Sports & Fitness", href: "#" },
  { label: "Holiday Shop", href: "#" },
  { label: "Gifts", href: "#" },
  { label: "Brands", href: "#" },
  { label: "Sale & Offers", href: "#", accent: true },
];

const decisionOptions: DecisionOption[] = [
  {
    label: "Ways to return or exchange an item",
    href: "#",
  },
  {
    label: "Refunds for an item returned",
    href: "#",
  },
  {
    label: "General policy questions",
    href: "#",
  },
];

const supportCards: SupportCard[] = [
  {
    logo: "https://www.johnlewis.com/customer-services/_next/static/media/logo-my-john-lewis.89b6ed46.svg",
    logoAlt: "My Joheiewisepro",
    logoClassName: "h-[18px] w-auto",
    description: "Join us for exclusive rewards",
    linkLabel: "Visit My Joheiewisepro",
    href: "#",
  },
  {
    logo: "https://www.johnlewis.com/customer-services/_next/static/media/logo-buyagain.c80e3421.svg",
    logoAlt: "Buy Again",
    logoClassName: "h-6 w-auto",
    description: "All your previously purchased products in one place",
    linkLabel: "Visit Buy Again",
    href: "#",
  },
  {
    logo: "https://www.johnlewis.com/customer-services/_next/static/media/logo-wishlist.ccb94151.svg",
    logoAlt: "Wish List",
    logoClassName: "h-6 w-auto",
    description: "Create a Wish List for any occasion",
    linkLabel: "Visit Wish List",
    href: "#",
  },
  {
    logo: "https://www.johnlewis.com/customer-services/_next/static/media/logo-partnership-card.ffdcd337.svg",
    logoAlt: "Partnership Card",
    logoClassName: "h-[13px] w-auto",
    description: "Earn points with our credit card",
    linkLabel: "Visit Joheiewisepro Partnership Card",
    href: "#",
  },
  {
    logo: "https://www.johnlewis.com/customer-services/_next/static/media/logo-john-lewis-insurance.18797d3f.svg",
    logoAlt: "Insurance",
    logoClassName: "h-[13px] w-auto",
    description: "With Joheiewisepro Money, you always know what to expect",
    linkLabel: "Visit Joheiewisepro Insurance",
    href: "#",
  },
  {
    logo: "https://www.johnlewis.com/customer-services/_next/static/media/logo-john-lewis-foreign-currency.5fa51e0f.svg",
    logoAlt: "Foreign Currency",
    logoClassName: "h-[13px] w-auto",
    description: "Make the most of your money this holiday",
    linkLabel: "Visit Joheiewisepro Foreign Currency",
    href: "#",
  },
  {
    logo: "https://www.johnlewis.com/customer-services/_next/static/media/logo-john-lewis-opticians.c14bee35.svg",
    logoAlt: "Opticians",
    logoClassName: "h-[13px] w-auto",
    description: "Personal advice, the latest ranges and specialist attention",
    linkLabel: "Visit Joheiewisepro Opticians",
    href: "#",
  },
  {
    logo: "https://www.johnlewis.com/customer-services/_next/static/media/logo-john-lewis-for-business.3eb2f9b6.svg",
    logoAlt: "Joheiewisepro for Business",
    logoClassName: "h-[23px] w-auto",
    description: "A commercial solution to suit you",
    linkLabel: "Visit Joheiewisepro for Business",
    href: "#",
  },
  {
    logo: "https://www.johnlewis.com/customer-services/_next/static/media/logo-waitrose-and-partners.a5388b4d.svg",
    logoAlt: "Waitrose & Partners",
    logoClassName: "h-[36px] w-auto md:h-[44px]",
    description: "Everything we do goes into everything you taste",
    linkLabel: "Visit Waitrose & Partners",
    href: "https://www.waitrose.com/",
  },
];

const footerHelpLinks: FooterLink[] = [
  { label: "Contact us", href: "#" },
  { label: "Customer services", href: "#" },
  { label: "Product support", href: "#" },
  { label: "Our shops", href: "#" },
  {
    label: "Price promise",
    href: "#",
  },
];

const footerDeliveryLinks: FooterLink[] = [
  {
    label: "Delivery & collection",
    href: "#",
  },
  { label: "Track your order", href: "#" },
  { label: "Returns & refunds", href: "#" },
];

const footerShoppingLinks: FooterLink[] = [
  {
    label: "Gift Cards & vouchers",
    href: "#",
  },
  { label: "Services", href: "#" },
  { label: "Buying guides", href: "#" },
  { label: "My Joheiewisepro", href: "#" },
  { label: "Basket", href: "#" },
  { label: "Wish List", href: "#" },
  { label: "Brands A-Z", href: "#" },
  { label: "Inspiration", href: "#" },
  { label: "Offers", href: "#" },
  { label: "Events", href: "#" },
];

const footerMoreLinks: FooterLink[] = [
  { label: "Jobs", href: "https://www.jlpjobs.com/" },
  { label: "Waitrose & Partners", href: "https://www.waitrose.com/" },
  {
    label: "About the Joheiewisepro Partnership",
    href: "#",
  },
  { label: "Joheiewisepro for Business", href: "#" },
  { label: "Happier futures", href: "#" },
  { label: "Protect+", href: "#" },
];

const footerMoneyLinks: FooterLink[] = [
  { label: "Payment plans", href: "#" },
  {
    label: "Partnership Credit Card",
    href: "#",
  },
  { label: "Travel money", href: "#" },
  { label: "Home insurance", href: "#" },
  { label: "Pet insurance", href: "#" },
  {
    label: "Car insurance",
    href: "#",
  },
  { label: "Loans", href: "#" },
];

const footerTermsLinks: FooterLink[] = [
  {
    label: "Terms and conditions",
    href: "#",
  },
  {
    label: "Secure shopping",
    href: "#",
  },
  {
    label: "Product recalls and safety notices",
    href: "#",
  },
  {
    label: "Modern slavery statement",
    href: "#",
  },
  {
    label: "Privacy notice",
    href: "#",
  },
  {
    label: "Cookies",
    href: "#",
  },
  {
    label: "Sustainability",
    href: "#",
  },
  {
    label: "Accessibility",
    href: "#",
  },
  {
    label: "Reviews policy",
    href: "#",
  },
];

const mobileFooterSections: FooterSection[] = [
  { heading: "Help", links: footerHelpLinks },
  { heading: "Delivery", links: footerDeliveryLinks },
  { heading: "Shopping", links: footerShoppingLinks },
  { heading: "More from us", links: footerMoreLinks },
  { heading: "Joheiewisepro Money", links: footerMoneyLinks },
  { heading: "Terms", links: footerTermsLinks },
];

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "X", href: "#", icon: "x" },
  { label: "Youtube", href: "#", icon: "youtube" },
  { label: "Pinterest", href: "#", icon: "pinterest" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "TikTok", href: "#", icon: "tiktok" },
];

const legalParagraphs = [
  "Joheiewisepro plc. is an appointed representative for Joheiewisepro Finance Limited for insurance distribution and credit broking. Registered with the Financial Conduct Authority (Firm Reference Number: 1018169). Registered in England and Wales (Company Number: 15785347). Registered office: 1 Drummond Gate, Pimlico, London SW1V 2QQ . Joheiewisepro plc acts as a credit broker and not a lender. Credit provided by Creation Consumer Finance Limited. Joheiewisepro Money and Joheiewisepro Finance are trading names of Joheiewisepro plc. Registered office: 1 Drummond Gate, Pimlico, London SW1V 2QQ . Registered in England and Wales (Company Number: 233462). Authorised and regulated by the Financial Conduct Authority (Firm Reference Number: 416011) for the purpose of introducing the credit provided by Creation Consumer Finance Ltd (Company Number: NI032565). Registered office: Wellington Buildings, 2-4 Wellington Street, Belfast BT1 6HT . Creation Consumer Finance Ltd is authorised and regulated by the Financial Conduct Authority (Firm Reference Number: 311518). Credit subject to status. 18+ years. UK residents. Terms and conditions apply. Find out more about Payment Plans.",
  "© Joheiewisepro plc 2001 - 2026",
  "Klarna's Pay in 3 / Pay in 30 days are unregulated credit agreements. Borrowing more than you can afford or paying late may negatively impact your financial status and ability to obtain credit. 18+, UK residents only. Subject to status. T&Cs and late fees apply.",
  "Protect Plus policies are provided by Domestic & General Insurance PLC. Registered Office: Swan Court, 11 Worple Road, Wimbledon, London SW19 4JS, United Kingdom. Registered in England and Wales, Company No. 485850. Domestic & General Insurance PLC is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority.",
  "Domestic & General Insurance PLC is an insurance undertaking, not an intermediary. Domestic & General Insurance PLC are the underwriter of the insurance and do not provide a personal recommendation or advice. All prices include all applicable taxes (including IPT). Your information will be handled in accordance with Domestic & General's privacy policy which can be found in your terms and conditions.",
];

export function JohnLewisContactPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-[#141414]">
      <JohnLewisHeader />

      <main id="main">
        <section className="border-t border-[#e4dfd7]">
          <div className="mx-auto max-w-[1248px] px-4 md:px-6">
            <h1 className="py-8 text-center text-[24px] font-medium leading-[28px] tracking-[-0.03em] md:mb-6 md:text-[32px] md:leading-[36px]">
              Contact us
            </h1>

            <div className="mx-auto max-w-[996px]">
              <div className="flex items-center justify-between gap-4 border-y border-[#d9d4cc] py-4">
                <div className="flex items-center gap-5 text-[16px] leading-[22px]">
                  <CheckIcon className="h-4 w-4 shrink-0" />
                  <a
                    href="#"
                    className="underline decoration-[1px] underline-offset-[3px]"
                  >
                    Returns & refunds
                  </a>
                </div>
                <a
                  href="#"
                  className="text-[16px] leading-[22px] underline decoration-[1px] underline-offset-[3px]"
                >
                  Edit
                </a>
              </div>

              <div className="pt-8 md:pt-6">
                <h2 className="text-center text-[20px] font-normal leading-[28px]">
                  What would you like to find out?
                </h2>

                <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6 md:px-[127px]">
                  {decisionOptions.map((option) => (
                    <a
                      key={option.label}
                      href={option.href}
                      className="flex min-h-[102px] items-center border border-[#d8d8d8] bg-white px-4 py-8 text-left text-[16px] leading-[22px] transition-colors hover:bg-[#fbfaf8] md:min-h-[148px] md:justify-center md:px-8 md:text-center"
                    >
                      <span className="max-w-[16ch]">{option.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <DividerLabel label="FAQs" className="mx-auto mt-10 max-w-[776px] md:mt-12" />

            <div className="mx-auto mt-12 max-w-[760px] text-center md:mt-12">
              <h2 className="text-[20px] font-normal leading-[28px]">
                Got a question? Search for help topics
              </h2>

              <form
                action="#"
                className="mt-4 flex h-12 items-center overflow-hidden border border-[#6f6f6f] bg-white"
              >
                <input
                  type="text"
                  id="search"
                  placeholder="Search keywords or a question"
                  className="h-full w-full border-0 bg-transparent px-3 text-[16px] leading-[19px] text-[#141414] placeholder:text-[#6f6f6f] focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Search help topics"
                  className="grid h-full w-12 place-items-center border-l border-[#6f6f6f] text-[#141414]"
                >
                  <SearchIcon className="h-6 w-6" />
                </button>
              </form>
            </div>

            <div className="mx-auto mt-16 max-w-[776px] border-t border-[#d9d4cc] pt-10 pb-2 text-center">
              <h3 className="text-[16px] font-semibold leading-[22px]">Complaints process</h3>
              <button
                type="button"
                className="mt-7 inline-flex items-center gap-3 border-b border-[#141414] pb-1 text-[16px] leading-[22px]"
              >
                Find out more
                <ChevronDownIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="pb-14 pt-7 md:pb-16 md:pt-9">
          <div className="mx-auto max-w-[1248px] px-4 md:px-6">
            <div className="grid gap-y-12 md:grid-cols-3 md:gap-x-6 md:gap-y-12">
              {supportCards.filter((card) => !shouldHideLabel(card.logoAlt) && !shouldHideLabel(card.linkLabel)).map((card) => (
                <div key={card.logoAlt} className="space-y-4">
                  <img
                    src={card.logo}
                    alt={card.logoAlt}
                    className={card.logoClassName ?? "h-6 w-auto"}
                  />
                  <p className="text-[16px] leading-[22px] text-[#141414]">{card.description}</p>
                  <SiteLink
                    label={card.linkLabel}
                    href={card.href}
                    className="text-[16px] leading-[22px] underline decoration-[1px] underline-offset-[3px]"
                  >
                    {card.linkLabel}
                  </SiteLink>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <JohnLewisFooter />
    </div>
  );
}

function JohnLewisHeader() {
  return (
    <header className="bg-white">
      <div className="hidden bg-[#102b2b] text-white md:block">
        <div className="mx-auto flex h-[29px] max-w-[1440px] items-center justify-between px-8 text-[11px] leading-none">
          <a
            href="#"
            className="text-[11px] tracking-[0.24em]"
          >
            NEVER KNOWINGLY UNDERSOLD
          </a>

          <nav className="flex items-center gap-6">
              {utilityLinks.filter((link) => !shouldHideLabel(link.label)).map((link) => (
                <SiteLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                  className={`inline-flex items-center gap-1 text-[11px] ${
                    link.underlined ? "underline decoration-[1px] underline-offset-[3px]" : ""
                  }`}
                >
                  {link.label}
                  {link.chevron ? <ChevronDownIcon className="h-3 w-3" /> : null}
                </SiteLink>
              ))}
          </nav>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="mx-auto flex h-[84px] max-w-[1200px] items-center justify-between gap-8 px-4">
          <Link href={siteRoutes.home} className="shrink-0">
            <img src="/joheiewisepro-logo.svg" alt="joheiewisepro Logo" className="h-[32px] w-auto object-contain max-w-full" />
          </Link>

          <form
            action="#"
            className="flex h-12 w-full max-w-[560px] items-center overflow-hidden border border-[#6f6f6f] bg-white"
          >
            <button type="submit" aria-label="Search" className="grid h-full w-14 place-items-center text-[#141414]">
              <SearchIcon className="h-8 w-8" />
            </button>
            <input
              type="search"
              name="search-term"
              placeholder="Search product or brand"
              className="h-full w-full border-0 bg-transparent pr-4 text-[16px] text-[#141414] placeholder:text-[#6f6f6f] focus:outline-none"
            />
          </form>

          <div className="flex shrink-0 items-center gap-6 text-[#141414]">
            <a href="#" className="text-[16px] leading-[22px]">
              Sign in
            </a>
            <a href="#" aria-label="Account">
              <UserIcon className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Wish List">
              <HeartIcon className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Basket">
              <BasketIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="border-y border-[#e4dfd7]">
          <nav className="mx-auto flex h-[53px] max-w-[1248px] items-center gap-8 overflow-x-auto px-4 text-[15px] leading-[22px] whitespace-nowrap">
            {departmentLinks.map((link) => (
              <SiteLink
                key={link.label}
                label={link.label}
                href={link.href}
                className={link.accent ? "text-[#d3122a]" : "text-[#141414]"}
              >
                {link.label}
              </SiteLink>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-b border-[#d9d4cc] px-4 py-4 md:hidden">
        <div className="flex items-start justify-between gap-4">
            <Link href={siteRoutes.home} className="shrink-0">
              <img src="/joheiewisepro-logo.svg" alt="joheiewisepro Logo" className="h-[32px] w-auto object-contain max-w-full" />
            </Link>

          <div className="grid grid-cols-4 gap-4 text-[10px] leading-none text-[#141414]">
            <HeaderToolLink href="#" label="Stores">
              <StoreIcon className="h-6 w-6" />
            </HeaderToolLink>
            <HeaderToolLink href="#" label="Account">
              <UserIcon className="h-6 w-6" />
            </HeaderToolLink>
            <HeaderToolLink href="#" label="Basket">
              <BasketIcon className="h-6 w-6" />
            </HeaderToolLink>
            <HeaderToolLink href="#" label="Menu">
              <MenuIcon className="h-6 w-6" />
            </HeaderToolLink>
          </div>
        </div>

        <form
          action="#"
          className="mt-4 flex h-12 items-center overflow-hidden border border-[#6f6f6f] bg-white"
        >
          <button type="submit" aria-label="Search" className="grid h-full w-12 place-items-center text-[#141414]">
            <SearchIcon className="h-7 w-7" />
          </button>
          <input
            type="search"
            name="search-term"
            placeholder="Search product or brand"
            className="h-full w-full border-0 bg-transparent pr-4 text-[16px] text-[#141414] placeholder:text-[#6f6f6f] focus:outline-none"
          />
        </form>
      </div>
    </header>
  );
}

function HeaderToolLink({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <SiteLink label={label} href={href} className="flex flex-col items-center gap-1">
      {children}
      <span>{label}</span>
    </SiteLink>
  );
}

function DividerLabel({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#d9d4cc]" />
      <span className="relative bg-[#f7f5f2] px-4 text-[24px] font-medium leading-[28px] tracking-[-0.03em]">
        {label}
      </span>
    </div>
  );
}

function JohnLewisFooter() {
  return (
    <footer id="footer" className="bg-[#102b2b] text-white">
      <section className="border-t border-white/15 px-4 py-8 text-center md:py-8">
        <div className="mx-auto max-w-[1200px]">
          <p className="jl-eyebrow text-white">Be in the know</p>
          <p className="mt-4 text-[16px] leading-[22px] text-white">
            Get inspiration, new arrivals and the latest offers to your inbox
          </p>
          <SiteLink
            label="Sign me up for emails"
            href="#"
            className="mt-6 inline-flex items-center justify-center border border-white bg-white px-7 py-3 text-[16px] font-semibold text-[#141414]"
          >
            Sign me up for emails
          </SiteLink>
        </div>
      </section>

      <section className="border-t border-white/15">
        <div className="mx-auto max-w-[1248px]">
          <div className="px-4 py-10 md:px-4 md:py-8">
            <h2 className="text-[20px] font-semibold leading-[30px]">Feedback</h2>
            <p className="mt-2 text-[16px] leading-[22px] text-white">
              Your comments help us improve our website
            </p>
            <SiteLink
              label="Leave feedback"
              href="#"
              className="mt-6 inline-flex items-center justify-center border border-white px-7 py-3 text-[16px] font-semibold text-white"
            >
              Leave feedback
            </SiteLink>
          </div>
        </div>
      </section>

      <section className="hidden border-t border-white/15 md:block">
        <div className="mx-auto grid max-w-[1248px] grid-cols-[1.05fr_1fr_1fr_1fr] gap-8 px-6 py-10">
          <div className="space-y-10">
            <FooterDesktopSection heading="Help" links={footerHelpLinks} />
            <FooterDesktopSection heading="Delivery" links={footerDeliveryLinks} />
          </div>
          <FooterDesktopSection heading="Shopping" links={footerShoppingLinks} />
          <FooterDesktopSection heading="More from us" links={footerMoreLinks} />
        </div>
      </section>

      <section className="border-t border-white/15 md:hidden">
        {mobileFooterSections.filter((section) => !shouldHideHeading(section.heading)).map((section) => (
          <FooterAccordion key={section.heading} section={section} />
        ))}
      </section>

      <section className="border-t border-white/15">
        <div className="mx-auto max-w-[1248px] px-4 py-4 md:px-6 md:py-6">
          <div className="hidden flex-wrap gap-x-6 gap-y-3 md:flex">
            {footerTermsLinks.filter((link) => !shouldHideLabel(link.label)).map((link) => (
              <SiteLink key={link.label} label={link.label} href={link.href} className="text-[15px] leading-[19px] text-white">
                {link.label}
              </SiteLink>
            ))}
          </div>

          <div className="space-y-4 text-[14px] leading-[22px] text-white md:mt-4">
            {legalParagraphs
              .filter((paragraph) => !/(Finance|Klarna|Protect Plus|Domestic & General|Payment Plans|credit broker|insurance)/i.test(paragraph))
              .map((paragraph) => (
              <p key={paragraph} className="max-w-[1216px]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/15 px-4 py-10 md:py-8">
        <div className="mx-auto flex max-w-[1248px] flex-col items-center gap-10 text-center md:flex-row md:justify-between md:gap-8 md:text-left">
          <a
            href="#"
            className="max-w-[9ch] text-[20px] uppercase tracking-[0.26em] text-white md:max-w-none md:text-[22px]"
          >
            Never Knowingly Undersold
          </a>

          <div className="flex items-center gap-7 md:gap-8">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} aria-label={link.label} className="text-white">
                <SocialIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}

function FooterDesktopSection({ heading, links }: FooterSection) {
  return (
    <div>
      <h3 className="text-[20px] font-semibold leading-[30px] text-white">{heading}</h3>
      <div className="mt-4 space-y-5">
        {links.filter((link) => !shouldHideLabel(link.label)).map((link) => (
          <SiteLink key={link.label} label={link.label} href={link.href} className="block text-[16px] leading-[19px] text-white">
            {link.label}
          </SiteLink>
        ))}
      </div>
    </div>
  );
}

function FooterAccordion({ section }: { section: FooterSection }) {
  return (
    <details className="border-b border-white/15">
      <summary className="flex cursor-pointer items-center justify-between px-4 py-4 text-[18px] font-semibold leading-[26px] text-white list-none">
        <span>{section.heading}</span>
        <ChevronDownIcon className="h-5 w-5" />
      </summary>
      <div className="space-y-4 px-4 pb-5 text-[16px] leading-[22px]">
        {section.links.filter((link) => !shouldHideLabel(link.label)).map((link) => (
          <SiteLink key={link.label} label={link.label} href={link.href} className="block text-white">
            {link.label}
          </SiteLink>
        ))}
      </div>
    </details>
  );
}

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

function HeartIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[1.8]`}>
      <path d="M12 20.2 4.7 13c-2.2-2.1-2.3-5.7-.2-7.9 2-2.1 5.3-2.1 7.4 0l.1.1.1-.1c2.1-2.1 5.4-2.1 7.4 0 2.1 2.2 2 5.8-.2 7.9Z" />
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

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={`${className} fill-none stroke-current stroke-[1.8]`}>
      <path d="m2.5 8.5 3.1 3.1L13.5 3.8" />
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

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  switch (icon) {
    case "facebook":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-current md:h-6 md:w-6">
          <path d="M13.5 21v-7h2.8l.5-3h-3.3V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.4-.1-1.4-.2-2.4-.2-2.3 0-3.9 1.4-3.9 4V11H8v3h2.7v7h2.8Z" />
        </svg>
      );
    case "x":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-current md:h-6 md:w-6">
          <path d="M18.9 4H21l-6.2 7.1L22 20h-5.7l-4.5-5.8L6.7 20H4.5l6.7-7.7L4 4h5.8l4 5.2L18.9 4Zm-2 14.3h1.2L8.6 5.6H7.3Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-current md:h-6 md:w-6">
          <path d="M21.6 7.8a2.8 2.8 0 0 0-2-2C17.9 5.3 12 5.3 12 5.3s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2A29.2 29.2 0 0 0 2 12a29.2 29.2 0 0 0 .4 4.2 2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2A29.2 29.2 0 0 0 22 12a29.2 29.2 0 0 0-.4-4.2ZM10 15.2V8.8l5.5 3.2Z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-current md:h-6 md:w-6">
          <path d="M12.2 3C7.4 3 5 6.4 5 10c0 2.2.8 4.1 2.7 4.8.3.1.5 0 .6-.2l.5-1.9c.1-.2 0-.4-.2-.6-.5-.6-.8-1.4-.8-2.5 0-3.2 2.4-6.1 6.2-6.1 3.4 0 5.2 2.1 5.2 4.9 0 3.7-1.6 6.8-4.1 6.8-1.3 0-2.2-1.1-1.9-2.4.4-1.5 1.1-3 1.1-4 0-.9-.5-1.7-1.6-1.7-1.2 0-2.2 1.3-2.2 3 0 1.1.4 1.9.4 1.9l-1.5 6.2c-.4 1.8-.1 4 .1 5 .1.3.4.4.6.1.3-.4 1.2-1.8 1.6-3.5.1-.5.7-2.6.7-2.6.4.8 1.5 1.5 2.7 1.5 3.6 0 6-3.3 6-7.7C21 6.1 17.6 3 12.2 3Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-none stroke-current stroke-[1.8] md:h-6 md:w-6"
        >
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-current md:h-6 md:w-6">
          <path d="M14.5 3h2.5c.1 1 .5 2 1.2 2.7.7.7 1.7 1.2 2.8 1.3v2.6a7.1 7.1 0 0 1-4-1.2v6.1c0 3.1-2.5 5.5-5.6 5.5A5.5 5.5 0 0 1 6 14.5C6 11.4 8.4 9 11.4 9c.4 0 .8 0 1.1.1v2.7a2.7 2.7 0 0 0-1.1-.2 2.9 2.9 0 1 0 2.9 2.9V3Z" />
        </svg>
      );
  }
}
