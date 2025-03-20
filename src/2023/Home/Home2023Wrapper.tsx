import { BIG_BREAKPOINT } from "../../constants/BreakPoints";
import React, { FC } from "react";
import Faqs from "./components/Faqs/Faqs";
import Home from "./components/Home/Home";
import Sponsors from "./components/Sponsors/Sponsors";
import styled from "styled-components";
import data from "../../data/2023.json";
import { useLocation } from "react-router";
import { useDocumentTitleUpdater } from "../../services/useDocumentTitleUpdate";
import SpeakersCarousel from "../../components/Swiper/SpeakersCarousel";
import {ROUTE_2023_SPEAKERS} from "../../constants/routes";

const StyledContainer = styled.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
    padding-bottom: 20rem;
  }
`;

export const Home2023Wrapper: FC<React.PropsWithChildren<unknown>> = () => {
  const { hash } = useLocation();

  React.useEffect(() => {
    if (hash != null && hash !== "") {
      const scroll = document.getElementById(hash.substring(1));
      scroll?.scrollIntoView();
    }
  }, [hash]);

  useDocumentTitleUpdater("Home", data.edition);
  return (
    <StyledContainer id="home-wrapper">
      <Home />
      <Faqs />
      <SpeakersCarousel speakersLink={ROUTE_2023_SPEAKERS} sessionizeUrl={data.sessionizeUrl} />
      <Sponsors />
    </StyledContainer>
  );
};
