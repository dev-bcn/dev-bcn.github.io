import { FC, useEffect } from "react";
import { Color } from "../../styles/colors";
import data from "../../data/2023.json";
import styled from "styled-components";
import { BIG_BREAKPOINT } from "../../constants/BreakPoints";

const StyledSection = styled.section`
   {
    padding-top: 48px;
  }

  .top {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 50px));
    height: 51px;
    background-color: ${Color.DARK_BLUE};
    border-top: 1px solid ${Color.DARK_BLUE};
  }

  .bottom {
    clip-path: polygon(0 0, 100% 50px, 100% 100%, 0 100%);
    margin-top: -50px;
    height: 50px;
    background-color: ${Color.WHITE};
  }
`;

const StyledWave = styled.section`
  background-color: ${Color.DARK_BLUE};
  padding: 20px 0;
  margin-bottom: 0;
`;

const StyledLogo = styled.img`
   {
    flex: 2 1 auto;
    padding-bottom: 100px;
  }
  @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
    padding-bottom: 20px;
  }
`;

const Heading = styled.h1`
  color: ${Color.WHITE};
  font-size: 2.5em;
`;

const StyledP = styled.p`
   {
    text-align: justify;
    color: ${Color.DARK_BLUE};
    margin: 15px 3%;

    @media (max-width: ${BIG_BREAKPOINT}px) {
      margin: 15px 10%;
    }
  }

  &.first {
    margin-top: 50px;
  }
`;

const FlexDiv = styled.div`
   {
    display: flex;
    width: 20%;
    margin: 0 auto;
    flex-direction: column;
  }
  @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
    width: 60%;
    padding-bottom: 50rem;
  }
`;
const Diversity: FC = () => {
  useEffect(() => {
    document.title = `Diversity - DevBcn ${data.edition}`;
  });

  return (
    <StyledSection className="styled-section">
      <StyledWave className="styled-wave">
        <Heading>Diversity Sponsorship</Heading>
      </StyledWave>
      <div>
        <div className="top">&nbsp;</div>
        <div className="bottom">&nbsp;</div>
      </div>
      <StyledP className="first">
        DevBcn, its volunteers, and staff consider that understanding,
        respecting, valuing and promoting differences is an essential part of
        our core values. Since we believe that everyone is unique, in our events
        we actively encourage collaborative environments where individuals can
        confidently share their different ideas. We are also committed to
        embrace the rich diversity of our society and the world around us.
        People who are diverse in nationality, age, race, ethnic origin,
        spiritual beliefs and practices, gender, gender identity, sexual
        orientation, work and life status are critical for constant improvement
        and innovation in our profession.
      </StyledP>

      <StyledP>
        That’s why we are running again the diversity sponsorship for DevBcn{" "}
        {data.edition} 🎉
      </StyledP>

      <StyledP>
        We must thank <a href="https://www.veepee.es/gr/home/default">Vepee</a>{" "}
        &{" "}
        <a href="https://www.adevinta.es/" target="_blank" rel="noreferrer">
          Adevinta
        </a>{" "}
        for making this possible!
      </StyledP>
      <FlexDiv>
        <a
          href="https://www.veepee.es/gr/home/default"
          target="_blank"
          rel="noreferrer noopener"
        >
          <StyledLogo alt="Vepee" src="images/sponsors/veepee.png" />
        </a>
        <a
          href="https://www.adevinta.es/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <StyledLogo alt="Adevinta" src="images/sponsors/adevinta.png" />
        </a>
      </FlexDiv>
    </StyledSection>
  );
};
export default Diversity;
