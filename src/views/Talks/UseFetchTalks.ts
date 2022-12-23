import { useQuery, UseQueryResult } from "react-query";
import { IGroup } from "./Talk.types";
import axios from "axios";

export const useFetchTalks = (id?: string): UseQueryResult<IGroup[]> =>
  useQuery("talks", async () => {
    const serverResponse = await axios.get(
      "https://sessionize.com/api/v2/ttsitynd/view/Sessions"
    );
    let returnData;
    if (id !== null) {
      returnData = serverResponse.data.filter(
        (session: { id: string }) => session.id === id
      );
    } else {
      returnData = serverResponse.data;
    }
    return returnData;
  });
