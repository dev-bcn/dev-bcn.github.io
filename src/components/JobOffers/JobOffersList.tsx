import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
// @ts-expect-error some quirky
import { motion } from "framer-motion";
import { jobOffers } from "@views/JobOffers/JobsData";
import CompanyCard from "./CompanyCard";
import JobFilters from "./JobFilters";
// @ts-expect-error some quirky
import { Company, Offer } from "@types/jobOffers";

const JobOffersList: React.FC = () => {
  const [filteredCompanies, setFilteredCompanies] =
    useState<Company[]>(jobOffers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    let results = [...jobOffers];

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase().trim();

      results = results
        .map((company) => {
          const filteredOffers = company.offers.filter(
            (offer: Offer) =>
              offer.title.toLowerCase().includes(term) ||
              offer.text.toLowerCase().includes(term),
          );

          if (
            filteredOffers.length > 0 ||
            company.name.toLowerCase().includes(term)
          ) {
            return {
              ...company,
              offers:
                filteredOffers.length > 0 ? filteredOffers : company.offers,
            };
          }

          return null;
        })
        .filter(Boolean) as Company[];
    }

    if (selectedLocation.trim() !== "") {
      results = results
        .map((company) => {
          const filteredOffers = company.offers.filter(
            (offer: { location: string }) =>
              offer.location === selectedLocation,
          );

          if (filteredOffers.length > 0) {
            return {
              ...company,
              offers: filteredOffers,
            };
          }

          return null;
        })
        .filter(Boolean) as Company[];
    }

    setFilteredCompanies(results);
    setNoResults(results.length === 0);
  }, [searchTerm, selectedLocation]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedLocation("");
    setFilteredCompanies(jobOffers);
    setNoResults(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Row className="mb-4">
          <Col>
            <h1 className="section-title">Find Your Next Opportunity</h1>
            <p className="text-muted">
              Discover top tech jobs from these leading companies sponsoring us
            </p>
          </Col>
        </Row>
      </motion.div>

      <JobFilters
        onSearchChange={handleSearchChange}
        onLocationChange={handleLocationChange}
        onClearFilters={handleClearFilters}
      />
      {noResults ? (
        <Alert variant="info" className="text-center">
          No job offers match your search criteria. Try adjusting your filters.
        </Alert>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredCompanies.map((company, index) => (
            <CompanyCard key={company.id} company={company} index={index} />
          ))}
        </motion.div>
      )}
    </Container>
  );
};

export default JobOffersList;
