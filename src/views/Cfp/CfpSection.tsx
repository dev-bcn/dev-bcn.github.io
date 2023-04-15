import React, { FC } from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { Color } from "../../styles/colors";
import {
  StyledLessIcon,
  StyledMoreIcon,
  StyledSpeakersSection,
} from "../Speakers/Speakers.style";
import TitleSection from "../../components/SectionTitle/TitleSection";
import { MOBILE_BREAKPOINT } from "../../constants/BreakPoints";
import MoreThanBlueWhiteIcon from "../../assets/images/MoreThanBlueWhiteIcon.svg";
import LessThanBlueWhiteIcon from "../../assets/images/LessThanBlueWhiteIcon.svg";
import { useWindowSize } from "react-use";
import TwitterIcon from "../../components/Icons/Twitter";
import LinkedinIcon from "../../components/Icons/Linkedin";
import {
  StyledAboutImage,
  StyledSocialIconsWrapper,
} from "../About/components/Style.AboutCard";

interface CFpTrack {
  name: string;
  members: CfpMember[];
}

interface CfpMember {
  name: string;
  photo: string;
  linkedIn: string;
  twitter: string;
}

const data: CFpTrack[] = [
  {
    name: "Java & JVM",
    members: [
      {
        name: "Alex Soto",
        photo:
          "https://cache.sessionize.com/image/fd7e-400o400o2-11-34e0-466e-a5cb-ea585688d106.4f3f7614-bc5e-4ccd-935a-1c3659eec5e8.jpg",
        twitter: "https://twitter.com/alexsotob",
        linkedIn: "https://www.linkedin.com/in/asotobu/",
      },
      {
        name: "Ana Maria Mihalceanu",
        photo:
          "https://sessionize.com/image/076f-400o400o2-Lawur2AKGny32MmkpG69jQ.JPG",
        twitter: "https://twitter.com/ammbra1508",
        linkedIn: "https://www.linkedin.com/in/ana-maria-mihalceanu-1508",
      },
      {
        name: "David Gomez G.",
        photo:
          "https://sessionize.com/image/0c32-400o400o2-DP6mds9ahD7Qz7P5zWwcjy.jpg",
        twitter: "https://twitter.com/dgomezg",
        linkedIn: "https://www.linkedin.com/in/dgomezg",
      },
      {
        name: "Grace Jansen",
        photo: "images/cfp/grace.png",
        twitter: "https://twitter.com/gracejansen27",
        linkedIn: "https://www.linkedin.com/in/grace-jansen",
      },
      {
        name: "Ixchel Ruiz",
        photo: "images/cfp/ixchel.png",
        twitter: "https://twitter.com/ixchelruiz",
        linkedIn: "https://www.linkedin.com/in/ixchelruiz",
      },
    ],
  },
  {
    name: "Native Languages",
    members: [
      {
        name: "Aliénor Latour",
        twitter: "",
        photo: "images/cfp/alienor.jpg",
        linkedIn: "https://www.linkedin.com/in/alienor-latour/",
      },
      {
        name: "Donia Chaiehloudj",
        twitter: "",
        photo: "",
        linkedIn: "",
      },
      {
        name: "Gonzalo Serrano",
        twitter: "https://twitter.com/gonzaloserrano",
        photo: "images/cfp/gonzalo.jpg",
        linkedIn: "https://www.linkedin.com/in/gonzaloserranorevuelta/",
      },
      {
        name: "Mario Macías",
        twitter: "",
        photo: "",
        linkedIn: "",
      },
      {
        name: "Mario Vázquez",
        twitter: "",
        photo: "",
        linkedIn: "",
      },
    ],
  },
  {
    name: "Frontend",
    members: [
      {
        name: "Iago Lastra",
        photo: "",
        twitter: "",
        linkedIn: "",
      },
      {
        name: "Josue David Rios Diaz",
        photo: "",
        twitter: "",
        linkedIn: "",
      },
      {
        name: "Laura Rodriguez Castillo",
        photo: "images/cfp/laura.jpeg",
        twitter: "https://twitter.com/superpensando",
        linkedIn: "http://linkedin.com/in/laurarodriguezcastillo",
      },
    ],
  },
  {
    name: "AI, ML, Python",
    members: [
      {
        name: "Alberto Camara",
        photo: "images/cfp/alberto.jpg",
        twitter: "https://twitter.com/b3r2s",
        linkedIn: "https://www.linkedin.com/in/alberto-camara/",
      },
      {
        name: "Carmen Herrero",
        photo: "",
        twitter: "",
        linkedIn: "",
      },
      {
        name: "Gema Parreño",
        photo: "",
        twitter: "",
        linkedIn: "",
      },
      {
        name: "Rubén Berenguel",
        photo: "",
        twitter: "",
        linkedIn: "",
      },
    ],
  },
  {
    name: "DevOps, Cloud, Kubernetes",
    members: [
      {
        name: "Ara Pulido",
        photo: "",
        twitter: "",
        linkedIn: "",
      },
      {
        name: "Mario Macías",
        photo: "",
        twitter: "",
        linkedIn: "",
      },
      {
        name: "Mario Vázquez",
        photo: "",
        twitter: "",
        linkedIn: "",
      },
      {
        name: "Raquel Pau Fernández",
        photo: "",
        twitter: "",
        linkedIn: "",
      },
    ],
  },
  {
    name: "Agile, Leadership, Diversity",
    members: [
      {
        name: "Celeste Gamez",
        photo: "images/cfp/celeste.png",
        twitter: "",
        linkedIn: "https://www.linkedin.com/in/celeste-g%C3%A1mez-73640460/",
      },
      {
        name: "Esther Hernandez",
        photo: "",
        twitter: "",
        linkedIn: "",
      },
      {
        name: "María Mira Herreros",
        photo: "",
        twitter: "",
        linkedIn: "",
      },
      {
        name: "Toni Tassani",
        photo: "images/cfp/toni.jpg",
        twitter: "https://twitter.com/atassani",
        linkedIn: "https://www.linkedin.com/in/tonitassani/en",
      },
    ],
  },
];

interface CfpTrackProps {
  track: CFpTrack;
}

const CfpTrackComponent: FC<CfpTrackProps> = ({ track }) => {
  return (
    <>
      <section>
        <h2>{track.name}</h2>
      </section>
      <div style={{ display: "flex" }}>
        {track.members.map((member, index) => (
          <div key={index}>
            <h3>{member.name}</h3>
            <StyledAboutImage src={member.photo} alt={member.name} />
            <StyledSocialIconsWrapper>
              <TwitterIcon color={Color.BLUE} twitterUrl={member.twitter} />
              <LinkedinIcon color={Color.BLUE} linkedinUrl={member.linkedIn} />
            </StyledSocialIconsWrapper>
          </div>
        ))}
      </div>
    </>
  );
};

const CfpSection: FC = () => {
  const { width } = useWindowSize();
  return (
    <SectionWrapper color={Color.WHITE}>
      <StyledSpeakersSection>
        <TitleSection
          title="CFP Committee"
          subtitle="The Barcelona Developers Conference - DevBcn"
          color={Color.BLUE}
        />
        {width > MOBILE_BREAKPOINT && (
          <>
            <StyledLessIcon src={MoreThanBlueWhiteIcon} />
            <StyledMoreIcon src={LessThanBlueWhiteIcon} />
          </>
        )}
      </StyledSpeakersSection>
      {data.map((track, index) => (
        <CfpTrackComponent key={index} track={track} />
      ))}
    </SectionWrapper>
  );
};

export default CfpSection;
