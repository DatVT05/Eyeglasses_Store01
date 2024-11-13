import React from "react";
import './OrderStatus.scss';

const orderDetails = {
  orderId: "cok07",
  date: "21/12/2017 17:10",
  contactPerson: "Liên hệ Lan",
  phone: "0967472490",
  customer: "Lan",
  customerPhone: "0868080966",
  deliveryAddress: "Địa chỉ văn phòng",
  taxCode: "123456789", 
  methodOfPayment: "Thanh toán khi nhận hàng", 
  invoiceNumber: "HD123456", 
  deliveryDate: "Ngày 25/12/2017", 
  startDate: "22/12/2017", 
  endDate: "30/12/2017", 
  status: 2,
};

const OrderStatus = () => {
  return (
    <div className="order-status-page">
      <div className="order-info">
        <div className="order-header">
          <h3>Thông tin đơn hàng</h3>
        </div>
        <div className="order-details">
          <div>
            <p><strong>Mã đơn hàng: </strong>{orderDetails.orderId}</p>
            <p><strong>Ngày đặt: </strong>{orderDetails.date}</p>
            <p><strong>Tên người liên hệ: </strong>{orderDetails.contactPerson}</p>
            <p><strong>Số điện thoại: </strong>{orderDetails.phone}</p>
            <p><strong>Ghi chú: </strong>Không có</p>
          </div>
          <div>
            <p><strong>Khách hàng: </strong>{orderDetails.customer}</p>
            <p><strong>Điện thoại: </strong>{orderDetails.customerPhone}</p>
            <p><strong>Địa chỉ giao hàng: </strong>{orderDetails.deliveryAddress}</p>
            <p><strong>Mã số thuế: </strong>{orderDetails.taxCode}</p>
          </div>
        </div>

        <div className="additional-info">
          <div>
            <p><strong>Số HĐ: </strong>{orderDetails.invoiceNumber}</p>
            <p><strong>Ngày bắt đầu: </strong>{orderDetails.startDate}</p>
            <p><strong>Ngày kết thúc: </strong>{orderDetails.endDate}</p>
          </div>
          <div>
            <p><strong>Phương thức TT: </strong>{orderDetails.methodOfPayment}</p>
            <p><strong>Ngày giao hàng: </strong>{orderDetails.deliveryDate}</p>
          </div>
        </div>
      </div>

      <div className="order-status">
        <h3>Trạng thái đơn hàng</h3>
        <div className="status-bar">
          <div className={`status-step ${orderDetails.status >= 1 ? "active" : ""}`}>
            <span className="step-number">1</span>
            <p>Chưa xác nhận</p>
          </div>
          <div className={`status-step ${orderDetails.status >= 2 ? "active" : ""}`}>
            <span className="step-number">2</span>
            <p>Đã xác nhận</p>
          </div>
          <div className={`status-step ${orderDetails.status >= 3 ? "active" : ""}`}>
            <span className="step-number">3</span>
            <p>Đã giao</p>
          </div>
          <div className={`status-step ${orderDetails.status >= 4 ? "active" : ""}`}>
            <span className="step-number">4</span>
            <p>Đã hủy</p>
          </div>
          <div className={`status-step ${orderDetails.status >= 5 ? "active" : ""}`}>
            <span className="step-number">5</span>
            <p>Trả về</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
