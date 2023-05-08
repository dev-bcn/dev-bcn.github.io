import React from "react";
import styled from "styled-components";
import { Company } from "./JobsData";
import { Color } from "../../styles/colors";
import LinkedinIcon from "../../components/Icons/Linkedin";
import TwitterIcon from "../../components/Icons/Twitter";

interface CompanyProps {
  company: Company;
}

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding-bottom: 15rem;
  margin: 1rem 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  svg {
    max-width: 18px;
    max-height: 18px;
  }
`;

const CompanyLogo = styled.img`
  width: 25%;
  max-width: 10rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    max-width: none;
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const CompanyName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const CompanyDescription = styled.p``;

const OfferTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const OfferText = styled.p`
  margin-bottom: 1rem;
  text-align: left;

  ul {
    margin-bottom: 1rem;
    margin-left: 2rem;
  }
`;

const OfferLocation = styled.p`
  margin-bottom: 1rem;
`;

const OfferLink = styled.a`
  color: ${Color.MAGENTA};
  font-weight: bold;
`;

const CompanyOffers: React.FC<CompanyProps> = ({ company }) => {
  return (
    <CompanyContainer id={company.name.toLowerCase()}>
      <div>
        <a target="_blank" rel="noreferrer noopener" href={company.url}>
          <CompanyLogo src={company.logo} alt={`${company.name} logo`} />
        </a>
        <p>
          {company.linkedin && (
            <LinkedinIcon
              color={Color.DARK_BLUE}
              linkedinUrl={company.linkedin}
            />
          )}
          {company.twitter && (
            <TwitterIcon color={Color.DARK_BLUE} twitterUrl={company.twitter} />
          )}
        </p>
        <CompanyDescription>{company.description}</CompanyDescription>
      </div>
      <div>
        <CompanyName>{company.name}</CompanyName>
        {company.offers.map((offer) => (
          <div key={offer.id}>
            <OfferTitle>{offer.title}</OfferTitle>
            <OfferLocation>{offer.location}</OfferLocation>
            <OfferText dangerouslySetInnerHTML={{ __html: offer.text }} />
            <OfferLink
              href={offer.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </OfferLink>
          </div>
        ))}
      </div>
    </CompanyContainer>
  );
};

export default CompanyOffers;
