import {Color} from "../../styles/colors";
import React, {FC, useEffect} from "react";
import NotFoundError from "../../components/NotFoundError/NotFoundError";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import styled from "styled-components";
import {useParams} from "react-router";
import conferenceData from "../../data/2025.json";
import {useFetchTalksById} from "../Talks/UseFetchTalks";
import * as Sentry from "@sentry/react";
import {useFetchSpeakers} from "../Speakers/UseFetchSpeakers";
import MeetingDetail from "./MeetingDetail";
import {ISpeaker} from "../../types/speakers";
import {sessionAdapter} from "../../services/sessionsAdapter";
import {Session} from "../../types/sessions";

const StyledContainer = styled.div`
  background-color: ${Color.WHITE};
`;
const TalkDetailContainer2024: FC<React.PropsWithChildren<unknown>> = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error, data } = useFetchTalksById(id!);
  const { data: speakerData } = useFetchSpeakers();

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
    document.title = `${data?.at(0)?.title} - DevBcn - ${
      conferenceData.edition
    }`;
  }, [data]);

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
            />
          )}
        {!isLoading &&
          (!sessionSpeakers ||
            sessionSpeakers.length === 0 ||
            !adaptedMeeting) && <NotFoundError message="Session" />}
      </SectionWrapper>
    </StyledContainer>
  );
};

export default TalkDetailContainer2024;
