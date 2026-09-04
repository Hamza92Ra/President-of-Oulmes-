export type MapLocation = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  relatedQuestionIds: string[];
};

export const mapLocations: MapLocation[] = [
  {
    id: "oulmes",
    name: "Oulmès",
    lat: 33.4667,
    lng: -6.0167,
    relatedQuestionIds: ["road-704-2026"],
  },
  {
    id: "khemisset",
    name: "Khémisset",
    lat: 33.8244,
    lng: -6.0658,
    relatedQuestionIds: ["khemisset-railway-connection", "university-scholarships-khemisset"],
  },
  {
    id: "ait-aiko",
    name: "Aït Aïko",
    lat: 33.5,
    lng: -6.05,
    relatedQuestionIds: ["road-4316-aitaiko-houdrane"],
  },
  {
    id: "houdrane",
    name: "Houdrane",
    lat: 33.45,
    lng: -6.1,
    relatedQuestionIds: ["road-4316-aitaiko-houdrane"],
  },
  {
    id: "aklimous",
    name: "Aklimous",
    lat: 33.48,
    lng: -5.98,
    relatedQuestionIds: ["road-704-2026"],
  },
];
