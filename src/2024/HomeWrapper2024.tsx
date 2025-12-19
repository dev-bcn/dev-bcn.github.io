import React from "react";
import { useLocation } from "react-router";
import { styled } from "styled-components";

import SpeakersCarousel from "@components/Swiper/SpeakersCarousel";
import { BIG_BREAKPOINT } from "@constants/BreakPoints";
import { ROUTE_2024_SPEAKERS } from "@constants/routes";
import conferenceData from "@data/2024.json";
import { useDocumentTitleUpdater } from "@hooks/useDocumentTitleUpdate";
import Faqs from "@views/Home/components/Faqs/Faqs";

import Home from "./Home/Home";
import Sponsors from "./Sponsors/Sponsors";

import type { FC } from "react";

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
        sessionizeUrl={conferenceData.edition}
        isEnabled={conferenceData.carrousel.enabled}
      />
      <Sponsors />
    </StyledContainer>
  );
};
