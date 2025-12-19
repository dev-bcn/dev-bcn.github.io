import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { styled } from "styled-components";

import { Color } from "../../styles/colors";

import type { FC } from "react";

const StyledBreadcrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 1rem;
  position: fixed;
  z-index: 2;
  top: 3rem;
  left: 2rem;
  height: 1.5rem;
  background: rgba(255, 252, 249, 0.5);
  color: ${Color.DARK_BLUE};
  border-bottom-left-radius: 0.15rem;
  border-bottom-right-radius: 0.15rem;

  font-weight: 500;

  @media (min-width: 480px) {
    top: 4rem;
  }
`;

const StyledLink = styled(Link)`
  color: ${Color.DARK_BLUE};
  text-decoration: none;
  margin-right: 0.25rem;
`;

const getLinkData = (page: string) => {
  const links: Record<string, { name: string; urlParam: string }> = {
    codeOfConduct: { name: "Code Of Conduct", urlParam: "codeOfConduct" },
    schedule: { name: "Schedule", urlParam: "schedule" },
    meetingDetail: { name: "Meetings", urlParam: "schedule" },
    speakerDetail: { name: "Talks", urlParam: "talks" },
    talks: { name: "Talks", urlParam: "talks" },
    jobOffers: { name: "Job Offers", urlParam: "jobOffers" },
    speakers: { name: "Speakers", urlParam: "speakers" },
  };

  let returnValue;

  returnValue = links[page];

  if (page === "") {
    returnValue = { name: "Home", urlParam: "" };
  }

  if (!returnValue) {
    const tempName = page.split("-");

    const talkOrMeetingName = tempName.join(" ");

    returnValue = { name: talkOrMeetingName, urlParam: page };
  }

  return returnValue;
};

const Breadcrumbs: FC<React.PropsWithChildren<unknown>> = () => {
  const [pages, setPages] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    const pages = location.pathname.split("/");

    if (pages.length > 2) {
      pages.pop();
    }

    setPages(pages);
  }, [location]);

  return (
    <StyledBreadcrumbsWrapper>
      {pages.map((page) => {
        const linkData = getLinkData(page);
        return (
          <StyledLink to={`/${linkData.urlParam}`} key={page}>
            / {linkData.name}
          </StyledLink>
        );
      })}
    </StyledBreadcrumbsWrapper>
  );
};

export default Breadcrumbs;
