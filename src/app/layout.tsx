import type { Metadata } from "next";

import { CookieConsentBanner } from "@/components/cookie-consent-banner";

import "./globals.css";

export const metadata: Metadata = {
  title: "NeverKnowingly Undersold",
  description: "NeverKnowingly Undersold",
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
