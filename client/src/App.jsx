import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import CarDetails from './Pages/CarDetails';
import Cars from './Pages/Cars';
import MyBookings from './Pages/MyBookings';

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPart = useLocation().pathname.startsWith('/owner');

  return (
    <>
      {!isOwnerPart && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </>
  );
};

export default App;
