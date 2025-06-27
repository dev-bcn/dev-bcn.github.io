import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { ExternalLink, Linkedin, Twitter } from "lucide-react";
// @ts-expect-error some quirky import
import { motion } from "framer-motion";
import { Company } from "@/types/jobOffers";
import JobOfferCard from "@components/JobOffers/JobOfferCard";

interface CompanyCardProps {
  company: Company;
  index: number;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="mb-5"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="mb-4">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={company.logo}
                alt={`${company.name} logo`}
                className="company-logo"
              />
            </Col>
            <Col md={7}>
              <h2 className="company-name">{company.name}</h2>
              <p className="mb-2">{company.description}</p>
              <div className="d-flex">
                {company.linkedin && (
                  <a
                    href={company.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3"
                  >
                    <Linkedin className="social-icon" />
                  </a>
                )}
                {company.twitter && (
                  <a
                    href={company.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="social-icon" />
                  </a>
                )}
              </div>
            </Col>
            <Col md={1} className="text-center text-md-end mt-3 mt-md-0">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="outline-primary"
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="me-1">Visit</span>
                  <ExternalLink size={16} />
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <div className="ms-md-4">
        {company.offers.map((offer, offerIndex) => (
          <JobOfferCard
            key={offer.id}
            jobOffer={offer}
            companyName={company.name}
            index={offerIndex}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CompanyCard;
