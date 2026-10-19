import React from "react";

export function LogoSlot({ src }) {
  return (
    <div
      className={`mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-gold bg-white/70 ${src ? "border-solid" : "border-dashed"
        }`}
    >
      {src ? (
        <img
          src={src}
          alt="Klaws by Koko logo"
          width={112}
          height={112}
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="px-3 text-[0.8125rem] leading-tight text-muted">
          Your logo here
        </span>
      )}
    </div>
  );
}
