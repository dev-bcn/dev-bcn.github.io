import { AnimatePresence, motion } from 'framer-motion';

import { BIG_BREAKPOINT } from '../../../../constants/BreakPoints';
import { FC } from 'react';
import styled from 'styled-components';

interface ISponsorBadgeProps {
  position: 'left' | 'right';
  color: string;
  isVisible: boolean;
}

const StyledSponsorBadgeLeft = styled(motion.div)<{
  color: string;
  position: 'left' | 'right';
}>`
  display: none;
  position: absolute;
  width: ${({ position }) => (position === 'left' ? '60%' : '62%')};
  clip-path: ${({ position }) => {
    if (position === 'left') {
      return 'polygon(0 0, 100% 0, 92% 100%, 0% 100%)';
    } else {
      console.log('right');

      return 'polygon(5% 0, 100% 0, 100% 100%, 0 100%)';
    }
  }};
  top: 0;
  bottom: 0;
  background-color: ${({ color }) => color};

  left: ${({ position }) => {
    if (position === 'left') {
      return '0';
    } else {
      return 'unset';
    }
  }};

  right: ${({ position }) => {
    if (position === 'right') {
      return '0';
    } else {
      return 'unset';
    }
  }};
  z-index: 1;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
  }
`;

const leftVariants = {
  initial: {
    x: -700,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    x: -700,
    transition: {
      duration: 0.2,
    },
  },
};

const rightVariants = {
  initial: {
    x: 1000,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    x: 1000,
    transition: {
      duration: 0.2,
    },
  },
};

const SponsorBadge: FC<ISponsorBadgeProps> = ({
  position,
  color,
  isVisible,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <StyledSponsorBadgeLeft
          color={color}
          position={position}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={position === 'left' ? leftVariants : rightVariants}
        />
      )}
    </AnimatePresence>
  );
};

export default SponsorBadge;
