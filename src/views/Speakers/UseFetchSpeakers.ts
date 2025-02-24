import {useQuery, UseQueryResult} from "react-query";
import axios from "axios";
import {speakerAdapter} from "../../services/speakerAdapter";
import {IResponse, ISpeaker} from "../../types/speakers";

export const useFetchSpeakers = (id?: string): UseQueryResult<ISpeaker[]> => {
  return useQuery("api-speakers", async () => {
    const serverResponse = await axios.get(
      "https://sessionize.com/api/v2/xhudniix/view/Speakers",
    );
    let returnData;
    if (id !== undefined) {
      returnData = serverResponse.data.filter(
        (speaker: { id: string }) => speaker.id === id,
      );
    } else {
      returnData = serverResponse.data;
    }

    const victorRentea: IResponse = {
      sessions: [],
      id: "cccf2456-cddf-4121-a668-d5f9f509f82e",
      bio: "With two decades of experience, Victor is a Java Champion working as a trainer for top companies in Europe. More than five thousand developers of 120 companies attended his workshops, so every week he has the opportunity to debate with bright engineers the challenges faced by their projects. In return, Victor summarizes key learning points from these workshops in conference talks and online meetups for the European Software Crafters, the world's largest community around architecture, refactoring, and testing. Find out how Victor can help you on https://victorrentea.ro: training catalog, consultancy, and YouTube playlists of his talks.",
      fullName: "Victor Rentea",
      links: [{
        url: "https://x.com/victorrentea",
        linkType: "LinkedIn",
        title: "LinkedIn"
      }, {
        url: "https://www.linkedin.com/in/victor-rentea-trainer",
        linkType: "Twitter",
        title: "Twitter"
      }],
      tagLine: "Java Champion and Trainer",
      profilePicture: "https://sessionize.com/image/3031-0o0o0-a3r6JkTgm9aUHJXBhbvnWQ.jpg?download=victor-rentea.jpg",
    }

    return speakerAdapter([...returnData, victorRentea]);
  });
};

