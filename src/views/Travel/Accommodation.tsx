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
        <h1>Accommodation Options</h1>

        <div className="accommodation">
          <img
            src="https://www.ahstatic.com/photos/3667_ho_01_p_2048x1536.jpg"
            alt="Hotel Front Maritim"
          />
          <div>
            <h2>
              <a
                href="https://all.accor.com/hotel/3667/index.es.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps"
                rel="noreferrer"
                target="_blank"
              >
                Novotel Barcelona Cornella
              </a>
            </h2>
            <p>
              10% discount on the refundable rate on their website, subject to
              availability.
            </p>
            <p>PROMO CODE: DEVBCN</p>
            <p>
              You must contact them via{" "}
              <a href="mailto:H3667-RE@ACCOR.COM">email</a> asking for
              availability and prices and to apply the discount
            </p>
          </div>
        </div>

        <div className="accommodation">
          <img
            src="https://travelodge.es/wp-content/uploads/2020/07/Travelodge-Hospitalet7.jpg"
            alt="Travelodge Barcelona Fira"
          />
          <div>
            <h2>
              <a
                href="https://travelodge.es/travelodge-destino-barcelona/hotel-travelodge-barcelona-fira/"
                rel="noreferrer"
                target="_blank"
              >
                Travelodge Barcelona Fira
              </a>
            </h2>
            <p>Special pack</p>
            <ul>
              <li>
                10% discount on accommodation on our best available rate, our
                flexible rate.
              </li>
              <li>Exclusive price Breakfast Buffet.</li>
              <li>Free WiFi throughout the hotel</li>
              <li>
                Possibility of entering at no extra cost from 12:00 pm (subject
                to availability).
              </li>
              <li>Special rate for parking</li>
              <li>Realization through a self-booking portal</li>
            </ul>
            <p>
              If you need a Family Room with children, you must make the
              reservation for 2 adults and indicate in comments if you are going
              with 1 or 2 children.
            </p>
            <p>
              code: <strong>DEVBCN</strong>
            </p>
          </div>
        </div>

        <div className="accommodation">
          <img
            src="https://images.mirai.com/INFOROOMS/15995181/LbND9EhLz4crH2CHu6Gy/LbND9EhLz4crH2CHu6Gy_large.jpg"
            alt="Hotel Barcelona Porta Fira"
          />
          <div>
            <h2>
              <a
                href="https://www.hotelbarcelonaportafira.com/es/?utm_source=google&utm_medium=organic&utm_campaign=my_business"
                target="_blank"
                rel="noreferrer"
              >
                Hotel Barcelona Porta Fira
              </a>
            </h2>
            <p>10% discount on prices</p>
          </div>
        </div>
      </div>
    </StyledAccommodation>
  );
};
