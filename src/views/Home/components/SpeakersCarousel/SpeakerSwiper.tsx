import { FC } from "react";
import { Autoplay, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { speakersData } from "../../../Speakers/SpeakersData";
import { Color } from "../../../../styles/colors";
import "swiper/swiper-bundle.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import "./SpeakersCarousel.scss";
import { Link } from "react-router-dom";
import { ROUTE_SPEAKER_DETAIL } from "../../../../constants/routes";

const StyledSlideImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
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
const SpeakerSwiper: FC = () => {
  return (
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
      {speakersData.map((speaker) => (
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
  );
};

export default SpeakerSwiper;
