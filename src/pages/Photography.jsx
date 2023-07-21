import React from 'react'
import Banner from './../container/Banners/Banner'
import { Navbar } from './../components';
import { PricingPhotography, RealFooter } from '../container';

const profile = {
    photography:'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80',
    videography:'https://images.unsplash.com/photo-1535540878298-a155c6d065ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    marketing:'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80',
  }

const Photography = () => {
  return (

    <article>
        <div className='pt-20'>
            <Banner img={profile.photography} />
        </div>
        <PricingPhotography />
    </article>
  )
}

export default Photography