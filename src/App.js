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
  Work
} from './container';

import { Navbar } from './components';

const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
        {/* <Skills /> */}
        {/* <Testimonial /> */}
        <FooterTwo />
        <RealFooter />
    </div>
  );
}

export default App