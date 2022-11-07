import React from 'react';
import './Categories.css';

// import { HiOutlineSquares2X2 } from 'react-icons/hi';
import { BsFillCupFill } from 'react-icons/bs';
import { GiFruitBowl, GiFruitTree, GiDiscGolfBag } from 'react-icons/gi';
import { FaCloudMeatball, FaExpand } from 'react-icons/fa';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { GoTriangleRight } from 'react-icons/go';

const Categories = () => {
  return (
    <div className="categories">
      <ul>
        <li>
          <span className="categories-icon">
            <FaExpand />
          </span>
          <span className="categories-name">All Offers</span>
        </li>
        <li>
          <span className="categories-icon">
            <BsFillCupFill />
          </span>
          <span className="categories-name">Tea Snacks</span>
        </li>
        <li>
          <span className="categories-icon">
            <GiFruitTree />
          </span>
          <span className="categories-name">Dairy</span>
        </li>
        <li>
          <span className="categories-icon">
            <FaCloudMeatball />
          </span>
          <span className="categories-name">Meat</span>
        </li>
        <li>
          <span className="categories-icon">
            <GiFruitBowl />
          </span>
          <span className="categories-name">Fruits</span>
        </li>
        <li>
          <span className="categories-icon">
            <MdOutlineHealthAndSafety />
          </span>
          <span className="categories-name">For Health</span>
        </li>
        <li>
          <span className="categories-icon">
            <GiDiscGolfBag />
          </span>
          <span className="categories-name">Seasonal</span>
        </li>
        <li>
          <span
            className="categories-name"
            style={{ fontWeight: '500', color: 'green' }}
          >
            View All Categories
          </span>
          <span className="categories-icon">
            <GoTriangleRight style={{ marginLeft: '1rem' }} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
