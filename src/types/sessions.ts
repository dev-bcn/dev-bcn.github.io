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