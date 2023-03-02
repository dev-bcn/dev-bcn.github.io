import { useQuery, UseQueryResult } from "react-query";
import {
  IGroup,
  QuestionAnswers,
  Session,
  SessionCategory,
} from "./Talk.types";
import axios from "axios";

export const useFetchTalks = (): UseQueryResult<IGroup[]> =>
  useQuery("api-talks", async () => {
    let data = await axios.get(
      "https://sessionize.com/api/v2/ttsitynd/view/Sessions"
    );
    return data.data;
  });

export const useHardCodedTalks = (): UseQueryResult<IGroup[]> =>
  useQuery("hardcoded-talks", async () => {
    return [];
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
export const extractSessionLevel = (
  categories: SessionCategory[]
): string | undefined =>
  categories
    .filter((category) => category.name === "Level")
    .map((categories) => categories.categoryItems)
    .flat(1)
    .map((item) => item.name)
    .at(0);
