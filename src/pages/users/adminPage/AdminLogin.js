import React, { useState } from "react";
import "./AdminLogin.scss";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login functionality here (e.g., API call)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="admin-login">
      <div className="login-container">
        <h1>LOGIN AS ADMIN</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">PASSWORD</label>
          <div className="password-input">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="show-password"
              onClick={() =>
                document.getElementById("password").type === "password"
                  ? (document.getElementById("password").type = "text")
                  : (document.getElementById("password").type = "password")
              }
            >
              👁️
            </button>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <a href="/" className="back-link">
          &larr; back to homepage
        </a>
      </div>
    </div>
  );
};

export default AdminLogin;
