import React, { useState } from "react";
import "./ProductInfo.scss";

const ProductInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const incrementQuantity = () => setQuantity(quantity + 1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-info">
      <p className="breadcrumb">Trang chủ / GỌNG KÍNH CAO CẤP KIM LOẠI</p>

      <div className="product-container">
        <div className="product-image">
          <img src="path-to-image.jpg" alt="Product" />
          <div className="thumbnail-list">
            <img src="path-to-thumbnail-1.jpg" alt="Thumbnail 1" />
            <img src="path-to-thumbnail-2.jpg" alt="Thumbnail 2" />
            <img src="path-to-thumbnail-3.jpg" alt="Thumbnail 3" />
          </div>
          <p className="product-code">68030</p>
        </div>

        <div className="product-details">
          <h1>KÍNH KIM LOẠI LILY 68030</h1>
          <p className="product-price">590.000 ₫</p>

          <div className="product-specs">
            <p>THÔNG TIN GỌNG KÍNH</p>
            <ul>
              <li>* Thương Hiệu: LILY</li>
              <li>* Mã sản phẩm: C-KL-TT-68030</li>
              <li>* Thông tin kỹ thuật số: -14.3~-4.9:1.8</li>
              <li>* Chất liệu: Kim loại</li>
              <li>* Giá sản phẩm: 590000 VNĐ</li>
              <li>* Xuất xứ: Trung Quốc</li>
            </ul>
          </div>

          <div className="product-options">
            <div className="color-options">
              <label>Màu sắc:</label>
              <button>Trắng</button>
              <button>Đen</button>
              <button>Vàng</button>
              <button>Đen trắng</button>
            </div>

            <div className="quantity-selector">
              <label>Số lượng</label>
              <button onClick={decrementQuantity}>-</button>
              <input type="text" value={quantity} readOnly />
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart">THÊM VÀO GIỎ HÀNG</button>
            <button className="buy-now">MUA NGAY</button>
          </div>

          <button className="special-privilege" onClick={handleModalToggle}>
            ĐẶC QUYỀN MUA SẢN PHẨM TẠI KING'S
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalToggle}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>ĐẶC QUYỀN KHI MUA SẢN PHẨM TẠI KING'S</h2>
            <ul>
              <li>Miễn phí đổi mới 3 tháng - nếu có lỗi từ NSX</li>
              <li>1 lần thay đổi độ kính miễn phí trong vòng 1 tháng</li>
              <li>Miễn phí vệ sinh, thay ốc, điều chỉnh gọng kính</li>
              <li>Đo mắt và kiểm tra thị lực miễn phí</li>
            </ul>
            <button className="close-button" onClick={handleModalToggle}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
