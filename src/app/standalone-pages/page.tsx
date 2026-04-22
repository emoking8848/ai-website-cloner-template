import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Clones",
  description: "Entry page for standalone recreated website routes.",
};

const routes = [
  {
    title: "NEOM Gift Set PDP",
    href: "/neom-wellbeing-london-your-moment-of-wellbeing-set/p3513483",
    description: "Independent Joheiewisepro-style product page for the NEOM wellbeing gift set.",
    cta: "Open NEOM page",
  },
  {
    title: "Joheiewisepro Tights PDP",
    href: "/john-lewis-60-denier-velvet-touch-tights/black/p114018590",
    description: "Independent Joheiewisepro product detail clone for the 60 Denier Velvet Touch Tights page.",
    cta: "Open tights page",
  },
  {
    title: "Joheiewisepro Business",
    href: "/business",
    description: "Standalone recreation of the Joheiewisepro Business landing page.",
    cta: "Open /business",
  },
  {
    title: "Customer Service Terms",
    href: "/terms-and-conditions",
    description: "Standalone customer services terms and conditions experience.",
    cta: "Open /terms-and-conditions",
  },
];

export default function StandalonePages() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#fbfaf7_0%,#f1ebe4_100%)] px-6 py-10">
      <div className="w-full max-w-[72rem] rounded-[2rem] border border-[#e4ddd5] bg-white p-8 shadow-[0_30px_80px_-60px_rgba(20,20,20,0.45)] sm:p-10">
        <p className="jl-eyebrow text-[#6f665e]">Standalone Pages</p>
        <h1 className="mt-4 text-[2.2rem] leading-[0.98] tracking-[-0.05em] text-[#141414] sm:text-[3rem]">
          Website clone entry
        </h1>
        <p className="mt-4 max-w-[46rem] text-[1rem] leading-7 text-[#5d5750]">
          All recreated pages live as standalone routes here, while this homepage stays as a simple
          launcher so each clone can be visited independently.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {routes.map((route) => (
            <div
              key={route.href}
              className="rounded-[1.5rem] border border-[#e8e1d9] bg-[#faf8f5] p-5 sm:p-6"
            >
              <p className="text-[1.2rem] leading-tight tracking-[-0.03em] text-[#141414]">
                {route.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#5d5750]">{route.description}</p>
              <p className="mt-4 text-sm leading-7 text-[#5d5750]">
                Route:
                <code className="ml-2 rounded bg-white px-2 py-1 text-[#141414]">{route.href}</code>
              </p>
              <a
                href={route.href}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-[#102b2b] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1d3e3e]"
              >
                {route.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
