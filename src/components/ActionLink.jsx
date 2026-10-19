import React from "react";

const iconBadgeClasses = {
  google:
    "bg-white border border-gray-200/90 shadow-[0_3px_10px_rgba(0,0,0,0.06)]",
  light:
    "bg-white border border-gray-200/90 shadow-[0_3px_10px_rgba(0,0,0,0.06)]",
  facebook:
    "bg-[#1877F2] text-white shadow-[0_4px_14px_rgba(24,119,242,0.38)]",
  instagram:
    "bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] text-white shadow-[0_4px_14px_rgba(204,35,102,0.38)]",
  tiktok: "bg-black text-white shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
};

export function ActionLink({ item }) {
  const badgeStyle = iconBadgeClasses[item.variant] || iconBadgeClasses.google;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-full items-center justify-between rounded-2xl border border-gray-200/90 bg-[#F8F9FA] p-3 px-4 text-left no-underline shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:bg-white hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] active:translate-y-0 active:scale-[0.99] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-ink"
    >
      <div className="flex min-w-0 flex-1 items-center gap-3.5">
        {/* Platform circular icon badge with glow */}
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105 ${badgeStyle}`}
        >
          {item.icon}
        </div>

        {/* Text lines: Title and Subtitle */}
        <div className="flex min-w-0 flex-col">
          <span className="text-[1.05rem] font-bold leading-tight tracking-tight text-gray-900 transition-colors group-hover:text-black">
            {item.title || item.label}
          </span>
          <span className="mt-0.5 truncate text-[0.8125rem] font-medium leading-tight text-gray-500 transition-colors group-hover:text-gray-700">
            {item.subtitle || item.href}
          </span>
        </div>
      </div>

      {/* Right arrow */}
      <div className="shrink-0 pl-2 text-gray-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-gray-900">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.3}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>

      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
