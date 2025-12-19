import React, { useEffect } from "react";
import { useParams } from "react-router";
import { styled } from "styled-components";

import { NotFoundError } from "@components/NotFoundError/NotFoundError";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { ROUTE_2024_SPEAKER_DETAIL, ROUTE_2024_TALKS } from "@constants/routes";
import conferenceData from "@data/2024.json";
import { useFetchSpeakers } from "@hooks/useFetchSpeakers";
import { useFetchTalksById } from "@hooks/useFetchTalks";
import { useSentryErrorReport } from "@hooks/useSentryErrorReport";
import { sessionAdapter } from "@services/sessionsAdapter";
import { Color } from "@styles/colors";
import MeetingDetail from "@views/MeetingDetail/MeetingDetail";

import type { Session } from "@/types/sessions";
import type { ISpeaker } from "@/types/speakers";
import type { FC } from "react";

const StyledContainer = styled.div`
  background-color: ${Color.WHITE};
`;
export const MeetingDetailContainer2024: FC<
  React.PropsWithChildren<unknown>
> = () => {
  const { id } = useParams<{ id: string }>();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { isLoading, error, data } = useFetchTalksById(id!, "2024");
  const { data: speakerData } = useFetchSpeakers("2024");

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
              edition="2024"
              openFeedbackId="devbcn24"
              speakerDetailRoute={ROUTE_2024_SPEAKER_DETAIL}
              talksRoute={ROUTE_2024_TALKS}
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
