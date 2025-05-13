import React, { FC } from "react";
import { Autoplay, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "styled-components";
import { Color } from "../../styles/colors";
import "swiper/swiper-bundle.min.css";
import "../../components/Swiper/SpeakersCarousel.scss";
import conferenceData from "../../data/2025.json";
import { useFetchSpeakers } from "../../hooks/useFetchSpeakers";
import { ISpeaker } from "../../types/speakers";
import { ROUTE_SPEAKER_DETAIL } from "../../constants/routes";
import { Link } from "react-router";
import { useSentryErrorReport } from "../../hooks/useSentryErrorReport";

const StyledSlideImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 10px;
`;

const StyledSlideContain = styled.div`
  position: absolute;
  bottom: 0;
  background: ${Color.MAGENTA};
  background: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    ${Color.DARK_BLUE}
  );
  padding: 0.5rem 0.25rem;
  min-width: 100%;
`;

const StyledSlideText = styled.p`
  font-size: 0.875rem;
  color: white;
`;
const SpeakerSwiper: FC<React.PropsWithChildren<unknown>> = () => {
  const { isLoading, data, error } = useFetchSpeakers();

  const cachedSpeakers = React.useMemo(() => {
    return data?.toSorted(() => 0.5 - Math.random()).slice(0, 20);
  }, [data]);

  useSentryErrorReport(error);

  return (
    <>
      {isLoading && <p>Loading</p>}
      {conferenceData.carrousel.enabled && cachedSpeakers && (
        <Swiper
          autoplay={{
            delay: 500,
            disableOnInteraction: true,
          }}
          slidesPerView={1}
          spaceBetween={7}
          speed={5000}
          parallax={true}
          loop={true}
          grabCursor={true}
          breakpoints={{
            340: {
              width: 640,
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              width: 768,
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              width: 1024,
              slidesPerView: 4,
              centeredSlides: true,
              spaceBetween: 30,
              autoHeight: true,
            },
          }}
          centeredSlides={true}
          modules={[Autoplay, Parallax]}
          className="mySwiper"
        >
          {cachedSpeakers.map((speaker: ISpeaker) => (
            <SwiperSlide key={speaker.id}>
              <Link
                to={`${ROUTE_SPEAKER_DETAIL}/${speaker.id}`}
                style={{ textDecoration: "none" }}
              >
                <StyledSlideImage
                  src={speaker.speakerImage}
                  alt={speaker.fullName}
                />
                <StyledSlideContain>
                  <StyledSlideText>{speaker.fullName}</StyledSlideText>
                </StyledSlideContain>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default SpeakerSwiper;
