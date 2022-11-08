import React from 'react';
import './MiddleHeader.css';
// REACT-BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo2 from '../../assests/logos/l2.png';

import {
  FaSearch,
  FaRegHeart,
  FaShoppingCart,
  FaUserAlt,
  FaShippingFast,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MiddleHeader = () => {
  return (
    <div className="middle-header">
      <Container>
        <div className="middle-header-container">
          {/* LOGO */}
          <div className="logo middle-header-item">
            <Link to="/">
              <img src={logo2} alt="" />
            </Link>
          </div>
          {/* SearchBar */}
          <div className="main-searchbar searchbar middle-header-item">
            <form>
              <input type="text" placeholder="I'm looking for..." />
              <button type="submit">
                <FaSearch className="search-icon" />
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="info middle-header-item">
            <ul>
              <li>
                <FaRegHeart className="info-icon" />
              </li>
              <li>
                <FaShoppingCart />
              </li>
              <li>
                <FaUserAlt />
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Optional-Search-Bar */}
        <div className=" optional-searchbar searchbar middle-header-item">
          <form>
            <input type="text" placeholder="I'm looking for..." />
            <button type="submit">
              <FaSearch className="search-icon" />
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default MiddleHeader;
