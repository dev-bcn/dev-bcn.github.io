import React from "react";
import { CompanyProps } from "./JobsData";
import { Color } from "../../styles/colors";
import LinkedinIcon from "../../components/Icons/Linkedin";
import TwitterIcon from "../../components/Icons/Twitter";
import {
  CompanyContainer,
  CompanyDescription,
  CompanyLogo,
  CompanyName,
  OfferLink,
  OfferLocation,
  OfferText,
  OfferTitle,
} from "./JobOffers.Style";

const CompanyOffers: React.FC<React.PropsWithChildren<CompanyProps>> = ({ company }) => (
  <CompanyContainer id={company.name.replaceAll(" ", "-").toLowerCase()}>
    <div
      style={{
        flex: "0 0 30%",
        height: "55vh",
        backgroundColor: Color.SKY_BLUE,
        padding: "0.5rem",
      }}
    >
      <a
        style={{ textAlign: "center" }}
        target="_blank"
        rel="noreferrer noopener"
        href={company.url}
      >
        <CompanyLogo src={company.logo} alt={`${company.name} logo`} />
      </a>
      <CompanyName>{company.name}</CompanyName>
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
    <div style={{ flex: "0 0 70%" }}>
      {company.offers.map((offer) => (
        <div
          key={offer.id}
          style={{
            padding: "0.5rem 1rem",
          }}
        >
          <OfferTitle>{offer.title}</OfferTitle>
          <OfferLocation>{offer.location}</OfferLocation>
          <OfferText dangerouslySetInnerHTML={{ __html: offer.text }} />
          <OfferLink href={offer.url} target="_blank" rel="noopener noreferrer">
            Learn more
          </OfferLink>
        </div>
      ))}
    </div>
  </CompanyContainer>
);

export default CompanyOffers;
