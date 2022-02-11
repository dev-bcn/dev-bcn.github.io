import { motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components';
import { COLOR_PINK } from '../../styles/colors';

const initial = { x: '-100vx' };
const animate = { x: 0 };
const transition = { delay: 2, duration: 3 };

const StyledNavigation = styled(motion.nav)`
  background: ${COLOR_PINK};
  position: absolute;
  top: 0;
  bottom: 0;
`;
const Navigation: FC = () => {
  return (
    <StyledNavigation
      initial={initial}
      animate={animate}
      transition={transition}
      className='navigation-container'
    >
      <p>aqui un div que ocupara todo</p>
    </StyledNavigation>
  );
};

export default Navigation;
