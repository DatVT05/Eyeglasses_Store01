import React, { useState } from 'react';
import './OrderTrackingPage.scss';

const OrderTrackingPage = () => {
  const [orderCode, setOrderCode] = useState('');
  const [email, setEmail] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState('');

  const handleOrderTracking = (e) => {
    e.preventDefault();
    // Handle the order tracking logic
  };

  return (
    <div className="order-tracking-page">
      <h2>KIỂM TRA ĐƠN HÀNG</h2>
      <p>Kiểm tra tình trạng đơn hàng của bạn</p>
      <form onSubmit={handleOrderTracking}>
        <div className="form-group">
          <label>Mã đơn hàng *</label>
          <input
            type="text"
            value={orderCode}
            onChange={(e) => setOrderCode(e.target.value)}
            placeholder="Mã đơn hàng"
            required
          />
        </div>
        <div className="form-group">
          <label>Email thanh toán *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email thanh toán"
            required
          />
        </div>
        <button type="submit">Theo dõi</button>
      </form>

      {error && <p className="error">{error}</p>}
      {orderDetails && (
        <div className="order-details">
          {/* Render order details here */}
        </div>
      )}
    </div>
  );
};

export default OrderTrackingPage;
