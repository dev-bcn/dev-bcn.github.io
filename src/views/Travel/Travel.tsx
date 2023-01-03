import { FC, useEffect } from "react";
import { Venue } from "./Venue";
import { ToBarcelona } from "./ToBarcelona";
import data from "../../data/2023.json";
import { StyledWaveContainer } from "../Speakers/Speakers.style";
import styled from "styled-components";
import { Color } from "../../styles/colors";

const StyledTravel = styled.div`
  .top {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 50px));
    height: 51px;
    background-color: ${Color.LIGHT_BLUE};
    border-top: 1px solid ${Color.LIGHT_BLUE};
  }

  .bottom {
    clip-path: polygon(0 0, 100% 50px, 100% 100%, 0 100%);
    margin-top: -50px;
    height: 50px;
    background-color: ${Color.DARK_BLUE};
  }

  .to-barcelona {
    background-color: ${Color.DARK_BLUE};
  }
`;

const Travel: FC = () => {
  useEffect(() => {
    document.title = `Travel - DevBcn ${data.edition}`;
  }, []);
  return (
    <StyledTravel>
      <section>
        <Venue />
      </section>
      <section className="to-barcelona">
        <ToBarcelona />
        <StyledWaveContainer>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z"
              style={{ stroke: "none", fill: "#002454" }}
            ></path>
          </svg>
        </StyledWaveContainer>
      </section>
    </StyledTravel>
  );
};
export default Travel;
