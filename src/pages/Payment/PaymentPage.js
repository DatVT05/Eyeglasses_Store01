import React, { useState } from "react";
import "./PaymentPage.scss"; // SCSS file for styling

const PaymentPage = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // Countdown of 30 minutes

  // Mock order data
  const order = {
    supplier: "Kính Mắt Lily",
    partnerCode: "2332",
    orderValue: 211864,
  };

  // Countdown logic (optional)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="supplier-info">
          <p>Nhà cung cấp: {order.supplier}</p>
          <p>Mã đối tác: {order.partnerCode}</p>
          <p>Giá trị đơn hàng: {order.orderValue.toLocaleString()} VND</p>
        </div>

        <div className="payment-form">
          <h3>NHẬP THÔNG TIN THẺ ({formatTime(timeLeft)})</h3>
          <form>
            <div className="form-group">
              <label htmlFor="cardNumber">Số thẻ ATM</label>
              <input type="text" id="cardNumber" placeholder="Số thẻ ATM" required />
            </div>
            <div className="form-group">
              <label htmlFor="cardHolder">Tên chủ thẻ</label>
              <input type="text" id="cardHolder" placeholder="Tên chủ thẻ" required />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Ngày hiệu lực (MM/YY)</label>
              <input type="text" id="expiryDate" placeholder="MM/YY" required />
            </div>
            <p className="policy-text">
              Với việc bấm nút thanh toán, tôi đồng ý với chính sách bảo mật thông tin cá nhân của VTC Pay
            </p>
            <div className="form-buttons">
              <button type="button" className="back-button">QUAY LẠI</button>
              <button type="submit" className="pay-button">THANH TOÁN</button>
            </div>
          </form>
        </div>

        <div className="qr-code-section">
          <img src="path-to-your-qr-code-image" alt="QR Code" className="qr-code" />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
