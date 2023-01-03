import { FC, Suspense } from "react";
import LinkedinIcon from "../../../components/Icons/Linkedin";
import TwitterIcon from "../../../components/Icons/Twitter";
import {
  StyledAboutCard,
  StyledAboutImage,
  StyledAboutJob,
  StyledAboutName,
  StyledSocialIconsWrapper,
} from "./Style.AboutCard";
import { StyledLoadingImage } from "../../../components/Loading/Loading";
import Logo from "../../../assets/images/logo.svg";

type AboutCardProps = {
  person: {
    imageNumber: number;
    name: string;
    nameColor: string;
    job: string;
    jobColor: string;
    profileUrl: URL;
    twitterUrl: URL;
    linkedinUrl: URL;
  };
};

export const AboutCard: FC<AboutCardProps> = ({ person }) => (
  <StyledAboutCard>
    <Suspense fallback={<StyledLoadingImage src={Logo} />}>
      <StyledAboutImage src={person.profileUrl.href} />
    </Suspense>
    <StyledAboutName color={person.nameColor}>{person.name}</StyledAboutName>
    <StyledAboutJob color={person.jobColor}>{person.job}</StyledAboutJob>
    <StyledSocialIconsWrapper>
      <TwitterIcon
        color={person.nameColor}
        twitterUrl={person.twitterUrl.href}
      />
      <LinkedinIcon
        color={person.nameColor}
        linkedinUrl={person.linkedinUrl.href}
      />
    </StyledSocialIconsWrapper>
  </StyledAboutCard>
);
