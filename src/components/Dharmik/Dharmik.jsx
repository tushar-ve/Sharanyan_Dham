import React,{useRef} from 'react'
import "./dharmik.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items =[
    {
        id:1,
        title: "रामायण",
        img: "https://i.pinimg.com/564x/59/f6/90/59f690ee32727e57c314446dca2c515d.jpg",
        desc: "रामायण दक्षिण और दक्षिण पूर्व एशिया में एक सर्व-लोकप्रिय महाकाव्य है। यह राजा राम की कहानी है, जिन्हें अपनी अपहृत पत्नी सीता को बचाना है। साथ ही, यह हिंदू जीवन का पाठ भी सिखाता है। रामायण को साहित्य (और हास्य पुस्तकों!), नाटकों, फिल्मों के माध्यम से मौखिक रूप से बताया और दोहराया जाता है और आज लोकप्रिय संस्कृति के कई अन्य रूपों में इसका संदर्भ दिया जाता है।"
    },
    {
        id:2,
        title: "रामायण",
        img: "https://i.pinimg.com/564x/59/f6/90/59f690ee32727e57c314446dca2c515d.jpg",
        desc: "रामायण दक्षिण और दक्षिण पूर्व एशिया में एक सर्व-लोकप्रिय महाकाव्य है। यह राजा राम की कहानी है, जिन्हें अपनी अपहृत पत्नी सीता को बचाना है। साथ ही, यह हिंदू जीवन का पाठ भी सिखाता है। रामायण को साहित्य (और हास्य पुस्तकों!), नाटकों, फिल्मों के माध्यम से मौखिक रूप से बताया और दोहराया जाता है और आज लोकप्रिय संस्कृति के कई अन्य रूपों में इसका संदर्भ दिया जाता है।"
    },
    {
        id:3,
        title: "रामायण",
        img: "https://i.pinimg.com/564x/59/f6/90/59f690ee32727e57c314446dca2c515d.jpg",
        desc: "रामायण दक्षिण और दक्षिण पूर्व एशिया में एक सर्व-लोकप्रिय महाकाव्य है। यह राजा राम की कहानी है, जिन्हें अपनी अपहृत पत्नी सीता को बचाना है। साथ ही, यह हिंदू जीवन का पाठ भी सिखाता है। रामायण को साहित्य (और हास्य पुस्तकों!), नाटकों, फिल्मों के माध्यम से मौखिक रूप से बताया और दोहराया जाता है और आज लोकप्रिय संस्कृति के कई अन्य रूपों में इसका संदर्भ दिया जाता है।"
    },
    {
        id:4,
        title: "रामायण",
        img: "https://i.pinimg.com/564x/59/f6/90/59f690ee32727e57c314446dca2c515d.jpg",
        desc: "रामायण दक्षिण और दक्षिण पूर्व एशिया में एक सर्व-लोकप्रिय महाकाव्य है। यह राजा राम की कहानी है, जिन्हें अपनी अपहृत पत्नी सीता को बचाना है। साथ ही, यह हिंदू जीवन का पाठ भी सिखाता है। रामायण को साहित्य (और हास्य पुस्तकों!), नाटकों, फिल्मों के माध्यम से मौखिक रूप से बताया और दोहराया जाता है और आज लोकप्रिय संस्कृति के कई अन्य रूपों में इसका संदर्भ दिया जाता है।"
    }
]


const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>और पढ़ें </button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

const Dharmik = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>धार्मिक ग्रन्थ</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        <div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
        </div>
      </div>
    );
  };

export default Dharmik