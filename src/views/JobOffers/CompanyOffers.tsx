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
  width: 90%;

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
  width: 50%;
  max-width: 10rem;
  margin-bottom: 1rem;
  text-align: center;

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

const CompanyDescription = styled.p`
   {
    margin: 0.8rem 0;
  }
`;

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
        <a
          style={{ textAlign: "center" }}
          target="_blank"
          rel="noreferrer noopener"
          href={company.url}
        >
          <CompanyLogo src={company.logo} alt={`${company.name} logo`} />
        </a>
        <CompanyDescription>{company.description}</CompanyDescription>
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
