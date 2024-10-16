import React from 'react';
import { Link } from 'react-router-dom';
import './BlankCartPage.scss';

const BlankCartPage = () => {
  return (
    <div className="blank-cart-page">
      <div className="content">
        <img src="path-to-your-image.png" alt="Empty Cart" className="cart-image" />
        <p>Giỏ hàng của bạn còn trống</p>
        <Link to="/products/glasses" className="buy-now-button">
          MUA NGAY
        </Link>
      </div>
    </div>
  );
};

export default BlankCartPage;
