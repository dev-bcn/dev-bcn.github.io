import { BIG_BREAKPOINT } from "../../constants/BreakPoints";
import React, { FC } from "react";
import Home from "./components/Home/Home";
import Sponsors from "./components/Sponsors/Sponsors";
import styled from "styled-components";
import data from "../../data/2023.json";
import { useLocation } from "react-router-dom";
import Faqs from "../../views/Home/components/Faqs/Faqs";
import SpeakersCarousel from "../../views/Home/components/SpeakersCarousel/SpeakersCarousel";

const StyledContainer = styled.div`
  padding-bottom: 10rem;

  @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
    padding-bottom: 20rem;
  }
`;

export const Home2023Wrapper: FC<React.PropsWithChildren<unknown>> = () => {
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
      <SpeakersCarousel edition="2023" />
      <Sponsors />
    </StyledContainer>
  );
};
