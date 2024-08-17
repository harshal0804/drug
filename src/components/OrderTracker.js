import React, { useState } from 'react';
import '../styles/OrderTracker.css'; // Ensure the correct file path
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const OrderTracker = () => {
    const [orders] = useState([
        {
            id: 1,
            product: 'Drug Sample A',
            company: 'Cipla',
            quantity: '2000 kg',
            price: '$500,000',
            status: 'In Transit',
            progress: 60, // Represents 60% of the way
            expectedDelivery: '2024-08-20',
            lastUpdated: '2024-08-15 12:34 PM',
            location: 'Bangalore'
        },
        {
            id: 2,
            product: 'Drug Sample B',
            company: 'Sun Pharma',
            quantity: '1500 kg',
            price: '$375,000',
            status: 'Delivered',
            progress: 100, // Represents 100% completed
            expectedDelivery: '2024-08-18',
            lastUpdated: '2024-08-18 10:22 AM',
            location: 'Mumbai'
        },
        {
            id: 3,
            product: 'Drug Sample C',
            company: 'AstraZeneca',
            quantity: '1800 kg',
            price: '$450,000',
            status: 'Pending',
            progress: 20, // Represents 20% completed
            expectedDelivery: '2024-08-25',
            lastUpdated: '2024-08-12 08:50 AM',
            location: 'Delhi'
        }
        // Add more orders here
    ]);

    return (
        <div className="main-content">
        <Navbar />
        <div className="dashboard-container">
            <Sidebar />
            <div className="order-tracker-container">
                <h1>Order Tracker</h1>
                <div className="order-cards">
                    {orders.map(order => (
                        <div className="order-card" key={order.id}>
                            <h2>{order.product}</h2>
                            <p><strong>Company:</strong> {order.company}</p>
                            <p><strong>Quantity:</strong> {order.quantity}</p>
                            <p><strong>Price:</strong> {order.price}</p>
                            <p><strong>Status:</strong> {order.status}</p>
                            <p><strong>Expected Delivery:</strong> {order.expectedDelivery}</p>
                            <p><strong>Last Updated:</strong> {order.lastUpdated}</p>
                            <p><strong>Current Location:</strong> {order.location}</p>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${order.progress}%` }}></div>
                            </div>
                            <p className="progress-text">{order.progress}% Complete</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default OrderTracker;
