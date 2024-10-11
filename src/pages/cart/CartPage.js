import React, { useState } from "react";
import "./CartPage.scss";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, e.target.value);
    setQuantity(value);
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* Left Column */}
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
                {/* Add options for cities */}
              </select>
            </div>
            <div className="form-group">
              <label>Quận / Huyện *</label>
              <select required>
                <option value="">Select...</option>
                {/* Add options for districts */}
              </select>
            </div>
            <div className="form-group">
              <label>Phường / Xã *</label>
              <select required>
                <option value="">Select...</option>
                {/* Add options for wards */}
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

        {/* Right Column */}
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
              <input type="radio" name="payment" /> Thanh toán trực tiếp khi nhận hàng
            </label>
            <label>
              <input type="radio" name="payment" /> Thanh toán bằng thẻ ATM nội địa / Internet Banking
            </label>
            <label>
              <input type="radio" name="payment" /> Thanh toán bằng thẻ quốc tế Visa/ Master/ JCP
            </label>
          </div>
          <button className="checkout-button">Đặt hàng</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
