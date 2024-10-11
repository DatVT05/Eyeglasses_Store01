import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const MainHeaderTop = () => {
  return (
    <div className="main-header-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xs-12 col-md-8 text-left">
            <span>GIẢM NGAY 15% CHO ĐƠN HÀNG ĐẦU TIÊN</span>
          </div>
          <div className="col-xs-12 col-md-4 text-right">
            <nav className="header-icons">
              <ul className="nav-icons">
                <li className="rounded">
                  <Link to="/chinh-sach">Chính sách</Link>
                </li>
                <li className="rounded">
                  <Link to="/tai-khoan">
                    <AiOutlineUser />
                    Tài khoản
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeaderMenuTop = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems] = useState(0);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="header-menu-top">
      <ul className="nav-menu">
        <li className="nav-item">
          Sản phẩm
          <ul className="dropdown">
            <li><Link to="/san-pham/gong-kinh-can">Gọng kính cận</Link></li>
            <li><Link to="/san-pham/trong-kinh">Tròng kính</Link></li>
            <li><Link to="/san-pham/phu-kien">Phụ kiện</Link></li>
          </ul>
        </li>
        <li className="nav-item">Best seller</li>
        <li className="nav-item">
          Dịch vụ
          <ul className="dropdown">
            <li><Link to="/dich-vu/bao-hanh">Chính sách bảo hành</Link></li>
            <li><Link to="/dich-vu/doi-tra">Đổi trả trong 30 ngày</Link></li>
            <li><Link to="/dich-vu/thu-cu-doi-moi">Thu Cũ - Đổi Mới</Link></li>
          </ul>
        </li>
        <li className="nav-item">Ưu đãi</li>
        <li className="nav-item">Khách hàng</li>
        <li className="nav-item">Tra cứu đơn</li>
      </ul>
      <div className="icons">
        <div className="search-container">
          <FontAwesomeIcon
            icon={faSearch}
            className="icon search-icon"
            onClick={toggleSearch}
          />
          {showSearch && (
            <div className="search-bar">
              <input type="text" placeholder="Nhập tên sản phẩm..." />
            </div>
          )}
        </div>
        <div className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-badge">{cartItems}</span>
        </div>
      </div>
    </div>
  );
};

// Combined Header Component
const Header = () => {
  return (
    <header className="main-header">
      <MainHeaderTop />
      <HeaderMenuTop />
    </header>
  );
};

export default memo(Header);
