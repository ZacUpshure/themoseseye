import React, { useState } from 'react';
import axios from 'axios';
import './FooterTwo.scss';
import { GrMapLocation } from 'react-icons/gr'
import { BsMailbox } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsBehance } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'

const FooterTwo = () => {

  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/signupNewsletter', { email });

      console.log('Subscriber added:', response.data);
      // Reset the form or show a success message
    } catch (error) {
      console.error('Error adding subscriber:', error);
      // Handle the error or show an error message
    }
  };


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
              <a href='https://www.instagram.com/themoseseye/?hl=de'>
                <BsInstagram className='ico' />
              </a>
            </li>
            <li>
              <a href='https://www.behance.net/Moseseye'>
                <BsBehance className='ico' />
              </a>
            </li>
          </ul>
        </div>
            </div>
            <div className='right'>
                <h2 >Recieve Discounts with our Newsletter</h2>

                <form onSubmit={handleSubmit}>
                  <input 
                  type='Email' 
                  className='field' 
                  placeholder='Your Email' 
                  value={email} 
                  onChange={handleEmailChange}/>
                  <button className='btn' type="submit">Send</button>
                </form>

                {/* <input type='text' className='field' placeholder='Your Name' /> */}
            </div>
        </div>
    </div>
  )
}

export default FooterTwo