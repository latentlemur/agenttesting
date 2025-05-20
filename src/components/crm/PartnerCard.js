import React from 'react';
import { Link } from 'react-router-dom';
import './PartnerCard.css';

const PartnerCard = ({ partner }) => {
  const { id, companyName, contactPerson, email, partnershipLevel, status } = partner;

  return (
    <div className="partner-card card">
      <div className="partner-card-header">
        <h3>{companyName}</h3>
        <div className="partner-badges">
          <span className={`badge badge-${partnershipLevel.toLowerCase()}`}>
            {partnershipLevel}
          </span>
          <span className={`badge badge-${status.toLowerCase()}`}>
            {status}
          </span>
        </div>
      </div>
      <div className="partner-card-body">
        <p><strong>Contact:</strong> {contactPerson}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
      <div className="partner-card-footer">
        <Link to={`/partners/${id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PartnerCard;