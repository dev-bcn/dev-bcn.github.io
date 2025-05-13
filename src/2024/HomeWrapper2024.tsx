import React, { FC } from "react";
import { styled } from "styled-components";

import { useLocation } from "react-router";
import { BIG_BREAKPOINT } from "@constants/BreakPoints";
import conferenceData from "@data/2024.json";
import Faqs from "../views/Home/components/Faqs/Faqs";

import Home from "./Home/Home";
import Sponsors from "./Sponsors/Sponsors";
import SpeakersCarousel from "../components/Swiper/SpeakersCarousel";
import { ROUTE_2024_SPEAKERS } from "@constants/routes";
import { useDocumentTitleUpdater } from "@hooks/useDocumentTitleUpdate";
import data from "@data/2023.json";

const StyledContainer = styled.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
    padding-bottom: 20rem;
  }
`;

export const HomeWrapper2024: FC<React.PropsWithChildren<unknown>> = () => {
  const { hash } = useLocation();

  React.useEffect(() => {
    if (hash != null && hash !== "") {
      const scroll = document.getElementById(hash.substring(1));
      scroll?.scrollIntoView();
    }
  }, [hash]);

  useDocumentTitleUpdater("Home", conferenceData.edition);

  return (
    <StyledContainer id="home-wrapper">
      <Home />
      <Faqs />
      <SpeakersCarousel
        speakersLink={ROUTE_2024_SPEAKERS}
        sessionizeUrl={conferenceData.sessionizeUrl}
        isEnabled={data.carrousel.enabled}
      />
      <Sponsors />
    </StyledContainer>
  );
};
