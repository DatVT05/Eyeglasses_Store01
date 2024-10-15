import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.scss";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handleQuantityChange = (e) => {
    const value = Math.max(1, e.target.value);
    setQuantity(value);
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCheckout = () => {
    if (paymentMethod === "atm" || paymentMethod === "creditCard") {
      navigate("/payment");
    } else {
      alert("Thanh toán trực tiếp khi nhận hàng sẽ được xử lý!");
    }
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="customer-details">
          <h2>Thông tin khách hàng</h2>
          <form className="customer-info">
            <div className="form-group">
              <label>Họ và tên *</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Số điện thoại *</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" required />
            </div>
          </form>

          <h2>Địa chỉ giao hàng</h2>
          <form className="shipping-address">
            <div className="form-group">
              <label>Tỉnh / Thành phố *</label>
              <select required>
                <option value="">Select...</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                <option value="Phường">Phường</option>
                <option value="Bắc Cạn">Bắc Cạn</option>
                <option value="Hà Giang">Hà Giang</option>
                <option value="Nam Định">Nam Định</option>
              </select>
            </div>
            <div className="form-group">
              <label>Quận / Huyện *</label>
              <select required>
                <option value="">Select...</option>
                <option value="">Select...</option>
                <option value="Quận Đống Đa">Quận Đống Đa</option>
                <option value="Huyện Thường Tín">Huyện Thường Tín</option>
                <option value="Huyện Thanh Xuân">Huyện Thanh Xuân</option>
                <option value="Quận Hoàn Kiếm">Quận Hoàn Kiếm</option>
                <option value="Huyện Tây Hồ">Huyện Tây Hồ</option>
              </select>
            </div>
            <div className="form-group">
              <label>Phường / Xã *</label>
              <select required>
                <option value="">Select...</option>
                <option value="">Select...</option>
                <option value="Phường Văn Miếu">Phường Văn Miếu</option>
                <option value="Phường Văn Chương">Phường Văn Chương</option>
                <option value="Phường Quốc Tử Giám">Phường Quốc Tử Giám</option>
                <option value="Phường Ô Chợ Dừa">Phường Ô Chợ Dừa</option>
                <option value="Phường Cát Linh">Phường Cát Linh</option>
              </select>
            </div>
            <div className="form-group">
              <label>Địa chỉ *</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Ghi chú</label>
              <textarea placeholder="Ghi chú cho đơn hàng..."></textarea>
            </div>
          </form>
        </div>

        <div className="order-summary">
          <h2>Đơn hàng</h2>
          <div className="order-item">
            <img src="path-to-image" alt="Product" className="product-image" />
            <div className="product-info">
              <h3>Kính Râm Lily KC320 - Trắng</h3>
              <div className="quantity">
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </div>
              <p className="price">180.000 ₫</p>
            </div>
            <button className="remove-item">🗑️</button>
          </div>

          <label>Nhập mã khuyến mãi</label>
          <input type="text" placeholder="Mã khuyến mãi" />
          <button className="apply-code">Sử dụng</button>
          <div className="summary-details">
            <p>Đơn hàng: 180.000 ₫</p>
            <p>Khuyến mãi: 0 ₫</p>
            <p>Ship: 30.000 ₫</p>
            <p className="total">Tổng đơn: 210.000 ₫</p>
          </div>

          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="payment"
                value="cash"
                onChange={handlePaymentChange}
              />{" "}
              Thanh toán trực tiếp khi nhận hàng
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="atm"
                onChange={handlePaymentChange}
              />{" "}
              Thanh toán bằng thẻ ATM nội địa / Internet Banking
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="creditCard"
                onChange={handlePaymentChange}
              />{" "}
              Thanh toán bằng thẻ quốc tế Visa/ Master/ JCP
            </label>
          </div>

          <button className="checkout-button" onClick={handleCheckout}>
            Đặt hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
