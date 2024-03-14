import React, { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import Aigiri from "../../assets/Aigiri.mp3";
import playButtonImage from "../../assets/logobig.png";
import "./SoundComponent.css";

const SoundComponent = () => {

  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: [Aigiri],
      autoplay: false,
      loop: false,
      volume: 1.0,
    });

    const enableSound = () => {
      soundRef.current.play();
    };

    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        enableSound();
      }
    };

    document.addEventListener('click', enableSound);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', enableSound);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <img
        src={playButtonImage}
        alt="Play Button"
        onClick={() => soundRef.current.play()}
        style={{ cursor: 'pointer', background: 'transparent' }}
        className='om-image'
      />
    </div>
  );
};

export default SoundComponent;
