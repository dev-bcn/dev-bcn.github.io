import {useQuery, UseQueryResult} from "react-query";
import {IGroup, Session,} from "./Talk.types";
import axios from "axios";
import {Liveview} from "./liveView.types";

export const useFetchTalks = (): UseQueryResult<IGroup[]> =>
  useQuery("api-talks", async () => {
    let data = await axios.get(
      "https://sessionize.com/api/v2/xhudniix/view/Sessions",
    );
    return data.data;
  });

export const useFetchTalksById = (id: string): UseQueryResult<Session[]> =>
  useQuery("talks", async () => {
    const serverResponse = await axios.get(
      "https://sessionize.com/api/v2/xhudniix/view/Sessions",
    );
    return serverResponse.data
      .map((track: IGroup) => track.sessions)
      .flat(1)
      .filter((session: { id: string }) => session.id === id);
  });

export const useFetchLiveView = (): UseQueryResult<Liveview> =>
  useQuery("api-talks", async () => {
    let data = await axios.get(
      "https://sessionize.com/api/v2/xhudniix/view/Sessions",
    );
    return data.data.at(0);
  });

