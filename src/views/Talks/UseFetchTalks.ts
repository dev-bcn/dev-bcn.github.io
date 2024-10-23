import { useQuery, UseQueryResult } from "react-query";
import {
  CategoryItemEnum,
  IGroup,
  QuestionAnswers,
  Session,
  SessionCategory,
} from "./Talk.types";
import axios from "axios";
import { IMeeting } from "../MeetingDetail/MeetingDetail.Type";
import { Liveview } from "./liveView.types";

export const useFetchTalks = (
  url: string | undefined,
): UseQueryResult<IGroup[]> =>
  useQuery("api-talks", async () => {
    if(!url){return;}
    let data = await axios.get(
      url,
    );
    return data.data;
  });

export const useFetchTalksById = (
  url: string | undefined,
  id: string,
): UseQueryResult<Session[]> =>
  useQuery("talks", async () => {
    if (!url) {
      return;
    }
    return (await axios.get(url)).data
      .map((track: IGroup) => track.sessions)
      .flat(1)
      .filter((session: { id: string }) => session.id === id);
  });

export const useFetchLiveView = (): UseQueryResult<Liveview> =>
  useQuery("api-talks", async () => {
    let data = await axios.get(
      "https://sessionize.com/api/v2/ezm48alx/view/Sessions",
    );
    return data.data.at(0);
  });

export const extractSessionTags = (
  questionAnswers: QuestionAnswers[],
): string[] | undefined => {
  let tags = questionAnswers
    .filter((question) => question.question === "Tags/Topics")
    .map((question) => question.answer)
    .at(0);
  return tags?.split(",");
};

export const extractSessionSlides = (
  questionAnswers: QuestionAnswers[],
): string => {
  let slides = questionAnswers
    .filter((question) => question.question === "Slides")
    .map((question) => question.answer)
    .at(0);
  return slides ?? "";
};

const sessionEmojis: Record<string, string> = {
  Session: "🗣",
  Workshop: "💻",
  "Lightning talk": "⚡️",
};

const sessionLevel: Record<string, string> = {
  "Introductory and overview": "⭐",
  Intermediate: "⭐⭐",
  Advanced: "⭐⭐⭐",
};

export const extractSessionCategoryInfo = (
  categories: SessionCategory[],
  item: CategoryItemEnum = CategoryItemEnum.Level,
): string | undefined => {
  const info = categories.find((category) => category.name === item)
    ?.categoryItems?.[0]?.name;

  if (!info) {
    return undefined;
  }

  const emojis =
    item === CategoryItemEnum.Format ? sessionEmojis : sessionLevel;

  for (const [key, value] of Object.entries(emojis)) {
    if (info.includes(key)) {
      return `${info} ${value}`;
    }
  }

  if (item === CategoryItemEnum.Language && info === "Spanish") {
    return `${info} 🇪🇸`;
  }
  if (item === CategoryItemEnum.Language && info === "English") {
    return `${info} 🇬🇧`;
  }

  return `${info}`;
};

export const sessionAdapter = (
  session: Session | undefined,
): IMeeting | undefined => {
  if (session === undefined) {
    return undefined;
  }
  return {
    description: session.description,
    endDate: session.endsAt.split("T")[0],
    endTime: session.endsAt.split("T")[1],
    id: session.id,
    language: extractSessionCategoryInfo(
      session.categories,
      CategoryItemEnum.Language,
    ),
    level: extractSessionCategoryInfo(session?.categories),
    slidesURL: extractSessionSlides(session.questionAnswers),
    speakers: session.speakers,
    startDate: session.startsAt.split("T")[0],
    startTime: session.startsAt.split("T")[1],
    title: session.title,
    track: extractSessionCategoryInfo(
      session.categories,
      CategoryItemEnum.Track,
    ),
    type: extractSessionCategoryInfo(
      session.categories,
      CategoryItemEnum.Format,
    ),
    videoTags: extractSessionTags(session.questionAnswers),
    videoUrl: session.recordingUrl,
  };
};
