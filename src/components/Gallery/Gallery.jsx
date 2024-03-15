import React from 'react';
import image1 from "../../assets/Gallery_pic/IMG20230126181157.jpg";
import image2 from "../../assets/Gallery_pic/IMG20230126181318.jpg";
import image3 from "../../assets/Gallery_pic/IMG20230126181348.jpg";
import image4 from "../../assets/Gallery_pic/IMG20230126181458 1.jpg";
import image5 from "../../assets/Gallery_pic/IMG20230126181719.jpg";
import image6 from "../../assets/Gallery_pic/IMG20230126181738.jpg";
import image7 from "../../assets/Gallery_pic/IMG20230126184210.jpg";
import image8 from "../../assets/Gallery_pic/IMG20230126184220.jpg";
import image9 from "../../assets/Gallery_pic/IMG20230126184231.jpg";
import image10 from "../../assets/Gallery_pic/IMG20230126184251.jpg";
import image11 from "../../assets/Gallery_pic/IMG20230126184255.jpg";
import image12 from "../../assets/Gallery_pic/IMG20230126184300.jpg";
import image13 from "../../assets/Gallery_pic/IMG20230126184335.jpg";
import logo from "../../assets/bg-sharanyadham.jpg"
import "./Gallery.scss";
import { useState } from 'react';
import MyNavbar from '../Navbar/MyNavbar';

const items =[
    {
        id:1,
        img: image1,
        desc: "Shani Dev"
    },
    {
        id:2,
        img: image2,
        desc: "Shani Dev"
    },
    {
        id:3,
        img: image3,
        desc: "Shani Dev"
    },
    {
        id:4,
        img: image4,
        desc: "Shani Dev"
    },
    {
        id:5,
        img: image5,
        desc: "Shani Dev"
    },
    {
        id:6,
        img: image6,
        desc: "Shani Dev"
    },
    {
        id:7,
        img: image7,
        desc: "Shani Dev"
    },
    {
        id:8,
        img: image8,
        desc: "Shani Dev"
    },
    {
        id:9,
        img: image9,
        desc: "Shani Dev"
    },
    {
        id:10,
        img: image10,
        desc: "Shani Dev"
    },
    {
        id:11,
        img: image11,
        desc: "Shani Dev"
    },
    {
        id:12,
        img: image12,
        desc: "Shani Dev"
    },
    {
        id:13,
        img: image13,
        desc: "Shani Dev"
    },
];

const Gallery = () => {
    const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setMouseCoords({ x: event.clientX, y: event.clientY });
    };

    const gradientStyle = {
        backgroundImage: `url(${logo}), radial-gradient(at ${mouseCoords.x}px ${mouseCoords.y}px, rgba(159,0,191,.9) 0, #4D4FA7 70%)`,
        width: '100%',
        height: '100%',
    };
    return (
        <>
        <MyNavbar/>
        <div className='body_gallery gradient' style={gradientStyle} onMouseMove={handleMouseMove}>
            <h1 className='head2'>Gallery of Sharanyan Dham <hr/></h1> 
            <div className="grid-container">
                {items.map((item) => (
                    <div key={item.id}>
                        <img className='grid-item grid-item-1' src={item.img} alt=''/>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
            </div>
        </>
    );
};

export default Gallery;
