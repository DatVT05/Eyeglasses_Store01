import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
//import { ROUTERS } from "./src/utils/router";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Link to="/bao-hanh" className="feature-item">
            <span className="icon">💠</span>
            <span>Bảo hành trọn đời</span>
          </Link>
          <Link to="/do-mat-mien-phi" className="feature-item">
            <span className="icon">🌱</span>
            <span>Đo mắt miễn phí</span>
          </Link>
          <Link to="/thu-cu-doi-moi" className="feature-item">
            <span className="icon">♻️</span>
            <span>Thu cũ đổi mới</span>
          </Link>
          <Link to="/ve-sinh-bao-quan" className="feature-item">
            <span className="icon">🧼</span>
            <span>Vệ sinh và bảo quản kính</span>
          </Link>
        </div>
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
            <Link to="/san-pham/gong-kinh">Gọng Kính</Link>
            <Link to="/san-pham/trong-kinh">Tròng Kính</Link>
            <Link to="/san-pham/kinh-ram">Kính râm</Link>
            <Link to="/san-pham/kinh-ram-tre-em">Kính râm trẻ em</Link>
          </div>
          <div className="footer-links">
            <h3>Thông Tin Liên Hệ</h3>
            <p>190005951</p>
            <p>marketing@kingswear.com</p>
          </div>
          <div className="footer-links">
            <h3>Chính Sách Mua Hàng</h3>
            <Link to="">Hình thức thanh toán</Link>
            <Link to="">Chính sách giao hàng</Link>
            <Link to="">Chính sách bảo hành</Link>
          </div>
          <div className="footer-legal">
            <p>MST: 0209206036</p>
            <img
              src="path-to-verified-image.png"
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
