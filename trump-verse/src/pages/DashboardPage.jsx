import React from "react";
import { Link } from "react-router-dom";
import '../styles/dashboard.css'

// Viser en velkomstside og tilgang til funksjoner -> Header, handlinger og oversikt
const DashboardPage = () => {
  const baseUrl = "http://localhost:5191";
  const whiteHouseImage = `${baseUrl}/images/white-house.jpg`;

  // Returnerer velkomstskjermen -> Header, handlinger og oversikt
  return (
    <div className="dashboard-page">
      <header
        className="dashboard-header"
        style={{
          backgroundImage: `url(${whiteHouseImage})`,
        }}
      >
      
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>Welcome to Trump Staff Management</h1>
          <p>Effortlessly manage Trump's staff and administration</p>
        </div>
      </header>

      
      {/* Seksjoner for handlinger, infomasjon og oversikt */}
        <section className="dashboard-actions">
          <h2>Quick Actions</h2>
          <div className="actions-container">
            <Link to="/staff" className="action-button btn btn-primary">
              View All Staff
            </Link>
            <Link to="/create" className="action-button btn btn-secondary">
              Add New Staff Member
            </Link>
          </div>
        </section>
      

      <section className="dashboard-info">
        <h2>Overview</h2>
        <ul>
          <li>Organize staff profiles with ease</li>
          <li>Assign and manage roles efficiently</li>
          <li>Edit or remove staff members anytime</li>
        </ul>
      </section>

      <footer className="dashboard-footer">
        Manage staff seamlessly and focused structure
      </footer>
    </div>
  );
};

export default DashboardPage;