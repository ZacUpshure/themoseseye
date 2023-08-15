import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import MediaSection from '../container/MediaSection/MediaSection';

import {
    Header, 
    About,
    Features,
    CTA,
    ServicePricing,
    Network
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
                    <Network />
                    <Features />
                    <About />
                    <MediaSection />
                    <ServicePricing />
                    <CTA />
                </main>
            </body>
        </html>
    </>
  )
}

export default Home