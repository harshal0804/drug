import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import '../styles/MedicineList.css';

const MedicineList = () => {
  
  const demoData = [
    { name: 'Paracetamol', category: 'Fever', storeBox: 'A1', purchasePrice: '$0.50', sellingPrice: '$1.00', quantity: '1000', genericName: 'Paracetamol', company: 'Acme Pharmaceuticals', effects: 'Reduces fever and pain', expireDate: '12-2024' },
    { name: 'Ibuprofen', category: 'Pain', storeBox: 'A2', purchasePrice: '$1.00', sellingPrice: '$2.00', quantity: '800', genericName: 'Ibuprofen', company: 'HealthCorp', effects: 'Reduces inflammation and pain', expireDate: '11-2024' },
    { name: 'Loratadine', category: 'Allergy', storeBox: 'B1', purchasePrice: '$1.20', sellingPrice: '$2.50', quantity: '600', genericName: 'Loratadine', company: 'AllergyEase', effects: 'Relieves allergy symptoms', expireDate: '10-2024' },
    { name: 'Aspirin', category: 'Pain', storeBox: 'B2', purchasePrice: '$0.70', sellingPrice: '$1.50', quantity: '500', genericName: 'Aspirin', company: 'PainRelief Inc.', effects: 'Pain relief and anti-inflammatory', expireDate: '09-2024' },
    { name: 'Diphenhydramine', category: 'Allergy', storeBox: 'C1', purchasePrice: '$1.50', sellingPrice: '$3.00', quantity: '700', genericName: 'Diphenhydramine', company: 'SleepWell', effects: 'Antihistamine and sleep aid', expireDate: '08-2024' },
    { name: 'Omeprazole', category: 'Digestive', storeBox: 'C2', purchasePrice: '$2.00', sellingPrice: '$4.00', quantity: '400', genericName: 'Omeprazole', company: 'DigestAid', effects: 'Reduces stomach acid', expireDate: '07-2024' },
    { name: 'Simvastatin', category: 'Cardiovascular', storeBox: 'D1', purchasePrice: '$3.00', sellingPrice: '$6.00', quantity: '300', genericName: 'Simvastatin', company: 'HeartCare', effects: 'Lowers cholesterol', expireDate: '06-2024' },
    { name: 'Metformin', category: 'Diabetes', storeBox: 'D2', purchasePrice: '$2.50', sellingPrice: '$5.00', quantity: '350', genericName: 'Metformin', company: 'DiabeticsPlus', effects: 'Helps control blood sugar', expireDate: '05-2024' },
    { name: 'Amoxicillin', category: 'Antibiotic', storeBox: 'E1', purchasePrice: '$1.80', sellingPrice: '$3.50', quantity: '250', genericName: 'Amoxicillin', company: 'BacteriaBusters', effects: 'Treats bacterial infections', expireDate: '04-2024' },
    { name: 'Hydrochlorothiazide', category: 'Blood Pressure', storeBox: 'E2', purchasePrice: '$2.20', sellingPrice: '$4.50', quantity: '200', genericName: 'Hydrochlorothiazide', company: 'HeartHealth', effects: 'Diuretic for high blood pressure', expireDate: '03-2024' },
    { name: 'Cetirizine', category: 'Allergy', storeBox: 'F1', purchasePrice: '$1.80', sellingPrice: '$3.00', quantity: '500', genericName: 'Cetirizine', company: 'AllergyEase', effects: 'Relieves allergy symptoms', expireDate: '02-2024' },
    { name: 'Losartan', category: 'Blood Pressure', storeBox: 'F2', purchasePrice: '$3.00', sellingPrice: '$5.50', quantity: '150', genericName: 'Losartan', company: 'CardioCare', effects: 'Reduces blood pressure', expireDate: '01-2024' },
    { name: 'Hydrocodone', category: 'Pain', storeBox: 'G1', purchasePrice: '$2.50', sellingPrice: '$5.00', quantity: '180', genericName: 'Hydrocodone', company: 'PainRelief Inc.', effects: 'Strong pain relief', expireDate: '12-2023' },
    { name: 'Azithromycin', category: 'Antibiotic', storeBox: 'G2', purchasePrice: '$2.80', sellingPrice: '$5.50', quantity: '160', genericName: 'Azithromycin', company: 'InfectAway', effects: 'Treats bacterial infections', expireDate: '11-2023' },
    { name: 'Gabapentin', category: 'Neurological', storeBox: 'H1', purchasePrice: '$3.20', sellingPrice: '$6.00', quantity: '140', genericName: 'Gabapentin', company: 'NeuroCare', effects: 'Controls nerve pain', expireDate: '10-2023' },
    { name: 'Prednisone', category: 'Anti-Inflammatory', storeBox: 'H2', purchasePrice: '$2.70', sellingPrice: '$5.00', quantity: '130', genericName: 'Prednisone', company: 'InflammEase', effects: 'Reduces inflammation', expireDate: '09-2023' },
    { name: 'Fluticasone', category: 'Respiratory', storeBox: 'I1', purchasePrice: '$3.50', sellingPrice: '$7.00', quantity: '120', genericName: 'Fluticasone', company: 'Respira', effects: 'Reduces nasal inflammation', expireDate: '08-2023' },
    { name: 'Levothyroxine', category: 'Thyroid', storeBox: 'I2', purchasePrice: '$2.90', sellingPrice: '$5.50', quantity: '110', genericName: 'Levothyroxine', company: 'ThyroCare', effects: 'Thyroid hormone replacement', expireDate: '07-2023' },
    { name: 'Metoprolol', category: 'Cardiovascular', storeBox: 'J1', purchasePrice: '$3.00', sellingPrice: '$6.00', quantity: '100', genericName: 'Metoprolol', company: 'HeartHealth', effects: 'Lowers blood pressure', expireDate: '06-2023' },
    { name: 'Clopidogrel', category: 'Cardiovascular', storeBox: 'J2', purchasePrice: '$3.50', sellingPrice: '$7.00', quantity: '90', genericName: 'Clopidogrel', company: 'CardioCare', effects: 'Prevents blood clots', expireDate: '05-2023' },
    { name: 'Tamsulosin', category: 'Urological', storeBox: 'K1', purchasePrice: '$2.80', sellingPrice: '$5.50', quantity: '80', genericName: 'Tamsulosin', company: 'UroCare', effects: 'Relieves urinary symptoms', expireDate: '04-2023' },
    { name: 'Doxycycline', category: 'Antibiotic', storeBox: 'K2', purchasePrice: '$2.00', sellingPrice: '$4.00', quantity: '70', genericName: 'Doxycycline', company: 'BacteriaBusters', effects: 'Treats bacterial infections', expireDate: '03-2023' }
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
      <div className="dashboard-content">
        <h1>Medicine List</h1>
        <div className="table-wrapper">
          <table className="medicine-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Store, Box</th>
                <th>Purchase Price</th>
                <th>Selling Price</th>
                <th>Quantity</th>
                <th>Generic Name</th>
                <th>Company</th>
                <th>Effects</th>
                <th>Expire Date</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {demoData.map((medicine, index) => (
                <tr key={index}>
                  <td>{medicine.name}</td>
                  <td>{medicine.category}</td>
                  <td>{medicine.storeBox}</td>
                  <td>{medicine.purchasePrice}</td>
                  <td>{medicine.sellingPrice}</td>
                  <td>{medicine.quantity}</td>
                  <td>{medicine.genericName}</td>
                  <td>{medicine.company}</td>
                  <td>{medicine.effects}</td>
                  <td>{medicine.expireDate}</td>
                  <td>Edit | Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div></div>
    
  );
};

export default MedicineList;
