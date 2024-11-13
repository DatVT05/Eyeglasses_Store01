import React, { useState } from "react";
import "./AddProductPage.scss";

const AddProductPage = () => {
  const [productDetails, setProductDetails] = useState({
    productName: "",
    alias: "",
    productCode: "",
    size: "",
    material: "",
    price: "",
    currency: "VND",
    salePrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleSave = () => {
    console.log("Product saved:", productDetails);
  };

  const handleCancel = () => {
    console.log("Cancelled");
  };

  return (
    <div className="add-product-page">
      <h2>Thêm mới sản phẩm</h2>

      <div className="form-group">
        <label>Tên sản phẩm</label>
        <input
          type="text"
          name="productName"
          value={productDetails.productName}
          onChange={handleChange}
          placeholder="Tên sản phẩm"
        />
      </div>

      <div className="form-group">
        <label>Alias</label>
        <input
          type="text"
          name="alias"
          value={productDetails.alias}
          onChange={handleChange}
          placeholder="Alias"
        />
      </div>

      <div className="form-group">
        <label>Mã sản phẩm</label>
        <input
          type="text"
          name="productCode"
          value={productDetails.productCode}
          onChange={handleChange}
          placeholder="Mã sản phẩm"
        />
      </div>

      <div className="form-group">
        <label>Kích thước</label>
        <input
          type="text"
          name="size"
          value={productDetails.size}
          onChange={handleChange}
          placeholder="Kích thước"
        />
      </div>

      <div className="form-group">
        <label>Chất liệu</label>
        <input
          type="text"
          name="material"
          value={productDetails.material}
          onChange={handleChange}
          placeholder="Chất liệu"
        />
      </div>

      <div className="form-group">
        <label>Giá bán</label>
        <input
          type="number"
          name="price"
          value={productDetails.price}
          onChange={handleChange}
          placeholder="Giá bán"
        />
      </div>

      <div className="form-group">
        <label>Đơn vị tính</label>
        <select
          name="currency"
          value={productDetails.currency}
          onChange={handleChange}
        >
          <option value="VND">VND</option>
          <option value="USD">USD</option>
        </select>
      </div>

      <div className="form-group">
        <label>Giá khuyến mãi</label>
        <input
          type="number"
          name="salePrice"
          value={productDetails.salePrice}
          onChange={handleChange}
          placeholder="Giá khuyến mãi"
        />
      </div>

      <div className="action-buttons">
        <button className="save-button" onClick={handleSave}>
          Lưu lại
        </button>
        <button className="cancel-button" onClick={handleCancel}>
          Quay lại
        </button>
      </div>
    </div>
  );
};

export default AddProductPage;
