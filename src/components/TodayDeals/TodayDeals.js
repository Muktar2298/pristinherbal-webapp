import React from 'react';
import './TodayDeals.css';
import { FaArrowRight } from 'react-icons/fa';

import products from './../../fakeData/todayDealsData';
import TodayDeal from '../TodayDeal/TodayDeal';
import { Button } from 'react-bootstrap';

const TodayDeals = () => {
  return (
    <div className="today-deals-container">
      <div className="today-deals-title">
        <p>Deals Deals</p>
        {/* TIMER-ADDING */}
        <div>
          <p>Ending In</p>
          <div></div>
        </div>
        <p>
          <button type="submit">SHOP MORE</button>
        </p>
      </div>
      {/* <hr className="horizontal" /> */}
      <div className="today-deals">
        {products.map((product) => (
          <TodayDeal key={product.id} product={product}></TodayDeal>
        ))}
      </div>
    </div>
  );
};

export default TodayDeals;
