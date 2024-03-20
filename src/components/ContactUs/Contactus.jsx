import React from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import MyNavbar from '../Navbar/MyNavbar';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yco0nwi', 'template_5ygekdd', e.target, 'QODm_xeVwWxR-AZWI')
      .then((result) => {
        document.getElementById('contact-form').reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
     <div className='nature'>
      <MyNavbar />
     
        <div className="container">
          <h2>Contact Us</h2>
          <form id='contact-form' onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
