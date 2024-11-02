import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "component/card/card";
import "./LensPage.scss";

const LensPage = () => {
  const [sortBy, setSortBy] = useState("default");

  const products = [
    {
      id: 1,
      name: "Tròng kính Chemi U2 Chiết suất 1.67",
      brand: "Chemi",
      price: "Liên hệ ngay",
      img: "path-to-image",
    },
    {
      id: 2,
      name: "Tròng kính Bevis Optical Chiết suất 1.56",
      brand: "Bevis",
      price: "Liên hệ ngay",
      img: "path-to-image", 
    },
  ];

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
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
            <Card
              key={product.id}
              image={product.img}
              title={product.name}
              price={product.price}
              colors={product.colors}
              features={["Feature 1", "Feature 2"]} 
              code={product.id.toString()} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LensPage;
