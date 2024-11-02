import React from "react";
import "./ExchangePolicyPage.scss";
import { Link } from "react-router-dom";
const ExchangePolicyPage = () => {
  return (
    <div className="container">
      <div className="exchange-policy-page">
        <h1>Dịch Vụ Đổi Cũ - Lấy Mới</h1>
        <p>
          Thay vì bỏ ra một số tiền lớn để mua kính mới với dịch vụ "Thu Cũ Đổi
          Mới" -<strong>GIẢM 10%</strong> đơn hàng kính mắt của Lilyeyewear, quý
          khách hàng sẽ được hỗ trợ thu lại kính mắt cũ với giá cực kỳ ưu đãi và
          tiết kiệm chi phí nhất.
        </p>
        <p>
          Mắt kính đeo lâu ngày gặp nhiều tình trạng khiến bạn khó chịu như bị
          mờ gây khó chịu và ảnh hưởng sức khỏe của mắt.
        </p>
        <p>
          Đặc biệt các bệnh về mắt là nguy cơ tiềm tàng gây nên ung thư về mắt,
          gây ảnh hưởng đến cuộc sống và sức khỏe của người dùng. Đây là lý do
          một số hãng tròng kính nổi tiếng chỉ bảo hành tròng kính thời gian 6
          tháng (hoặc 1 năm).
        </p>

        <h2>Các trường hợp được tham gia:</h2>
        <ul>
          <li>Tròng kính bị trầy xước.</li>
          <li>Kính nhòe, mờ, nhức mỏi mắt.</li>
          <li>Tròng kính cũ nhìn không rõ do tăng độ.</li>
          <li>Tròng kính sử dụng lâu ngày bị ố vàng do tia UV.</li>
          <li>
            Tròng chất lượng thấp không giảm phản quang, không chống UV, dễ bám
            bẩn nước.
          </li>
          <li>Kính bị gãy, hỏng và các vấn đề liên quan đến gọng kính.</li>
        </ul>

        <h2>Đối tượng được áp dụng:</h2>
        <ul>
          <li>
            Tất cả các khách hàng đã và đang sử dụng kính mắt gặp vấn đề về gọng
            kính.
          </li>
          <li>
            Kính quá cũ muốn thay đổi kính mới hoặc đổi lên kính cao cấp hơn.
          </li>
          <li>
            Không phân biệt người già hay trẻ, là nam hay nữ, không phân biệt độ
            tuổi đang đeo kính.
          </li>
          <li>Các bạn trẻ thích đổi mới.</li>
        </ul>

        <h2>Tham gia nhận được ưu đãi gì?</h2>
        <ul>
          <li>Giảm 10% kính cho gọng đổi.</li>
          <li>Được bảo hành kính tròng 6 tháng với trợ đổi trong 30 ngày.</li>
          <li>Được tặng full toàn bộ phụ kiện đi kèm.</li>
          <li>Được cắt và đo mắt miễn phí tại hệ thống kính mắt Lily.</li>
        </ul>

        <h2>Cách thức tham gia</h2>
        <ol>
          <li>
            Liên hệ tới hotline 1900.638.096 hoặc gửi tin nhắn cho LILY qua
            fanpage Kính Mắt Lily hoặc email:
            <strong>cskh@kinhmatking.com</strong> để nhận hướng dẫn chi tiết.
          </li>
          <li>
            Mang sản phẩm đổi tới điểm mua hàng, hoặc đóng gói sản phẩm gửi tới
            địa điểm được hướng dẫn.
          </li>
        </ol>
      </div>
      <div className="feature">
        <Link to="/policy/warranty" className="feature-item">
          <span className="icon">💠</span>
          <span>Bảo hành trọn đời</span>
        </Link>
        <Link to="/do-mat-mien-phi" className="feature-item">
          <span className="icon">🌱</span>
          <span>Đo mắt miễn phí</span>
        </Link>
        <Link to="/policy/exchange" className="feature-item">
          <span className="icon">♻️</span>
          <span>Thu cũ đổi mới</span>
        </Link>
        <Link to="/policy/cleaning" className="feature-item">
          <span className="icon">🧼</span>
          <span>Vệ sinh và bảo quản kính</span>
        </Link>
      </div>
    </div>
  );
};

export default ExchangePolicyPage;
