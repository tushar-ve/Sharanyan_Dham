import React,{useRef} from 'react'
import { motion, useInView } from "framer-motion";
import imageButton from "../../assets/button_logo.png"
import './sangreh.scss'

const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };


const Sangreh = () => {
    const ref = useRef();

    // const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
    className="services"
    variants={variants}
    initial="initial"
    // animate="animate"
    whileInView="animate"
    ref={ref}
    // animate={"animate"}
  >
    <motion.div className="textContainer" variants={variants}>
            <p>पौराणिक कथाओं में समझ की गहराई छुपी है
            <br/>
            जो जीवन के मार्गदर्शन करती है</p>
            <hr/>
        </motion.div>
        <motion.div className='titleContainer'>

    
        <div className="title">
          <img src={imageButton} alt="/" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Vedas</motion.b> Learning
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Growth.
          </h1>
          <button>शरण्यधाम की झलक</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{
    backgroundImage: "url('https://images.unsplash.com/photo-1621787084849-ed98731b3071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    color: "white"
  }}
        >
          <h2>शरण्यधाम</h2>
          <p>
            भारत एक समृद्ध सांस्कृति विरासत और विविधताओं वाला देश है। यहां के मंदिर वास्तुकला से समृद्ध है। जिसकी शुरूआत सिंधु घाटी सभ्यता के बाद से मानी जाती है। भारत के मंदिर और अन्य वास्तुकलाओं में स्वदेशी सांस्कृतिक परंपराओं, सामाजिक आवश्यकताओं और आर्थिक समृद्धि की झलक दिखाई देती है। इसलिए यहां की वास्तुकला का अध्ययन भारत की विभिन्न सांस्कृतिक विविधताओं को प्रकट करता है। 
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
  className="box"
  whileHover={{
    backgroundImage: "url('https://images.unsplash.com/photo-1621787084849-ed98731b3071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    color: "white"
  }}
>
          <h2>शरण्यधाम</h2>
          <p>
            भारत एक समृद्ध सांस्कृति विरासत और विविधताओं वाला देश है। यहां के मंदिर वास्तुकला से समृद्ध है। जिसकी शुरूआत सिंधु घाटी सभ्यता के बाद से मानी जाती है। भारत के मंदिर और अन्य वास्तुकलाओं में स्वदेशी सांस्कृतिक परंपराओं, सामाजिक आवश्यकताओं और आर्थिक समृद्धि की झलक दिखाई देती है। इसलिए यहां की वास्तुकला का अध्ययन भारत की विभिन्न सांस्कृतिक विविधताओं को प्रकट करता है। 
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
    backgroundImage: "url('https://images.unsplash.com/photo-1621787084849-ed98731b3071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    color: "white"
  }}
        >
          <h2>शरण्यधाम</h2>
          <p>
            भारत एक समृद्ध सांस्कृति विरासत और विविधताओं वाला देश है। यहां के मंदिर वास्तुकला से समृद्ध है। जिसकी शुरूआत सिंधु घाटी सभ्यता के बाद से मानी जाती है। भारत के मंदिर और अन्य वास्तुकलाओं में स्वदेशी सांस्कृतिक परंपराओं, सामाजिक आवश्यकताओं और आर्थिक समृद्धि की झलक दिखाई देती है। इसलिए यहां की वास्तुकला का अध्ययन भारत की विभिन्न सांस्कृतिक विविधताओं को प्रकट करता है। 
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
    backgroundImage: "url('https://images.unsplash.com/photo-1621787084849-ed98731b3071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    color: "white"
  }}
        >
          <h2>शरण्यधाम</h2>
          <p>
            भारत एक समृद्ध सांस्कृति विरासत और विविधताओं वाला देश है। यहां के मंदिर वास्तुकला से समृद्ध है। जिसकी शुरूआत सिंधु घाटी सभ्यता के बाद से मानी जाती है। भारत के मंदिर और अन्य वास्तुकलाओं में स्वदेशी सांस्कृतिक परंपराओं, सामाजिक आवश्यकताओं और आर्थिक समृद्धि की झलक दिखाई देती है। इसलिए यहां की वास्तुकला का अध्ययन भारत की विभिन्न सांस्कृतिक विविधताओं को प्रकट करता है। 
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Sangreh