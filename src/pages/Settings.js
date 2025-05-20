import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-page">
      <h1 className="page-title">Settings</h1>
      
      <div className="settings-section card">
        <h2>User Preferences</h2>
        <form className="settings-form">
          <div className="form-group">
            <label htmlFor="displayName">Display Name</label>
            <input type="text" id="displayName" className="form-control" defaultValue="Admin User" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" defaultValue="admin@example.com" />
          </div>
          
          <div className="form-group">
            <label htmlFor="language">Language</label>
            <select id="language" className="form-control">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Theme</label>
            <div className="theme-options">
              <div className="theme-option active">
                <div className="theme-preview light-theme"></div>
                <span>Light</span>
              </div>
              <div className="theme-option">
                <div className="theme-preview dark-theme"></div>
                <span>Dark</span>
              </div>
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
      
      <div className="settings-section card">
        <h2>Notifications</h2>
        <div className="notification-settings">
          <div className="notification-option">
            <label className="toggle-label">
              <span>Email Notifications</span>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </label>
          </div>
          
          <div className="notification-option">
            <label className="toggle-label">
              <span>New Partner Alerts</span>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </label>
          </div>
          
          <div className="notification-option">
            <label className="toggle-label">
              <span>Status Change Notifications</span>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;