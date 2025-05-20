import React, { useState } from 'react';
import PartnerCard from '../components/crm/PartnerCard';
import PartnerFilter from '../components/crm/PartnerFilter';
import partnersData from '../data/partners.json';
import './PartnerList.css';

const PartnerList = () => {
  const [filteredPartners, setFilteredPartners] = useState(partnersData);

  const handleFilterChange = (filters) => {
    let results = [...partnersData];
    
    // Filter by status
    if (filters.status !== 'all') {
      results = results.filter(partner => partner.status === filters.status);
    }
    
    // Filter by partnership level
    if (filters.partnershipLevel !== 'all') {
      results = results.filter(partner => partner.partnershipLevel === filters.partnershipLevel);
    }
    
    // Filter by search term
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      results = results.filter(partner => 
        partner.companyName.toLowerCase().includes(searchLower) || 
        partner.contactPerson.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredPartners(results);
  };

  return (
    <div className="partner-list-page">
      <div className="page-header">
        <h1 className="page-title">Partner Management</h1>
        <button className="btn btn-primary">Add New Partner</button>
      </div>
      
      <PartnerFilter onFilterChange={handleFilterChange} />
      
      <div className="partner-count">
        Showing {filteredPartners.length} partners
      </div>
      
      <div className="partners-grid">
        {filteredPartners.length > 0 ? (
          filteredPartners.map(partner => (
            <PartnerCard key={partner.id} partner={partner} />
          ))
        ) : (
          <div className="no-results card">
            <p>No partners found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerList;