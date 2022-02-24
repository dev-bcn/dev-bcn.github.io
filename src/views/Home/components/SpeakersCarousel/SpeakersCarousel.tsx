import { FC } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import TitleSection from "../../../../components/SectionTitle/TitleSection";
import { COLOR_GREEN, COLOR_WHITE } from "../../../../styles/colors";

import "swiper/css";
import "swiper/css/pagination";
import "./SpeakersCarousel.scss";

const StyledSpeakersContainer = styled.section`
  background-color: ${COLOR_GREEN};
  position: relative;
`;

const SpeakersCarousel: FC = () => {
  return (
    <>
      <StyledSpeakersContainer>
        <TitleSection
          title="SPEAKERS"
          subtitle="Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big Java
        and JVM conference in Spain, to pr mote your company
        and to support technological communities."
          color={COLOR_WHITE}
        />

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={require(`../../../../assets/images/FaqsImage1.png`)}
              alt="hola"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require(`../../../../assets/images/FaqsImage1.png`)}
              alt="hola"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require(`../../../../assets/images/FaqsImage1.png`)}
              alt="hola"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require(`../../../../assets/images/FaqsImage1.png`)}
              alt="hola"
            />
          </SwiperSlide>
        </Swiper>
      </StyledSpeakersContainer>
    </>
  );
};

export default SpeakersCarousel;
