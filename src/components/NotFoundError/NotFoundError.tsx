import { Color } from "../../styles/colors";

import { FC } from "react";
import { Link } from "react-router";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import styled from "styled-components";
import ActionButtons from "../../views/Home/components/ActionButtons/ActionButtons";
import { useDocumentTitleUpdater } from "../../services/useDocumentTitleUpdate";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 8rem;
`;

const StyledTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 1rem;
  background: ${Color.DARK_BLUE};
  font-weight: 600;
  width: fit-content;
`;

interface INotFoundErrorProps {
  message?: string;
}

const NotFoundError: FC<React.PropsWithChildren<INotFoundErrorProps>> = ({
  message = "Page",
}) => {
  useDocumentTitleUpdater("Page not Found", "");

  return (
    <SectionWrapper color={Color.WHITE}>
      <StyledContainer className="Error404">
        <StyledTitle>Error 404. {message} not found</StyledTitle>
        <StyledLink to={"/"}>Back to home</StyledLink>
        <ActionButtons />
      </StyledContainer>
    </SectionWrapper>
  );
};

export default NotFoundError;
