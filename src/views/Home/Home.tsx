import { FC, useState } from "react";
import { useWindowSize } from "react-use";
import { motion } from "framer-motion";
import styled from "styled-components";
import conferenceImage from "../../assets/images/conferenceImage.jpg";
import Navigation from "../../components/Navigation/Navigation";
import HamburgerIcon from "../../assets/images/HamburgerIcon.svg";

const StyledHamburger = styled(motion.img)`
  position: absolute;
  top: 2rem;
  right: 3rem;
  width: 30px;
  height: 30px;
  cursor: poiner;
`;
const Home: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width, height } = useWindowSize();

  const StyleHomeContainer = styled.div`
    background-image: url(${conferenceImage});
    background-size: ${width}px ${height}px;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
  `;

  function handleSetMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <StyleHomeContainer />
      <Navigation isOpened={isOpen} setMenu={handleSetMenu} />
      <StyledHamburger onClick={handleSetMenu} src={HamburgerIcon} whileTap={{ scale: 0.8 }}/>
    </>
  );
};

export default Home;
