import React, { useEffect, useState } from 'react';
import popularCategoriesData from '../popularCategoriesData';
import PopularCategory from '../PopularCategory/PopularCategory';

import { FaArrowRight } from 'react-icons/fa';

import './PopularCategories.css';

const PopularCategories = () => {
  return (
    <div className="popular-categories-container">
      <div className="popular-categories-title">
        <p>Popular Categories</p>
        <p>
          <span style={{ marginRight: '0.3rem',}}>
            Browser All Categories{' '}
          </span>
          <span>
            <FaArrowRight />
          </span>
        </p>
      </div>
      <hr className='horizontal' />
      <div className="popular-categories">
        {popularCategoriesData.map((category) => (
          <PopularCategory
            key={category.id}
            category={category}
          ></PopularCategory>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
