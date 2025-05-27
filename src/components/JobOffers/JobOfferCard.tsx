import React from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { ExternalLink, MapPin } from "lucide-react";
// @ts-expect-error some quirky
import { motion } from "framer-motion";
// @ts-expect-error some quirky
import { Offer as JobOffer } from "@types/jobOffers";

interface JobOfferCardProps {
  jobOffer: JobOffer;
  companyName: string;
  index: number;
}

const JobOfferCard: React.FC<JobOfferCardProps> = ({
  jobOffer,
  companyName,
  index,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.08,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const formatJobText = () => {
    if (jobOffer.text.includes("<br/>")) {
      return <div dangerouslySetInnerHTML={{ __html: jobOffer.text }} />;
    }
    return <p className="job-text">{jobOffer.text}</p>;
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ scale: 1.01 }}
      className="mb-3"
    >
      <Card>
        <Card.Body>
          <Row>
            <Col md={8}>
              <h3 className="job-title">{jobOffer.title}</h3>
              <div className="d-flex align-items-center mb-3">
                <Badge className="location-badge me-2">
                  <MapPin size={14} className="me-1" /> {jobOffer.location}
                </Badge>
                <small className="text-muted">at {companyName}</small>
              </div>
              <div className="job-description">{formatJobText()}</div>
            </Col>
            <Col
              md={4}
              className="d-flex flex-column justify-content-center align-items-center align-items-md-end mt-3 mt-md-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="success"
                  className="apply-btn mb-2 w-100"
                  href={jobOffer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </Button>
              </motion.div>
              <small className="text-muted d-flex align-items-center">
                <ExternalLink size={14} className="me-1" /> Opens in a new tab
              </small>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default JobOfferCard;
