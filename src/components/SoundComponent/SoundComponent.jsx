import playButtonImage from "../../assets/logobig.png";
import "./SoundComponent.css";

const SoundComponent = () => {


  

  return (
    <div>
      <img
        src={playButtonImage}
        alt="Play Button"
       
        style={{ cursor: 'pointer', background: 'transparent' }}
        className='om-image'
      />
    </div>
  );
};

export default SoundComponent;
