
import ImageTop from '../../assets/mandir_img.jpg'
import './Aboutus.css'
import MyNavbar from '../Navbar/MyNavbar'
import Footer from '../Footer/Footer'

const About = () => {


  return (
    <>
    <MyNavbar/>
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${ImageTop})` }}>
         <h2 className='name' >शरण्य धाम</h2> 
        </div>
      
      <div className='aboutBottom'>
            <h1 className='title'>हमारे विषय में</h1>
        <p className='p2'>ईश्वर कृपा से ही इस जगत में सभी कार्य सिद्ध होते हैं। शरण्य धाम की स्थापना भी तब हुई जब गोला बाज़ार गोरखपुर निवासी श्री राम बदन मौर्य को पे्र्ररणा हुई कि सभी के कल्याण के लिये ऐसे नवग्रह मंदिर की स्थापना होनी चाहिये जिसमें कोई भी व्यक्ति भक्ति हेतु अथवा किसी विशेष कार्य की पूर्ति के लिये पूजाआयोजन कर सके।

इसी प्रेरणा की परिणति शरण्य धाम के रूप में हुई। इस कार्य में श्री मौर्य की सहायता नोयडा में साफ्टवेयर के क्षे़त्र में कार्यरत उनके पुत्रा श्री देवेंद्र् नाथ मौर्य ने की।

नवग्रह मंदिर की स्थापना का उद्देश्य समाज के सभी वर्गों के लोगों को ऐसा स्थान उपलब्ध कराना है जहाँ वे अघ्यात्म, योग, ईश्वर तथा आध्यात्मिक विकास की चर्चा और प्रयास कर सकें। इसके साथ ही वे भक्तिभावना तथा कार्यसिद्धि के लिये नवग्रहों की उपासना कर सकें।

श्री राम बदन मौर्य ने मंदिर हेतु 1 बीघा अर्थात् 0.25 हेक्टेयर 2500 वर्ग मीटर दान में दी तथा पुत्र की सहायता से मंदिर का निर्माण आरम्भ कराया। श्री मौर्य ने पूरा प्रयास किया कि इस महती कार्य में धन की बाधा न आये।</p>
      </div>
       
    </div>
    <Footer/>
    </>
  )
}

export default About