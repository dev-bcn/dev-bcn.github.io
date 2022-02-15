import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import HomeImage from '../../assets/images/HomeImage.jpg';
import Navigation from '../../components/Navigation/Navigation';
import HamburgerIcon from '../../assets/images/HamburgerIcon.svg';

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
`;

const Home: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleSetMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <StyleHomeContainer />
      <Navigation isOpened={isOpen} setMenu={handleSetMenu} />
      <StyledMenuIcon
        onClick={handleSetMenu}
        src={HamburgerIcon}
        whileTap={{ scale: 0.8 }}
      />
    </>
  );
};

export default Home;
