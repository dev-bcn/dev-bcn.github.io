export interface SessionSpeaker {
  id: string;
  name: string;
}

export enum CategoryItemEnum {
  Language = "Language",
  Track = "Track",
  Format = "Session format",
  Level = "Level",
}

interface CategoryItem {
  id: number;
  name: string;
}

export interface SessionCategory {
  id: number;
  name: CategoryItemEnum;
  categoryItems: CategoryItem[];
}

export interface Session {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly startsAt: string;
  readonly endsAt: string;
  readonly slidesURL?: string;
  readonly speakers: SessionSpeaker[];
  readonly categories: SessionCategory[];
  readonly questionAnswers: QuestionAnswers[];
  readonly recordingUrl?: string;
  readonly track: string;
}

export interface IGroup {
  groupId: number;
  groupName: string;
  sessions: Session[];
  isDefault: boolean;
}

export interface QuestionAnswers {
  id: number;
  question: string;
  questionType: string;
  answer: string;
}
