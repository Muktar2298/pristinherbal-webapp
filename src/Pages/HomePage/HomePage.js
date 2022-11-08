import React from 'react';
import Container from 'react-bootstrap/Container';
import Categories from '../../components/Categories/Categories';
import LatestProducts from '../../components/LatestProducts/LatestProducts';
import PopularCategories from '../../components/PopularCategories/PopularCategories';
import Slider from '../../components/Slider/Slider';
import TodayDeals from '../../components/TodayDeals/TodayDeals';
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
        <div className="popular-categories-main-container">
          <PopularCategories />
        </div>
        {/* ------------TODAY-DEALS-----------*/}
        <div className="today-deals-main-container">
          <TodayDeals />
        </div>
        <div className="today-deals-main-container">
          <LatestProducts />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
