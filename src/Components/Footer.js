import React, { useState } from "react";
import logo2 from "../assets/truekeeper-assets/real-logo.png";
import "../styles/Footer.css";
import footimage from "../assets/truekeeper-assets/textile_bg.jpg";
import { LiaFacebookF} from 'react-icons/lia';
import { FiTwitter} from 'react-icons/fi';
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer1">
      {/* <div className='footer1container' style={{backgroundImage:`url(${footimage})`}}></div> */}
      <div
        class="img-container"
        // style={{
        //   backgroundImage: `url(${footimage})`, 
        // }}
      >
        <div className="content">
          <img src={logo2} alt="img" />

          <div className="leftside-textfooter">
            <h3>TrueKeepers</h3>
            <p>Let's put hands together and build a better world</p>
          </div>

          <div className="list-link">
            <ul>
              <li>
                <a href="">Programs</a>{" "}
                <p>
                  <a href="">Become A Member</a>
                </p>
                <p>
                  <a href="">Become A Donor</a>
                </p>
              </li>
              <li>
                <a href="">About Us</a>{" "}
                <p>
                  {" "}
                  <a href="">Founder</a>
                </p>{" "}
                <p>
                  {" "}
                  <a href="">Resources</a>
                </p>
              </li>
              <li>
                <a href="">Contact Us</a>
                <p>
                  <a href="">Support</a>
                </p>
                <p>
                  <a href="">Partnership</a>
                </p>
              </li>
            </ul>
          </div>

          <div className="list2">
            <ul>
              <li>&#169; 2023 Truekeepers.Inc </li>
              <li>
                <a href="">Terms of USe|Privacy Policy</a>
              </li>

              <a href="http://twitter.com/kas_believe">
                <FiTwitter/>
              </a>
              <a href="http://facebook.com/Kas Believe">
                <LiaFacebookF/>
              </a>
              <a href="http://instagram.com/kas_believe">
                <BsInstagram/>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;



