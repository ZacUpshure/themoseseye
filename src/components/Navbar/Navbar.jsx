import React, { useState } from 'react';
import images from '../../constants/images';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools and find out expectations',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers with our engagement tool',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
  {
    name: 'Reports',
    description: 'Edit, manage and create newly informed decisions',
    href: '#',
    icon: DocumentChartBarIcon,
  },
]

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'photography', 'videography', 'marketing', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            {item === 'home' ? (
              <Link to="/" >{item}</Link>
            ) : (
              <Link to={`/${item}`} >{item}</Link>
            )}
          </li>  
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {
          toggle && (
            <motion.div 
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut'}}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul className='app__navbar-links'>
                {['home', 'photography', 'videography', 'marketing', 'contact'].map((item) => (
                  <li className='app__flex p-text' key={`link-${item}`}>
                  <div />
                    {item === 'home' ? (
                      <Link to="/" >{item}</Link>
                    ) : (
                      <Link to={`/${item}`} >{item}</Link>
                    )}
                </li>
                ))}
              </ul>
             </motion.div>
          )
        }
      </div>
    </nav>
  );
}

export default Navbar;
