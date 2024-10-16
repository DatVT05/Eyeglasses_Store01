import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import './AdminDashboard.scss'; 

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <AdminMenu />
            <div className="admin-content">
                <Outlet /> 
            </div>
        </div>
    );
};

export default AdminDashboard;
