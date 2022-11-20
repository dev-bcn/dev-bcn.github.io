import styled from "styled-components";
import HomeImage from "../../../../assets/images/HomeImage.jpg";
import {Color} from "../../../../styles/colors";
import {motion} from "framer-motion";

export const StyledHomaImage = styled.div`
  background-image: url(${HomeImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
`;
export const StyleHomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledTitleContainer = styled.div`
  background-color: ${Color.DARK_BLUE};
  width: fit-content;
  margin-bottom: 1rem;
`;

export const StyledTitle = styled.h1`
  padding: 0.5rem 1rem;
  color: ${Color.WHITE};
  font-family: SpaceGrotesk,sans-serif;
`;

export const StyledSubtitle = styled.h2`
  color: ${Color.DARK_BLUE};
  font-family: SpaceGrotesk-Light,sans-serif;
  font-size: 1.25rem;
`;

export const StyledLessThan = styled(motion.img)`
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

export const StyledBottomSlash = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 2rem;
`;

export const StyledTopSlash = styled(motion.div)`
  position: absolute;
  bottom: 48%;
  right: 0;
  height: 2rem;
  width: 25%;
`;

export const StyledGreenSlash = styled(motion.p)`
  font-family: 'SpaceGrotesk-Bold', sans-serif;
  color: ${Color.DARK_BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;

export const StyledBlueSlash = styled(motion.p)`
  font-family: 'SpaceGrotesk-Bold',sans-serif;
  color: ${Color.BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;
