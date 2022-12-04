import { FC } from "react";
import hotel from "../../assets/images/best_front_maritim.webp";
import styled from "styled-components";
import { Color } from "../../styles/colors";

const StyledAccommodation = styled.div`
   {
    text-align: left;
    padding: 10px 40px;
    background-color: ${Color.LIGHT_BLUE};
    color: ${Color.WHITE};
  }

  ul {
    list-style-type: none;
  }

  ul li {
    width: 20%;
  }

  @media (max-width: 767px) {
    ul li {
      width: 80%;
    }
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
      width: 95%;
    }
  }

  div.description {
    background-color: ${Color.DARK_BLUE};
    padding-left: 5px;

    strong {
      color: ${Color.YELLOW};
    }
  }
`;

export const Accommodation: FC = () => {
  return (
    <StyledAccommodation>
      <h2>Accommodation Offers</h2>
      <ul>
        <li>
          <div className="image">
            <img src={hotel} alt="Hotel Front Maritim" width="200" />
          </div>
          <div className="description">
            <a
              href="https://www.besthotels.es/destinos-y-hoteles/best-front-maritim.html"
              rel="noreferrer"
              target="_blank"
            >
              <p>
                <strong>Hotel Front Marítim</strong>
              </p>
              <p>PROMO CODE 'JBCNCONF'</p>
            </a>
          </div>
        </li>
      </ul>
    </StyledAccommodation>
  );
};
