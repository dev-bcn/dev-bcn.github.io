import { FC } from 'react';
import styled from 'styled-components';

const StyledBadge = styled.div<{ color: string }>`
  display: flex;
  width: fit-content;
  padding: 0.1rem 0.5rem;
  color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color};
  font-size: 0.75rem;
  margin-right: 0.5rem;
`;

interface ITagBadgeProps {
  text: string;
  color: string;
}

const TagBadge: FC<ITagBadgeProps> = ({ text, color }) => {
  return <StyledBadge color={color}>{text}</StyledBadge>;
};

export default TagBadge;
