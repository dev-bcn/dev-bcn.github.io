import React, { FC } from "react";
import { Color } from "../../styles/colors";
import data from "../../data/2024.json";
import styled from "styled-components";
import { BIG_BREAKPOINT } from "../../constants/BreakPoints";
import { Link } from "react-router";
import {
  ROUTE_CODE_OF_CONDUCT,
  ROUTE_CONDITIONS,
} from "../../constants/routes";
import { useDocumentTitleUpdater } from "../../hooks/useDocumentTitleUpdate";

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
    max-width: 30vw;
    flex: 2 1 auto;
    padding-bottom: 50px;
}
    @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
        padding-bottom: 20px;
        max-width: 65vw;
    }
`;

const Heading = styled.h1`
  color: ${Color.WHITE};
  font-size: 2.5em;
`;

const StyledP = styled.p`
  text-align: justify;
  color: ${Color.DARK_BLUE};
  margin: 15px 3%;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    margin: 15px 10%;
  }

  &.first {
    margin-top: 50px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  width: 20%;
  margin: 0 auto;
  flex-direction: column;
  padding-bottom: 20px;
  @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
    width: 60%;
    padding-bottom: 0.5rem;
  }
`;

const StyledParagraph = styled.section`
  text-align: left;
  color: ${Color.DARK_BLUE};
  margin: 15px 3%;

  h2 {
    padding-bottom: 15px;
  }

  ul {
    padding-left: 40px;
  }
`;

const Diversity: FC<React.PropsWithChildren<unknown>> = () => {
  useDocumentTitleUpdater("Diversity", data.edition);

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
        {parseInt(data.edition) + 1} 🎉
      </StyledP>

      <StyledP>
        We must thank{" "}
        <a href="https://careers.ocadogroup.com/where-we-are/europe/development-centre-barcelona?utm_source=event&utm_medium=other&utm_campaign=ot_event_bcn_devbcn_website">
          Ocado
        </a>{" "}
        for making this possible!
      </StyledP>
      <FlexDiv>
        <a
          href="https://careers.ocadogroup.com/where-we-are/europe/development-centre-barcelona?utm_source=event&utm_medium=other&utm_campaign=ot_event_bcn_devbcn_website"
          target="_blank"
          rel="noreferrer noopener"
        >
          <StyledLogo alt="Ocado" src="images/sponsors/ocado.png" />
        </a>
      </FlexDiv>
      <>
        <StyledParagraph>
          <h2 id="who-can-apply">Who can apply?</h2>
          <div className="sectionbody">
            <div className="paragraph">
              <p>
                We strongly encourage applications from women, people with
                disabilities, people of color, economically disadvantaged
                people, LGBTQ or any other underrepresented group. In addition,
                the applicants must be 18 years of age or older and must be
                available to attend the main days of the event.
              </p>
            </div>
            <div className="paragraph">
              <p>
                There are a <strong>limited amount of sponsorships</strong> 🔥
                and will be awarded based on a combination of need and impact.
              </p>
            </div>
          </div>
        </StyledParagraph>
        {data.diversity && (
          <StyledParagraph>
            <h2 id="how-can-i-apply">How can I apply?</h2>
            <div className="sectionbody">
              <div className="paragraph">
                <p>
                  To apply, please fill the{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdyRqQkh2iRD_QxzAwodIM1cXmO_Q4hNGojXnFli-crob2QUQ/viewform"
                  >
                    application form
                  </a>{" "}
                  introducing yourself and telling us about your expectations
                  for the event.
                </p>
              </div>
              <div className="paragraph">
                <p>
                  All applications' information will be kept confidential and
                  used exclusively for this campaign.
                </p>
              </div>
            </div>
          </StyledParagraph>
        )}
        <StyledParagraph>
          <h2 id="how-will-i-be-notified">How will I be notified?</h2>
          <div className="sectionbody">
            <div className="paragraph">
              <p>
                Selected people will be notified via email at the contact
                provided.
              </p>
            </div>
            <div className="paragraph">
              <p>
                They will receive a free ticket to the conference, which{" "}
                <strong>
                  includes admission 🎫 to all talks during the event, and
                  catering 🥘 during the two days of the conference.
                </strong>
              </p>
            </div>
          </div>
        </StyledParagraph>
        <StyledParagraph>
          <h2 id="terms-and-conditions">Terms and Conditions</h2>
          <div className="sectionbody">
            <div className="paragraph">
              <p>All awarded attendees must:</p>
            </div>
            <div className="ulist">
              <ul>
                <li>
                  <p>
                    Follow the conference{" "}
                    <Link to={ROUTE_CODE_OF_CONDUCT}>Code of conduct</Link>.
                  </p>
                </li>
                <li>
                  <p>
                    Find additional funding for transportation and
                    accommodation. These costs are not included.
                  </p>
                </li>
                <li>
                  <p>
                    Agree to conference and ticket{" "}
                    <Link to={ROUTE_CONDITIONS}>terms and conditions</Link> in
                    case of being awarded with a ticket.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </StyledParagraph>
        <div style={{ paddingBottom: "190px" }}>&nbsp;</div>
      </>
    </StyledSection>
  );
};
export default Diversity;
