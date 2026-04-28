import type { Metadata } from "next";

import { CookieConsentBanner } from "@/components/cookie-consent-banner";

import "./globals.css";

const googleAdsTagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18075628392');
`;

const googleAdsPurchaseConversionScript = `
  (function () {
    function readOrderValue() {
      var totalNode = document.querySelector(
        '.woocommerce-order-overview__total .amount, .order_details .total .amount, .woocommerce-table--order-details tfoot .amount'
      );
      if (!totalNode) {
        return { value: 1.0, currency: 'USD' };
      }

      var text = totalNode.textContent || '';
      var normalized = text.replace(/[^0-9.,]/g, '').replace(/,/g, '');
      var value = parseFloat(normalized);
      var currency = text.indexOf('£') !== -1 ? 'GBP' : text.indexOf('€') !== -1 ? 'EUR' : 'USD';

      return {
        value: Number.isFinite(value) && value > 0 ? value : 1.0,
        currency: currency
      };
    }

    function sendPurchaseConversion() {
      if (typeof gtag !== 'function' || !/\\/checkout\\/order-received\\//.test(window.location.pathname)) {
        return;
      }

      var match = window.location.pathname.match(/\\/order-received\\/([^/]+)/);
      var order = readOrderValue();

      gtag('event', 'conversion', {
        'send_to': 'AW-18075628392/8Y3HCOrBs58cEOjmkKtD',
        'value': order.value,
        'currency': order.currency,
        'transaction_id': match ? match[1] : ''
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', sendPurchaseConversion, { once: true });
    } else {
      sendPurchaseConversion();
    }
  }());
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18075628392" />
        <script dangerouslySetInnerHTML={{ __html: googleAdsTagScript }} />
        <script dangerouslySetInnerHTML={{ __html: googleAdsPurchaseConversionScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
