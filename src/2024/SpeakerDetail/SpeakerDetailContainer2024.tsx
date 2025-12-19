import React from "react";
import { useParams } from "react-router";

import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { ROUTE_2024_SPEAKERS, ROUTE_2024_TALK_DETAIL } from "@constants/routes";
import conferenceData from "@data/2024.json";
import { useFetchSpeakers } from "@hooks/useFetchSpeakers";
import { useSentryErrorReport } from "@hooks/useSentryErrorReport";
import { Color } from "@styles/colors";
import { StyledContainer } from "@views/SpeakerDetail/Speaker.style";
import SpeakerDetail from "@views/SpeakerDetail/SpeakerDetail";
import { StyledWaveContainer } from "@views/Talks/Talks.style";

import type { FC } from "react";

export const SpeakerDetailContainer2024: FC<
  React.PropsWithChildren<unknown>
> = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, error, data } = useFetchSpeakers("2024", id);

  useSentryErrorReport(error);
  React.useEffect(() => {
    if (data) {
      document.title = `${data[0]?.fullName} - DevBcn - ${conferenceData.edition}`;
    }
  }, [id, data]);
  return (
    <StyledContainer>
      <SectionWrapper color={Color.BLUE} marginTop={4}>
        {isLoading && <h2>Loading</h2>}
        {!isLoading && data && data.length > 0 ? (
          <SpeakerDetail
            speaker={data[0]}
            edition="2024"
            speakersRoute={ROUTE_2024_SPEAKERS}
            talkDetailRoute={ROUTE_2024_TALK_DETAIL}
          />
        ) : (
          "not found"
        )}
      </SectionWrapper>
      <StyledWaveContainer>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#0496ff" }}
          ></path>
        </svg>
      </StyledWaveContainer>
    </StyledContainer>
  );
};
