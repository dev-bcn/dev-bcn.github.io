import React, { FC, Suspense } from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import { styled } from "styled-components";
import TitleSection from "@components/SectionTitle/TitleSection";
import { Color } from "@styles/colors";
import {
  BIG_BREAKPOINT,
  MAX_WIDTH,
  MOBILE_BREAKPOINT,
} from "@constants/BreakPoints";
import { useWindowSize } from "react-use";
import { StyledLoadingImage } from "@components/Loading/Loading";

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

interface LocationProps {
  id: string;
  lat: number;
  lng: number;
  text: string;
  subtext: string;
}

const AnyReactComponent: FC<React.PropsWithChildren<LocationProps>> = ({
  text,
  subtext,
}) => (
  <div
    style={{
      color: Color.WHITE,
      background: Color.LIGHT_BLUE,
      padding: "15px 10px",
      display: "inline-flex",
      width: "fit-content",
      textAlign: "left",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10%",
      boxShadow: "1px 1px 1px darkgrey",
      transform: "translate(-50%, -50%)",
      position: "absolute",
    }}
  >
    <a
      style={{
        textDecoration: "none",
        color: Color.WHITE,
        fontSize: "1 rem",
      }}
      href="https://goo.gl/maps/qaT5mCmi8ZkgCmteA"
      rel="noreferrer"
      target="_blank"
    >
      <strong>{text}</strong>
      <p>{subtext}</p>
    </a>
  </div>
);

export const Venue: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();
  const defaultLocation = {
    lat: 41.361,
    lng: 2.1041,
  };
  const locations: Array<LocationProps> = [
    {
      id: "ab4186ca-dc31-419e-a684-f3e6d0e83e6e",
      text: "Conference Talks",
      subtext: "Carrer Barcelona, 12",
      lat: 41.361529516457,
      lng: 2.10421032792683,
    },
    {
      id: "a6887def-70bd-473d-ac61-cd28392b3568",
      text: "Workshops",
      subtext: "Carrer Girona, 15",
      lat: 41.36171121328454,
      lng: 2.103491331747179,
    },
  ];
  const key = import.meta.env.VITE_MAP_API_KEY ?? "";
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
          <h4>
            Access by <strong>public transportation:</strong>{" "}
          </h4>
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
          <GoogleMapReact
            bootstrapURLKeys={{ key }}
            defaultCenter={defaultLocation}
            center={defaultLocation}
            defaultZoom={11}
            zoom={18}
          >
            {locations.map((location) => (
              <AnyReactComponent
                id={location.id}
                key={location.id}
                lat={location.lat}
                lng={location.lng}
                subtext={location.subtext}
                text={location.text}
              />
            ))}
          </GoogleMapReact>
        </div>
      </section>
    </StyledVenue>
  );
};
