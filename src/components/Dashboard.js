import React from 'react';
import '../styles/Dashboard.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar'; // Assuming Navbar is defined in a separate file
<div className="dashboard">
      <h1>
        <span className="material-icons">dashboard</span> Dashboard
      </h1>
      <p>Welcome to the inventory management system dashboard!</p>
    </div>
function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-content">
          <div className="dashboard">
            <div className="overview-cards">
              <div className="card_1">
                <h3>Total Profit</h3>
                <p>₹1,03,748</p>
              </div>
              <div className="card_2">
                <h3>Inventory Stock</h3>
                <p>1,432</p>
              </div>
              <div className="card_3">
                <h3>Out of Stock</h3>
                <p>389</p>
              </div>
              <div className="card_4">
                <h3>Expired</h3>
                <p>24</p>
              </div>
            </div>

            <div className="charts-section">
              <div className="sales-overview chart-card">
                <h3>Sales Overview</h3>
              
                <div className="chart-placeholder">
                <img src="./graph.jpeg" alt="Sales Overview" />
                </div>
              </div>
              <div className="purchase-report chart-card">
                <h3>Purchase Report</h3>
                <div className="chart-placeholder">
                <img src="./piechart.jpeg" alt="purchase report" />

                </div>
              </div>
            </div>

            <div className="recent-orders">
              <h3>Recent Orders</h3>
              <table>
                <thead>
                  <tr>
                    <th>File number</th>
                    <th>Item name</th>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Batch</th>
                    <th>Status</th>
                    <th>Mode of payment</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>8844</td>
                    <td>DC Examination Gloves</td>
                    <td>12/1/22</td>
                    <td>25</td>
                    <td>P152/1</td>
                    <td>Delivered</td>
                    <td>Mastercard</td>
                    <td>₹710</td>
                  </tr>
                  <tr>
                    <td>8844</td>
                    <td>Clopilet 75MG TAB</td>
                    <td>12/1/22</td>
                    <td>10</td>
                    <td>P152/1</td>
                    <td>Pending</td>
                    <td>Visacard</td>
                    <td>₹120</td>
                  </tr>
                  <tr>
                    <td>8844</td>
                    <td>Tonact -40MG TAB</td>
                    <td>12/1/22</td>
                    <td>60</td>
                    <td>P152/1</td>
                    <td>Cancelled</td>
                    <td>Cash</td>
                    <td>₹500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;