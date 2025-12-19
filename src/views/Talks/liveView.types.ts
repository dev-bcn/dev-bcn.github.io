import type { Session } from "@/types/sessions";

export interface UngroupedSession
  extends Omit<Session, "slidesURL" | "recordingUrl"> {
  readonly room?: Room;
  readonly status?: "Accepted" | null;
  readonly isInformed?: boolean;
  readonly isConfirmed?: boolean;
  readonly liveURL?: null;
}

export type Name = "Session format" | "Track" | "Level" | "Language";

export type Room =
  | "Reception"
  | "Main Stage"
  | "Exhibit Hall"
  | "Java & JVM track"
  | "Frontend Track"
  | "AI, ML, Big Data, Python track"
  | "KCD, DevOps, & Cloud Track"
  | "Agile, Leadership & Diversity track";
