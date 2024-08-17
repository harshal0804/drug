import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MedicineList from './components/MedicineList';
import AddMedicine from './components/AddMedicine';
import MedicineCategory from './components/MedicineCategory';
import AllSales from './components/AllSales';
import Expenses from './components/Expenses';
import Reporting from './components/Reporting';
import Staff from './components/Staff';
import MapPage from './components/MapPage';
import OrderTracker from './components/OrderTracker';
import Navbar from './components/Navbar';
import OrderForm from './components/OrderForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import '../src/App.css';

function PrivateRoute({ element }) {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated');
  return isAuthenticated ? element : <Navigate to="/signin" />;
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/medicine-list" element={<PrivateRoute element={<MedicineList />} />} />
          <Route path="/add-medicine" element={<PrivateRoute element={<AddMedicine />} />} />
          <Route path="/medicine-category" element={<PrivateRoute element={<MedicineCategory />} />} />
          <Route path="/all-sales" element={<PrivateRoute element={<AllSales />} />} />
          <Route path="/expenses" element={<PrivateRoute element={<Expenses />} />} />
          <Route path="/reporting" element={<PrivateRoute element={<Reporting />} />} />
          <Route path="/staff" element={<PrivateRoute element={<Staff />} />} />
          <Route path="/MapPage" element={<PrivateRoute element={<MapPage />} />} />
          <Route path="/OrderTracker" element={<PrivateRoute element={<OrderTracker />} />} />
          <Route path="/OrderForm" element={<PrivateRoute element={<OrderForm />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
