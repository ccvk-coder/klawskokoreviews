import React from "react";
import { ActionLink } from "./components/ActionLink";
import { ContactBlock } from "./components/ContactBlock";
import { LogoSlot } from "./components/LogoSlot";
import { actionLinks } from "./data/actionLinks";
import { backgroundImageUrl, logoUrl } from "./data/contact";
import { usePageMeta } from "./hooks/usePageMeta";

export function App() {
  usePageMeta();

  return (
    <div className="relative min-h-[100dvh] w-full bg-fallback">
      {/* Fixed background (not background-attachment: fixed, which breaks on iOS) */}
      <img
        src={backgroundImageUrl}
        alt=""
        aria-hidden="true"
        decoding="async"
        className="fixed inset-0 z-0 h-full w-full bg-fallback object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-white/[0.12] to-white/50"
      />

      <main className="relative z-[2] mx-auto flex min-h-[100dvh] w-full max-w-[30rem] flex-col justify-center px-5 pb-[calc(2.5rem+env(safe-area-inset-bottom))] pt-[calc(1.5rem+env(safe-area-inset-top))]">
        <div className="rounded-[1.75rem] bg-white px-5 pb-6 pt-7 text-center shadow-[0_10px_40px_rgba(0,0,0,0.14)]">
          <LogoSlot src={logoUrl} />

          <h1 className="mt-4 font-display text-[2.2rem] font-medium italic leading-[1.15] tracking-[0.01em] text-ink">
            Klaws by Koko
          </h1>

          <p className="mx-auto mb-6 mt-2 max-w-[24rem] text-[0.9375rem] leading-normal text-muted">
            Thanks for visiting Klaws by Koko! We’d love to hear from you and stay
            connected.
          </p>

          <div className="flex flex-col gap-[0.8rem]">
            {actionLinks.map((item) => (
              <ActionLink key={item.label} item={item} />
            ))}
          </div>

          <ContactBlock />
        </div>
      </main>
    </div>
  );
}
