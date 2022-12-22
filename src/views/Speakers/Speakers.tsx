import { MOBILE_BREAKPOINT } from "../../constants/BreakPoints";
import { Color } from "../../styles/colors";
import { FC, Key, useEffect } from "react";
import LessThanBlueIcon from "../../assets/images/LessThanBlueIcon.svg";
import MoreThanBlueIcon from "../../assets/images/MoreThanBlueIcon.svg";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { SpeakerCard } from "./components/SpeakersCard";
import TitleSection from "../../components/SectionTitle/TitleSection";
import { useWindowSize } from "react-use";
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
import { useQuery } from "react-query";
import axios from "axios";
import webData from "../../data/2023.json";

interface Session {
  id: number;
  name: string;
}

interface Link {
  title: string;
  url: string;
  linkType: string;
}
export interface ISpeaker {
  id: string;
  fullName: string;
  bio: string;
  tagLine: string;
  speakerImage: string;
  twitterUrl?: Link;
  linkedInUrl?: Link;
  sessions?: Session[];
}

export interface IResponse {
  id: string;
  fullName: string;
  tagLine: string;
  bio: string;
  profilePicture: string;
  sessions: Session[];

  links: Link[];
}

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

export const useFetchSpeakers = (id?: string) => {
  return useQuery("speakers", async () => {
    const serverResponse = await axios.get(
      "https://sessionize.com/api/v2/ttsitynd/view/Speakers"
    );
    let returnData;
    if (id != null) {
      returnData = serverResponse.data.filter(
        (speaker: { id: string }) => speaker.id === id
      );
    } else {
      returnData = serverResponse.data;
    }
    return speakerAdapter(returnData);
  });
};

const speakerAdapter = (response: IResponse[]): ISpeaker[] =>
  response.map((response) => ({
    id: response.id,
    fullName: response.fullName,
    speakerImage: response.profilePicture,
    tagLine: response.tagLine,
    bio: response.bio,
    sessions: response.sessions,
    twitterUrl: response.links.filter((link) => link.linkType === "Twitter")[0],
    linkedInUrl: response.links.filter(
      (link) => link.linkType === "LinkedIn"
    )[0],
  }));

const Speakers: FC = () => {
  const { width } = useWindowSize();

  const { isLoading, error, data } = useFetchSpeakers();

  if (error) {
    console.error("Error fetching speakers", error);
  }

  useEffect(() => {
    document.title = `Speakers - DevBcn ${webData.edition}`;
  });

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
            {data && data.length === 0 && (
              <p style={{ color: Color.WHITE }}>
                No selected speakers yet. Keep in touch in our social media for
                upcoming announcements
              </p>
            )}
            {data &&
              data.map((speaker: ISpeaker, index: Key) => (
                <SpeakerCard key={index} speaker={speaker} />
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

export default Speakers;
