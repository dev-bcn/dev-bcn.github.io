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

export const useFetchTalks = (): UseQueryResult<IGroup[]> =>
  useQuery("api-talks", async () => {
    let data = await axios.get(
      "https://sessionize.com/api/v2/ttsitynd/view/Sessions"
    );
    return data.data;
  });

export const useFetchTalksById = (id: string): UseQueryResult<Session[]> =>
  useQuery("talks", async () => {
    const serverResponse = await axios.get(
      "https://sessionize.com/api/v2/ttsitynd/view/Sessions"
    );
    return serverResponse.data
      .map((track: IGroup) => track.sessions)
      .flat(1)
      .filter((session: { id: string }) => session.id === id);
  });
export const extractSessionTags = (
  questionAnswers: QuestionAnswers[]
): string[] | undefined => {
  let tags = questionAnswers
    .filter((question) => question.question === "Tags/Topics")
    .map((question) => question.answer)
    .at(0);
  return tags?.split(",");
};
export const extractSessionCategoryInfo = (
  categories: SessionCategory[],
  item: string = CategoryItemEnum.Level
): string | undefined =>
  categories
    .filter((category) => category.name === item)
    .map((categories) => categories.categoryItems)
    .flat(1)
    .map((item) => item.name)
    .at(0);
export const sessionAdapter = (
  session: Session | undefined
): IMeeting | undefined => {
  if (session === undefined) {
    return undefined;
  }
  return {
    description: session.description,
    title: session.title,
    speakers: session.speakers,
    videoUrl: session.recordingUrl,
    videoTags: extractSessionTags(session.questionAnswers),
    level: extractSessionCategoryInfo(session?.categories),
    language: extractSessionCategoryInfo(
      session.categories,
      CategoryItemEnum.Language
    ),
    type: extractSessionCategoryInfo(
      session.categories,
      CategoryItemEnum.Format
    ),
    track: extractSessionCategoryInfo(
      session.categories,
      CategoryItemEnum.Track
    ),
  };
};
