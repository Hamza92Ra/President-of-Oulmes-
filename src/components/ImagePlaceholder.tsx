"use client";

import { useState } from "react";
import Image from "next/image";

type ImagePlaceholderProps = {
  src: string;
  alt: string;
  label: string;
  aspectRatio?: string; // e.g. "16/9", "4/3", "1/1"
  className?: string;
};

export default function ImagePlaceholder({
  src,
  alt,
  label,
  aspectRatio = "16/9",
  className = "",
}: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <div
        className={`relative w-full overflow-hidden ${className}`}
        style={{ aspectRatio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full flex flex-col items-center justify-center gap-2 bg-sandstone/30 border border-clay/40 text-ink/60 ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={alt}
    >
      <span className="text-[11px] tracking-[0.2em] uppercase font-medium">
        Photo placeholder
      </span>
      <span className="text-xs font-mono px-4 text-center">ADD: {label}</span>
    </div>
  );
}
