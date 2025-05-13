import { useQuery, UseQueryResult } from "react-query";
import axios from "axios";
import { speakerAdapter } from "@services/speakerAdapter";
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
  // Determine if the first parameter is a URL or an ID
  let url = URLS.default;
  let speakerId = id;

  if (yearOrUrl) {
    // If urlOrId starts with http, it's a URL
    if (yearOrUrl.startsWith("http")) {
      url = yearOrUrl;
    }
    // If urlOrId is a year key in URLS, use that URL
    else if (yearOrUrl in URLS) {
      url = URLS[yearOrUrl as keyof typeof URLS];
    }
    // Otherwise, it's an ID
    else {
      speakerId = yearOrUrl;
    }
  }

  return useQuery("api-speakers", async () => {
    const serverResponse = await axios.get(url);
    let returnData: IResponse[];
    if (speakerId !== undefined) {
      returnData = serverResponse.data.filter(
        (speaker: { id: string }) => speaker.id === speakerId,
      );
    } else {
      returnData = serverResponse.data;
    }

    return speakerAdapter(returnData);
  });
};
