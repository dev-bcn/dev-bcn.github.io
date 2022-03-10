import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { COLOR_YELLOW } from '../../styles/colors';
import styled from 'styled-components';

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
  color: ${COLOR_YELLOW};
  border-bottom-left-radius: 0.15rem;
  border-bottom-right-radius: 0.15rem;

  font-weight: 500;

  @media (min-width: 480px) {
    top: 4rem;
  }
`;

const StyledLink = styled(Link)`
  color: ${COLOR_YELLOW};
  text-decoration: none;
  margin-right: 0.25rem;
`;

function getLinkData(page: string) {
  const links: any = {
    codeOfConduct: { name: 'Code Of Conduct', urlParam: 'codeOfConduct' },
    schedule: { name: 'Schedule', urlParam: 'schedule' },
    meetingDetail: { name: 'Meetings', urlParam: 'schedule' },
    speakerDetail: { name: 'Talks', urlParam: 'talks' },
    talks: { name: 'Talks', urlParam: 'talks' },
    jobOffers: { name: 'Job Offers', urlParam: 'jobOffers' },
    speakers: { name: 'Speakers', urlParam: 'speakers' },
  };

  let returnValue = null;

  returnValue = links[page];

  if (page === '') {
    returnValue = { name: 'Home', urlParam: '' };
  }

  if (!returnValue) {
    const tempName = page.split('-');

    let talkOrMeetingName = tempName.join(' ');

    returnValue = { name: talkOrMeetingName, urlParam: page };
  }

  return returnValue;
}

interface IBreadcrumbsProps {}

const Breadcrumbs: FC<IBreadcrumbsProps> = ({}) => {
  const [pages, setPages] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    const pages = location.pathname.split('/');

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
