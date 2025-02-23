import {MOBILE_BREAKPOINT} from "../../constants/BreakPoints";
import {Color} from "../../styles/colors";
import {FC, useCallback, useEffect} from "react";
import LessThanBlueIcon from "../../assets/images/LessThanBlueIcon.svg";
import MoreThanBlueIcon from "../../assets/images/MoreThanBlueIcon.svg";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import {SpeakerCard} from "./components/SpeakersCard";
import TitleSection from "../../components/SectionTitle/TitleSection";
import {useWindowSize} from "react-use";
import {
  SpeakersCardsContainer,
  StyledContainerLeftSlash,
  StyledContainerRightSlash,
  StyledLessIcon,
  StyledMoreIcon,
  StyledSlash,
  StyledSpeakersSection,
  StyledWaveContainer,
} from "./Speakers.style";
import webData from "../../data/2023.json";
import Button from "../../components/UI/Button";
import {gaEventTracker} from "../../components/analytics/Analytics";
import {useFetchSpeakers} from "./UseFetchSpeakers";
import * as Sentry from "@sentry/react";
import {ISpeaker} from "../../types/speakers";

const LessThanGreaterThan = (props: { width: number }) => (
  <>
    {props.width > MOBILE_BREAKPOINT && (
      <>
        <StyledLessIcon src={LessThanBlueIcon} />
        <StyledMoreIcon src={MoreThanBlueIcon} />
      </>
    )}
  </>
);

const Speakers2023: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();
  const today = new Date();
  const isBetween = (startDay: Date, endDay: Date): boolean =>
    startDay < new Date() && endDay > today;

  const { error, data, isLoading } = useFetchSpeakers();

  if (error) {
    Sentry.captureException(error);
  }

  const trackCFP = useCallback(() => {
    gaEventTracker("CFP", "CFP");
  }, []);

  useEffect(() => {
    document.title = `Speakers2023 - DevBcn ${webData.edition}`;
  });

  const CFPStartDay = new Date(webData.cfp.startDay);
  const CFPEndDay = new Date(webData.cfp.endDay);
  return (
    <>
      <SectionWrapper color={Color.DARK_BLUE} marginTop={5}>
        <StyledSpeakersSection>
          <TitleSection
            title="SPEAKERS"
            subtitle="Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP."
            color={Color.WHITE}
          />
          <LessThanGreaterThan width={width} />
          <SpeakersCardsContainer>
            {isLoading && <p>Loading...</p>}
            {isBetween(CFPStartDay, CFPEndDay) && (
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  padding: "20px 30%",
                }}
              >
                <Button
                  onClick={trackCFP}
                  text="📢 Apply to be a Speaker"
                  link={webData.cfp.link}
                />
              </div>
            )}
            {data?.length === 0 && (
              <p style={{ color: Color.WHITE }}>
                No selected speakers yet. Keep in touch in our social media for
                upcoming announcements
              </p>
            )}
            {data?.map((speaker: ISpeaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </SpeakersCardsContainer>
          <StyledContainerRightSlash
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 4 }}
            positionPercentage="20%"
          >
            <StyledSlash color={Color.YELLOW}>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{" "}
            </StyledSlash>
          </StyledContainerRightSlash>

          <StyledContainerLeftSlash
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 4 }}
            positionPercentage="40%"
          >
            <StyledSlash color={Color.DARK_BLUE}>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{" "}
            </StyledSlash>
          </StyledContainerLeftSlash>

          <StyledContainerRightSlash
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 4 }}
            positionPercentage="60%"
          >
            <StyledSlash color={Color.BLUE}>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{" "}
            </StyledSlash>
          </StyledContainerRightSlash>

          <StyledContainerLeftSlash
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 4 }}
            positionPercentage="80%"
          >
            <StyledSlash color={Color.YELLOW}>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{" "}
            </StyledSlash>
          </StyledContainerLeftSlash>
        </StyledSpeakersSection>
      </SectionWrapper>
      <StyledWaveContainer>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#002454" }}
          ></path>
        </svg>
      </StyledWaveContainer>
    </>
  );
};

export default Speakers2023;
