import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import ProductTable from "./ProductTable";
import "./AdminProductPage.scss";
import AddProductPage from "./AddProductPage";

const AdminProductPage = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleAddProductClick = () => {
    setShowAddProduct(true); 
  };

  const handleCloseAddProduct = () => {
    setShowAddProduct(false); 
  };

  return (
    <div className="admin-page">
      <AdminSidebar />
      <div className="admin-content">
        <h1>Danh sách sản phẩm</h1>
        <div className="product-management">
          <div className="top-bar">
            <input
              type="text"
              placeholder="Nhập từ khóa tìm kiếm"
              className="search-bar"
            />
            <select>
              <option>Chủ đề (Tất cả)</option>
            </select>
            <select>
              <option>Sắp xếp (Mặc định)</option>
            </select>
            <button className="btn">Cập nhật</button>
            <button className="btn add-new" onClick={handleAddProductClick}>
              + Thêm mới
            </button>
          </div>
          <ProductTable />
        </div>

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
    </div>
  );
};

export default AdminProductPage;
