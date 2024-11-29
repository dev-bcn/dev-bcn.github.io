import {FC, useEffect} from "react";
import TitleSection from "../../components/SectionTitle/TitleSection";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import {BIG_BREAKPOINT, MOBILE_BREAKPOINT} from "../../constants/BreakPoints";
import {Color} from "../../styles/colors";
import LessThanBlue from "../../assets/images/MoreThanBlueWhiteIcon.svg";
import LessThanTransparentIcon
    from "../../assets/images/LessThanTransparentIcon.svg";
import MoreThanBlue from "../../assets/images/LessThanBlueWhiteIcon.svg";
import MoreThanTransparentIcon
    from "../../assets/images/MoreThanTransparentIcon.svg";
import styled from "styled-components";
import {useWindowSize} from "react-use";
import {
    StyledLessIcon,
    StyledMoreIcon,
    StyledSpeakersSection,
} from "../Speakers/Speakers.style";
import {StyledMarginBottom} from "../Talks/Talks.style";
import data from "../../data/2025.json";
import {format} from "date-fns";
import Flicking from "@egjs/react-flicking";
import {AutoPlay} from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import Button from "../../components/UI/Button";
import {gaEventTracker} from "../../components/analytics/Analytics";


const StyledWaveContainer = styled.div`
    background: ${Color.DARK_BLUE};
    overflow-y: hidden;
    height: 3rem;
    width: 100%;
`;

export const StyledSectionsSeparator = styled.div`
    background: ${Color.WHITE};
    height: 3rem;
    @media (min-width: ${BIG_BREAKPOINT}px) {
        height: 5rem;
    }
`;

const StyledSponsorshipText = styled.div`
    text-align: start;
    color: ${Color.BLACK_BLUE};
    max-width: 95vw;

    p {
        margin: 5px 20px;
        text-align: justify;
    }

    ul {
        margin: 5px 20px;

        li {
            margin: 5px 0;
        }
    }

    h4 {
        margin: 20px 0;
    }

    a:visited {
        color: ${Color.DARK_BLUE};
        font-weight: normal;
    }

    @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
        iframe {
            width: 90vw;
        }
    }
`;

const StyleLessIcon = styled.img`
    position: absolute;
    left: -1rem;
    top: 12rem;
    height: 5rem;
    @media (min-width: ${BIG_BREAKPOINT}px) {
        height: 10rem;
    }
`;

const StyleMoreIcon = styled.img`
    position: absolute;
    right: -1rem;
    top: 2rem;
    height: 5rem;
    @media (min-width: 800px) {
        height: 10rem;
    }
`;

