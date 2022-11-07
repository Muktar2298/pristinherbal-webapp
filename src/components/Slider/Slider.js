import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assests/carouselImages/c1.png';
import slide2 from '../../assests/carouselImages/c2.png';
import slide3 from '../../assests/carouselImages/c3.png';

import "./Slider.css";

const Slider = () => {
  return (
    <div>
      <Carousel className='carousel'>
        {/* SLIDER-1 */}
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
         
        </Carousel.Item>
        {/* SLIDER-2 */}
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />

         
        </Carousel.Item>
        {/* SLIDER-3 */}
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />

         
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
