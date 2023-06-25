import { FC } from "react";
import styled from "styled-components";
import { Color } from "../../styles/colors";
import { BIG_BREAKPOINT } from "../../constants/BreakPoints";

const Heading = styled.h1`
  font-family: "DejaVu Sans Condensed Bold", sans-serif;
  color: ${Color.DARK_BLUE};
`;

const Paragraph = styled.p`
   {
    font-family: "Square 721 Regular", sans-serif;
    margin: 1rem;
  }
`;

const List = styled.ul`
   {
    padding: 0.2rem 0.5rem;
    margin: 0.5rem 1rem;
  }
`;

const Image = styled.img`
   {
    width: 20vw;
    border: 1px solid ${Color.DARK_BLUE};
    margin: 1.5rem;
    padding: 3px;
    border-radius: 1rem;
  }
  @media (max-width: ${BIG_BREAKPOINT}px) {
    width: 70vw;
    border-radius: 0.5rem;
  }
`;

const SpeakerInformation: FC = () => {
  return (
    <>
      <main
        style={{
          paddingTop: "150px",
          paddingBottom: "200px",
        }}
      >
        <section
          style={{
            textAlign: "justify",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "1rem 0",
          }}
        >
          <Heading>Speakers activities plan</Heading>
          <Paragraph>
            Here's the detailed information on the speakers activities for
            Sunday, July 1st, 2023.
          </Paragraph>
          <div style={{ textAlign: "center" }}>
            <Image src="/images/activities/bus.jpg" alt="drinks" />
            <Image src="/images/activities/lunch.jpg" alt="drinks" />
          </div>
          <div
            style={{
              backgroundColor: Color.LIGHT_BLUE,
              padding: "1rem",
              borderRadius: "1rem",
            }}
          >
            <List>
              <li>
                <strong>
                  16:00
                  <a
                    href="https://www.hotelbarcelonaportafira.com/es/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {" "}
                    Hotel Porta Fira
                  </a>
                </strong>{" "}
                - 🗣 Initial gathering
                <List>
                  <li>🚍 Bus, 45 minutes ( be punctual !)</li>
                </List>
              </li>
              <li>
                <strong>
                  17:00
                  <a
                    href="https://www.torres.es/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {" "}
                    Familia Torres
                  </a>
                </strong>{" "}
                - planned visit
                <List>
                  <li>🍷 Wine taste</li>
                  <li>🍽️ Dinner</li>
                </List>
              </li>
              <li>
                <strong>22:00 Return to Barcelona </strong>
                <List>
                  <li>🚍 45 minutes bus travel</li>
                  <li>1st stop: Hotel Porta Fira</li>
                  <li>2nd stop: Hotel Catalonia Plaza for drinks</li>
                </List>
              </li>
              <li>
                <strong>
                  22:45{" "}
                  <a
                    href="https://goo.gl/maps/jajECdg8rUzZusLx7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Hotel Catalonia Barcelona Plaza
                  </a>
                </strong>{" "}
                - Drinks
                <List>
                  <li> 🥂 Ask for your free drinks bracelet on arrival</li>
                </List>
              </li>
            </List>
          </div>
          <div style={{ textAlign: "center" }}>
            <Image src="/images/activities/drinks-1.jpg" alt="drinks" />
            <Image src="/images/activities/drinks-2.jpg" alt="drinks" />
          </div>
          <Paragraph style={{ textAlign: "center" }}>
            Brought to you by{" "}
            <a href="https://www.confluent.io" target="_blank" rel="noreferrer">
              Confluent
            </a>
          </Paragraph>
          <Paragraph style={{ textAlign: "center" }}>
            <a href="https://www.confluent.io" target="_blank" rel="noreferrer">
              <img
                src="/images/sponsors/confluent.png"
                alt="confluent"
                style={{ width: "20vw" }}
              />
            </a>
          </Paragraph>
        </section>
      </main>
    </>
  );
};

export default SpeakerInformation;