const Sponsorship: FC<React.PropsWithChildren<unknown>> = () => {
    const {width} = useWindowSize();
    const plugins = [
        new AutoPlay({duration: 2000, direction: "NEXT", stopOnHover: false})
    ];

    const handleCLick = () => {
        gaEventTracker("download brochure", "download brochure");
    };

    useEffect(() => {
        document.title = `Sponsorship — ${data.title} — ${data.edition}`;
    });

    return (
        <div style={{
            maxWidth: "85rem",
            marginLeft: "auto",
            marginRight: "auto"
        }}>
            <SectionWrapper color={Color.WHITE} marginTop={5}>
                <StyledSpeakersSection>
                    <TitleSection
                        title="Sponsorship"
                        subtitle={`The DevBcn is the yearly event organised by Conferencia DevBcn S.L. Conference Talks will held on ${format(
                            new Date(data.startDay),
                            "MMMM do, yyyy",
                        )} at La Farga, Hospitalet de Llobregat`}
                        color={Color.DARK_BLUE}
                    />
                    {width > MOBILE_BREAKPOINT && (
                        <>
                            <StyledLessIcon src={LessThanBlue}/>
                            <StyledMoreIcon src={MoreThanBlue}/>
                        </>
                    )}
                </StyledSpeakersSection>
            </SectionWrapper>
            <StyledSectionsSeparator/>
            <SectionWrapper color={Color.DARK_BLUE} marginTop={0}>
                <Flicking plugins={plugins} circular={true}>
                    <img
                        alt="DevBcn 2023 - sponsors"
                        width="540"
                        height="360"
                        src="/images/sponsorship/image_1.jpg"
                    />
                    <img
                        alt="DevBcn 2023 - sponsors"
                        width="540"
                        height="360"
                        src="/images/sponsorship/image_2.jpg"
                    />
                    <img
                        alt="DevBcn 2023 - sponsors"
                        width="540"
                        height="360"
                        src="/images/sponsorship/image_3.jpg"
                    />
                    <img
                        alt="DevBcn 2023 - sponsors"
                        width="540"
                        height="360"
                        src="https://live.staticflickr.com/65535/53799462836_14bebbe191_c_d.jpg"
                    />
                    <img
                        alt="DevBcn 2023 - sponsors"
                        width="540"
                        height="360"
                        src="https://live.staticflickr.com/65535/53799696478_dce254ec4d_c_d.jpg"
                    />
                    <img
                        alt="DevBcn 2023 - sponsors"
                        width="540"
                        height="360"
                        src="https://live.staticflickr.com/65535/53798524497_1b90d60ced_c_d.jpg"
                    />
                    <img
                        alt="DevBcn 2023 - sponsors"
                        width="540"
                        height="360"
                        src="https://live.staticflickr.com/65535/53799783184_03bca3913b_c_d.jpg"
                    />
                    <img
                        alt="DevBcn 2023 - sponsors"
                        width="540"
                        height="360"
                        src="https://live.staticflickr.com/65535/53799696058_f73315dcfb_c_d.jpg"
                    />
                    <img
                        alt="DevBcn 2023 - sponsors"
                        width="540"
                        height="360"
                        src="https://live.staticflickr.com/65535/53799782919_5b588a8077_c_d.jpg"
                    />
                </Flicking>
            </SectionWrapper>
            <StyledWaveContainer>
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    style={{height: "100%", width: "100%"}}
                >
                    <path
                        d="M-1.97,61.69 C252.54,152.47 282.44,-23.17 523.42,103.13 L500.00,150.00 L0.00,150.00 Z"
                        style={{stroke: "none", fill: "#FFFFFF"}}
                    ></path>
                </svg>
            </StyledWaveContainer>
            <SectionWrapper color={Color.WHITE} marginTop={0}>
                {width > MOBILE_BREAKPOINT && (
                    <>
                        <StyleMoreIcon src={LessThanTransparentIcon}/>
                        <StyleLessIcon src={MoreThanTransparentIcon}/>
                    </>
                )}
                <StyledSpeakersSection>
                    <StyledSponsorshipText>
                        <h4>Mark Your Calendars!</h4>
                        <p>
                            DevBcn <strong>{data?.edition}</strong> is set for <strong>{format(new Date(data.startDay),"MMMM do")} —
                            {" ".concat(format(data.endDay,"do"))}</strong> at the
                            iconic La Farga, Hospitalet de Llobregat. This year,
                            we're diving
                            deep into the realms of Java, JVM, Cloud, DevOps,
                            Frontend
                            technologies, Leadership strategies, and
                            groundbreaking
                            advancements in Big Data and AI.
                        </p>
                        <h4>A New Era of Tech Innovation</h4>
                        <p>
                            Dive into tracks covering Java, JVM, Cloud, DevOps,
                            Frontend
                            technologies, Leadership, Big Data, AI, and more.
                            DevBcn {data?.edition} is
                            the perfect stage to connect with tech
                            professionals, thought
                            leaders, and innovators.
                        </p>
                        <h4>Tailored Sponsorship Opportunities</h4>
                        <p>
                            While we're keeping the details of our sponsorship
                            packages
                            exclusive, we promise they're more engaging and
                            impactful than
                            ever. Curious? Access our{" "}
                            <strong>
                                <a
                                    href="https://bit.ly/devbcn25-brochure-v3"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    detailed brochure
                                </a>{" "}
                            </strong>{" "}
                            at and discover the myriad of ways you can shine at
                            DevBcn {data?.edition}.
                        </p>
                        <Button text="Get the Brochure"
                                link="https://bit.ly/devbcn25-brochure-v3"
                                onClick={handleCLick}/>
                        <h4>Why Partner with DevBcn?</h4>
                        <p>
                            <ul>
                                <li>
                                    <strong>Expand Your Reach:</strong> Engage
                                    with a diverse,
                                    tech-savvy audience. Our latest edition held
                                    more than 800
                                    attendees.
                                </li>
                                <li>
                                    <strong>Elevate Your
                                        Brand:</strong> Showcase your products
                                    and innovations in a dynamic environment.
                                </li>
                                <li>
                                    <strong>Network with the
                                        Best:</strong> Connect with industry
                                    leaders and potential collaborators. Nearly
                                    30 companies have
                                    pledged their trust in DevBcn.
                                </li>
                                <li>
                                    <strong>Showcase Thought
                                        Leadership:</strong> Share your
                                    expertise and insights with a global
                                    audience.
                                </li>
                            </ul>
                        </p>
                        <h4>Join us on this exciting journey</h4>
                        <p>
                            To discuss how we can align our sponsorship
                            opportunities with
                            your brand's vision, contact us at{" "}
                            <a href="mailto:sponsors@devbcn.com"> sponsors@devbcn.com</a>
                        </p>
                        <p>
                            Let’s make DevBcn {data?.edition} an unforgettable
                            experience together! Stay
                            updated and spread the excitement using{" "}
                            <a
                                href="https://twitter.com/hashtag/devbcn25?src=hashtag_click"
                                target="_blank"
                                rel="noreferrer"
                            >
                                #devbcn25.
                            </a>
                        </p>
                        <p>
                            We eagerly await the opportunity to collaborate with
                            you once more
                            for an extraordinary event!
                        </p>
                        <h4>Take a look at our latest edition summary</h4>
                        <iframe
                            width="1024"
                            height="768"
                            src="https://www.youtube.com/embed/k7iMIXtNKyo"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <h4>Explore DevBcn Talks Online!</h4>
                        <ul>

                            <li><a rel="noreferrer" target="_blank"
                                   href="https://www.youtube.com/playlist?list=PLzJFNZtyAbyxg4LfdyFbcANJXDbilXjBB">🎥
                                DevBcn 2024 - recorded sessions</a></li>
                            <li>
                                <a
                                    href="https://www.youtube.com/playlist?list=PLzJFNZtyAbyzmAAKzx1COeIBEGFgPA_og"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    🎥 DevBcn 2023 - recorded sessions
                                </a>
                            </li>
                        </ul>
                    </StyledSponsorshipText>
                </StyledSpeakersSection>
                <StyledMarginBottom/>
            </SectionWrapper>
        </div>
    );
};

export default Sponsorship;