import { useQuery, UseQueryResult } from "react-query";
import axios from "axios";
import { speakerAdapter } from "@services/speakerAdapter";
import * as Sentry from "@sentry/react";
// @ts-expect-error some weird error when importing types
import { IResponse, ISpeaker } from "@types/speakers";

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

  return useQuery("api-speakers", async () => {
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
      return {};
    }
  });
};
