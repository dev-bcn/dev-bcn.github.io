import { Link } from "react-router";
import { styled } from "styled-components";

import { BIG_BREAKPOINT } from "../../constants/BreakPoints";
import {
  ROUTE_CODE_OF_CONDUCT,
  ROUTE_CONDITIONS,
} from "../../constants/routes";
import data from "../../data/2023.json";
import { useDocumentTitleUpdater } from "../../hooks/useDocumentTitleUpdate";
import { Color } from "../../styles/colors";

import type { FC } from "react";

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
  width: 90vw;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    margin: 15px 10%;
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
  padding-bottom: 20px;
}
  @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
    width: 60%;
    padding-bottom: 0.5rem;
  }
`;

const StyledParagraph = styled.section`
  text-align: left;
  color: ${Color.DARK_BLUE};
  margin: 15px 3%;
  width: 90vw;

  h2 {
    padding-bottom: 15px;
  }

  ul {
    padding-left: 40px;
  }
`;
const Diversity2023: FC<React.PropsWithChildren<unknown>> = () => {
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
        {data.edition} 🎉
      </StyledP>

      <StyledP>
        We must thank <a href="https://www.veepee.es/gr/home/default">Veepee</a>{" "}
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
          <StyledLogo alt="Vepee" src="/images/sponsors/veepee.png" />
        </a>
        <a
          href="https://www.adevinta.es/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <StyledLogo alt="Adevinta" src="/images/sponsors/adevinta.png" />
        </a>
      </FlexDiv>
      {data.diversity && (
        <>
          <StyledParagraph>
            <h2 id="who-can-apply">Who can apply?</h2>
            <div className="sectionbody">
              <div className="paragraph">
                <p>
                  We strongly encourage applications from women, people with
                  disabilities, people of color, economically disadvantaged
                  people, LGBTQ or any other underrepresented group. In
                  addition, the applicants must be 18 years of age or older and
                  must be available to attend the main days of the event (3rd
                  and 4th).
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
                  All applications&#39; information will be kept confidential
                  and used exclusively for this campaign.
                </p>
              </div>
            </div>
          </StyledParagraph>
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
                    includes admission 🎫 to all talks during the 3rd and 4th,
                    and catering 🥘 during the two days of the conference
                  </strong>
                  . Workshops (on the 5th) cannot be included due to limited
                  capacity.
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
                      Inform if they are not able to attend the event days 18th
                      and 19th. Tickets are not transferable.
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
      )}
    </StyledSection>
  );
};
export default Diversity2023;
