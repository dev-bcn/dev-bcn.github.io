interface CFpTrack {
  id: string;
  name: string;
  members: CfpMember[];
}

interface CfpMember {
  name: string;
  photo?: string;
  linkedIn?: string;
  twitter?: string;
}

export const data: CFpTrack[] = [
  {
    name: "Java & JVM",
    id: "656fece2-9447-4dbe-8a78-8dc6aa7124f2",
    members: [],
  },
  {
    name: "Frontend",
    id: "2684b568-2836-4713-99af-643f8a4d7972",
    members: [],
  },
  {
    name: "AI, ML, Python",
    id: "c1ec728d-03c1-4d8d-9f56-637bc97f5a5b",
    members: [],
  },
  {
    name: "DevOps, Cloud, Kubernetes",
    id: "504cf03b-130d-4b70-a98c-c4faeb553b5e",
    members:[],
  },
  {
    name: "Agile, Leadership, Diversity",
    id: "1d04d5bf-4b94-4e56-b0c6-ee93b3bb8c1f",
    members: [],
  },
];

export interface CfpTrackProps {
  track: CFpTrack;
}
