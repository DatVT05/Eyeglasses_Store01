import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems] = useState(0);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header className="main-header">
      <div className="main-header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xs-12 col-md-8 text-left">
              <p className="font-weight-bold">
                <Link to="">KING'S EYEGLASSES</Link>
              </p>
            </div>
            <div className="col-xs-12 col-md-4 text-right">
              <nav className="header-icons">
                <ul className="nav-icons">
                  <li className="rounded">
                    <Link to="/policy/warranty">Chính sách</Link>
                  </li>
                  <li className="rounded">
                    <Link to="/loginpage">
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

      <div className="header-menu-top">
        <ul className="nav-menu">
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
                <Link to="/products/sunglasses">Phụ kiện</Link>
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
            <Link to="/promotions">Ưu đãi</Link>
          </li>
          <li className="nav-item">
            <Link to="/comment">Khách hàng</Link>
          </li>
          <li className="nav-item">
            <Link to="/track-order" style={{ textDecoration: "none" }}>
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
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-badge">{cartItems}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
