import { FC } from "react";
import { Color } from "@styles/colors";
import { styled } from "styled-components";

export const StyledLoadingImage = styled.img`
  opacity: 100;
  animation: opacity 2s ease infinite;
  @keyframes opacity {
    0% {
      opacity: 25%;
      filter: blur(50px);
    }
    50% {
      opacity: 50%;
      filter: blur(0);
    }
    100% {
      opacity: 15%;
      filter: blur(5px);
    }
  }
`;

export const Loading: FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <div
      style={{
        height: "100vh",
        textAlign: "center",
        verticalAlign: "middle",
        margin: "30vh auto",
      }}
    >
      <StyledLoadingImage
        alt="Loading..."
        src="/images/logo.svg"
        width="292"
        height="200"
      />
      <h1 style={{ color: Color.DARK_BLUE, fontFamily: "sans-serif" }}>
        Loading...
      </h1>
    </div>
  );
};
