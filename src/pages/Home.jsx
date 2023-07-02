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

  import { Navbar, Head} from './../components';

const Home = () => {

    useEffect(() => {
      ReactGA.pageview(window.location.pathname)
    }, [])
    
  return (
    <>
        <Head />
        <html>
            <body>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Header />
                    <Features />
                    <Work />
                    <FooterTwo />
                    <Pricing />
                    <CTA />
                </main>
                <footer>
                    <RealFooter />
                </footer>
            </body>
        </html>
    </>
  )
}

export default Home