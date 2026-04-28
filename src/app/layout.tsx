import type { Metadata } from "next";

import { CookieConsentBanner } from "@/components/cookie-consent-banner";

import "./globals.css";

const GTM_ID = "GTM-NT3J3G2H";

const googleTagManagerScript = `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${GTM_ID}');
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
        <script dangerouslySetInnerHTML={{ __html: googleTagManagerScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
