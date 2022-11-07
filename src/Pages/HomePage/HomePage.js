import React from 'react';
import Container from 'react-bootstrap/Container';
import Categories from '../../components/Categories/Categories';
import PopularCategories from '../../components/PopularCategories/PopularCategories';
import Slider from '../../components/Slider/Slider';
import './HomePage.css';

const HomePage = () => {
  return (
    <Container>
      <div className="home-page">
        {/* -----SLIDER AND CATEGORIES----- */}
        <div className="slider-container">
          {/* SLIDER-CATEGORIES */}
          <div className="slider-categories">
            <Categories />
          </div>
          {/* SLIDER & SLIDER INFO */}
          <div className="slider-info">
            <Slider />
          </div>
        </div>
        {/* ------POPULAR CATEGORIES------- */}
        <div className='popular-categories-main-container'>
          <PopularCategories />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
