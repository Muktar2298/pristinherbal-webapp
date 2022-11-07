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

const MiddleHeader = () => {
  return (
    <div className="middle-header">
      <Container>
        <div className="middle-header-container">
          {/* LOGO */}
          <div className='logo'>
            <img src={logo2} alt="" />
          </div>
          {/* SearchBar */}
          <div>
            <form>
                <input type="text" placeholder="I'm looking for..." />
                <span></span>
            </form>
          </div>
          {/* Info */}
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default MiddleHeader;
