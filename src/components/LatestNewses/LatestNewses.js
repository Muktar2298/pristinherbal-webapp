import React from 'react';
import './LatestNewses.css';
import newses from '../../fakeData/latestNewsData.js';
import LatestNews from '../LatestNews/LatestNews';

const LatestNewses = () => {
  return <div className="latest-newses-container">
  <div className="latest-newses-title">
    <p>Latest News</p>
    {/* TIMER-ADDING */}
    <p>
      <button type="submit">MORE NEWS</button>
    </p>
  </div>
  {/* <hr className="horizontal" /> */}
  <div className="latest-newses">
    {newses.map((news) => (
      <LatestNews key={news.id} news={news}></LatestNews>
    ))}
  </div>
</div>;
};

export default LatestNewses;
