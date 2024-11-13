import React from "react";
import "./AdminSidebar.scss";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2>CHỨC NĂNG HỆ THỐNG</h2>
      <ul>
        <li>Trang chủ</li>
        <li className="active">
          <span>Quản lý sản phẩm</span>
          <ul className="sub-menu">
            <li>Thiết lập</li>
            <li>Danh mục</li>
            <li>Tính năng</li>
            <li>Trạng thái</li>
            <li>Sản phẩm</li>
            <li className="selected">Danh sách sản phẩm</li>
          </ul>
        </li>
        <li>
          <span>Quản lý đơn hàng</span>
          <ul className="sub-menu">
            <li>Tính năng</li>
            <li>Trạng thái</li>
            <li>Đơn hàng</li>
            <li className="selected">Danh sách đơn hàng</li>
          </ul>
        </li>
        <li>
          <span>Quản lý đánh giá</span>
          <ul className="sub-menu">
            <li>Đánh giá</li>
            <li>Trạng thái</li>
            <li>Sản phẩm</li>
            <li className="selected">Danh sách đánh giá</li>
          </ul>
        </li>
        <li>
          <span>Quản lý nhân viên</span>
          <ul className="sub-menu">
            <li>Nhân viên</li>
            <li>Trạng thái</li>
            <li>Sản phẩm</li>
            <li className="selected">Danh sách nhân viên</li>
          </ul>
        </li>
        <li>
          <span>Quản lý nhà cung cấp</span>
          <ul className="sub-menu">
            <li>Nhà cung cấp</li>
            <li>Trạng thái</li>
            <li>Sản phẩm</li>
            <li className="selected">Danh sách đánh giá</li>
          </ul>
        </li>
        <li>
          <span>Quản lý nhà vận chuyển</span>
          <ul className="sub-menu">
            <li>Nhà cung cấp</li>
            <li>Trạng thái</li>
            <li>Sản phẩm</li>
            <li className="selected">Danh sách đánh giá</li>
          </ul>
        </li>
        <li>Đăng xuất</li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
