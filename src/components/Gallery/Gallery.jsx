import React, { useEffect } from 'react';
import { gsap } from 'gsap'; // Import gsap from appropriate location
import Splitting from 'splitting';

const Gallery = () => {
    useEffect(() => {
        Splitting();
        
        gsap.set('.cards__wrapper', { autoAlpha: 1 });
        
        gsap.timeline({
            defaults: {
                duration: 1.25,
                stagger: 0.125,
                ease: "expo.inOut",
            },
        })
        .fromTo(".card__image--wrapper", { yPercent: 110 }, { yPercent: 0 }, 0)
        .fromTo(".card__image--outer", { yPercent: -110 }, { yPercent: 0 }, 0)
        .set(".cards__wrapper, .card", { pointerEvents: "all" }, "-=1");
    }, []);

    return (
        <>
            <section className="cards__wrapper">
                <figure className="card">
                    <div className="card__image--wrapper">
                        <div className="card__image--outer">
                            <img src="https://source.unsplash.com/UCEtRnp8qR0/340x400" alt="Portrait" className="card__image" />
                        </div>
                    </div>
                    <div className="card__text">
                        <span className="card__text--inner" data-splitting>STYLE</span>
                    </div>
                </figure>

                <figure className="card">
                    <div className="card__image--wrapper">
                        <div className="card__image--outer">
                            <img src="https://source.unsplash.com/vh_pAs2FH_8/340x400" alt="Portrait" className="card__image" />
                        </div>
                    </div>
                    <div className="card__text">
                        <span className="card__text--inner" data-splitting>PRAISE</span>
                    </div>
                </figure>

                <figure className="card">
                    <div className="card__image--wrapper">
                        <div className="card__image--outer">
                            <img src="https://source.unsplash.com/m663zRzRe40/340x400" alt="Portrait" className="card__image" />
                        </div>
                    </div>
                    <div className="card__text">
                        <span className="card__text--inner" data-splitting>FASHION</span>
                    </div>
                </figure>
            </section>

            <div className="support">
                <a href="" target="_blank"><i className="fab fa-twitter-square"></i></a>
                <a href="" target="_blank"><i className="fab fa-dribbble"></i></a>
            </div>
        </>
    );
};

export default Gallery;
