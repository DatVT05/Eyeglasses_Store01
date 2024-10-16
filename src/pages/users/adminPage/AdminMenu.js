import React from 'react';
import { Link } from 'react-router-dom';
import './AdminMenu.scss';

const AdminMenu = () => {
    return (
        <div className="admin-menu">
            <h3>Quản lý hệ thống</h3>
            <ul>
                <li><Link to="/admin/products">Sản phẩm</Link></li>
                <li><Link to="/admin/suppliers">Nhà cung cấp</Link></li>
                <li><Link to="/admin/promotions">Khuyến mãi</Link></li>
                {/* Thêm các mục khác ở đây */}
            </ul>
        </div>
    );
};

export default AdminMenu;
