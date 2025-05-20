import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="main-content">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;