import { memo } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { CiSearch, CiShoppingBasket } from "react-icons/ci"; // Importing icons

const Header = () => {
  return (
    <header className="main-header">
  <div className="container">
    <div className="row align-items-center">
      {/* Logo */}
      <div className="col-lg-3 col-md-3 col-sm-3 col-12 text-left">
        <Link to="/" className="logo">
          <img className="img-fluid" src="/path-to-your-logo.png" alt="KING EYEWEAR" />
        </Link>
      </div>

      {/* Navigation */}
      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <nav className="nav-menu">
          <ul className="menu">
            <li><Link to="/san-pham">Sản phẩm</Link></li>
            <li><Link to="/best-seller">Best seller</Link></li>
            <li><Link to="/dich-vu">Dịch vụ</Link></li>
            <li><Link to="/uu-dai">Ưu đãi</Link></li>
            <li><Link to="/goc-lily">Góc Lily</Link></li>
            <li><Link to="/khach-hang">Khách hàng</Link></li>
            <li><Link to="/tra-cuu-don">Tra cứu đơn</Link></li>
          </ul>
        </nav>
      </div>

      {/* Icons */}
      <div className="col-lg-3 col-md-3 col-sm-3 col-12 text-right header-icons">
        <span className="search-icon">
          <CiSearch size={24} />
        </span>
        <span className="cart-icon">
          <CiShoppingBasket size={24} />
          <span className="cart-count">0</span>
        </span>
      </div>
    </div>
  </div>
</header>
  );
};

export default memo(Header);
