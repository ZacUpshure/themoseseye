import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

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

  import {Head} from './../components';
  import Navbar from './../scenes/global/Navbar';

const Home = () => {

    useEffect(() => {
      ReactGA.pageview(window.location.pathname)
    }, [])
    
  return (
    <>
        <Head />
        <html>
            <body>
                <main>
                    <Header />
                    <Features />
                    <CTA />
                </main>
            </body>
        </html>
    </>
  )
}

export default Home