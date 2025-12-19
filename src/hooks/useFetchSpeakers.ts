import * as Sentry from "@sentry/react";
import axios from "axios";
import { useQuery } from "react-query";

import { speakerAdapter } from "@services/speakerAdapter";

import type { IResponse, ISpeaker } from "@/types/speakers";
import type { UseQueryResult } from "react-query";

const URLS = {
  default: "https://sessionize.com/api/v2/xhudniix/view/Speakers",
  2023: "https://sessionize.com/api/v2/ttsitynd/view/Speakers",
  2024: "https://sessionize.com/api/v2/teq4asez/view/Speakers",
};

export const useFetchSpeakers = (
  yearOrUrl?: string,
  id?: string,
): UseQueryResult<ISpeaker[]> => {
  let url = URLS.default;
  let speakerId = id;

  if (yearOrUrl) {
    if (yearOrUrl.startsWith("http")) {
      url = yearOrUrl;
    } else if (yearOrUrl in URLS) {
      url = URLS[yearOrUrl as keyof typeof URLS];
    } else {
      speakerId = yearOrUrl;
    }
  }

  return useQuery(
    ["api-speakers", speakerId],
    async () => {
      try {
        const serverResponse = await axios.get(url, {
          headers: { Accept: "application/json; charset=utf-8" },
        });
        let returnData: IResponse[];
        if (speakerId !== undefined) {
          returnData = serverResponse.data.filter(
            (speaker: { id: string }) => speaker.id === speakerId,
          );
        } else {
          returnData = serverResponse.data;
        }

        return speakerAdapter(returnData);
      } catch (e) {
        Sentry.captureException(e);
        return [];
      }
    },
    {
      cacheTime: 1800000,
      staleTime: 1800000,
    },
  );
};
