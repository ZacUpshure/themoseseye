import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Layout from "./components/Layout/Layout";

import './App.scss';
// import './querries.scss';


import {
  About, 
  FooterTwo,
  RealFooter, 
  Header, 
  Skills, 
  Testimonial, 
  Features,
  Pricing,
  PricingPhotography,
  PricingCommercials,
  Work
} from './container';

import { Navbar } from './components';

import Home from './pages/Home';
import Photography from './pages/Photography';
import Videography from './pages/Videography';
import Marketing from './pages/Marketing';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/videography" element={<Videography />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        {/* Define more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App