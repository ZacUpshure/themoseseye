import React from 'react'
import Navbar from '../../scenes/global/Navbar'
import { RealFooter } from '../../container'
import { Helmet } from 'react-helmet-async';

const Layout = ({children}) => {
  return (
    <>
        <header className='sticky top-0 bg-white z-10'>
            <Navbar />
        </header>
        <main>
            {children}
        </main>
        <footer>
            <RealFooter />
        </footer>
    </>
  )
}

export default Layout