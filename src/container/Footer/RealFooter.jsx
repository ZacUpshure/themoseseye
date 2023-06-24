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
                <a class="footer-link" href="#">
                    <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                    <AiFillBehanceCircle />
                </a>
              </li>
            </ul>
            <p class="copyright">
              by Engelmann Development. All rights reserved.
              <br />
              Copyright &copy; 2027.
            </p>
          </div>
          <div class="address-col">
            <p class="footer-heading">Contact us</p>
            <address class="contacts">
              <p class="address p-text">
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a class="footer-link" href="tel:415-201-6370">415-201-6370</a
                ><br />
                <a class="footer-link" href="mailto:engelmann-development@Edev.com"
                  >engelmann-development@Edev.com</a>
              </p>
            </address>
          </div>
          <nav class="nav-col">
            <p class="footer-heading">Account</p>
            <ul class="footer-nav">
              <li><a class="footer-link" href="#">Create account</a></li>
              <li><a class="footer-link" href="#">Sign in</a></li>
              <li><a class="footer-link" href="#">iOS app</a></li>
              <li><a class="footer-link" href="#">Android app</a></li>
            </ul>
          </nav>
  
          <nav class="nav-col margin-left-helper">
            <p class="footer-heading">Company</p>
            <ul class="footer-nav">
              <li><a class="footer-link" href="#">About Engelmann Development</a></li>
              <li><a class="footer-link" href="#">For Business</a></li>
              <li><a class="footer-link" href="#">Partners</a></li>
              <li><a class="footer-link" href="#">Careers</a></li>
            </ul>
          </nav>
  
          <nav class="nav-col">
            <p class="footer-heading">Resources</p>
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