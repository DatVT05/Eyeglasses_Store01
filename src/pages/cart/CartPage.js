import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderItem from "component/card/OrderItem";
import "./CartPage.scss";

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const shippingFee = 30000;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal - subtotal * discount + shippingFee;

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleApplyPromo = () => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
      alert("Mã khuyến mãi không hợp lệ");
    }
  };

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert("Vui lòng chọn phương thức thanh toán");
      return;
    }
    navigate("/checkout");
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
              </select>
            </div>
            <div className="form-group">
              <label>Quận / Huyện *</label>
              <select required>
                <option value="">Select...</option>
                <option value="Quận 1">Quận 1</option>
                <option value="Quận 2">Quận 2</option>
                <option value="Quận 3">Quận 3</option>
              </select>
            </div>
            <div className="form-group">
              <label>Phường / Xã *</label>
              <select required>
                <option value="">Select...</option>
                <option value="Phường A">Phường A</option>
                <option value="Phường B">Phường B</option>
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

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <OrderItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))
          ) : (
            <p>Bạn không có sản phẩm nào.</p>
          )}

          <label>Nhập mã khuyến mãi</label>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Mã khuyến mãi"
          />
          <button onClick={handleApplyPromo}>Sử dụng</button>

          <div className="summary-details">
            <p>Đơn hàng: {subtotal.toLocaleString()} ₫</p>
            <p>Khuyến mãi: {(subtotal * discount).toLocaleString()} ₫</p>
            <p>Ship: {shippingFee.toLocaleString()} ₫</p>
            <p className="total">Tổng đơn: {total.toLocaleString()} ₫</p>
          </div>

          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="payment"
                value="cash"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />{" "}
              Thanh toán trực tiếp khi nhận hàng
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="atm"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />{" "}
              Thanh toán bằng thẻ ATM
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="creditCard"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />{" "}
              Thanh toán bằng thẻ quốc tế Visa/Master/JCP
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

export default Cart;
