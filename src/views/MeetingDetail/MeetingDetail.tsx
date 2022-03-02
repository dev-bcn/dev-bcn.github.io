import { COLOR_WHITE } from '../../styles/colors';
import { FC } from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import styled from 'styled-components';

const StyledPageContainer = styled.div``;

const MeetingDetail: FC = ({}) => {
  return (
    <SectionWrapper color={COLOR_WHITE} marginTop={4}>
      <div className='MeetingDetail'></div>
    </SectionWrapper>
  );
};

export default MeetingDetail;
