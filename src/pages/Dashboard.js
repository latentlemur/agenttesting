import React from 'react';
import DashboardStats from '../components/crm/DashboardStats';
import PartnerCard from '../components/crm/PartnerCard';
import partnersData from '../data/partners.json';
import './Dashboard.css';

const Dashboard = () => {
  // Get recent partners (last 3)
  const recentPartners = [...partnersData]
    .sort((a, b) => new Date(b.joinDate) - new Date(a.joinDate))
    .slice(0, 3);

  return (
    <div className="dashboard-page">
      <h1 className="page-title">Dashboard</h1>
      
      <DashboardStats partners={partnersData} />
      
      <div className="dashboard-section">
        <div className="section-header">
          <h2>Recent Partners</h2>
          <a href="/partners" className="btn btn-primary">View All Partners</a>
        </div>
        
        <div className="recent-partners">
          {recentPartners.map(partner => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
      
      <div className="dashboard-section">
        <div className="section-header">
          <h2>Quick Actions</h2>
        </div>
        
        <div className="quick-actions card">
          <div className="action-buttons">
            <button className="btn btn-primary">Add New Partner</button>
            <button className="btn btn-secondary">Generate Report</button>
            <button className="btn btn-secondary">Send Updates</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;