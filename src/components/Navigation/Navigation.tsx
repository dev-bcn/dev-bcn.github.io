import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";
import { COLOR_PINK } from "../../styles/colors";
import CloseIcon from '../../assets/images/CloseIcon.svg';

const StyledNavigationContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  z-index: 1;
`;

const StyledNavigation = styled(motion.nav)`
  width: 100vw;
  background: ${COLOR_PINK};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const StyledClipPath = styled(motion.div)`
  clip-path: polygon(100% 0, 0 0, 0 100%);
  width: 40vw;
  background: ${COLOR_PINK};
`;

const StyledCloseMenu = styled.img`
  position: absolute;
  top: 2rem;
  right: 3rem;
  width: 30px;
  height: 30px;
  z-index: 2;
  cursor: pointer;
`;

type TNavigationProps = {
  isOpened: boolean;
  setMenu: () => void;
};

const Navigation: FC<TNavigationProps> = ({ isOpened, setMenu }) => {
  return (
    <AnimatePresence>
      {isOpened && (
        <StyledNavigationContainer
          transition={{ duration: 0.5 }}
          initial={{ width: 0 }}
          animate={{ width: "140vw" }}
          exit={{ width: 0 }}
        >
          <StyledNavigation>
        
          <StyledCloseMenu src={CloseIcon} onClick={setMenu}/>
            <p>hola</p>
            <p>hola</p>
            </StyledNavigation>
          <StyledClipPath />
        </StyledNavigationContainer>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
