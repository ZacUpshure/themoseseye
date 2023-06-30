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

  import { Navbar} from './../components';

const Home = () => {
  return (
    <>
        <html>
            <head>
                <title>Themoseseye - Websites, Photography & Marketing | Digital marketing expert</title>
                <meta name="description" content="Increase sales and reach to more customers, We offer a broad range of Marketing tools such as Social Media, Email marketing, SEO and much more. Our Photography services create an professional high quality and elegant look for any product or service as well as professional commercials tailored to customer needs! Contact today for a free first consultants!" />

                <meta property="og:title" content="Themoseseye - Websites, Photography & Marketing | Digital marketing expert" />
                <meta property="og:description" content="Increase sales and reach to more customers, We offer a broad range of Marketing tools such as Social Media, Email marketing, SEO and much more. Our Photography services create an professional high quality and elegant look for any product or service as well as professional commercials tailored to customer needs! Contact today for a free first consultants!" />
                <meta property="og:image" content="https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.jpeg" />
                <meta property="og:url" content="https://themoseseye.com/" />
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content="Themoseseye - Websites, Photography & Marketing | Digital marketing expert" />
                <meta name="twitter:description" content="Increase sales and reach to more customers, We offer a broad range of Marketing tools such as Social Media, Email marketing, SEO and much more. Our Photography services create an professional high quality and elegant look for any product or service as well as professional commercials tailored to customer needs! Contact today for a free first consultants!" />
                <meta name="twitter:image" content="https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.jpeg" />
                <meta name="twitter:card" content="summary_large_image" />

                <meta name="linkedin:title" content="Themoseseye - Websites, Photography & Marketing | Digital marketing expert" /> 
                <meta name="linkedin:description" content="Increase sales and reach to more customers, We offer a broad range of Marketing tools such as Social Media, Email marketing, SEO and much more. Our Photography services create an professional high quality and elegant look for any product or service as well as professional commercials tailored to customer needs! Contact today for a free first consultants!" />
                <meta name="linkedin:image" content="https://oli-baustoffe-images.s3.eu-central-1.amazonaws.com/Olibaustoffe_bilder/DJI_0197.jpeg" />
                <meta name="linkedin:card" content="summary_large_image" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </head>
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