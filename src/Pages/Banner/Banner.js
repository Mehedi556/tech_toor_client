import React from 'react';
import img1 from '../../Assets/code1.jpg';
import img2 from '../../Assets/code2.png';
import img3 from '../../Assets/code3.jpg';
import img4 from '../../Assets/code4.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div>
            <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                
            </Carousel>
        </div>
        </div>
    );
};

export default Banner;