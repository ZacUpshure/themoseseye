import React from 'react'
import { Helmet } from 'react-helmet';


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

  import { Navbar, Head } from './../components';

const Home = () => {
  return (
    <>
        <Head />
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