/* eslint-disable @next/next/no-img-element */

import {
  ArrowRight,
  Clock3,
  CreditCard,
  Gift,
  Mail,
  MonitorSmartphone,
  PackageCheck,
  Phone,
  Sofa,
} from "lucide-react";

import { JohnLewisSiteFooter } from "@/components/john-lewis-site-footer";
import { JohnLewisSiteHeader } from "@/components/john-lewis-site-header";

type BusinessStep = {
  number: string;
  title: string;
  description: string;
};

type ServiceCardData = {
  title: string;
  description: string;
  href: string;
  image: string;
  accentIcon: typeof Sofa;
};

type TermsGroup = {
  title: string;
  items: string[];
};

const businessSteps: BusinessStep[] = [
  {
    number: "01",
    title: "Get in touch",
    description:
      "Contact one of our expert Partners and we will help you match the right service to your brief, budget and timeline.",
  },
  {
    number: "02",
    title: "Expert solutions",
    description:
      "Your dedicated account manager shapes practical recommendations that stay polished, competitive and straightforward to approve.",
  },
  {
    number: "03",
    title: "Details & delivery",
    description:
      "We handle the finer points so interiors, technology or gifts arrive on time and land exactly as intended.",
  },
];

const serviceCards: ServiceCardData[] = [
  {
    title: "Furnishings",
    description:
      "For interior designers, architects and property developers who need thoughtful spaces delivered with quality and confidence.",
    href: "#",
    image: "https://media.johnlewiscontent.com/i/JohnLewis/28022020-JLP-Business-WWO-INT?fmt=auto",
    accentIcon: Sofa,
  },
  {
    title: "Gifting",
    description:
      "Personal gifting for colleagues and clients, with flexible fulfilment and a simpler route to something people will genuinely want.",
    href: "#",
    image: "https://media.johnlewiscontent.com/i/JohnLewis/28022020-JLP-Business-WWO-GIFT?fmt=auto",
    accentIcon: Gift,
  },
  {
    title: "Technology",
    description:
      "Support for start-ups, scaling teams and education projects, with smarter tech bundles tailored around rollout and need.",
    href: "#",
    image: "https://media.johnlewiscontent.com/i/JohnLewis/28022020-JLP-Business-WWO-TECH?fmt=auto",
    accentIcon: MonitorSmartphone,
  },
];

const paymentMethods = ["Visa", "Mastercard", "American Express", "BACS", "CHAPS"];

const termsGroups: TermsGroup[] = [
  {
    title: "General terms",
    items: [
      "Orders may be declined or paused if the terms are breached or if goods appear to be intended for resale.",
      "Business payments clear before fulfilment, and Joheiewisepro may update the service terms with reasonable notice.",
      "Use of Joheiewisepro brand names, marks or trading names needs prior written permission.",
      "English law applies, and third parties do not gain rights under these terms.",
    ],
  },
  {
    title: "Merchandise",
    items: [
      "Perishable gifts such as hampers, chocolates and wine cannot usually be cancelled or returned unless faulty.",
      "Prices include VAT and duty where relevant, and substitutions of equal or greater value may be made if supply changes.",
      "Some items carry age restrictions, including knives and alcohol, so orders must meet legal requirements.",
      "Product descriptions should always be checked for allergens before ordering.",
    ],
  },
  {
    title: "Gift cards",
    items: [
      "Gift cards and vouchers are dispatched securely, with larger orders sometimes requiring additional security checks.",
      "Once delivered they are treated like cash, so lost or stolen cards are not normally refunded or replaced.",
      "Cards cannot be redeemed for cash or used to pay finance-related balances.",
      "Volume discounts may be withheld where gift cards are not being used as genuine personal or corporate gifts.",
    ],
  },
];

