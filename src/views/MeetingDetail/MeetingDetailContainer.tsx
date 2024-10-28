import {Color} from "src/styles/colors";
import React, {FC, useEffect} from "react";
import NotFoundError from "src/components/NotFoundError/NotFoundError";
import SectionWrapper from "src/components/SectionWrapper/SectionWrapper";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {sessionAdapter, useFetchTalksById} from "../Talks/UseFetchTalks";
import * as Sentry from "@sentry/react";
import {useFetchSpeakers} from "../Speakers/UseFetchSpeakers";
import {ISpeaker} from "../Speakers/Speaker.types";
import {Session} from "../Talks/Talk.types";
import MeetingDetail from "./MeetingDetail";
import {useEventEdition} from "../Home/UseEventEdition";

const StyledContainer = styled.div`
    background-color: ${Color.WHITE};
`;
const MeetingDetailContainer: FC<React.PropsWithChildren<unknown>> = () => {
    const {id} = useParams<{ id: string }>();
    const {edition} = useEventEdition();
    const {isLoading, error, data} = useFetchTalksById(edition?.talkApi, id!);
    const {data: speakerData} = useFetchSpeakers(edition?.speakerApi);

    const getTalkSpeakers = (
        data: Session[] | undefined,
    ): string[] | undefined => {
        const speakers = data?.[0]?.speakers;
        return speakers?.map((speaker) => speaker.id);
    };

    const talkSpeakers: string[] | undefined = getTalkSpeakers(data);
    const sessionSpeakers: ISpeaker[] | undefined = speakerData?.filter(
        (speaker) => talkSpeakers?.includes(speaker.id),
    );

    const adaptedMeeting = sessionAdapter(data?.at(0));

    useEffect(() => {
        if (edition) {
            document.title = `${data?.at(0)?.title} - DevBcn - ${edition.edition}`;
        }
    }, [data, edition]);

    if (error) {
        Sentry.captureException(error);
    }

    return (
        <StyledContainer>
            <SectionWrapper color={Color.WHITE} marginTop={4}>
                {isLoading && <h2>Loading</h2>}
                {!isLoading &&
                    sessionSpeakers !== undefined &&
                    sessionSpeakers.length > 0 &&
                    adaptedMeeting !== undefined && (
                        <MeetingDetail
                            speakers={sessionSpeakers}
                            meeting={adaptedMeeting}
                            edition={edition}
                        />
                    )}
                {!isLoading &&
                    (!sessionSpeakers ||
                        sessionSpeakers.length === 0 ||
                        !adaptedMeeting) && <NotFoundError message="Session"/>}
            </SectionWrapper>
        </StyledContainer>
    );
};

export default MeetingDetailContainer;
