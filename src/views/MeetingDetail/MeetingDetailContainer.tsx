import { Color } from "../../styles/colors";
import React, { FC, useEffect } from "react";
import NotFoundError from "../../components/NotFoundError/NotFoundError";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import conferenceData from "../../data/2023.json";
import { sessionAdapter, useFetchTalksById } from "../Talks/UseFetchTalks";
import * as Sentry from "@sentry/react";
import { useFetchSpeakers } from "../Speakers/UseFetchSpeakers";
import { ISpeaker } from "../Speakers/Speaker.types";
import { Session } from "../Talks/Talk.types";
import MeetingDetail from "./MeetingDetail";

const StyledContainer = styled.div`
  background-color: ${Color.WHITE};
`;
const MeetingDetailContainer: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error, data } = useFetchTalksById(id);
  const { data: speakerData } = useFetchSpeakers();

  const getTalkSpeakers = (
    data: Session[] | undefined
  ): String[] | undefined => {
    if (
      data !== undefined &&
      Array.isArray(data) &&
      data.length > 0 &&
      data[0].speakers !== undefined &&
      data[0].speakers.length > 0
    ) {
      return data[0].speakers.map((speaker) => speaker.id);
    }
  };

  const talkSpeakers: String[] | undefined = getTalkSpeakers(data);
  const sessionSpeakers: ISpeaker[] | undefined = speakerData?.filter(
    (speaker) => talkSpeakers?.includes(speaker.id)
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
        Array.isArray(sessionSpeakers) &&
        sessionSpeakers.length > 0 &&
        adaptedMeeting !== undefined ? (
          <MeetingDetail speakers={sessionSpeakers} meeting={adaptedMeeting} />
        ) : (
          <NotFoundError message="Session" />
        )}
      </SectionWrapper>
    </StyledContainer>
  );
};

export default MeetingDetailContainer;
