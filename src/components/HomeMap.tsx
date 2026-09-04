"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[420px] border border-clay/30 flex items-center justify-center text-ink/40 text-sm">
      Chargement de la carte...
    </div>
  ),
});

export default function HomeMap() {
  return <Map />;
}
