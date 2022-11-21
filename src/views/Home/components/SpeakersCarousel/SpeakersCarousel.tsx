import 'swiper/css';
import 'swiper/css/pagination';
import './SpeakersCarousel.scss';

import {Autoplay, Parallax} from 'swiper';
import {Color} from '../../../../styles/colors';
import {Swiper, SwiperSlide} from 'swiper/react';

import {FC} from 'react';
import {Link} from 'react-router-dom';
import LessThanBlueWhiteIcon from '.././../../../assets/images/MoreThanBlueIcon.svg';
import SectionWrapper from '../../../../components/SectionWrapper/SectionWrapper';
import {TABLET_BREAKPOINT} from '../../../../constants/BreakPoints';
import TitleSection from '../../../../components/SectionTitle/TitleSection';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import data from "../../../../data/2023.json";
import {ROUTE_SPEAKERS} from "../../../../constants/routes";

const StyledSpeakersContainer = styled.section`
  background-color: ${Color.LIGHT_BLUE};
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
  bottom: 0;
  background: ${Color.DARK_BLUE};
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
  color: ${Color.DARK_BLUE};
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

const StyledBlueSlash = styled(motion.p)`
  font-family: 'SpaceGrotesk-Bold', sans-serif;
  color: ${Color.DARK_BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;

const SpeakersCarousel: FC = () => {
    return (
        <SectionWrapper color={Color.PINK}>
            <StyledSpeakersContainer>
                <StyledTitleWrapper>
                    <TitleSection
                        title='SPEAKERS'
                        subtitle='Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big Java
        and JVM conference in Spain, to pr mote your company
        and to support technological communities.'
                        color={Color.WHITE}
                    />
                </StyledTitleWrapper>
                {data.carrousel.enabled &&
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
                    </Swiper>}
                <StyledLink>
                    <Link to={ROUTE_SPEAKERS} className='link--text'>
                        <StyledSubtitle> View all speakers</StyledSubtitle>
                        <StyledLessThanRed src={LessThanBlueWhiteIcon}/>
                    </Link>
                </StyledLink>
                <StyledBottomSlash
                    initial={{x: '-100%'}}
                    animate={{x: 0}}
                    transition={{duration: 6}}
                >
                    <StyledBlueSlash>
                        / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
                        / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{' '}
                    </StyledBlueSlash>
                </StyledBottomSlash>
            </StyledSpeakersContainer>
        </SectionWrapper>
    );
};

export default SpeakersCarousel;
