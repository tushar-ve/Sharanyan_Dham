import React, { useEffect, useRef } from 'react'; 
import MyNavbar from './Navbar/MyNavbar';
import "./HomePage.css";
import SoundComponent from './SoundComponent/SoundComponent';
import { TweenMax, Power3 } from 'gsap'; 

import Section2 from './Section2/Section2';
import Footer from './Footer/Footer';
import Section3 from './Section3/Section3';
import संग्रह from "./Sangreh/Sangreh"
import Dharmik from './Dharmik/Dharmik';
const Homepage = () => {
  const logoItem = useRef(null); 


  useEffect(() => {
    TweenMax.to(
      logoItem.current, 
      1.9, 
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeIn
      }
    );
  }, []); 

  return (
    <>
      <MyNavbar />
      <section>
      <div className='banner' ref={logoItem}>
        <SoundComponent />
        <div className='center-text loader' >
         <p >शरण्य धाम</p> 
        </div>
      </div>
      </section>
      <section>
        <Section2/>
      </section>
      <section id='Services'><Section3 type="services"/></section>
      <section><संग्रह/></section>
      <section id='Portfolio'><Section3 type="portfolio"/></section>
      <Dharmik/>
      
      
      <Footer/>
    
    </>
  );
};

export default Homepage;
