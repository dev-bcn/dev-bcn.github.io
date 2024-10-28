import React, {FC, Suspense} from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import styled from "styled-components";
import TitleSection from "src/components/SectionTitle/TitleSection";
import {Color} from "src/styles/colors";
import {
    BIG_BREAKPOINT,
    MAX_WIDTH,
    MOBILE_BREAKPOINT,
} from "src/constants/BreakPoints";
import {useWindowSize} from "react-use";
import {StyledLoadingImage} from "src/components/Loading/Loading";

const StyledVenue = styled.div`
   {
    padding: 100px 10rem 50px;
    text-align: left;
    max-width: ${MAX_WIDTH}px;
    margin: 0 auto;

    @media (max-width: ${BIG_BREAKPOINT}px) {
      padding: 100px 1rem 50px;
    }
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
  lat: number;
  lng: number;
  text: string;
}

const AnyReactComponent: FC<React.PropsWithChildren<LocationProps>> = ({
  text,
}) => (
  <div
    style={{
      color: Color.WHITE,
      background: Color.LIGHT_BLUE,
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "25%",
      width: "100px",
      height: "70px",
      boxShadow: "1px 1px 1px darkgrey",
      transform: "translate(-50%, -50%)",
    }}
  >
    <a
      style={{
        textDecoration: "none",
        fontWeight: "bold",
        color: Color.WHITE,
        fontSize: "1.3em",
      }}
      href="https://goo.gl/maps/qaT5mCmi8ZkgCmteA"
      rel="noreferrer"
      target="_blank"
    >
        <img src="/images/LocationIcon.svg" alt="La Farga" height={24}/>
      {text}
    </a>
  </div>
);

export const Venue: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();
  const location: LocationProps = {
    text: "La Farga",
    lat: 41.362,
    lng: 2.1044,
  };
  const key = process.env.REACT_APP_MAP_API_KEY ?? "";

  return (
    <StyledVenue>
      <TitleSection
        title={"Venue"}
        subtitle={"La Farga"}
        color={Color.DARK_BLUE}
      />
      {width > MOBILE_BREAKPOINT && (
        <>
            <StyledLessIcon src="images/MoreThanBlueWhiteIcon.svg"/>
            <StyledMoreIcon src="images/MoreThanBlueIcon.svg"/>
        </>
      )}
      <section className="venue">
        <div className="image">
            <Suspense fallback={<StyledLoadingImage src="images/logo.svg"/>}>
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
            La Farga Centre d'Activitats
          </a>
          <p>
            carrer Barcelona, 2. 08901 L'Hospitalet de Llobregat Telf. 932615200
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
              🚝 <img src="/images/fgc.png" alt="FGC" width="30"/> FGC: Estación
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
            defaultCenter={location}
            defaultZoom={16}
          >
            <AnyReactComponent
              lat={location.lat}
              lng={location.lng}
              text={location.text}
            />
          </GoogleMapReact>
        </div>
      </section>
    </StyledVenue>
  );
};
