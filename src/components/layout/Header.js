import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <h1>CRM Partner Portal</h1>
          </Link>
        </div>
        <div className="user-info">
          <span className="user-name">Admin User</span>
          <button className="btn btn-secondary">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;