import React, { useState } from "react";
import "./LensPage.scss";

const LensPage = () => {
  const [sortBy, setSortBy] = useState("default");

  const products = [
    {
      id: 1,
      name: "Tròng kính Chemi U2 Chiết suất 1.67",
      brand: "Chemi",
      price: "Liên hệ ngay",
      img: "path-to-image", // Replace with actual image path
    },
    {
      id: 2,
      name: "Tròng kính Bevis Optical Chiết suất 1.56",
      brand: "Bevis",
      price: "Liên hệ ngay",
      img: "path-to-image", // Replace with actual image path
    },
    // Add more products here
  ];

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    // Implement sort logic based on the value of sortBy
  };

  return (
    <div className="lens-page">
      <div className="filter-section">
        <div className="filter">
          <h3>Thương hiệu</h3>
          <ul>
            <li>
              <input type="checkbox" /> Bevis
            </li>
            <li>
              <input type="checkbox" /> Chemi
            </li>
            <li>
              <input type="checkbox" /> Crizal Rock
            </li>
            <li>
              <input type="checkbox" /> Essilor
            </li>
            <li>
              <input type="checkbox" /> Hoya
            </li>
            <li>
              <input type="checkbox" /> Sky Lens
            </li>
            <li>
              <input type="checkbox" /> Thailand
            </li>
          </ul>
        </div>

        <div className="filter">
          <h3>Tính năng</h3>
          <ul>
            <li>
              <input type="checkbox" /> Đổi màu
            </li>
            <li>
              <input type="checkbox" /> Lọc ánh sáng xanh
            </li>
            <li>
              <input type="checkbox" /> Râm cận
            </li>
            <li>
              <input type="checkbox" /> Siêu mỏng
            </li>
          </ul>
        </div>
      </div>

      <div className="product-section">
        <div className="sort-section">
          <label>Sort By:</label>
          <select value={sortBy} onChange={handleSortChange}>
            <option value="default">Sort By</option>
            <option value="high-to-low">Giá Cao - Thấp</option>
            <option value="low-to-high">Giá Thấp - Cao</option>
            <option value="featured">Nổi bật</option>
          </select>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className="contact-btn">Liên hệ ngay</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LensPage;
