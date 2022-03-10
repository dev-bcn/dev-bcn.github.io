import { COLOR_WHITE } from '../../styles/colors';
import { FC } from 'react';
import MeetingDetail from './MeetingDetail';
import NotFoundError from '../../components/NotFoundError/NotFoundError';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { findMeeting } from './MeetingDetailData';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const StyledContainer = styled.div`
  background-color: ${COLOR_WHITE};
`;

const MeetingDetailContainer: FC = () => {
  const { name } = useParams<{ name: string }>();

  let meetingData = findMeeting(name);

  console.log('carrego');

  return (
    <StyledContainer>
      <SectionWrapper color={COLOR_WHITE} marginTop={4}>
        {meetingData ? (
          <MeetingDetail meeting={meetingData} />
        ) : (
          <NotFoundError message='Meeting' />
        )}
      </SectionWrapper>
    </StyledContainer>
  );
};

export default MeetingDetailContainer;
