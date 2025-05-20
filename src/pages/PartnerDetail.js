import React from 'react';
import { useParams, Link } from 'react-router-dom';
import partnersData from '../data/partners.json';
import './PartnerDetail.css';

const PartnerDetail = () => {
  const { id } = useParams();
  const partner = partnersData.find(p => p.id === parseInt(id));

  if (!partner) {
    return (
      <div className="not-found card">
        <h2>Partner Not Found</h2>
        <p>The partner you are looking for does not exist.</p>
        <Link to="/partners" className="btn btn-primary">Back to Partners</Link>
      </div>
    );
  }

  return (
    <div className="partner-detail-page">
      <div className="page-header">
        <h1 className="page-title">{partner.companyName}</h1>
        <div className="header-actions">
          <button className="btn btn-secondary">Edit</button>
          <button className="btn btn-secondary">Delete</button>
        </div>
      </div>
      
      <div className="partner-badges mb-20">
        <span className={`badge badge-${partner.partnershipLevel.toLowerCase()}`}>
          {partner.partnershipLevel}
        </span>
        <span className={`badge badge-${partner.status.toLowerCase()}`}>
          {partner.status}
        </span>
      </div>
      
      <div className="partner-info-grid">
        <div className="info-card card">
          <h3>Contact Information</h3>
          <div className="info-item">
            <label>Contact Person:</label>
            <span>{partner.contactPerson}</span>
          </div>
          <div className="info-item">
            <label>Email:</label>
            <span>{partner.email}</span>
          </div>
          <div className="info-item">
            <label>Phone:</label>
            <span>{partner.phone}</span>
          </div>
          <div className="info-item">
            <label>Address:</label>
            <span>{partner.address}</span>
          </div>
        </div>
        
        <div className="info-card card">
          <h3>Partnership Details</h3>
          <div className="info-item">
            <label>Join Date:</label>
            <span>{new Date(partner.joinDate).toLocaleDateString()}</span>
          </div>
          <div className="info-item">
            <label>Revenue:</label>
            <span>${partner.revenue.toLocaleString()}</span>
          </div>
        </div>
      </div>
      
      <div className="notes-section card">
        <h3>Notes</h3>
        <p>{partner.notes}</p>
      </div>
      
      <div className="page-footer">
        <Link to="/partners" className="btn btn-secondary">Back to Partners</Link>
      </div>
    </div>
  );
};

export default PartnerDetail;