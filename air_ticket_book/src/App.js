import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Booking from './components/Booking';
import Login from './components/Login';
import Register from './components/Register';
import Payment from './components/Payment';
import ErrorWorld from './components/ErrorWorld';
import Admin from './components/Admin';
import AddFlight from './components/AddFlight';
import FlightListAdmin from './components/FlightListAdmin';
import Passengers from './components/Passengers';
import Ticket from './components/Ticket';
import UpdateFlight from './components/UpdateFlight';
import Summary from './components/Summary';
import Seats from './components/Seats';
import Feedback from './components/Feedback';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/passengers" element={<Passengers />} />
        <Route path="/ticket" element={<Ticket />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addFlight" element={<AddFlight />} />
        <Route path="/allFlights" element={<FlightListAdmin />} />
        <Route path="/updateFlight" element={<UpdateFlight />} />
        <Route path="/seats" element={<Seats />} />
        <Route path="/feedback" element={<Feedback />} />

        <Route path="/*" element={<ErrorWorld />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
