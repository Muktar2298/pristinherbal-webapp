import React from 'react';
import './TopHeader.css';
import Container from 'react-bootstrap/Container';
import { FaMapMarkerAlt, FaRegCompass, FaPhoneAlt } from 'react-icons/fa';
const TopHeader = () => {
  return (
    <div className="topheader-container ml-auto">
      <Container>
        {/* CONTACT-INFO */}
        <div className="ml-auto topheader-area">
          <div className="contact-info-container topheader-item">
            <span>
              <span className="text-secondary">
                <FaPhoneAlt />
              </span>
              <span className="ms-2 text-dark">01776979756</span>
            </span>
          </div>
          {/* TRACK-ORDER */}
          <div className="track-order-container   topheader-item">
            <span>
              <span className="text-secondary">
                <FaMapMarkerAlt />
              </span>
              <span className="ms-2 text-dark">Track Order</span>
            </span>
            {/* <span className="vertical-line"></span> */}
          </div>
          {/* COMPARE */}
          <div className="compare-show-container topheader-item">
            <span>
              <span className="text-secondary">
                <FaRegCompass />
              </span>
              <span className="ms-2 text-dark">Compare</span>
            </span>
            {/* <span className="vertical-line"></span> */}
          </div>
          {/* BLOG */}
          <div className="blog-info-container">
            <span>Blog</span>
            {/* <span className="vertical-line"></span> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
