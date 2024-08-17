import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/AddMedicine.css'; // Ensure this file contains the necessary styles

const AddMedicine = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [storeBox, setStoreBox] = useState('');
    const [purchasePrice, setPurchasePrice] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [genericName, setGenericName] = useState('');
    const [company, setCompany] = useState('');
    const [effects, setEffects] = useState('');
    const [expireDate, setExpireDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const medicineData = {
            name,
            category,
            storeBox,
            purchasePrice,
            sellingPrice,
            quantity,
            genericName,
            company,
            effects,
            expireDate
        };

        try {
            const response = await fetch('http://localhost:5000/api/medicines', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(medicineData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to add medicine');
            }

            const data = await response.json();
            console.log('Medicine added:', data);
            alert('Medicine added successfully!'); // Success alert
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to add medicine. Please try again. Error details: ' + error.message); // Error alert
        }
    };

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <h1>Add Medicine</h1>
                <form className="add-medicine-form" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <label>
                            Name:
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                        <label>
                            Category:
                            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                        </label>
                        <label>
                            Store, Box:
                            <input type="text" value={storeBox} onChange={(e) => setStoreBox(e.target.value)} />
                        </label>
                        <label>
                            Purchase Price:
                            <input type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} />
                        </label>
                        <label>
                            Selling Price:
                            <input type="number" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} />
                        </label>
                        <label>
                            Quantity:
                            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </label>
                        <label>
                            Generic Name:
                            <input type="text" value={genericName} onChange={(e) => setGenericName(e.target.value)} />
                        </label>
                        <label>
                            Company:
                            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                        </label>
                        <label>
                            Effects:
                            <input type="text" value={effects} onChange={(e) => setEffects(e.target.value)} />
                        </label>
                        <label>
                            Expire Date:
                            <input type="date" value={expireDate} onChange={(e) => setExpireDate(e.target.value)} />
                        </label>
                    </div>
                    <button type="submit" className="submit-button">Add Medicine</button>
                </form>
            </div>
        </div>
    );
};

export default AddMedicine;
