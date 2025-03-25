import { useQuery, UseQueryResult } from "react-query";
import axios from "axios";
import { Liveview } from "../views/Talks/liveView.types";
import { IGroup, Session } from "../types/sessions";

const URLS = {
  default: "https://sessionize.com/api/v2/xhudniix/view/Sessions",
  2023: "https://sessionize.com/api/v2/ttsitynd/view/Sessions",
  2024: "https://sessionize.com/api/v2/teq4asez/view/Sessions",
};

/**
 * Determines the URL to use based on the urlOrYear parameter
 * @param urlOrYear - Optional URL or year to use
 * @returns The URL to use
 */
const getUrl = (urlOrYear?: string): string => {
  let url = URLS.default;

  if (urlOrYear) {
    // If urlOrYear starts with http, it's a URL
    if (urlOrYear.startsWith("http")) {
      url = urlOrYear;
    }
    // If urlOrYear is a year key in URLS, use that URL
    else if (urlOrYear in URLS) {
      url = URLS[urlOrYear as keyof typeof URLS];
    }
  }

  return url;
};

/**
 * Base hook for fetching talks data
 * @param queryKey - The query key to use
 * @param urlOrYear - Optional URL or year to use
 * @param dataTransformer - Function to transform the response data
 * @returns The query result
 */
const useFetchTalksBase = <T>(
  queryKey: string,
  urlOrYear?: string,
  dataTransformer: (data: any) => T = (data) => data,
): UseQueryResult<T> => {
  const url = getUrl(urlOrYear);

  return useQuery(queryKey, async () => {
    const response = await axios.get(url);
    return dataTransformer(response.data);
  });
};

export const useFetchTalks = (urlOrYear?: string): UseQueryResult<IGroup[]> => {
  return useFetchTalksBase<IGroup[]>("api-talks", urlOrYear);
};

export const useFetchTalksById = (
  id: string,
  urlOrYear?: string,
): UseQueryResult<Session> => {
  return useFetchTalksBase<Session>("talks", urlOrYear, (data: any[]) => {
    const sessions = data
      .map((track: IGroup) => track.sessions)
      .flat(1)
      .filter((session: { id: number | string }) => String(session.id) === id);
    return sessions[0];
  });
};

export const useFetchLiveView = (
  urlOrYear?: string,
): UseQueryResult<Liveview> => {
  return useFetchTalksBase<Liveview>("api-talks", urlOrYear, (data) =>
    data.at(0),
  );
};
