// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>Abto Software</h1>

      <div className="navbar-left">
        <input type="text" className="search-bar" placeholder="Search products..." />
        <span className="search-icon">&#128269;</span> {/* Unicode for search icon */}
      </div>
      <div className="navbar-right">
        <div className="profile">
          
          <span className="user-icon">👤</span> {/* User icon */}
          <span className="username">Harshal</span>
        </div>
        <div className="settings">
          <i className="fas fa-cog"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;