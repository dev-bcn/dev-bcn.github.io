import {Color} from "src/styles/colors";

import React, {FC} from "react";
import SectionWrapper from "src/components/SectionWrapper/SectionWrapper";
import SpeakerDetail from "./SpeakerDetail";
import {StyledContainer, StyledWaveContainer} from "./Speaker.style";
import {useFetchSpeakers} from "../Speakers/UseFetchSpeakers";
import * as Sentry from "@sentry/react";
import {useEventEdition} from "../../hooks/UseEventEdition";

const SpeakerDetailContainer: FC<React.PropsWithChildren<unknown>> = () => {
  const { edition } = useEventEdition();
  const { isLoading, data, error } = useFetchSpeakers(edition?.speakerApi);

  if (error) {
    Sentry.captureException(error);
  }
  React.useEffect(() => {
    if (edition && data) {
      document.title = `${data[0]?.fullName} - DevBcn - ${edition.edition}`;
    }
  }, [data, edition]);
  return (
    <StyledContainer>
      <SectionWrapper color={Color.BLUE} marginTop={4}>
        {isLoading && <h2>Loading</h2>}
        {!isLoading && data && edition && data.length > 0 ? (
          <SpeakerDetail speaker={data[0]} edition={edition?.edition} />
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

export default SpeakerDetailContainer;
