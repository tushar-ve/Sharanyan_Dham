

import React from "react";
import "./footer.css";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
        
          <div className="title">About</div>
          <div className="text">
          All works in this world are proved by the grace of God. Sharanya Dham was also established when Shri Ram Badan Maurya, resident of Gola Bazar, Gorakhpur, felt that such a Navagraha temple should be established for the welfare of all, in which any person can conduct puja for devotion or for the fulfillment of any special work.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
            Sharanya Dham
Post: Gola Bazar<br/>
District: Gorakhpur<br/>
State: Uttar Pradesh
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +91-8447190367</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: sharanyadham@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Hindu Mythology</div>
          <div className="text">Vedas </div>
          <div className="text">Purans</div>
          <div className="text">Upanishads</div>
          <div className="text">Geeta</div>
          {/* <div className="text">Home Theatre</div>
          <div className="text">Projectors</div> */}
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Privacy Policy</div>
          <div className="text">Donate</div>
          <div className="text">Terms & Conditions</div>
          <div className="text">Contact Us</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
          &copy; 2024, www.sharanyadham.com. All Rights Reserved.
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
