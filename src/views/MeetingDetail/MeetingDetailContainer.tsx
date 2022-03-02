import { COLOR_WHITE } from '../../styles/colors';
import { FC } from 'react';
import MeetingDetail from './MeetingDetail';
import NotFoundError from '../../components/NotFoundError/NotFoundError';
import { findMeeting } from './MeetingDetailData';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const StyledContainer = styled.div`
  background-color: ${COLOR_WHITE};
`;

const MeetingDetailContainer: FC = ({}) => {
  const { name } = useParams<{ name: string }>();

  let meetingData = findMeeting(name);

  return (
    <StyledContainer>
      {meetingData ? <NotFoundError message='Meeting' /> : <MeetingDetail />}
    </StyledContainer>
  );
};

export default MeetingDetailContainer;
