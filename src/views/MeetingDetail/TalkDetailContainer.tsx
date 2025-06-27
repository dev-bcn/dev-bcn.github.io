import { Color } from "@styles/colors";
import React, { FC, useEffect } from "react";
import { NotFoundError } from "@components/NotFoundError/NotFoundError";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { styled } from "styled-components";
import { useParams } from "react-router";
import conferenceData from "@data/2025.json";
import { useFetchTalksById } from "@hooks/useFetchTalks";
import { useFetchSpeakers } from "@hooks/useFetchSpeakers";
import MeetingDetail from "./MeetingDetail";
import { ISpeaker } from "@/types/speakers";
import { Session } from "@/types/sessions";
import { useSentryErrorReport } from "@hooks/useSentryErrorReport";
import { sessionAdapter } from "@services/sessionsAdapter";

const StyledContainer = styled.div`
  background-color: ${Color.WHITE};
`;
const TalkDetailContainer: FC<React.PropsWithChildren<unknown>> = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error, data } = useFetchTalksById(id!);
  const { data: speakerData } = useFetchSpeakers();

  const getTalkSpeakers = (data: Session | undefined): string[] | undefined => {
    const speakers = data?.speakers;
    return speakers?.map((speaker) => speaker.id);
  };

  const talkSpeakers: string[] | undefined = getTalkSpeakers(data);
  const sessionSpeakers: ISpeaker[] | undefined = speakerData?.filter(
    (speaker) => talkSpeakers?.includes(speaker.id),
  );

  const adaptedMeeting = sessionAdapter(data);

  useEffect(() => {
    document.title = `${data?.title} - DevBcn - ${conferenceData.edition}`;
  }, [data]);

  useSentryErrorReport(error);

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
              openFeedbackId={conferenceData.openFeedbackId}
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

export default TalkDetailContainer;
