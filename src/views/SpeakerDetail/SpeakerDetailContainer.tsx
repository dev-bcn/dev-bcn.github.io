import {Color} from '../../styles/colors';

import {FC} from 'react';
import NotFoundError from '../../components/NotFoundError/NotFoundError';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SpeakerDetail from './SpeakerDetail';
import {findSpeaker} from './SpeakerDetailData';
import {useParams} from 'react-router-dom';
import {StyledContainer, StyledWaveContainer} from "./Speaker.style";

const SpeakerDetailContainer: FC = () => {
  const { name } = useParams<{ name: string }>();

  let speakerData = findSpeaker(name);
  return (
    <StyledContainer>
      <SectionWrapper color={Color.BLUE} marginTop={4}>
        {speakerData ? (
          <SpeakerDetail speaker={speakerData} />
        ) : (
          <NotFoundError message='Speaker' />
        )}
      </SectionWrapper>
      <StyledWaveContainer>
        <svg
          viewBox='0 0 500 150'
          preserveAspectRatio='none'
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d='M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z'
            style={{ stroke: 'none', fill: '#0496ff' }}
          ></path>
        </svg>
      </StyledWaveContainer>
    </StyledContainer>
  );
};

export default SpeakerDetailContainer;
