import React from 'react';
import mandirImage from '../../assets/mandir_sec2 (2).jpg';
import './section2.scss';
import {mirrorEasing, motion} from  'framer-motion';

const textVariants ={
    intial:{
        x: -500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:2,
            staggerChildren:0.1,
        }
    }
}
const sliderVariants ={
    intial:{
        x: 0,
    },
    animate:{
        x:"-120%",
        transition:{
            repeat:Infinity,
            repeat: "mirror",
            duration:22,
        }
    }
}


const Section2 = () => {
  return (
    <div className='hero'>
    <div className='wrapper'>
    <motion.div className='textContainer' variants={textVariants} initial='intial' animate='animate'>
        <motion.h2 variants={textVariants}>Donation for शरण्य धाम</motion.h2>
        <motion.h4 variants={textVariants}>ॐ असतो मा सद्गमय ।
तमसो मा ज्योतिर्गमय ।
मृत्योर्मा अमृतं गमय ।
ॐ शान्तिः शान्तिः शान्तिः ॥</motion.h4>

<motion.div variants={textVariants} className='buttons'>
<motion.button variants={textVariants}>Donate Now</motion.button>
<motion.button variants={textVariants}>See More</motion.button>
</motion.div>
</motion.div>
    </div>
    <motion.div className='slidingTextContainer' variants={sliderVariants} intial='intial' animate='animate'>
    ॐ असतो मा सद्गमय ।
तमसो मा ज्योतिर्गमय ।
मृत्योर्मा अमृतं गमय ।
ॐ शान्तिः शान्तिः शान्तिः ॥
    </motion.div>
        <div className='imageContainer'>
            <img src={mandirImage} alt='image/'/>
        </div>
    </div>
  )
}

export default Section2