import React from 'react'
import './RealFooter.scss';
import images from '../../constants/images';

import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillBehanceCircle } from 'react-icons/ai';

const RealFooter = () => {
  return (
    <footer class="footer">
        <div class="container-realfooter grid grid--footer">
          <div class="logo-col">
            <a href="#" class="footer-logo app__navbar-logo">
              <img class="logo" alt="Omnifood logo" src={images.logo} />
            </a>
  
            <ul class="social-links">
              <li>
                <a class="footer-link" href="https://www.instagram.com/themoseseye/?hl=de">
                    <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a class="footer-link" href="https://www.behance.net/Moseseye">
                    <AiFillBehanceCircle />
                </a>
              </li>
            </ul>
            <p class="copyright">
              by themoseseye. All rights reserved.
              <br />
              Copyright &copy; 2023.
            </p>
          </div>
          <div class="address-col">
            <p class="footer-heading">Contact us</p>
            <address class="contacts">
              <p class="address p-text">
                Fontanestraße 55, 13158 Berlin DE
              </p>
              <p>
                <a class="footer-link" href="tel:415-201-6370">01725450304</a
                ><br />
                <a class="footer-link" href="mailto:engelmann-development@Edev.com"
                  >themoseseye@atengelmann.com</a>
              </p>
            </address>
          </div>
          <nav class="nav-col">
            <p class="footer-heading">Marketing</p>
            <ul class="footer-nav">
              <li><a class="footer-link" href="#">SEO</a></li>
              <li><a class="footer-link" href="#">Social Media Management</a></li>
              <li><a class="footer-link" href="#">Google ads</a></li>
              <li><a class="footer-link" href="#">Facebook Campaigns</a></li>
              <li><a class="footer-link" href="#">Email marketing</a></li>
              <li><a class="footer-link" href="#">Marketing Strategy</a></li>
            </ul>
          </nav>
  
          <nav class="nav-col margin-left-helper">
            <p class="footer-heading">Photography</p>
            <ul class="footer-nav">
              <li><a class="footer-link" href="#">Product</a></li>
              <li><a class="footer-link" href="#">Business</a></li>
              <li><a class="footer-link" href="#">Art</a></li>
              <li><a class="footer-link" href="#">Personal</a></li>
            </ul>
          </nav>
  
          <nav class="nav-col">
            <p class="footer-heading">Web development</p>
            <ul class="footer-nav">
              <li><a class="footer-link" href="#">Landingpage</a></li>
              <li><a class="footer-link" href="#">E commerce</a></li>
              <li><a class="footer-link" href="#">Application</a></li>
            </ul>
          </nav>

          <nav class="nav-col">
            <p class="footer-heading">Commercials</p>
            <ul class="footer-nav">
              <li><a class="footer-link" href="#">Script writing</a></li>
              <li><a class="footer-link" href="#">Post production</a></li>
              <li><a class="footer-link" href="#">Actors</a></li>
            </ul>
          </nav>

          <nav class="nav-col">
            <p class="footer-heading">Company</p>
            <ul class="footer-nav">
              <li><a class="footer-link" href="#">Recipe directory</a></li>
              <li><a class="footer-link" href="#">Help center</a></li>
              <li><a class="footer-link" href="#">Privacy & terms</a></li>
            </ul>
          </nav>
        </div>
      </footer>
  )
}

export default RealFooter