import { Color } from "../../styles/colors";

import React, { FC } from "react";
import NotFoundError from "../../components/NotFoundError/NotFoundError";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import SpeakerDetail from "./SpeakerDetail";
import { useParams } from "react-router-dom";
import { StyledContainer, StyledWaveContainer } from "./Speaker.style";
import { useFetchSpeakers } from "../Speakers/Speakers";
import conferenceData from "../../data/2023.json";

const SpeakerDetailContainer: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, error, data } = useFetchSpeakers(id);

  if (error) {
    console.error("Error fetching speaker" + id, error);
  }
  React.useEffect(() => {
    if (data) {
      document.title = `${data[0].fullName} - DevBcn - ${conferenceData.edition}`;
    }
  }, [id, data]);
  return (
    <StyledContainer>
      <SectionWrapper color={Color.BLUE} marginTop={4}>
        {isLoading && <h2>Loading</h2>}
        {data && data.length > 0 ? (
          <SpeakerDetail speaker={data[0]} />
        ) : (
          <NotFoundError message="Speaker" />
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
