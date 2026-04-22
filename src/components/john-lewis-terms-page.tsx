import { JohnLewisSiteFooter } from "@/components/john-lewis-site-footer";
import { JohnLewisSiteHeader } from "@/components/john-lewis-site-header";
import { getJohnLewisTermsBlocks, type TermsBlock } from "@/lib/john-lewis-terms";

const relatedLinks = [
  {
    label: "Customer services home",
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
    label: "Accessibility",
    href: "#",
  },
];

function TermsBlockView({ block }: { block: TermsBlock }) {
  if (block.kind === "h2") {
    return (
      <h2
        id={block.id}
        className="scroll-mt-28 border-t border-[#e8e2db] pt-8 text-[1.7rem] leading-tight tracking-[-0.035em] text-[#141414] sm:text-[2rem]"
      >
        {block.text}
      </h2>
    );
  }

  if (block.kind === "h3") {
    return (
      <h3
        id={block.id}
        className="scroll-mt-28 pt-2 text-[1.18rem] font-medium leading-7 tracking-[-0.02em] text-[#141414] sm:text-[1.28rem]"
      >
        {block.text}
      </h3>
    );
  }

  if (block.kind === "ul") {
    return (
      <ul className="space-y-3 pl-5 text-[1rem] leading-7 text-[#57524b] marker:text-[#141414] sm:text-[1.03rem]">
        {block.items.map((item, index) => (
          <li key={`${block.id}-${index}`} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    );
  }

  if (block.kind !== "p") {
    return null;
  }

  return (
    <p
      className="text-[1rem] leading-7 text-[#57524b] sm:text-[1.03rem]"
      dangerouslySetInnerHTML={{ __html: block.html }}
    />
  );
}

export function JohnLewisTermsPage() {
  const blocks = getJohnLewisTermsBlocks();

  return (
    <main className="min-h-screen bg-white text-[#141414]">
      <JohnLewisSiteHeader />

      <div className="border-b border-[#ece7df] bg-[#faf8f5]">
        <div className="jl-shell px-4 py-3 text-[0.82rem] text-[#6d675f]">
          <div className="flex flex-wrap items-center gap-2">
            <a href="#" className="hover:text-[#141414]">
              Customer services
            </a>
            <span>/</span>
            <a
              href="#"
              className="hover:text-[#141414]"
            >
              Shopping with us
            </a>
            <span>/</span>
            <span className="text-[#141414]">Terms and conditions</span>
          </div>
        </div>
      </div>

      <section className="px-4 pb-16 pt-8 sm:pb-20 sm:pt-10">
        <div className="jl-shell">
          <div className="max-w-[58rem]">
            <p className="jl-eyebrow text-[#6d675f]">Shopping with us</p>
            <h1 className="mt-4 text-[2.45rem] leading-[0.95] tracking-[-0.055em] text-[#141414] sm:text-[3.6rem]">
              Terms and conditions
            </h1>
            <p className="mt-5 max-w-[44rem] text-[1.05rem] leading-8 text-[#57524b] sm:text-[1.15rem]">
              Access to johnlewis.com, ordering rules, product-specific conditions, promotional
              offers and programme policies in one long-form customer services reference.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <article className="jl-policy-copy min-w-0 rounded-[1.75rem] border border-[#ddd8d1] bg-white p-6 shadow-[0_20px_70px_rgba(20,20,20,0.04)] sm:p-8 lg:p-10">
              <div className="space-y-5">
                {blocks.map((block) => (
                  <TermsBlockView key={block.id} block={block} />
                ))}
              </div>
            </article>

            <aside className="space-y-4 lg:sticky lg:top-6">
              <div className="rounded-[1.45rem] border border-[#ddd8d1] bg-[#faf8f5] p-5">
                <p className="jl-eyebrow text-[#6d675f]">Related policies</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#141414]">
                  {relatedLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="inline-flex border-b border-[#141414] pb-0.5">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.45rem] bg-[#f4efe8] p-5 text-sm leading-7 text-[#57524b]">
                Product descriptions, guarantees, refunds and privacy commitments may add further
                conditions to the general site terms shown on this page.
              </div>
            </aside>
          </div>
        </div>
      </section>

      <JohnLewisSiteFooter />
    </main>
  );
}
