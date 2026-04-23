"use client";

import { useEffect, useState } from "react";

const cookieConsentStorageKey = "joheiewisepro-cookie-consent";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(cookieConsentStorageKey) === null);
  }, []);

  const handleChoice = (value: "allow" | "reject") => {
    window.localStorage.setItem(cookieConsentStorageKey, value);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-[#d8d2cb] bg-white/95 px-4 py-4 shadow-[0_-18px_60px_-45px_rgba(20,20,20,0.45)] backdrop-blur-sm">
      <div className="jl-shell flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-[46rem]">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#141414]">
            Cookie Preferences
          </p>
          <p className="mt-1 text-sm leading-6 text-[#5d5750]">
            We use cookies to improve storefront performance, personalise merchandising and measure
            category landing page engagement.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <button
            type="button"
            onClick={() => handleChoice("allow")}
            className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2f2f2f]"
          >
            Allow all
          </button>
          <button
            type="button"
            onClick={() => handleChoice("reject")}
            className="inline-flex items-center justify-center rounded-full border border-[#d8d2cb] px-5 py-2.5 text-sm font-medium text-[#141414] transition-colors hover:bg-[#f7f3ee]"
          >
            Reject all
          </button>
        </div>
      </div>
    </div>
  );
}
