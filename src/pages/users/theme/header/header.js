import { memo } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import "./header.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

const MainHeaderTop = () => {
  return (
    <div className="main-header-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xs-12 col-md-8 text-left">
            <span>GIẢM NGAY 15% CHO ĐƠN HÀNG ĐẦU TIÊN</span>
          </div>
          <div className="col-xs-6 col-md-4 text-right header-icons">
            <div className="col-lg-3 items-center">
              <nav>
                <ul className="col-lg-3">
                  <li className="rounded">
                    <Link to="/chinh-sach">Chính sách</Link>
                  </li>
                  <li className="rounded">
                    <Link to="/tra-cuu-don-hang">Tra cứu đơn hàng</Link>
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
    </div>
  );
};

const HeaderMenuTop = () => {
  return (
    <div className="header-menu-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header_logo">
              <h1>King's Wear</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <div>MENUS</div>
          </div>
          <div className="col-xl-3">
            <ul>
              <li>
                <Link to="#">
                  <AiOutlineShoppingCart />
                </Link>
              </li>
            </ul>
          </div>
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
