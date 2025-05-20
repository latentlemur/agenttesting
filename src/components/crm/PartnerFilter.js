import React, { useState } from 'react';
import './PartnerFilter.css';

const PartnerFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    status: 'all',
    partnershipLevel: 'all',
    searchTerm: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="partner-filter card">
      <h3>Filter Partners</h3>
      <div className="filter-form">
        <div className="form-group">
          <label htmlFor="searchTerm">Search</label>
          <input
            type="text"
            id="searchTerm"
            name="searchTerm"
            className="form-control"
            placeholder="Search by company or contact..."
            value={filters.searchTerm}
            onChange={handleFilterChange}
          />
        </div>
        
        <div className="filter-row">
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              className="form-control"
              value={filters.status}
              onChange={handleFilterChange}
            >
              <option value="all">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="partnershipLevel">Partnership Level</label>
            <select
              id="partnershipLevel"
              name="partnershipLevel"
              className="form-control"
              value={filters.partnershipLevel}
              onChange={handleFilterChange}
            >
              <option value="all">All Levels</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Bronze">Bronze</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerFilter;