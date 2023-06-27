import React from 'react'

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
    Work,
    CTA
  } from './../container';

  import { Navbar } from './../components';

const Home = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Features />
        {/* <About /> */}
        <Work />
        {/* <Skills /> */}
        {/* <Testimonial /> */}
        <FooterTwo />
        <Pricing />
        <CTA />
        <RealFooter />
    </>
  )
}

export default Home