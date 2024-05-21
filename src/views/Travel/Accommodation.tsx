import React, { FC } from "react";
import styled from "styled-components";
import { Color } from "../../styles/colors";
import { BIG_BREAKPOINT } from "../../constants/BreakPoints";

const StyledAccommodation = styled.div`
{
    text-align: left;
    padding: 10px 40px;
    background-color: ${Color.LIGHT_BLUE};
    color: ${Color.WHITE};
}

    div.description ul {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 40px;
    }

    ul a {
        text-decoration: none;
        margin-left: 10px;
        color: ${Color.WHITE};
    }

    div.image {
        margin-top: 10px;
        background-color: ${Color.DARK_BLUE};
        text-align: center;

        img {
            margin-top: 5px;
            width: 20rem;
        }
    }

    div.description {
        background-color: ${Color.DARK_BLUE};
        padding-left: 5px;

        p {
            padding: 5px;
        }

        strong {
            color: ${Color.YELLOW};
        }

        a {
            color: ${Color.YELLOW};
        }
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    h1 {
        font-size: 2.25rem;
        text-align: center;
        margin-top: 0;
        margin-bottom: 30px;
        color: #002454;
    }

    .accommodation {
        background-color: #fff;
        border: 1px solid #ccc;
        margin-bottom: 1.25rem;
        padding: 1.25rem;
        display: flex;
        align-items: center;
        border-radius: 95% 5% 95% 5% / 5% 100% 0 95%;
        @media (max-width: ${BIG_BREAKPOINT}px) {
            flex-direction: column;
        }
    }

    .accommodation img {
        max-width: 300px;
        margin-right: 1.25rem;
        border-radius: 90% 10% 90% 10% / 0 100% 0 100%;

        @media (max-width: ${BIG_BREAKPOINT}px) {
            max-width: 100%;
            height: auto;
        }
    }

    .accommodation h2 {
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    h2 a {
        color: #002454;
        margin-bottom: 100px;
    }

    .accommodation p {
        margin-bottom: 0;
        color: #002454;
        font-size: 1rem;
    }

    .accommodation ul {
        color: #002454;
        padding-left: 30px;
    }
`;

export const Accommodation: FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <StyledAccommodation>
      <div className="container">
        <h1 style={{ paddingTop: "5rem" }}>Accommodation Options</h1>

        <div className="accommodation">
          <a
            href="https://www.atiramhotels.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/images/accomodation/atiram.jpg" alt="Atiram Hotel" />
          </a>
          <div>
            <h2>
              <a
                href="https://www.atiramhotels.com/"
                rel="noreferrer"
                target="_blank"
              >
                Arenas, Tres Torres, Oriente & Meson Castilla Hotels
              </a>
            </h2>
            <p>
              10% discount on the refundable rate on their website, subject to
              availability.
            </p>
            <p>BCNDEVCONF24</p>
            <p>
              <strong>validity:</strong> from June 6th to June 17th.
            </p>
          </div>
        </div>
      </div>
    </StyledAccommodation>
  );
};
