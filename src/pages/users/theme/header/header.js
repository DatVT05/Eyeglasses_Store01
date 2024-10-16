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
                  <Link to="/policy/warranty">Chính sách</Link>
                </li>
                <li className="rounded">
                  <Link to="/login">
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
          <Link
            to="/homepage"
            style={{ textDecoration: "none", color: "3d3d3d" }}
          ><span>KING'S</span></Link>
        </li>
        <li className="nav-item">
          Sản phẩm
          <ul className="dropdown">
            <li>
              <Link to="/products/glasses">Gọng kính cận</Link>
            </li>
            <li>
              <Link to="/products/lens">Tròng kính</Link>
            </li>
            <li>
              <Link to="/products/sunglasses">Kính râm</Link>
            </li>
            <li>
              <Link to="/products/sunglasseskid">Kính râm trẻ em</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">Best seller</li>
        <li className="nav-item">
          Dịch vụ
          <ul className="dropdown">
            <li>
              <Link to="/policy/warranty">Chính sách bảo hành</Link>
            </li>
            <li>
              <Link to="/policy/return">Đổi trả trong 30 ngày</Link>
            </li>
            <li>
              <Link to="/policy/exchange">Thu Cũ - Đổi Mới</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link
            to="/promotions"
            style={{ textDecoration: "none", color: "3d3d3d" }}
          >
            Ưu đãi
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/comment"
            style={{ textDecoration: "none", color: "3d3d3d" }}
          >
            Đánh giá
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/order/track_order" style={{ textDecoration: "none" }}>
            Tra cứu đơn
          </Link>
        </li>
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
          <Link to="/cart/blankcart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <span className="cart-badge">{cartItems}</span>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="main-header">
      <MainHeaderTop />
      <HeaderMenuTop />
    </header>
  );
};

export default memo(Header);
