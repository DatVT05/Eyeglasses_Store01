import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.scss";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with:", { username, password, rememberMe });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Đăng nhập</h2>
        <p>Hãy đăng nhập để được hưởng đặc quyền riêng dành cho bạn</p>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">TÀI KHOẢN *</label>
            <input
              type="text"
              id="username"
              placeholder="Nhập tài khoản"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">MẬT KHẨU *</label>
            <input
              type="password"
              id="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Lưu tài khoản</label>
          </div>
          <button type="submit" className="login-button">
            Đăng nhập
          </button>
          <div className="forgot-password">
            <Link to="/forgot-password">Quên mật khẩu?</Link>
          </div>
          <div className="social-login">
            <button className="google-login">
              <FaGoogle className="google-icon" />
              Đăng nhập bằng <span>Google</span>
            </button>
          </div>
        </form>
        <div className="register-link">
          <p>Bạn chưa có tài khoản?</p>
          <Link to="/register">Đăng ký ngay</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
