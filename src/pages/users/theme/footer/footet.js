import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>King's</h2>
            <p>Đăng kí để nhận tin mới nhất</p>
            <div className="subscription-form">
              <input type="email" placeholder="Để lại email của bạn" />
              <button>➔</button>
            </div>
            <div className="social-media">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaTiktok className="icon" />
              <FaYoutube className="icon" />
            </div>
          </div>
          <div className="footer-links">
            <h3>Sản Phẩm</h3>
            <Link to="/products/glasses">Gọng Kính</Link>
            <Link to="/products/lens">Tròng Kính</Link>
            <Link to="/products/accessory">Phụ kiện</Link>
          </div>
          <div className="footer-links">
            <h3>Thông Tin Liên Hệ</h3>
            <p>190005951</p>
            <p>marketing@kingseyewear.com</p>
          </div>
          <div className="footer-links">
            <h3>Chính Sách Mua Hàng</h3>
            <Link to="/policy/payment">Hình thức thanh toán</Link>
            <Link to="/policy/shipping">Chính sách giao hàng</Link>
            <Link to="/policy/warranty">Chính sách bảo hành</Link>
          </div>
          <div className="footer-legal">
            <p>MST: 0209206036</p>
            <img
              src="/public/images/verified-stamp.jpg"
              alt="Verified"
              className="verified-badge"
            />
          </div>
        </div>
        <div className="footer-bottom">
          <p>King © 2019 - 2024. Design by Viet Nam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
