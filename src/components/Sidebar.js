import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    navigate('/signin'); // Redirect to SignIn page after logout
  };

  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/medicine-list">Medicine List</Link></li>
        <li><Link to="/add-medicine">Add Medicine</Link></li>
        <li><Link to="/medicine-category">Medicine Category</Link></li>
        <li><Link to="/all-sales">All Sales</Link></li>
        <li><Link to="/expenses">Expenses</Link></li>
        <li><Link to="/reporting">Reporting</Link></li>
        <li><Link to="/staff">Staff</Link></li>
        <li><Link to="/OrderForm">Order</Link></li>
        <li><Link to="/MapPage">MapPage</Link></li>
        <li><Link to="/OrderTracker">OrderTracker</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;
