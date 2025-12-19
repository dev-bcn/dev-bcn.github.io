import { BIG_BREAKPOINT } from "@constants/BreakPoints";

import type { FC } from "react";

import React from "react";

import { useLocation } from "react-router";
import { styled } from "styled-components";

import SpeakersCarousel from "@components/Swiper/SpeakersCarousel";
import { ROUTE_2026_SPEAKERS } from "@constants/routes";
import conferenceData from "@data/2026.json";
import { useDocumentTitleUpdater } from "@hooks/useDocumentTitleUpdate";

import Faqs from "./components/Faqs/Faqs";
import HomeWTC from "./components/HomeWTC/HomeWTC";
import Sponsors from "./components/Sponsors/Sponsors";

const StyledContainer = styled.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
    padding-bottom: 20rem;
  }
`;

export const HomeWrapper: FC<React.PropsWithChildren<unknown>> = () => {
  const { hash } = useLocation();

  React.useEffect(() => {
    if (hash != null && hash !== "") {
      const scroll = document.getElementById(hash.substring(1));
      scroll?.scrollIntoView();
    }
  }, [hash]);

  useDocumentTitleUpdater("Home", conferenceData?.edition ?? "2026");

  return (
    <StyledContainer id="home-wrapper">
      <HomeWTC />
      {conferenceData?.carrousel.enabled && (
        <SpeakersCarousel
          sessionizeUrl={"default"}
          speakersLink={ROUTE_2026_SPEAKERS}
          isEnabled={conferenceData.carrousel.enabled}
        />
      )}
      <Sponsors />
      <Faqs />
    </StyledContainer>
  );
};

export default HomeWrapper;
