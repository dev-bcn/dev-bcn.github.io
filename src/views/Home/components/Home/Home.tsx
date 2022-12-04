import Countdown from "react-countdown";
import { FC } from "react";
import data from "../../../../data/2023.json";
import LessThanIcon from "../../../../assets/images/MoreThanBlueWhiteIcon.svg";
import SectionWrapper from "../../../../components/SectionWrapper/SectionWrapper";
import { LARGE_BREAKPOINT } from "../../../../constants/BreakPoints";
import TimeCountDown from "./components/TimeCountdown";
import { useWindowSize } from "react-use";
import {
  StyledBlueSlash,
  StyledBottomSlash,
  StyledGreenSlash,
  StyledHomaImage,
  StyledLessThan,
  StyledSubtitle,
  StyledTitle,
  StyledTitleContainer,
  StyledTopSlash,
  StyleHomeContainer,
} from "./Style.Home";
import logo from "../../../../assets/images/logo.png";
import ActionButtons from "../ActionButtons/ActionButtons";
import styled from "styled-components";

const StyledLogo = styled.img`
  margin: 20px;
  width: 600px;
`;
const Home: FC = () => {
  const { width } = useWindowSize();
  const startDay = data.startDay;

  return (
    <StyledHomaImage>
      <SectionWrapper color="transparent">
        <StyleHomeContainer>
          <StyledLogo src={logo} alt="DevBcn logo" />
          <StyledTitleContainer>
            <StyledTitle>DevBcn 2023</StyledTitle>
          </StyledTitleContainer>
          <StyledSubtitle>July 3rd-5th</StyledSubtitle>
          <StyledSubtitle>{data.tracks}</StyledSubtitle>
          <Countdown date={startDay} renderer={TimeCountDown} />
          <ActionButtons />

          {width > LARGE_BREAKPOINT && <StyledLessThan src={LessThanIcon} />}
          <StyledTopSlash
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 4 }}
          >
            <StyledGreenSlash>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{" "}
            </StyledGreenSlash>
          </StyledTopSlash>
          <StyledBottomSlash
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 6 }}
          >
            <StyledBlueSlash>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{" "}
            </StyledBlueSlash>
          </StyledBottomSlash>
        </StyleHomeContainer>
      </SectionWrapper>
    </StyledHomaImage>
  );
};

export default Home;
