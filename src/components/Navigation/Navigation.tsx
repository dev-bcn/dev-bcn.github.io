import { motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components';
import { COLOR_PINK } from '../../styles/colors';


const StyledNavigation = styled(motion.nav)`
  background: ${COLOR_PINK};
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100vw;
`;
const Navigation: FC = () => {
  return (
    <StyledNavigation
      initial = {{ width: 0 }}
      animate = {{ width: "100vw" }}
      transition = {{ duration: .5 }}
      className='navigation-container'
    >
      <p>aqui un div que ocupara todo</p>
    </StyledNavigation>
  );
};

export default Navigation;
