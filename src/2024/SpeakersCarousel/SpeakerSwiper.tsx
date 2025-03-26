import React, {FC} from "react";
import {Autoplay, Parallax} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";
import "./SpeakersCarousel.scss";
import {Link} from "react-router";
import conferenceData from "../../data/2024.json";
import {useFetchSpeakers} from "../../hooks/useFetchSpeakers";
import * as Sentry from "@sentry/react";
import {Color} from "../../styles/colors";
import {ROUTE_SPEAKER_DETAIL} from "../../constants/routes";

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
    const {isLoading, data, error} = useFetchSpeakers("2024");

    // Securely shuffle the speakers using Fisher-Yates algorithm with crypto API
const swiperSpeakers = React.useMemo(() => {
    if (!data) return null;

    // Create a copy of the data to avoid mutating the original
    const speakersCopy = [...data];

    // Fisher-Yates shuffle with crypto.getRandomValues for secure randomization
    for (let i = speakersCopy.length - 1; i > 0; i--) {
        // Generate a secure random value using crypto API
        const randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);

        // Use the random value to get an index between 0 and i (inclusive)
        const j = randomBuffer[0] % (i + 1);

        // Swap elements at i and j
        [speakersCopy[i], speakersCopy[j]] = [speakersCopy[j], speakersCopy[i]];
    }

    // Return the first 20 speakers from the shuffled array
    return speakersCopy.slice(0, 20);
}, [data]);

    if (error) {
        Sentry.captureException(error);
    }

    return (
        <>
            {isLoading && <p>Loading</p>}
            {conferenceData.carrousel.enabled && swiperSpeakers && (
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
                                to={`${ROUTE_SPEAKER_DETAIL}/${speaker.id}`}
                                style={{textDecoration: "none"}}
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
