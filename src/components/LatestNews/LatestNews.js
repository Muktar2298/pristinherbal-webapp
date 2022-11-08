import React from 'react';
import './LatestNews.css';
import { FaStar } from 'react-icons/fa';

const LatestNews = (props) => {
  const news = props.news;
  const { description } = news;
  const str = description.slice(1, 150);
  return (
    <div className="latest-news">
      <div>
        <img src={news.img} alt="" />
      </div>
      <div className="news-brief">
        <h6 className="news-name">{news.name}</h6>
        {/* <h6 className="product-price"> ৳ {product.price}</h6> */}
        <p className="news-description">{str}...</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default LatestNews;
