import React from 'react';
import './TodayDeals.css';
import { FaArrowRight } from 'react-icons/fa';

import products from './../../fakeData/todayDealsData';
import TodayDeal from '../TodayDeal/TodayDeal';

const TodayDeals = () => {
  return (
    <div className="today-deals-container">
      <div className="today-deals-title">
        <p>Popular Categories</p>
        <p>
          <span style={{ marginRight: '0.3rem' }}>Browser All Categories </span>
          <span>
            <FaArrowRight />
          </span>
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
