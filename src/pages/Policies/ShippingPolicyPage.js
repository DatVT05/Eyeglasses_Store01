import React from "react";
import "./ShippingPolicyPage.scss"; // Create this file for custom styles
import { Link } from "react-router-dom";
const ShippingPolicyPage = () => {
  return (
    <div className="container">
      <div className="shipping-policy-page">
        <div className="policy-content">
          <h1>Chính sách giao hàng</h1>
          <ul>
            <li>
              Thời gian giao hàng dao động từ 2-4 ngày đối với đơn gọng kính,
              3-5 ngày đối với đơn cắt cận.
            </li>
          </ul>
        </div>
      </div>
      <div className="feature">
        <Link to="/policy/warranty" className="feature-item">
          <span className="icon">💠</span>
          <span>Bảo hành trọn đời</span>
        </Link>
        <Link to="/do-mat-mien-phi" className="feature-item">
          <span className="icon">🌱</span>
          <span>Đo mắt miễn phí</span>
        </Link>
        <Link to="/policy/exchange" className="feature-item">
          <span className="icon">♻️</span>
          <span>Thu cũ đổi mới</span>
        </Link>
        <Link to="/policy/cleaning" className="feature-item">
          <span className="icon">🧼</span>
          <span>Vệ sinh và bảo quản kính</span>
        </Link>
      </div>
    </div>
  );
};

export default ShippingPolicyPage;
