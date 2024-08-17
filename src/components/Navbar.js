// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <input type="text" className="search-bar" placeholder="Search products..." />
      </div>
      <div className="navbar-right">
        <div className="profile">
          <img src="profile-pic-url" alt="Profile" className="profile-pic" />
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
