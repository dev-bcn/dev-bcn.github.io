import 'swiper/css';
import 'swiper/css/pagination';
import './SpeakersCarousel.scss';

import { Autoplay, Parallax } from 'swiper';
import {
  COLOR_GREEN,
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_YELLOW,
} from '../../../../styles/colors';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FC } from 'react';
import { Link } from 'react-router-dom';
import MoreThanRedIcon from '.././../../../assets/images/MoreThanRedIcon.svg';
import SectionWrapper from '../../../../components/SectionWrapper/SectionWrapper';
import { TABLET_BREAKPOINT } from '../../../../constants/BreakPoints';
import TitleSection from '../../../../components/SectionTitle/TitleSection';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledSpeakersContainer = styled.section`
  background-color: ${COLOR_GREEN};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitleWrapper = styled.div`
  max-width: 900px;
`;

const StyledSlideImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const StyledSlideContain = styled.div`
  position: absolute;
  bottom: 0px;
  background: ${COLOR_PINK};
  padding: 0.5rem 0.25rem;
`;

const StyledSlideText = styled.p`
  font-size: 0.875rem;
  color: white;
`;

const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    justify-content: flex-end;
    padding-right: 10rem;
  }
`;

const StyledSubtitle = styled.h2`
  color: ${COLOR_PINK};
  padding-right: 0.75rem;
`;

const StyledLessThanRed = styled.img`
  height: 1.5rem;
`;

export const StyledBottomSlash = styled(motion.div)`
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40%;
  height: 2rem;
`;

const StyledYellowSlash = styled(motion.p)`
  font-family: 'SpaceGrotesk-Bold';
  color: ${COLOR_YELLOW};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;

const SpeakersCarousel: FC = () => {
  return (
    <SectionWrapper color={COLOR_GREEN}>
      <StyledSpeakersContainer>
        <StyledTitleWrapper>
          <TitleSection
            title='SPEAKERS'
            subtitle='Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big Java
        and JVM conference in Spain, to pr mote your company
        and to support technological communities.'
            color={COLOR_WHITE}
          />
        </StyledTitleWrapper>
        <Swiper
          autoplay={{
            delay: 1,
            disableOnInteraction: true,
          }}
          speed={3000}
          parallax={true}
          loop={true}
          grabCursor={true}
          breakpoints={{
            340: {
              width: 640,
              slidesPerView: 4,
              spaceBetween: 30,
            },
            768: {
              width: 768,
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          centeredSlides={true}
          modules={[Autoplay, Parallax]}
          className='mySwiper'
        >
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar1.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlideImage
              src={require(`../../../../assets/images/BlackAvatar2.jpg`)}
              alt='Avatar'
            />
            <StyledSlideContain>
              <StyledSlideText>Name Surname</StyledSlideText>
            </StyledSlideContain>
          </SwiperSlide>
        </Swiper>
        <StyledLink>
          <Link to='/speakers' className='link--text'>
            <StyledSubtitle> View all speakers</StyledSubtitle>
            <StyledLessThanRed src={MoreThanRedIcon} />
          </Link>
        </StyledLink>
        <StyledBottomSlash
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 6 }}
        >
          <StyledYellowSlash>
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{' '}
          </StyledYellowSlash>
        </StyledBottomSlash>
      </StyledSpeakersContainer>
    </SectionWrapper>
  );
};

export default SpeakersCarousel;
