import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';

// import Layout from "./components/Layout/Layout";

import './App.scss';

import { Layout, Navbar } from './components';
import { StateContext } from './context/StateContext';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import Photography from './pages/Photography';
import Videography from './pages/Videography';
import Marketing from './pages/Marketing';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';

import Market from './scenes/home/Market';
import ProductCheckout from './scenes/checkout/ProductCheckout';
import ProductConfirmation from './scenes/checkout/ProductConfirmation';
import ItemDetails from './scenes/itemDetails/ItemDetails';

import CartMenu from './scenes/global/CartMenu';

// import itemDetails from './scenes/itemDetails/itemDetails';
// import productHome from './scenes/home/productHome';
// import productCheckout from './scenes/checkout/productCheckout';
// import productConfirmation from './scenes/checkout/productConfirmation';

import { Helmet } from 'react-helmet';

const TRACKING_ID = "AW-11242519332";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <Router>
      <StateContext>
        <Layout>
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/videography" element={<Videography />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            {/* Define more routes as needed */}
            <Route path="/products" element={<Market />} />
            <Route path="/products/item/:slug" element={<ItemDetails />} />
            <Route path="/products/checkout" element={<ProductCheckout />} />
            <Route path="/products/checkout/confirmation" element={<ProductConfirmation />} />
          </Routes>
        </Layout>
      </StateContext>
      {/* <CartMenu /> */}
    </Router>
  );
}

export default App