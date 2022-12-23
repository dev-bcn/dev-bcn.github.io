export interface SessionSpeaker {
  id: string;
  name: string;
}

interface CategoryItem {
  id: number;
  name: string;
}

export interface SessionCategory {
  id: number;
  name: string;
  categoryItems: CategoryItem[];
}

interface Session {
  id: number;
  title: string;
  description: string;
  startAt: string;
  endsAt: string;
  speakers: SessionSpeaker[];
  categories: SessionCategory[];
  questionAnswers: QuestionAnswers[];
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
