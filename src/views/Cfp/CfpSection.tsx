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
import conferenceData from "../../data/2023.json";

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
        twitter: "https://twitter.com/doniacld",
        photo:
          "https://pbs.twimg.com/profile_images/1590642319589609472/zObYSeID_400x400.jpg",
        linkedIn: "https://www.linkedin.com/in/donia-chaiehloudj",
      },
      {
        name: "Gonzalo Serrano",
        twitter: "https://twitter.com/gonzaloserrano",
        photo: "images/cfp/gonzalo.jpg",
        linkedIn: "https://www.linkedin.com/in/gonzaloserranorevuelta/",
      },
      {
        name: "Mario Macías",
        twitter: "https://twitter.com/MaciasUPC",
        photo:
          "https://media.licdn.com/dms/image/C4E03AQGv4gLaWoGpjw/profile-displayphoto-shrink_800_800/0/1582785735995?e=1687392000&v=beta&t=w8ljnAlsBUoHjPfPJR3bUh0XGXP1ke1_-bRxvhc5M1E",
        linkedIn: "https://www.linkedin.com/in/mariomac/",
      },
      {
        name: "Mario Vázquez",
        twitter: "https://twitter.com/mvazce",
        photo:
          "https://www.redhat.com/architect/sites/default/files/styles/user_picture_square/public/pictures/2022-06/Mario%20Vazquez%201.jpg?itok=N34lZwBm",
        linkedIn: "https://www.linkedin.com/in/mariovazquezcebrian/",
      },
    ],
  },
  {
    name: "Frontend",
    members: [
      {
        name: "Iago Lastra",
        photo: "https://avatars.githubusercontent.com/u/2657897?v=4",
        twitter: "https://twitter.com/iagolast",
        linkedIn: "https://www.linkedin.com/in/iagolast/",
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
        linkedIn: "https://linkedin.com/in/laurarodriguezcastillo",
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
        photo:
          "https://pbs.twimg.com/profile_images/1393898544600342528/hghgDpMM_400x400.jpg",
        twitter: "https://twitter.com/berenguel",
        linkedIn: "https://www.linkedin.com/in/rberenguel/",
      },
    ],
  },
  {
    name: "DevOps, Cloud, Kubernetes",
    members: [
      {
        name: "Ara Pulido",
        photo:
          "https://media.licdn.com/dms/image/D4D03AQG2d6PcinjTgA/profile-displayphoto-shrink_800_800/0/1676458154277?e=1687392000&v=beta&t=Ff5xQ-V8u6QWiYkkH1GX3nLD4McgJOvPjZ8T6G9_UJk",
        twitter: "https://twitter.com/arapulido",
        linkedIn: "https://www.linkedin.com/in/arapulido/",
      },
      {
        name: "Mario Macías",
        twitter: "https://twitter.com/MaciasUPC",
        photo:
          "https://media.licdn.com/dms/image/C4E03AQGv4gLaWoGpjw/profile-displayphoto-shrink_800_800/0/1582785735995?e=1687392000&v=beta&t=w8ljnAlsBUoHjPfPJR3bUh0XGXP1ke1_-bRxvhc5M1E",
        linkedIn: "https://www.linkedin.com/in/mariomac/",
      },
      {
        name: "Mario Vázquez",
        twitter: "https://twitter.com/mvazce",
        photo:
          "https://www.redhat.com/architect/sites/default/files/styles/user_picture_square/public/pictures/2022-06/Mario%20Vazquez%201.jpg?itok=N34lZwBm",
        linkedIn: "https://www.linkedin.com/in/mariovazquezcebrian/",
      },
      {
        name: "Raquel Pau Fernández",
        photo:
          "https://pbs.twimg.com/profile_images/1253338486200909828/uBuKfSsj_400x400.jpg",
        twitter: "https://twitter.com/raquelpau",
        linkedIn: "https://www.linkedin.com/in/raquel-pau-4010069",
      },
    ],
  },
  {
    name: "Agile, Leadership, Diversity",
    members: [
      {
        name: "Celeste Gamez",
        photo: "images/cfp/celeste.png",
        twitter: "https://images.app.goo.gl/39E8eisV8TiULPQk8",
        linkedIn: "https://www.linkedin.com/in/celeste-g%C3%A1mez-73640460/",
      },
      {
        name: "Esther Gala",
        photo:
          "https://media.licdn.com/dms/image/D4D03AQFR45bj7C_FMg/profile-displayphoto-shrink_800_800/0/1678700978977?e=1687392000&v=beta&t=5C_SFQh7Zo5pE9QhknCqNCkDRUQ03K-oMhXzOtEe9SY",
        twitter: "",
        linkedIn: "https://www.linkedin.com/in/esthergala/",
      },
      {
        name: "María Mira Herreros",
        photo:
          "https://media.licdn.com/dms/image/C4E03AQHgVN4yIpj2yg/profile-displayphoto-shrink_800_800/0/1636703151043?e=1687392000&v=beta&t=pYqOVCjv7iphUDi8Nu_gv5FWiEiKjihipteq_ejxpEM",
        twitter: "",
        linkedIn: "https://www.linkedin.com/in/miramaria",
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

const CfpTrackComponent: FC<CfpTrackProps> = ({ track }) => (
  <>
    <section>
      <h2 style={{ paddingTop: "2rem", paddingBottom: "1.5rem" }}>
        {track.name}
      </h2>
    </section>
    <div style={{ display: "flex", margin: "1rem" }}>
      {track.members.map((member) => (
        <>
          {member.photo !== "" && (
            <div key={member.name}>
              <StyledAboutImage src={member.photo} alt={member.name} />
              <h5 style={{ color: Color.DARK_BLUE }}>{member.name}</h5>
              <StyledSocialIconsWrapper>
                <TwitterIcon color={Color.BLUE} twitterUrl={member.twitter} />
                <LinkedinIcon
                  color={Color.BLUE}
                  linkedinUrl={member.linkedIn}
                />
              </StyledSocialIconsWrapper>
            </div>
          )}
        </>
      ))}
    </div>
  </>
);

const CfpSection: FC = () => {
  const { width } = useWindowSize();
  React.useEffect(() => {
    document.title = `CFP Committee - DevBcn - ${conferenceData.edition}`;
  }, []);
  return (
    <>
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
        <p>
          We're excited to announce the members of the Call for Papers committee
          for the next DevBcn conference! These experienced professionals will
          be reviewing and selecting the best talks and workshops for the
          upcoming event.{" "}
        </p>
        {data.map((track) => (
          <CfpTrackComponent key={track.name} track={track} />
        ))}
      </SectionWrapper>
      <div style={{ height: "200px" }}>&nbsp;</div>
    </>
  );
};

export default CfpSection;
