import React, { FC } from "react";
import { styled } from "styled-components";

interface ITwitterIconProps {
  color: string;
  twitterUrl: string;
}

export const StyledSocialMediaWrapper = styled.a`
  height: 0.8rem;
  max-width: 24px;
  margin-right: 0.5rem;
`;
const TwitterIcon: FC<React.PropsWithChildren<ITwitterIconProps>> = ({
  color,
  twitterUrl,
}) => {
  return (
    <StyledSocialMediaWrapper
      href={twitterUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        data-icon="twitter-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-twitter"
      >
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    </StyledSocialMediaWrapper>
  );
};

export default TwitterIcon;
