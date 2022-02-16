import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import HomeImage from '../../assets/images/HomeImage.jpg';
import Navigation from '../../components/Navigation/Navigation';
import HamburgerIcon from '../../assets/images/HamburgerIcon.svg';
import { COLOR_GREEN, COLOR_PINK, COLOR_WHITE } from '../../styles/colors';
import Countdown from 'react-countdown';
import TimeCountDown from './components/TimeCountdown';

export const StyledMenuIcon = styled(motion.img)`
  position: absolute;
  top: 2rem;
  right: 3rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

const StyleHomeContainer = styled.div`
  background-image: url(${HomeImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledTitleContainer = styled.div`
  background-color: ${COLOR_GREEN};
  width: fit-content;
  margin-bottom: 1rem;
`;

const StyledTitle = styled.h1`
  padding: 0.5rem 1rem;
  color: ${COLOR_WHITE};
  font-family: SpaceGrotesk;
`;

const StyledSubtitle = styled.h2`
  color: ${COLOR_PINK};
  font-family: SpaceGrotesk-Light;
  font-size: 1.25rem;
`;

const Home: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleSetMenu() {
    setIsOpen(!isOpen);
  }

  const startDay = '2022-05-26T00:00:00';
  return (
    <>
      <Navigation isOpened={isOpen} setMenu={handleSetMenu} />
      <StyleHomeContainer>
        {/* el header es un compo */}
        <StyledMenuIcon
          onClick={handleSetMenu}
          src={HamburgerIcon}
          whileTap={{ scale: 0.8 }}
        />
        <StyledTitleContainer>
          <StyledTitle>JBCNConf 2022</StyledTitle>
        </StyledTitleContainer>
        <StyledSubtitle>27 - 28 - 29 May</StyledSubtitle>
        <StyledSubtitle>JVM & Tech</StyledSubtitle>
        <Countdown date={startDay} renderer={TimeCountDown} />
        {/* 
          - La V en movimiento
          - Las letras laterales
      */}
      </StyleHomeContainer>
    </>
  );
};

export default Home;
