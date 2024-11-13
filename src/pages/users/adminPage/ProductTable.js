import React, { useState } from 'react';
import './ProductTable.scss';
import AddProductPage from "./AddProductPage";

const ProductTable = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);

  const products = [
    { id: 1, name: 'Loa', price: '500,000 VND', featured: 'SP mới', visible: true },
    { id: 2, name: 'Super White No.64', price: '750,000 VND', featured: 'SP mới', visible: true },
    { id: 3, name: 'Áo Thun Nam', price: '150,000 VND', featured: 'SP mới', visible: true },
  ];

  const handleAddProductClick = () => {
    setShowAddProduct(true);
  };

  const handleCloseAddProduct = () => {
    setShowAddProduct(false);
  };

  return (
    <div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Xóa</th>
            <th>Stt</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Đặc điểm</th>
            <th>Tiêu biểu</th>
            <th>Hiển thị</th>
            <th>Tác vụ</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td><input type="checkbox" /></td>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td><img src="path-to-image.jpg" alt="Product" width="50" /></td>
              <td>{product.featured}</td>
              <td>
                <select>
                  <option>SP mới</option>
                  <option>Không tác dụng</option>
                </select>
              </td>
              <td><input type="checkbox" checked={product.visible} readOnly /></td>
              <td>
                <button className="btn edit" onClick={handleAddProductClick}>Edit</button>
                <button className="btn delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <AddProductPage />
            <button className="close-modal" onClick={handleCloseAddProduct}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
