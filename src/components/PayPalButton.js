import React, { useEffect } from 'react';

const PayPalButton = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=EE0n8WbI2EcKuEzqT3KxY0_FX0lZqFe87lzAR4p45w6VUuY9mx7iubZU_TPcGX9kZ08rvxYzmmLBLNB0&currency=USD`;
        script.async = true;
        script.onload = () => {
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: '10.00' // Set this to a dynamic value if needed
                            }
                        }]
                    });
                },
                onApprove: (data, actions) => {
                    return actions.order.capture().then((details) => {
                        alert('Transaction completed by ' + details.payer.name.given_name);
                    });
                },
                onError: (err) => {
                    console.error('PayPal error:', err);
                }
            }).render('#paypal-button-container');
        };
        document.body.appendChild(script);
    }, []);

    return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
