import React from 'react';
import './DashboardStats.css';

const DashboardStats = ({ partners }) => {
  // Calculate stats from partners data
  const totalPartners = partners.length;
  const activePartners = partners.filter(p => p.status === 'Active').length;
  const goldPartners = partners.filter(p => p.partnershipLevel === 'Gold').length;
  const silverPartners = partners.filter(p => p.partnershipLevel === 'Silver').length;
  const bronzePartners = partners.filter(p => p.partnershipLevel === 'Bronze').length;
  const totalRevenue = partners.reduce((sum, partner) => sum + partner.revenue, 0);

  return (
    <div className="dashboard-stats">
      <div className="stat-card card">
        <h3>Total Partners</h3>
        <p className="stat-value">{totalPartners}</p>
      </div>
      
      <div className="stat-card card">
        <h3>Active Partners</h3>
        <p className="stat-value">{activePartners}</p>
        <p className="stat-percentage">{Math.round((activePartners / totalPartners) * 100)}%</p>
      </div>
      
      <div className="stat-card card">
        <h3>Partnership Levels</h3>
        <div className="level-stats">
          <div className="level-stat">
            <span className="badge badge-gold">Gold</span>
            <span>{goldPartners}</span>
          </div>
          <div className="level-stat">
            <span className="badge badge-silver">Silver</span>
            <span>{silverPartners}</span>
          </div>
          <div className="level-stat">
            <span className="badge badge-bronze">Bronze</span>
            <span>{bronzePartners}</span>
          </div>
        </div>
      </div>
      
      <div className="stat-card card">
        <h3>Total Revenue</h3>
        <p className="stat-value">${totalRevenue.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default DashboardStats;