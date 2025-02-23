import {useQuery, UseQueryResult} from "react-query";
import axios from "axios";
import {ISpeaker} from "../../views/Speakers/Speaker.types";
import {speakerAdapter} from "../../services/speakerAdapter";

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

