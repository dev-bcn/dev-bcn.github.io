import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";
import { COLOR_PINK } from "../../styles/colors";

const StyledNavigationContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
`;

const StyledNavigation = styled(motion.nav)`
  width: 100vw;
  background: ${COLOR_PINK};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledClipPath = styled(motion.div)`
  clip-path: polygon(100% 0, 0 0, 0 100%);
  width: 40vw;
  background: ${COLOR_PINK};
`;

type TNavigationProps = {
  isOpened: boolean;
};

const Navigation: FC<TNavigationProps> = ({ isOpened }) => {
  // ahora falta ponerle el clip path
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
