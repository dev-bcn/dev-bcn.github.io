import React, {FC} from "react";
import {Autoplay, Parallax} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import styled from "styled-components";
import {Color} from "src/styles/colors";
import "swiper/swiper-bundle.min.css";
import "./SpeakersCarousel.scss";
import {Link} from "react-router-dom";
import {ROUTE_SPEAKER_DETAIL_PARAMETERIZED} from "src/constants/routes";
import {useFetchSpeakers} from "../../../Speakers/UseFetchSpeakers";
import * as Sentry from "@sentry/react";

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

interface Props {
    carrouselEnabled: boolean;
    apiUrl: string;
}

const SpeakerSwiper: FC<React.PropsWithChildren<Props>> = ({
                                                               carrouselEnabled,
                                                               apiUrl
                                                           }) => {
    const {isLoading, data, error} = useFetchSpeakers(apiUrl);

  const swiperSpeakers = data?.sort(() => 0.5 - Math.random()).slice(0, 20);

  if (error) {
    Sentry.captureException(error);
  }

  return (
    <>
      {isLoading && <p>Loading</p>}
        {carrouselEnabled && swiperSpeakers && (
        <Swiper
          autoplay={{
            delay: 500,
            disableOnInteraction: true,
          }}
          slidesPerView={1}
          spaceBetween={10}
          speed={3000}
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
          {swiperSpeakers.map((speaker) => (
            <SwiperSlide key={speaker.id}>
              <Link
                to={`${ROUTE_SPEAKER_DETAIL_PARAMETERIZED}/${speaker.id}`}
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