function BusinessBadge({
  icon: Icon,
  children,
}: {
  icon: typeof Sofa;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/82">
      <Icon className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4efe8] text-[#102b2b]">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.72rem] uppercase tracking-[0.22em] text-[#7a7168]">{label}</span>
        <span className="mt-1 block text-[1rem] leading-6 text-[#141414]">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-3 rounded-[1.35rem] border border-[#e6e0d8] bg-white px-4 py-4 transition-colors hover:bg-[#faf8f5]"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-[1.35rem] border border-[#e6e0d8] bg-white px-4 py-4">
      {content}
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-[44rem]">
      <p className="jl-eyebrow text-[#6f665e]">{eyebrow}</p>
      <h2 className="mt-4 text-[2rem] leading-[0.98] tracking-[-0.05em] text-[#141414] sm:text-[2.55rem]">
        {title}
      </h2>
      {body ? <p className="mt-4 max-w-[40rem] text-[1rem] leading-7 text-[#5d5750]">{body}</p> : null}
    </div>
  );
}

function ServiceCard({ card }: { card: ServiceCardData }) {
  const Icon = card.accentIcon;

  return (
    <article className="group overflow-hidden rounded-[1.9rem] border border-[#e7e1da] bg-white shadow-[0_24px_60px_-54px_rgba(20,20,20,0.45)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#ece7df]">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
        <span className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/88 text-[#141414] backdrop-blur">
          <Icon className="h-5 w-5" />
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="text-[1.45rem] leading-none tracking-[-0.04em] text-[#141414]">{card.title}</h3>
        <p className="mt-4 text-[0.98rem] leading-7 text-[#5d5750]">{card.description}</p>
        <a
          href={card.href}
          className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#141414] underline underline-offset-4"
        >
          Find out more
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export function JohnLewisBusinessPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#141414]">
      <JohnLewisSiteHeader />

      <main>
        <section className="px-4 pt-4 sm:pt-6">
          <div className="jl-shell grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(155deg,#102b2b_0%,#173737_46%,#0d2323_100%)] px-6 py-7 text-white sm:px-8 sm:py-9 lg:px-10 lg:py-10">
              <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_52%)]" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(209,193,165,0.18),transparent_62%)]" />

              <p className="jl-eyebrow text-white/68">JOHEIEWISE &amp; PARTNERS Business</p>
              <h1 className="mt-5 max-w-[9ch] text-[2.6rem] leading-[0.92] tracking-[-0.06em] sm:text-[4rem] lg:text-[4.75rem]">
                Joheiewisepro Business
              </h1>
              <p className="mt-5 max-w-[35rem] text-[1.04rem] leading-8 text-white/84 sm:text-[1.1rem]">
                A polished route for businesses that need stylish interiors, thoughtful gifting and
                practical technology support without losing the personal service Joheiewisepro is known
                for.
              </p>
              <p className="mt-4 max-w-[34rem] text-[0.98rem] leading-7 text-white/72 sm:text-[1rem]">
                From planning and sourcing through to delivery, dedicated Partners help shape each
                stage of the project around budget, scale and finish.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                <BusinessBadge icon={Sofa}>Furnishings</BusinessBadge>
                <BusinessBadge icon={Gift}>Gifting</BusinessBadge>
                <BusinessBadge icon={MonitorSmartphone}>Technology</BusinessBadge>
              </div>

              <div className="mt-9 grid gap-3 sm:max-w-[34rem]">
                <ContactDetail
                  icon={Mail}
                  label="Email"
                  value="support@joheiewisepro.com"
                  href="mailto:support@joheiewisepro.com"
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <ContactDetail
                    icon={Phone}
                    label="Phone"
                    value="+44 7427878572"
                    href="tel:+447427878572"
                  />
                  <ContactDetail icon={Clock3} label="Hours" value="Mon to Fri, 09:00 - 17:00" />
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[2rem] border border-[#e7e1da] bg-[#ece7df]">
                <img
                  src="https://media.johnlewiscontent.com/i/JohnLewis/business-hero-011123?fmt=auto"
                  alt="Joheiewisepro Business dining table hero"
                  className="aspect-[1.16/1] h-full w-full object-cover"
                />
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative overflow-hidden rounded-[1.7rem] border border-[#e7e1da] bg-[#1b1b1b]">
                  <img
                    src="https://media.johnlewiscontent.com/i/JohnLewis/BP-GIFT-Hero2-Desktop?fmt=auto"
                    alt="Joheiewisepro Business gifting feature"
                    className="aspect-[16/10] h-full w-full object-cover"
                  />
                </div>

                <div className="rounded-[1.7rem] border border-[#e7e1da] bg-white p-6 sm:p-7">
                  <p className="jl-eyebrow text-[#6f665e]">Partner difference</p>
                  <p className="mt-4 text-[1.5rem] leading-[1.02] tracking-[-0.04em] text-[#141414]">
                    Quality product. Personal expert service.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#5d5750] sm:text-[0.98rem]">
                    One team, one account manager and one clearer route from first brief to final
                    delivery.
                  </p>
                  <a
                    href="#tailored-services"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#102b2b] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1d3e3e]"
                  >
                    Explore services
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:py-12 lg:py-14">
          <div className="jl-shell">
            <SectionIntro
              eyebrow="How we work"
              title="A simple three-step flow from first conversation to final delivery."
              body="The original page keeps this part direct and practical, so the layout here does the same: contact, solutioning and handover."
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {businessSteps.map((step) => (
                <article
                  key={step.number}
                  className="relative overflow-hidden rounded-[1.7rem] border border-[#e6dfd8] bg-white p-6 shadow-[0_22px_50px_-48px_rgba(20,20,20,0.5)] sm:p-7"
                >
                  <span className="absolute right-5 top-3 text-[4.6rem] leading-none tracking-[-0.08em] text-[#ece5dd]">
                    {step.number}
                  </span>
                  <p className="jl-eyebrow text-[#7d736b]">Step {step.number}</p>
                  <h3 className="mt-5 max-w-[12ch] text-[1.55rem] leading-[1.02] tracking-[-0.04em] text-[#141414]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-[30rem] text-[0.98rem] leading-7 text-[#5d5750]">{step.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-[1.8rem] border border-[#e6dfd8] bg-[linear-gradient(135deg,#faf8f4_0%,#f1ece6_100%)] px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex flex-col gap-4 text-sm leading-7 text-[#4f4943] lg:flex-row lg:items-center lg:justify-between">
                <p className="max-w-[38rem] text-[0.98rem]">
                  Prefer to talk it through first? The business team is available Monday to Friday,
                  9am to 5pm, excluding bank holidays.
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a href="mailto:support@joheiewisepro.com" className="underline underline-offset-4">
                    support@joheiewisepro.com
                  </a>
                  <a href="tel:+447427878572" className="underline underline-offset-4">
                    +44 7427878572
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tailored-services" className="px-4 py-4 sm:py-6">
          <div className="jl-shell">
            <SectionIntro
              eyebrow="Tailored to your needs"
              title="Three routes into the same brand experience."
              body="The live page breaks the offer into furnishings, gifting and technology. This version keeps that same framing, with warmer image-led cards and clearer scanning on mobile."
            />

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {serviceCards.map((card) => (
                <ServiceCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:py-12">
          <div className="jl-shell grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-[#102b2b] px-6 py-7 text-white sm:px-8 sm:py-8">
              <p className="jl-eyebrow text-white/68">About us</p>
              <h2 className="mt-4 text-[2rem] leading-[0.98] tracking-[-0.05em] sm:text-[2.55rem]">
                Contact us + placing order
              </h2>
              <p className="mt-5 max-w-[34rem] text-[1rem] leading-7 text-white/78">
                For business enquiries, the team can be reached by email or phone during weekday
                opening hours. Supplier enquiries are directed through customer services.
              </p>

              <div className="mt-8 grid gap-3">
                <ContactDetail
                  icon={Phone}
                  label="Main line"
                  value="+44 7427878572"
                  href="tel:+447427878572"
                />
                <ContactDetail
                  icon={Mail}
                  label="Business email"
                  value="support@joheiewisepro.com"
                  href="mailto:support@joheiewisepro.com"
                />
                <ContactDetail
                  icon={Clock3}
                  label="Opening hours"
                  value="Monday to Friday, 9am - 5pm"
                />
              </div>

              <p className="mt-6 text-sm leading-7 text-white/62">
                Supplier enquiries should go through customer services on{" "}
                <a href="tel:+447427878572" className="underline underline-offset-4">
                  +44 7427878572
                </a>
                .
              </p>
            </div>

            <div className="grid gap-5">
              <article className="rounded-[1.8rem] border border-[#e6dfd8] bg-white p-6 sm:p-7">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f4efe8] text-[#102b2b]">
                    <CreditCard className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="jl-eyebrow text-[#7a7168]">Payment</p>
                    <h3 className="mt-2 text-[1.35rem] leading-tight tracking-[-0.03em] text-[#141414]">
                      BACS, CHAPS and major cards.
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-[0.98rem] leading-7 text-[#5d5750]">
                  The business desk accepts bank transfer methods alongside the main consumer card
                  schemes. The Joheiewisepro Partnership Card is not included as a payment option for
                  this service.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {paymentMethods.map((method) => (
                    <span
                      key={method}
                      className="inline-flex rounded-full border border-[#ddd6ce] bg-[#faf8f5] px-3 py-1.5 text-[0.76rem] font-medium uppercase tracking-[0.18em] text-[#5f5951]"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </article>

              <article className="rounded-[1.8rem] border border-[#e6dfd8] bg-[linear-gradient(135deg,#faf8f4_0%,#efe9e1_100%)] p-6 sm:p-7">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#102b2b]">
                    <PackageCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="jl-eyebrow text-[#7a7168]">Delivery + returns</p>
                    <h3 className="mt-2 text-[1.35rem] leading-tight tracking-[-0.03em] text-[#141414]">
                      Flexible fulfilment for merchandise and gift cards.
                    </h3>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-white/80 bg-white/82 p-4">
                    <p className="text-sm font-medium text-[#141414]">Merchandise</p>
                    <p className="mt-2 text-sm leading-7 text-[#5d5750]">
                      Orders over £50 per addressee qualify for free standard delivery, with bulk
                      and multi-recipient options available.
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/80 bg-white/82 p-4">
                    <p className="text-sm font-medium text-[#141414]">Gift cards</p>
                    <p className="mt-2 text-sm leading-7 text-[#5d5750]">
                      Delivery is free over £1,000, and returns or replacements are coordinated
                      through customer services.
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#5d5750]">
                  Refunds are handled through the original payment route where possible, with bank
                  transfer orders arranged through the business team directly.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="px-4 py-4 sm:py-6">
          <div className="jl-shell rounded-[2rem] border border-[#e6dfd8] bg-white px-6 py-7 shadow-[0_28px_70px_-60px_rgba(20,20,20,0.55)] sm:px-8 sm:py-9">
            <SectionIntro
              eyebrow="Terms and conditions"
              title="A cleaner, more readable take on the business terms."
              body="The live page presents these as a long legal block. Here they are grouped into the same themes so the information stays recognisable, but easier to scan."
            />

            <div className="mt-8 grid gap-4 xl:grid-cols-3">
              {termsGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[1.55rem] border border-[#e7e1da] bg-[#faf8f5] p-5 sm:p-6"
                >
                  <h3 className="text-[1.2rem] leading-tight tracking-[-0.03em] text-[#141414]">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#5d5750]">
                    {group.items.map((item) => (
                      <li key={item} className="border-t border-[#e4ddd5] pt-3 first:border-t-0 first:pt-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:py-12">
          <div className="jl-shell rounded-[2rem] bg-[linear-gradient(135deg,#f4efe8_0%,#ebe4db_100%)] px-6 py-8 sm:px-8 sm:py-10">
            <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-end">
              <div>
                <p className="jl-eyebrow text-[#6f665e]">Be in the know</p>
                <h2 className="mt-4 max-w-[12ch] text-[2.1rem] leading-[0.98] tracking-[-0.05em] text-[#141414] sm:text-[2.85rem]">
                  Inspiration, new arrivals and the latest offers to your inbox.
                </h2>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
                <p className="max-w-[28rem] text-[0.98rem] leading-7 text-[#5d5750]">
                  The original business page closes with the familiar Joheiewisepro email signup
                  prompt, so this version keeps that same branded rhythm before the footer.
                </p>
                <a
                  href="#"
                  className="inline-flex w-fit items-center justify-center rounded-full bg-[#102b2b] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1d3e3e]"
                >
                  Sign me up for emails
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <JohnLewisSiteFooter />
    </div>
  );
}
