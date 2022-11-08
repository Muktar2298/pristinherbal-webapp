import React from 'react';
import './LatestProducts.css';
import products from './../../fakeData/todayDealsData';
import TodayDeal from '../TodayDeal/TodayDeal';
const LatestProducts = () => {
  return (
    <div className="today-deals-container">
      <div className="today-deals-title">
        <p>Latest Products</p>
        {/* TIMER-ADDING */}
        <p>
          <button type="submit">SHOW ALL</button>
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

export default LatestProducts;
