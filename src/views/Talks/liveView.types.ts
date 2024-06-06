export interface Liveview {
  readonly groupID: null;
  readonly groupName: string;
  readonly sessions: UngroupedSession[];
  readonly isDefault: boolean;
}

export interface UngroupedSession {
  readonly questionAnswers: QuestionAnswer[];
  readonly id: string;
  readonly title: string;
  readonly description: null | string;
  readonly startsAt: string;
  readonly endsAt: string;
  readonly isServiceSession: boolean;
  readonly isPlenumSession: boolean;
  readonly speakers: Speaker[];
  readonly categories: Category[];
  readonly roomID: number;
  readonly room: Room;
  readonly liveURL: null;
  readonly recordingURL: null;
  readonly status: "Accepted" | null;
  readonly isInformed: boolean;
  readonly isConfirmed: boolean;
}

export interface Category {
  readonly id: number;
  readonly name: Name;
  readonly categoryItems: CategoryItem[];
  readonly sort: number;
}

export interface CategoryItem {
  readonly id: number;
  readonly name: string;
}

export type Name = "Session format" | "Track" | "Level" | "Language";

export interface QuestionAnswer {
  readonly id: number;
  readonly question: "Tags/Topics";
  readonly questionType: "Short_Text";
  readonly answer: null | string;
  readonly sort: number;
  readonly answerExtra: null;
}

export type Room =
  | "Reception"
  | "Main Stage"
  | "Exhibit Hall"
  | "Java & JVM track"
  | "Frontend Track"
  | "AI, ML, Big Data, Python track"
  | "KCD, DevOps, & Cloud Track"
  | "Agile, Leadership & Diversity track";

export interface Speaker {
  readonly id: string;
  readonly name: string;
}
