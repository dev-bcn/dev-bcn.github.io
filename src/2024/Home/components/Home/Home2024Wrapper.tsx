import React, { FC } from "react";
import styled from "styled-components";

import { useLocation, useParams } from "react-router-dom";
import { useEventEdition } from "../../../../views/Home/UseEventEdition";
import Faqs from "../../../../views/Home/components/Faqs/Faqs";
import SpeakersCarousel from "../../../../views/Home/components/SpeakersCarousel/SpeakersCarousel";
import Sponsors from "../../../../views/Home/components/Sponsors/Sponsors";
import { BIG_BREAKPOINT } from "../../../../constants/BreakPoints";
import Home from "./Home";

const StyledContainer = styled.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
    padding-bottom: 20rem;
  }
`;

export const Home2024Wrapper: FC<React.PropsWithChildren<unknown>> = () => {
  const { hash } = useLocation();
  let { year } = useParams();
  //eslint-disable-next-line no-console
  console.log("YEAR", year);

  const { edition } = useEventEdition();
  React.useEffect(() => {
    document.title = `Home - ${edition?.title} - ${edition?.edition}`;
    if (hash != null && hash !== "") {
      const scroll = document.getElementById(hash.substring(1));
      scroll?.scrollIntoView();
    }
  }, [hash, edition]);

  return (
    <StyledContainer id="home-wrapper">
      <Home />
      <Faqs />
      {edition?.carrousel.enabled && (
        <SpeakersCarousel edition={edition.edition} />
      )}
      <Sponsors />
    </StyledContainer>
  );
};
