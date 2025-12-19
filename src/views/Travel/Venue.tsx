import type { FC } from "react";

import React, { Suspense } from "react";
import "./map.css";

import { useWindowSize } from "react-use";
import { styled } from "styled-components";

import { StyledLoadingImage } from "@components/Loading/Loading";
import TitleSection from "@components/SectionTitle/TitleSection";
import {
  BIG_BREAKPOINT,
  MAX_WIDTH,
  MOBILE_BREAKPOINT,
} from "@constants/BreakPoints";
import { Color } from "@styles/colors";

const StyledVenue = styled.div`
  padding: 0.5rem 2rem 0.5rem;
  text-align: left;
  max-width: ${MAX_WIDTH}px;
  margin: 0 auto;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    padding: 100px 1rem 50px;
  }

  .image {
    img.venue {
      width: 95%;
      margin: 0 2.5%;
      text-align: center;
    }

    a,
    p {
      padding-left: 10px;
    }

    a {
      text-decoration: none;
      color: ${Color.DARK_BLUE};
      font-weight: bold;
    }
  }

  section.venue {
    display: flex;
    @media (max-width: ${BIG_BREAKPOINT}px) {
      flex-direction: column;
    }
  }

  h4 {
    margin: 15px 0 3px 10px;
  }

  .image,
  .map {
    width: 50%;
    @media (max-width: ${BIG_BREAKPOINT}px) {
      width: 100%;
    }
  }
`;

const StyledTrainLine = styled.span`
  background-color: #00f200;
  font-weight: bold;
  padding: 1px 2px;
  font-family: sans-serif;
  font-size: 12px;
`;
export const StyledLessIcon = styled.img`
  position: absolute;
  left: -1rem;
  top: 5rem;
  height: 5rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 10rem;
  }
`;
export const StyledMoreIcon = styled.img`
  position: absolute;
  right: -1rem;
  top: 5rem;
  height: 5rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 10rem;
  }
`;

export const Venue: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();
  return (
    <StyledVenue>
      <TitleSection
        title={"Venue"}
        subtitle={"La Farga"}
        color={Color.DARK_BLUE}
      />
      {width > MOBILE_BREAKPOINT && (
        <>
          <StyledLessIcon src="/images/MoreThanBlueWhiteIcon.svg" />
          <StyledMoreIcon src="/images/LessThanBlueWhiteIcon.svg" />
        </>
      )}
      <section className="venue">
        <div className="image">
          <Suspense fallback={<StyledLoadingImage src="/images/logo.svg" />}>
            <img
              src="/images/la-farga.png"
              style={{ aspectRatio: "285/173" }}
              alt="La Farga"
              className="venue"
            />
          </Suspense>
          <a
            href="https://www.lafarga.com/corporatiu/lafarga-hospitalet//"
            rel="noreferrer"
            target="_blank"
            title="La Farga"
          >
            La Farga Centre d&#39;Activitats
          </a>
          <p>
            carrer Barcelona, 2. 08901 L&#39;Hospitalet de Llobregat Telf.
            932615200
          </p>
          <h4>Venue entrance</h4>
          <p>
            <a
              rel={"noreferrer"}
              href="https://maps.app.goo.gl/2zao7ynr4wE7UYDn8"
              target={"_blank"}
            >
              <strong>A) Talks:</strong> Carrer Barcelona, 12
            </a>
          </p>
          <p>
            <a
              rel={"noreferrer"}
              href="https://maps.app.goo.gl/YwU14LoRvWmtXk138"
              target={"_blank"}
            >
              <strong>B) Workshops:</strong> Carrer Girona, 15
            </a>
          </p>
          <h4>Access by public transportation</h4>
          <p>
            🚝 <StyledTrainLine>R3</StyledTrainLine> Cercanías: Estación
            Hospitalet de Llobregat
          </p>
          <p>🚇 Metro: Parada Rambla Just Oliveras Autobús: Líneas L12 – LH2</p>
          <p>
            🚝 <img src="/images/fgc.png" alt="FGC" width="20" /> FGC: Estación
            Sant Josep
          </p>
          <p>
            🚙 Access by <strong>car:</strong> via C-31 (20 minutes from the
            Airport)
          </p>
          <h4>Paid parking options</h4>
          <p>
            <a
              href="https://centrolafarga.com/"
              rel="noreferrer"
              target="_blank"
            >
              La Farga Centre Comercial
            </a>
          </p>
        </div>
        <div className="map">
          <img
            src="/images/venue-entrance.png"
            alt="Venue entrance"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </section>
    </StyledVenue>
  );
};
