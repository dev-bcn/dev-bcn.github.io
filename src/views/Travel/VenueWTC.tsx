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

export const VenueWTC: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();
  return (
    <StyledVenue>
      <TitleSection
        title={"Venue"}
        subtitle={"World Trade Center, Barcelona"}
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
              src="/images/wtc.jpg"
              style={{ aspectRatio: "285/173" }}
              alt="World Trade Center, Barcelona"
              className="venue"
            />
          </Suspense>
          <a
            href="https://www.wtcbarcelona.com/"
            rel="noreferrer"
            target="_blank"
            title="World Trade Center, Barcelona"
          >
            World Trade Center, Barcelona
          </a>
          <p>1ª planta Edif. Este, Moll de Barcelona, s/n, 08039 Barcelona</p>
          <h4>Access by public transportation</h4>
          <p>
            🚇 Metro: Líneas L3: Parada Drassanes, Línea L2: Parada Paral·lel.
          </p>
          <p>🚍 Bus: Línea V11, parada Moll de Barcelona.</p>
          <p>
            🚙 Access by <strong>car:</strong> via C-31 & B-10(14 minutes from
            the Airport)
          </p>
          <h4>Paid parking options</h4>
          <p>
            <a
              href="https://www.wtcbarcelona.com/"
              rel="noreferrer"
              target="_blank"
            >
              World Trade Center, Barcelona
            </a>
          </p>
        </div>
        <div className="map">
          <img
            src="/images/wtc-auditorio.jpg"
            alt="Venue entrance"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </section>
    </StyledVenue>
  );
};
