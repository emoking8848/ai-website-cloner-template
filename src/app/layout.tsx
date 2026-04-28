import type { Metadata } from "next";

import { CookieConsentBanner } from "@/components/cookie-consent-banner";

import "./globals.css";

const googleAdsTagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18075468770');
`;

export const metadata: Metadata = {
  title: "Joheiewisepro | Always Competitively Priced",
  description: "Joheiewisepro | Always Competitively Priced",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18075468770" />
        <script dangerouslySetInnerHTML={{ __html: googleAdsTagScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
