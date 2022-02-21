import { FC } from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { COLOR_GREEN, COLOR_WHITE } from '../../styles/colors';

const StyledSpeakersContainer = styled.section`
  background-color: ${COLOR_GREEN};
`;

const Speakers: FC = () => {
  return (
    <StyledSpeakersContainer>
      <SectionTitle
        title='SPEAKERS'
        subtitle='Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big Java
        and JVM conference in Spain, to pr mote your company
        and to support technological communities.'
        color={COLOR_WHITE}
      />
      {/* https://codesandbox.io/s/bjvh8?file=/src/App.jsx
      ejemplo de carousel */}
    </StyledSpeakersContainer>
  );
};

export default Speakers;
