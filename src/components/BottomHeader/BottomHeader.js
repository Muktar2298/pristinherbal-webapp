import React from 'react';
import Container from 'react-bootstrap/Container';
import './BottomHeader.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaMoneyBillWaveAlt } from 'react-icons/fa';

const BottomHeader = () => {
  return (
    <div className="bottom-header">
      <Container>
        <div className="bottom-header-container">
          {/* CATEGORIES */}
          <div className="categories">
            <span className='three-dot'>
              <BsThreeDotsVertical />
            </span>
            <span>
              <GiHamburgerMenu />
            </span>
            <span>ALL CATEGORIES</span>
          </div>
          {/* CATEGORIES ITEMS */}
          <div className='categories-items'>
            <ul>
              <li>Home</li>
              <li>Blogs</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* CATEGORIES DEALS */}
          <div className='categories-deals'>
            <span>
              <FaMoneyBillWaveAlt />
            </span>
            <span>Daily Deals</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
