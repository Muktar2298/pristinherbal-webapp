import React from 'react';
import './TodayDeal.css';

import { FaStar } from 'react-icons/fa';

const TodayDeal = (props) => {
  const product = props.product;
  const { price } = product;
  console.log(price);

  const productPrice = parseFloat(product.price);

  return (
    <div className="today-deal">
      <div>
        <img src={product.img} alt="" />
      </div>
      <div>
        <h6 className="product-name">{product.name}</h6>
        <h6 className="product-price"> ৳ {product.price}</h6>
        <p className="price-discount">
          <span>
            <del>{`৳ ${productPrice}`} </del>
            <span>-35%</span>
          </span>
        </p>
        <p className="star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
      </div>
    </div>
  );
};

export default TodayDeal;
