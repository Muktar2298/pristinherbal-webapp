import React from 'react';
import './LatestNews.css';
import { FaStar } from 'react-icons/fa';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LatestNews = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

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
        <button onClick={() => setModalShow(true)}>Read More</button>
      </div>
      <div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          news={news}
        />
      </div>
    </div>
  );
};

export default LatestNews;

function MyVerticallyCenteredModal(props) {
  const { name, img, description } = props.news;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <div>
          <img src={img} alt=""  />
        </div>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          {name}
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <h4>{name}</h4>
        <p>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        <button className='modal-btn' onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}
