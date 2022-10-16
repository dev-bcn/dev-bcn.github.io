import { BIG_BREAKPOINT, LARGE_BREAKPOINT } from '../../constants/BreakPoints';
import { FC, useEffect, useState } from 'react';

import { Color } from '../../styles/colors';
import RedHatLogo from '../../assets/images/RedHatLogo.svg';
import { SponsorsList } from './OurSponsorsData';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';

const StyledSponsors = styled.div`
  padding: 3rem 0;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  color: ${Color.BLUE};
  font-weight: 900;

  font-size: 1.2rem;
`;

const StyledFlexGrow = styled.div`
  flex: 1;
`;

const StyledTitle = styled.h2`
  margin-right: 1rem;
`;

const StyledSlashes = styled.div`
  width: 50%;
  font-size: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledFlexRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;

const StyledBigLogo = styled.img`
  height: 4.5rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    height: 7rem;
  }
`;

const StyledSmallLogosContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 0.75rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    padding: 0 10rem;
  }

  @media only screen and (min-width: ${LARGE_BREAKPOINT}px) {
    padding: 0 15rem;
  }
`;

const StyledSmallLogo = styled.img`
  height: 1.5rem;
  margin: 0 0.75rem 2rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    height: 2rem;

    margin: 3rem;
  }
`;
const OurSponsors: FC = () => {
  const { width } = useWindowSize();

  const [slashes, setSlashes] = useState('');

  function buildSlashes(module: number) {
    const slashesElement = document.getElementById('Slashes');

    const slashesWidth = slashesElement?.offsetWidth || 0;

    const counter = slashesWidth / 5;

    let slashes = '';
    for (let index = 0; index < counter; index++) {
      if (index % module === 0) slashes += '/ ';
    }

    return slashes;
  }

  useEffect(() => {
    const newSlashes = buildSlashes(2);

    setSlashes(newSlashes);
  }, [width]);

  return (
    <StyledSponsors>
      <StyledTitleContainer>
        <StyledFlexGrow />
        <StyledTitle>OUR SPONSORS</StyledTitle>
        <StyledSlashes id='Slashes'>{slashes}</StyledSlashes>
      </StyledTitleContainer>
      <StyledFlexRow>
        <StyledBigLogo src={RedHatLogo} />
      </StyledFlexRow>
      <StyledSmallLogosContainer>
        {SponsorsList.map((logo) => (
          <StyledSmallLogo src={logo} />
        ))}
      </StyledSmallLogosContainer>
    </StyledSponsors>
  );
};

export default OurSponsors;
