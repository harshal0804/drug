import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/OrderForm.css'; // Ensure this path is correct

const OrderForm = () => {
    const [step, setStep] = useState(1); // Track the current step
    const [orderData, setOrderData] = useState({
        name: '',
        type: '',
        id: '',
        quantity: '',
        address: '',
        phone: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrderData({
            ...orderData,
            [name]: value
        });
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handlePayment = () => {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=Abfxg1jXXqLku-1RFMzu5fna8lyu4wMi7Efv-z6kJZImlcGr1igThx13izVyCYl7KMbqVg9AnB1KpTWp`;
        script.addEventListener('load', () => {
            window.paypal.Buttons({
                createOrder: function(data, actions) {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: '10.00' // This should be dynamic based on orderData
                            }
                        }]
                    });
                },
                onApprove: function(data, actions) {
                    return actions.order.capture().then(function(details) {
                        console.log('Transaction completed by ' + details.payer.name.given_name);
                        // Optionally, handle post-payment logic here
                    });
                },
                onError: function(err) {
                    console.error('PayPal error:', err);
                }
            }).render('#paypal-button-container'); // Render PayPal button
        });
        document.body.appendChild(script);
    };

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="order-form-container">
                    <div className="order-form">
                        <h1>Order Form</h1>
                        <form onSubmit={(e) => e.preventDefault()}>
                            {step === 1 && (
                                <div>
                                    <h2>Order Details</h2>
                                    <label>
                                        Name:
                                        <input
                                            type="text"
                                            name="name"
                                            value={orderData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </label>
                                    <label>
                                        Type:
                                        <input
                                            type="text"
                                            name="type"
                                            value={orderData.type}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </label>
                                    <label>
                                        ID:
                                        <input
                                            type="text"
                                            name="id"
                                            value={orderData.id}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </label>
                                    <label>
                                        Quantity:
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={orderData.quantity}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </label>
                                    <button type="button" onClick={handleNextStep}>
                                        Next
                                    </button>
                                </div>
                            )}

                            {step === 2 && (
                                <div>
                                    <h2>Shipping Information</h2>
                                    <label>
                                        Address:
                                        <input
                                            type="text"
                                            name="address"
                                            value={orderData.address}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </label>
                                    <label>
                                        Phone:
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={orderData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </label>
                                    <label>
                                        Email:
                                        <input
                                            type="email"
                                            name="email"
                                            value={orderData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </label>
                                    <button type="button" onClick={handlePreviousStep}>
                                        Back
                                    </button>
                                    <button type="button" onClick={handleNextStep}>
                                        Next
                                    </button>
                                </div>
                            )}

                            {step === 3 && (
                                <div>
                                    <h2>Payment</h2>
                                    <p>Review your order and proceed to payment.</p>
                                    <div id="paypal-button-container"></div>
                                    <button type="button" onClick={handlePreviousStep}>
                                        Back
                                    </button>
                                    <button type="button" onClick={handlePayment}>
                                        Pay with PayPal
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;
