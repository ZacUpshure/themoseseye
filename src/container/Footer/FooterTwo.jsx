import React from 'react'
import './FooterTwo.scss';
import { GrMapLocation } from 'react-icons/gr'
import { BsMailbox } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsBehance } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'

const FooterTwo = () => {
  return (
       <div className='container'>
        <div className='contact-box'>
            <div className='left'>
            <div className='contactInfo'>
          <h2>Contact Info</h2>
          <ul className='info'>
            <li>
              <span>
                <GrMapLocation className='ico' />
              </span>
              <span>
                Fontanestraße 55 <br/>
                Berlin, Germany <br/>
                13158
              </span>
            </li>
            <li>
              <span>
                <BsMailbox className='ico' />
              </span>
              <span>
                themoseseye@atengelmann.com 
              </span>
            </li>
            <li>
              <span>
                <BiPhoneCall className='ico' />
              </span>
              <span>
                01725450304
              </span>
            </li>
          </ul>
          <ul className='sci'>
            <li>
              <a>
                <BsInstagram className='ico' />
              </a>
            </li>
            <li>
              <a>
                <BsBehance className='ico' />
              </a>
            </li>
          </ul>
        </div>
            </div>
            <div className='right'>
                <h2 >Recieve Discounts with our Newsletter</h2>
                <input type='text' className='field' placeholder='Your Name' />
                <input type='Email' className='field' placeholder='Your Email' />
                <button className='btn'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default FooterTwo