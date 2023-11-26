import { BIG_BREAKPOINT } from "../../constants/BreakPoints";
import React, { FC } from "react";
import Faqs from "./components/Faqs/Faqs";
import Home from "./components/Home/Home";
import SpeakersCarousel from "./components/SpeakersCarousel/SpeakersCarousel";
import Sponsors from "./components/Sponsors/Sponsors";
import styled from "styled-components";
import data from "../../data/2024.json";
import { useLocation } from "react-router-dom";

const StyledContainer = styled.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
    padding-bottom: 20rem;
  }
`;

export const HomeWrapper: FC = () => {
  const { hash } = useLocation();

  React.useEffect(() => {
    document.title = `Home - DevBcn - ${data.edition}`;
    if (hash != null && hash !== "") {
      const scroll = document.getElementById(hash.substring(1));
      scroll?.scrollIntoView();
    }
  }, [hash]);
  return (
    <StyledContainer id="home-wrapper">
      <Home />
      <Faqs />
      <SpeakersCarousel />
      <Sponsors />
    </StyledContainer>
  );
};
