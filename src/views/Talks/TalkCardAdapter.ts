import {UngroupedSession} from "./liveView.types";
import {TalkCardProps} from "./components/TalkCard";
import conferenceData from "@data/2025.json";

import {
  QuestionAnswers,
  SessionCategory,
  SessionSpeaker
} from "../../types/sessions";

export const talkCardAdapter = (session: UngroupedSession, year: string = "2024"): TalkCardProps => {
  return {
    talk: {
      id: parseInt(session.id),
      title: session.title,
      talkImage: 1,
      speakers: session.speakers.map((speaker) => ({
        id: speaker.id,
        name: speaker.name,
      })) as SessionSpeaker[],
      level: "Beginner",
      link: "",
      tags: [],
      track: session.room,
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
    showTrack: true, // Default value, adjust as necessary
    openFeedbackId: conferenceData.openFeedbackId,
  };
};
