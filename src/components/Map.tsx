"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { mapLocations } from "@/content/locations";
import { parliamentQuestions } from "@/content/parliament";
import Link from "next/link";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Map() {
  return (
    <div className="w-full h-[420px] border border-clay/30 overflow-hidden">
      <MapContainer
        center={[33.6, -6.05]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapLocations.map((loc) => {
          const related = parliamentQuestions.filter((q) =>
            loc.relatedQuestionIds.includes(q.id)
          );
          return (
            <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={markerIcon}>
              <Popup>
                <strong>{loc.name}</strong>
                {related.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {related.map((q) => (
                      <li key={q.id}>
                        <Link
                          href="/parliament"
                          className="text-green-moroccan underline text-sm"
                        >
                          {q.titleFr}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
