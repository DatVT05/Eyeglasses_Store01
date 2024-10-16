import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AdminLogin.scss';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === 'admin123') {
            navigate('/admin/dashboard');
        } else {
            setError('Tên đăng nhập hoặc mật khẩu không chính xác!');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Đăng Nhập Admin</h2>
                {error && <p className="error">{error}</p>}
                <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Đăng nhập</button>
            </form>
        </div>
    );
};

export default AdminLogin;
