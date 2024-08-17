import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MedicineList from './components/MedicineList';
import AddMedicine from './components/AddMedicine';
import MedicineCategory from './components/MedicineCategory';
import AllSales from './components/AllSales';
import Expenses from './components/Expenses';
import Reporting from './components/Reporting';
import Staff from './components/Staff';
import MapPage from './components/MapPage';
import '../src/App.css';
import OrderTracker from './components/OrderTracker';

import Navbar from './components/Navbar';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/medicine-list" element={<MedicineList />} />
          <Route path="/add-medicine" element={<AddMedicine />} />
          <Route path="/medicine-category" element={<MedicineCategory />} />
          <Route path="/all-sales" element={<AllSales />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/MapPage" element={<MapPage />} />
          <Route path="/OrderTracker" element={<OrderTracker/>} />
          <Route path="/Navbar" element={<Navbar/>} />
          <Route path="/OrderForm" element={<OrderForm/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;