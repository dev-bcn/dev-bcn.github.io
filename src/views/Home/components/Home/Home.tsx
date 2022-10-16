import {
  Color
} from '../../../../styles/colors';

import Countdown from 'react-countdown';
import { FC } from 'react';
import HomeImage from '../../../../assets/images/HomeImage.jpg';
import LessThanYellowIcon from '../../../../assets/images/LessThanYellowIcon.svg';
import SectionWrapper from '../../../../components/SectionWrapper/SectionWrapper';
import { TABLET_BREAKPOINT } from '../../../../constants/BreakPoints';
import TimeCountDown from './components/TimeCountdown';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';

const StyledHomaImage = styled.div`
  background-image: url(${HomeImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
`;
const StyleHomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledTitleContainer = styled.div`
  background-color: ${Color.GREEN};
  width: fit-content;
  margin-bottom: 1rem;
`;

const StyledTitle = styled.h1`
  padding: 0.5rem 1rem;
  color: ${Color.WHITE};
  font-family: SpaceGrotesk,sans-serif;
`;

const StyledSubtitle = styled.h2`
  color: ${Color.PINK};
  font-family: SpaceGrotesk-Light,sans-serif;
  font-size: 1.25rem;
`;

const StyledLessThan = styled(motion.img)`
  height: 7rem;
  position: absolute;
  top: 50%;
  left: 5rem;
  animation: StyledLessThanAnimation 6s infinite linear;

  @keyframes StyledLessThanAnimation {
    0% {
      transform: rotate(0deg) translate(-20px) rotate(0deg);
    }
    80% {
      transform: rotate(360deg) translate(-20px) rotate(-360deg);
    }
    90% {
      transform: translate(-5px);
    }
    100% {
      transform: translate(-20px);
    }
  }
`;

const StyledBottomSlash = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 2rem;
`;

const StyledTopSlash = styled(motion.div)`
  position: absolute;
  bottom: 48%;
  right: 0;
  height: 2rem;
  width: 25%;
`;

const StyledGreenSlash = styled(motion.p)`
  font-family: 'SpaceGrotesk-Bold', sans-serif;
  color: ${Color.GREEN};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;

const StyledBlueSlash = styled(motion.p)`
  font-family: 'SpaceGrotesk-Bold',sans-serif;
  color: ${Color.BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;

const Home: FC = () => {
  const { width } = useWindowSize();
  const startDay = '2022-05-26T00:00:00';

  return (
    <StyledHomaImage>
      <SectionWrapper color='transparent'>
        <StyleHomeContainer>
          <StyledTitleContainer>
            <StyledTitle>DevBcn 2023</StyledTitle>
          </StyledTitleContainer>
          <StyledSubtitle>July 3rd-5th</StyledSubtitle>
          <StyledSubtitle>Java, JVM, Native Languages, Cloud, DevOps, Kubernetes, Frontend, Agile, Big Data, Machine Learning & AI</StyledSubtitle>
          <Countdown date={startDay} renderer={TimeCountDown} />

          {width > TABLET_BREAKPOINT && (
            <StyledLessThan src={LessThanYellowIcon} />
          )}
          <StyledTopSlash
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 4 }}
          >
            <StyledGreenSlash>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{' '}
            </StyledGreenSlash>
          </StyledTopSlash>
          <StyledBottomSlash
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 6 }}
          >
            <StyledBlueSlash>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{' '}
            </StyledBlueSlash>
          </StyledBottomSlash>
        </StyleHomeContainer>
      </SectionWrapper>
    </StyledHomaImage>
  );
};

export default Home;
