import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";
import { COLOR_PINK } from "../../styles/colors";

const item = {
  hidden: { width: 0 },
  visible: { width: "100vw" },
};

const StyledNavigation = styled(motion.nav)`
  background: ${COLOR_PINK};
  position: absolute;
  top: 0;
  bottom: 0;
`;

type TNavigationProps = {
  isOpened: boolean;
};

const Navigation: FC<TNavigationProps> = ({ isOpened }) => {
  return (
    <AnimatePresence>
      {isOpened && (
        <StyledNavigation
          transition={{ duration: 0.5 }}
          initial={{ width: 0 }}
          animate={{ width: "100vw" }}
          exit={{ width: 0 }}
        >
          <p>aqui un div que ocupara todo</p>
        </StyledNavigation>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
