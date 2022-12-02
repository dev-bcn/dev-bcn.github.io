import { BIG_BREAKPOINT } from '../../constants/BreakPoints';
import React, { FC } from 'react';
import Faqs from './components/Faqs/Faqs';
import Home from './components/Home/Home';
import SpeakersCarousel from './components/SpeakersCarousel/SpeakersCarousel';
import Sponsors from './components/Sponsors/Sponsors';
import styled from 'styled-components';
import data from "../../data/2023.json";

const StyledContainer = styled.div`
  padding-bottom: 10rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    padding-bottom: 1rem;
  }
`;

export const HomeWrapper: FC = () => {
    React.useEffect(() => {
        document.title = `Home - DevBcn - ${data.edition}`;
    }, []);
  return (
    <StyledContainer>
      <Home />
      <Faqs />
      <SpeakersCarousel />
      <Sponsors />
    </StyledContainer>
  );
};
