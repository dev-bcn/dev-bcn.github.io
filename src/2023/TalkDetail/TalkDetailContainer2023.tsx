import { Color } from "../../styles/colors";
import React, { FC } from "react";
import NotFoundError from "../../components/NotFoundError/NotFoundError";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import styled from "styled-components";
import { useParams } from "react-router";
import conferenceData from "../../data/2023.json";
import { useFetchTalksById } from "../Talks/UseFetchTalks";
import { Session } from "../../types/sessions";
import TalkDetail from "./TalkDetail";
import { ISpeaker } from "../../types/speakers";
import { sessionAdapter } from "../../services/sessionsAdapter";
import { useFetchSpeakers } from "../../views/Speakers/UseFetchSpeakers";
import { useSentryErrorReport } from "../../services/useSentryErrorReport";
import { useDocumentTitleUpdater } from "../../services/useDocumentTitleUpdate";

const StyledContainer = styled.div`
  background-color: ${Color.WHITE};
`;
const TalkDetailContainer2023: FC<React.PropsWithChildren<unknown>> = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error, data } = useFetchTalksById(id!);
  const { data: speakerData } = useFetchSpeakers(conferenceData.sessionizeUrl);

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

  useDocumentTitleUpdater(data?.at(0)?.title ?? "", conferenceData.edition);
  useSentryErrorReport(error);

  return (
    <StyledContainer>
      <SectionWrapper color={Color.WHITE} marginTop={4}>
        {isLoading && <h2>Loading</h2>}
        {!isLoading &&
          sessionSpeakers !== undefined &&
          sessionSpeakers.length > 0 &&
          adaptedMeeting !== undefined && (
            <TalkDetail speakers={sessionSpeakers} meeting={adaptedMeeting} />
          )}
        {!isLoading &&
          (!sessionSpeakers ||
            sessionSpeakers.length === 0 ||
            !adaptedMeeting) && <NotFoundError message="Session" />}
      </SectionWrapper>
    </StyledContainer>
  );
};

export default TalkDetailContainer2023;
