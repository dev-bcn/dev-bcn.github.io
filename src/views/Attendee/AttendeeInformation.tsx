import { FC } from "react";
import { Color } from "../../styles/colors";
import styled from "styled-components";
import { BIG_BREAKPOINT } from "../../constants/BreakPoints";

const PrePartyImg = styled.img`
   {
    width: 20vw;
    border-radius: 3%;
    margin: 0.3rem;
    padding: 0.2rem;
    border: 1px solid ${Color.DARK_BLUE};
    transition: 0.5s linear;
  }

  &:hover {
    filter: brightness(1.2);
  }
`;

const PartyImg = styled.img`
   {
    width: 20vw;
    border-radius: 3%;
    margin: 0.3rem;
    padding: 0.2rem;
    border: 1px solid ${Color.SKY_BLUE};
  }

  &:hover {
    filter: brightness(1.2);
  }
`;

const MobileSection = styled.section`
  padding: 50px 100px 300px;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    padding: 50px 100px 400px;
  }
`;

const PrePartySection = styled.section`
   {
    background-color: ${Color.LIGHT_BLUE};
    padding: 50px 100px 20px;
  }
`;

const NetworkingPartySection = styled.section`
  background-color: ${Color.DARK_BLUE};
  padding: 50px 100px 20px;
`;

const SectionWrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`;

const AttendeeInformation: FC = () => {
  return (
    <main>
      <h1 style={{ color: Color.LIGHT_BLUE, paddingTop: "100px" }}>
        Attendee information
      </h1>
      <p style={{ margin: "20px" }}>
        Here's some important information to get the most of your attendance to
        DevBcn 2023.
      </p>
      <PrePartySection id="pre-party">
        <SectionWrapper>
          <h2 style={{ color: Color.DARK_BLUE }}>Pre-Party</h2>
          <p style={{ textAlign: "justify", margin: "15px" }}>
            We believe that learning and enjoyment go hand in hand. That's why
            we have organized a pre-party session sponsored by{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.azul.com/?utm_medium=email&utm_campaign=20230703-SEV-DevBCN&utm_source=DevBCN&utm_content=&utm_term="
            >
              Azul
            </a>{" "}
            for all attendees on{" "}
            <strong>Monday, July 3rd from 19:00 to 20:00</strong>. During this
            time, you can unwind, socialize, and have a great time with fellow
            participants. Indulge in tasty snacks and beverages while engaging
            in friendly games of air hockey and table football. It's a fantastic
            opportunity to network, relax, and set the tone for the upcoming
            conference. We can't wait to see you there!
          </p>
          <p>
            <PrePartyImg
              src="/images/pre-party/pre-party-1.jpg"
              alt="pre-party"
            />
            <PrePartyImg
              src="/images/pre-party/pre-party-2.jpg"
              alt="pre-party"
            />
            <PrePartyImg
              src="/images/pre-party/pre-party-3.jpg"
              alt="pre-party"
            />
            <PrePartyImg
              src="/images/pre-party/pre-party-4.jpg"
              alt="pre-party"
            />
          </p>
          <p>
            Brought to you by{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.azul.com/?utm_medium=email&utm_campaign=20230703-SEV-DevBCN&utm_source=DevBCN&utm_content=&utm_term="
            >
              Azul
            </a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.azul.com/?utm_medium=email&utm_campaign=20230703-SEV-DevBCN&utm_source=DevBCN&utm_content=&utm_term="
            >
              <img
                src="/images/sponsors/azul.png"
                alt="Azul"
                style={{ width: "30vw", margin: "2rem" }}
              />
            </a>
          </p>
        </SectionWrapper>
      </PrePartySection>
      <NetworkingPartySection id="networking-party">
        <SectionWrapper>
          <h2 style={{ color: Color.SKY_BLUE }}>Networking Party</h2>
          <p
            style={{ color: Color.WHITE, margin: "20px", textAlign: "justify" }}
          >
            Only for a selected audience, we'll deliver a networking party with
            dinner, orchestra, and Karaoke. These tickets will be distributed
            among the sponsors, so make sure to contact them throughout the day
            to get one.
          </p>
          <PartyImg src="/images/party/entry-pass.png" alt="party" />
          <p
            style={{ color: Color.WHITE, margin: "20px", textAlign: "center" }}
          >
            <strong>Monday, July 3rd from 20:00 to 22:00</strong>
          </p>
          <PartyImg src="/images/party/party-1.jpg" alt="party" />
          <PartyImg src="/images/party/party-2.jpg" alt="party" />
          <PartyImg src="/images/party/party-3.jpg" alt="party" />
          <PartyImg src="/images/party/party-4.jpg" alt="party" />
        </SectionWrapper>
      </NetworkingPartySection>
      <MobileSection id="mobile-application">
        <h2 style={{ color: Color.DARK_BLUE, marginTop: "10px" }}>
          Mobile application
        </h2>
        <div
          style={{
            fontFamily: "Helvetica, sans-serif",
            minHeight: "500px",
            padding: "10px",
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
            width: "520px",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", fontSize: "16px" }}>
            {" "}
            <p>
              Get our official{" "}
              <a
                href="https://whova.com/whova-event-app/"
                style={{ textDecoration: "none", color: "black" }}
              >
                conference app
              </a>
              ,<br />{" "}
              <img
                width="100px"
                src="https://whova.com/xems/apis/get_whova_tracking_image/?event_id=devbc1_202307&track_id=use_informational_widget&image_type=whova_logo"
                alt="whova"
              />
            </p>
            <p>
              <img
                alt="app"
                width="200px"
                src="https://whova.com/static/frontend/xems/img/app-screenshots.png"
              />
            </p>
            <p>
              Get the most out of the app and have a more productive experience!
            </p>
            <div style={{ textAlign: "left", fontSize: "14px", clear: "both" }}>
              {" "}
              <div style={{ clear: "both" }}>
                {" "}
                <p
                  style={{
                    marginRight: "8px",
                    padding: "7px 13px",
                    float: "left",
                    color: "#dacee",
                    borderRadius: "50%",
                    border: "1px solid #dacee",
                    backgroundColor: "white",
                  }}
                >
                  {" "}
                  1{" "}
                </p>
                <p style={{ color: "#2dacee", float: "left", width: "450px" }}>
                  <b>NAVIGATE</b> the event agenda and logistics, even without
                  Wi-Fi or data. Access useful information like ridesharing and
                  local attractions through the Community Board{" "}
                </p>
              </div>
              <div style={{ clear: "both" }}>
                {" "}
                <p
                  style={{
                    marginRight: "8px",
                    padding: "7px 13px",
                    float: "left",
                    color: "#dacee",
                    borderRadius: "50%",
                    border: "1px solid #dacee",
                    backgroundColor: "white",
                  }}
                >
                  {" "}
                  2{" "}
                </p>
                <p style={{ float: "left", color: "#2dacee", width: "450px" }}>
                  {" "}
                  <b>NETWORK</b> effectively. Plan whom to meet by exploring
                  attendee profiles and sending out messages{" "}
                </p>
              </div>
              <div style={{ clear: "both" }}>
                {" "}
                <p
                  style={{
                    marginRight: "8px",
                    padding: "7px 13px",
                    float: "left",
                    color: "#dacee",
                    borderRadius: "50%",
                    border: "1px solid #dacee",
                    backgroundColor: "white",
                  }}
                >
                  {" "}
                  3{" "}
                </p>
                <p style={{ float: "left", color: "#2dacee", width: "450px" }}>
                  {" "}
                  <b>PARTICIPATE</b> in event activities through session likes,
                  comments, ratings, live polling, tweeting, and more{" "}
                </p>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                clear: "both",
                textAlign: "center",
                padding: "0 0 5px 0",
              }}
            >
              {" "}
              <a
                rel="noreferrer"
                href="https://itunes.apple.com/app/apple-store/id716979741?pt=1944835&ct=download_widget&mt=8"
                target="_blank"
                style={{
                  backgroundColor: "#2dacee",
                  padding: "8px 12px",
                  color: "#fff",
                  minWidth: "140px",
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                iOS
              </a>{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.whova.event&referrer=utm_source%3Ddownload_widget%26utm_medium%3Dwidget%26utm_content%3Ddevbc1_202307"
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: "#2dacee",
                  padding: "8px 12px",
                  color: "#fff",
                  minWidth: "140px",
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                Android
              </a>
            </div>
            <div style={{ fontSize: "14px" }}>
              <span>For Blackberry or Windows Phone,</span>
              <a
                style={{ textDecoration: "none" }}
                rel="noreferrer"
                target="_blank"
                href="https://whova.com/webapp/request/?event_id=devbc1_202307"
              >
                Click here
              </a>
            </div>
            <div>
              <div style={{ fontSize: "14px" }}>
                For feature details, visit{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                  href="https://whova.com/"
                >
                  Whova
                </a>
              </div>
            </div>
          </div>
        </div>
      </MobileSection>
    </main>
  );
};
export default AttendeeInformation;
