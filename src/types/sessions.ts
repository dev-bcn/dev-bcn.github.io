import type { ISpeaker } from "./speakers";

export interface SessionSpeaker {
  readonly id: string;
  readonly name: string;
}

export enum CategoryItemEnum {
  Language = "Language",
  Track = "Track",
  Format = "Session format",
  Level = "Level",
}

interface CategoryItem {
  readonly id: number;
  readonly name: string;
}

export interface SessionCategory {
  readonly id: number;
  readonly name: CategoryItemEnum;
  readonly categoryItems: CategoryItem[];
}

export interface Session {
  readonly room: string;
  readonly roomId: number;
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
  readonly groupId: number;
  readonly groupName: string;
  readonly sessions: Session[];
  readonly isDefault: boolean;
}

export interface QuestionAnswers {
  readonly id: number;
  readonly question: string;
  readonly questionType: string;
  readonly answer: string;
}

export interface IMeeting {
  id: number;
  urlName?: string;
  title: string;
  description: string;
  videoUrl?: string;
  slidesURL?: string;
  videoTags?: string[];
  speakers: SessionSpeaker[];
  level?: string;
  type?: string;
  language?: string;
  track?: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

export interface IMeetingDetailProps {
  meeting: IMeeting;
  speakers?: ISpeaker[];
  openFeedbackId: string;
  edition?: string;
  speakerDetailRoute?: string;
  talksRoute?: string;
}

export interface TrackInfo {
  name: string;
  code?: string;
}

export interface TopRatedTalk {
  id: string;
  speaker: string;
  talk: string;
  link: string;
}

export interface TopTalkWithSpeaker extends TopRatedTalk {
  speakerImage: string;
  award: string;
}

export type MyType = {
  urlName?: string;
  videoUrl?: string;
  level?: string;
  videoTags?: string[];
  speakers?: ISpeaker[];
  description: string;
  language?: string;
  title: string;
  type?: string;
  track?: string;
};
