import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Filter, MapPin, Search } from "lucide-react";
// @ts-expect-error some quirky
import { motion } from "framer-motion";

interface JobFiltersProps {
  onSearchChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onClearFilters: () => void;
}

const JobFilters: React.FC<JobFiltersProps> = ({
  onSearchChange,
  onLocationChange,
  onClearFilters,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLocation(value);
    onLocationChange(value);
  };

  const handleClear = () => {
    setSearchTerm("");
    setLocation("");
    onClearFilters();
  };

  return (
    <motion.div
      className="filters"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Row>
        <Col md={6} className="mb-3 mb-md-0">
          <InputGroup>
            <InputGroup.Text>
              <Search size={18} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search for job titles, skills, or companies"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </InputGroup>
        </Col>
        <Col md={4} className="mb-3 mb-md-0">
          <InputGroup>
            <InputGroup.Text>
              <MapPin size={18} />
            </InputGroup.Text>
            <Form.Select value={location} onChange={handleLocationChange}>
              <option value="">All Locations</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
            </Form.Select>
          </InputGroup>
        </Col>
        <Col md={2} className="d-flex">
          <Button
            variant="outline-secondary"
            className="w-100"
            onClick={handleClear}
          >
            <Filter size={18} className="me-1" /> Clear
          </Button>
        </Col>
      </Row>
    </motion.div>
  );
};

export default JobFilters;
