import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './Pages/Home'
import CarDetails from './Pages/CarDetails'
import Cars from './Pages/Cars'
import MyBookings from './Pages/MyBookings'

import Layout from './Pages/owner/Layout'
import Dashboard from './Pages/owner/Dashboard'
import AddCar from './Pages/owner/AddCar'
import ManageCars from './Pages/owner/ManageCars'
import ManageBookings from './Pages/owner/ManageBookings'
import Login from './components/Login'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  const isOwnerPart = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin}/>}
      
      {!isOwnerPart && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        {/* Owner Routes */}
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
        </Route>
      </Routes>

      {!isOwnerPart && <Footer />}
    </>
  )
}

export default App
