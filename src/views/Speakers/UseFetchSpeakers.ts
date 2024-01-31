import { useQuery, UseQueryResult } from "react-query";
import axios from "axios";
import { IResponse, ISpeaker } from "./Speaker.types";

export const useFetchSpeakers = (id?: string): UseQueryResult<ISpeaker[]> => {
  return useQuery("api-speakers", async () => {
    const serverResponse = await axios.get(
      "https://sessionize.com/api/v2/teq4asez/view/Speakers",
    );
    let returnData;
    if (id !== undefined) {
      returnData = serverResponse.data.filter(
        (speaker: { id: string }) => speaker.id === id,
      );
    } else {
      returnData = serverResponse.data;
    }
    return speakerAdapter(returnData);
  });
};
export const speakerAdapter = (response: IResponse[]): ISpeaker[] =>
  response.map((response) => ({
    id: response.id,
    fullName: response.fullName,
    speakerImage: response.profilePicture,
    tagLine: response.tagLine,
    bio: response.bio,
    sessions: response.sessions,
    twitterUrl: response.links.filter((link) => link.linkType === "Twitter")[0],
    linkedInUrl: response.links.filter(
      (link) => link.linkType === "LinkedIn",
    )[0],
  }));
