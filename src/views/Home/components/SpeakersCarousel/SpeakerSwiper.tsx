import React, {FC} from "react";
import {Parallax} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import styled from "styled-components";
import {Color} from "../../../../styles/colors";
import "swiper/swiper-bundle.min.css";
import "./SpeakersCarousel.scss";
import {Link} from "react-router";
import conferenceData from "../../../../data/2025.json";
import {ROUTE_SPEAKER_DETAIL} from "../../../../constants/routes";
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
const SpeakerSwiper: FC<React.PropsWithChildren<unknown>> = () => {
  const { isLoading, data, error } = useFetchSpeakers();

  const swiperSpeakers = data?.sort(() => 0.5 - Math.random()).slice(0, 20);

  if (error) {
    Sentry.captureException(error);
  }

  return (
    <>
      {isLoading && <p>Loading</p>}
      {conferenceData.carrousel.enabled && swiperSpeakers && (
        <Swiper
          /*autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}*/
          slidesPerView={1}
          spaceBetween={10}
          speed={5000}
          parallax={true}
          //loop={true}
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
              slidesPerView: 5,
              centeredSlides: true,
              spaceBetween: 30,
              autoHeight: true,
            },
          }}
          centeredSlides={true}
          modules={[/*Autoplay,*/ Parallax]}
          className="mySwiper"
        >
          {swiperSpeakers.map((speaker) => (
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
