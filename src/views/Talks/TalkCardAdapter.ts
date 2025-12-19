import type { UngroupedSession } from "./liveView.types";
import type {
  QuestionAnswers,
  SessionCategory,
  SessionSpeaker,
} from "@/types/sessions";
import type { TalkCardProps } from "@components/common/TalkCard";

export const talkCardAdapter = (
  session: UngroupedSession,
  year: string = "2024",
): TalkCardProps => {
  return {
    openFeedbackId: "",
    talk: {
      id: session.id,
      title: session.title,
      talkImage: 1,
      speakers: session.speakers.map((speaker) => ({
        id: speaker.id,
        name: speaker.name,
      })) as SessionSpeaker[],
      level: "Beginner",
      link: "",
      tags: [],
      track: session.room ?? "Main Stage",
      categories: session.categories.map((category) => ({
        id: category.id,
        name: category.name,
        categoryItems: category.categoryItems,
      })) as SessionCategory[],
      questionAnswers: session.questionAnswers.map((qa) => ({
        id: qa.id,
        question: qa.question,
        answer: qa.answer,
      })) as QuestionAnswers[],
    },
    year,
    showTrack: true,
  };
};
