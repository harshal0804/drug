import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';  // Ensure this path is correct based on your project structure

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logout button clicked'); // Debugging

    // Clear session data
    localStorage.removeItem('loggedIn');
    console.log('Session cleared'); // Debugging

    // Redirect to sign-in page
    navigate('/sign-in');
    console.log('Navigating to sign-in'); // Debugging
  };

  return (
    <div className="sidebar">
    
      <ul>
        <li>
          <Link to="/">
            <span className="material-icons">dashboard</span> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/medicine-list">
            <span className="material-icons">list_alt</span> Medicine List
          </Link>
        </li>
        <li>
          <Link to="/add-medicine">
            <span className="material-icons">add_circle</span> Add Medicine
          </Link>
        </li>
        <li>
          <Link to="/medicine-category">
            <span className="material-icons">category</span> Medicine Category
          </Link>
        </li>
        <li>
          <Link to="/all-sales">
            <span className="material-icons">shopping_cart</span> All Sales
          </Link>
        </li>
        <li>
          <Link to="/expenses">
            <span className="material-icons">attach_money</span> Expenses
          </Link>
        </li>
        <li>
          <Link to="/reporting">
            <span className="material-icons">bar_chart</span> Reporting
          </Link>
        </li>
        <li>
          <Link to="/staff">
            <span className="material-icons">people</span> Staff
          </Link>
        </li>
        <li>
          <Link to="/order">
            <span className="material-icons">receipt</span> Order
          </Link>
        </li>
        <li>
          <Link to="/map">
            <span className="material-icons">map</span> MapPage
          </Link>
        </li>
        <li>
          <Link to="/order-tracker">
            <span className="material-icons">track_changes</span> OrderTracker
          </Link>
        </li>
      </ul>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;
