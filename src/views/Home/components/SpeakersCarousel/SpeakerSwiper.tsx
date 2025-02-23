import React, {FC} from "react";
import {Parallax} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import styled from "styled-components";
import {Color} from "../../../../styles/colors";
import "swiper/swiper-bundle.min.css";
import "./SpeakersCarousel.scss";
import conferenceData from "../../../../data/2025.json";
import {useFetchSpeakers} from "../../../Speakers/UseFetchSpeakers";
import * as Sentry from "@sentry/react";
import {ISpeaker} from "../../../../types/speakers";

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
    const {isLoading, data, error} = useFetchSpeakers();

    const victorRentea: ISpeaker = {
        id: "8f5f4c31-232b-4e04-b736-6b2775c939cf",
        fullName: "Victor Rentea",
        bio: "With two decades of experience, Victor is a Java Champion working as a trainer for top companies in Europe. More than five thousand developers of 120 companies attended his workshops, so every week he has the opportunity to debate with bright engineers the challenges faced by their projects. In return, Victor summarizes key learning points from these workshops in conference talks and online meetups for the European Software Crafters, the world’s largest community around architecture, refactoring, and testing. Find out how Victor can help you on https://victorrentea.ro: training catalog, consultancy, and YouTube playlists of his talks.",
        speakerImage: "https://sessionize.com/image/3031-0o0o0-a3r6JkTgm9aUHJXBhbvnWQ.jpg?download=victor-rentea.jpg",
        linkedInUrl: {
            url: "https://x.com/victorrentea",
            linkType: "LinkedIn",
            title: "LinkedIn"
        },
        sessions: [],
        twitterUrl: {
            url: "https://www.linkedin.com/in/victor-rentea-trainer",
            linkType: "Twitter",
            title: "Twitter"
        },
        tagLine: "Java Champion and Trainer",
    };

    const cachedSpeakers = React.useMemo(() => {
        const allSpeakers = data ? [...data, victorRentea] : [victorRentea];
        return allSpeakers.sort(() => 0.5 - Math.random()).slice(0, 20);
    }, [data]);

    if (error) {
        Sentry.captureException(error);
    }

    return (
        <>
            {isLoading && <p>Loading</p>}
            {conferenceData.carrousel.enabled && cachedSpeakers && (
                <Swiper
                    /*autoplay={{
                      delay: 5000,
                      disableOnInteraction: true,
                    }}*/
                    slidesPerView={1}
                    spaceBetween={7}
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
                    {cachedSpeakers.map((speaker) => (
                        <SwiperSlide key={speaker.id}>
                            {/*<Link
                                to={`${ROUTE_SPEAKER_DETAIL}/${speaker.id}`}
                                style={{textDecoration: "none"}}
                            >*/}
                                <StyledSlideImage
                                    src={speaker.speakerImage}
                                    alt={speaker.fullName}
                                />
                                <StyledSlideContain>
                                    <StyledSlideText>{speaker.fullName}</StyledSlideText>
                                </StyledSlideContain>
                            {/*</Link>*/}
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </>
    );
};

export default SpeakerSwiper;
