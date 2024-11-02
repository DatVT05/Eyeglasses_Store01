import React from "react";
import "./PaymentPolicyPage.scss"; 
import { Link } from "react-router-dom";
const PaymentPolicyPage = () => {
    return (
        <div className="container">
<div className="payment-policy-page">
            <div className="policy-content">
                <h1>Chính sách thanh toán</h1>
                <ul>
                    <li>Giao hàng tận nơi và được kiểm tra hàng trước khi thanh toán.</li>
                    <li>Khách hàng có thanh toán chuyển khoản hoặc thanh toán sau khi nhận hàng.</li>
                    <li>Với những đơn cắt cận, quý khách vui lòng chuyển khoản cọc trước 50% – 100% tổng giá trị đơn hàng.</li>
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

export default PaymentPolicyPage;
