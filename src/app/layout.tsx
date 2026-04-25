import type { Metadata } from "next";

import { CookieConsentBanner } from "@/components/cookie-consent-banner";

import "./globals.css";

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
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
