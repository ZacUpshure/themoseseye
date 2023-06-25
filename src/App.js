import React from 'react'
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

const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <Features />
        {/* <About /> */}
        <Work />
        {/* <Skills /> */}
        {/* <Testimonial /> */}
        <FooterTwo />
        <Pricing />
        <PricingPhotography />
        <PricingCommercials />
        <RealFooter />
    </div>
  );
}

export default App