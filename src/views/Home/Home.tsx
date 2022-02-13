import { FC, useState } from 'react';
import { useWindowSize } from 'react-use';
import styled from 'styled-components';
import conferenceImage from '../../assets/images/conferenceImage.jpg';
import Navigation from '../../components/Navigation/Navigation';

const StyledHamburger = styled.div`
  position: absolute;
  top: 2rem;
  right: 3rem;
  color: white;
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
  return (
    <>
      <StyleHomeContainer />
      <Navigation isOpened={isOpen}/>
      <StyledHamburger
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Hamburger
      </StyledHamburger>
    </>
  );
};

export default Home;
