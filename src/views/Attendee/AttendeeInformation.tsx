import { FC } from "react";
import { Color } from "../../styles/colors";

const AttendeeInformation: FC = () => {
  return (
    <main>
      <h1 style={{ color: Color.LIGHT_BLUE }}>Attendee information</h1>
      <p>
        here's some important information to get the most of your attendance to
        DevBcn 2023.
      </p>
      <section>
        <h2 style={{ color: Color.LIGHT_BLUE }}>Mobile application</h2>
        <div
          style={{
            fontFamily: "Helvetica, sans-serif",
            minHeight: "500px",
            padding: "10px",
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
            width: "520px",
          }}
        >
          {" "}
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
      </section>
      <section style={{ backgroundColor: Color.LIGHT_BLUE }}>
        <h2 style={{ color: Color.DARK_BLUE }}>Pre-Party</h2>
        <p>
          We believe that learning and enjoyment go hand in hand. That's why we
          have organized a pre-party session sponsored by{" "}
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
          participants. Indulge in tasty snacks and beverages while engaging in
          friendly games of air hockey and table football. It's a fantastic
          opportunity to network, relax, and set the tone for the upcoming
          conference. We can't wait to see you there!
        </p>
        <aside>some images</aside>
        <p>
          <img
            style={{
              width: "20vw",
              borderRadius: "5%",
              margin: "0.5rem",
              padding: "0.2rem",
              border: "1px solid #002454",
            }}
            src="/images/pre-party/pre-party-1.jpg"
            alt="air hockey"
          />
          <img
            style={{
              width: "20vw",
              borderRadius: "5%",
              margin: "0.5rem",
              padding: "0.2rem",
              border: "1px solid #002454",
            }}
            src="/images/pre-party/pre-party-2.jpg"
            alt="air hockey"
          />
          <img
            style={{
              width: "20vw",
              borderRadius: "5%",
              margin: "0.5rem",
              padding: "0.2rem",
              border: "1px solid #002454",
            }}
            src="/images/pre-party/pre-party-3.jpg"
            alt="air hockey"
          />
          <img
            style={{
              width: "20vw",
              borderRadius: "5%",
              margin: "0.5rem",
              padding: "0.2rem",
              border: "1px solid #002454",
            }}
            src="/images/pre-party/pre-party-4.jpg"
            alt="air hockey"
          />
        </p>
        <p>Brought to you by Azul</p>
        <p>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.azul.com/?utm_medium=email&utm_campaign=20230703-SEV-DevBCN&utm_source=DevBCN&utm_content=&utm_term="
          >
            <img
              src="/images/sponsors/azul.png"
              alt="Azul"
              style={{ width: "30vw" }}
            />
          </a>
        </p>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#4798CA"
          fillOpacity="1"
          d="M0,256L80,218.7C160,181,320,107,480,85.3C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <section>
        <h2>networking party</h2>
        <p>&nbsp;</p>
      </section>
    </main>
  );
};
export default AttendeeInformation;
