import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "component/card/card";
import "./GlassesFramePage.scss";

const GlassesFramePage = () => {
  const [sortBy, setSortBy] = useState("default");

  const products = [
    {
      id: 1,
      name: "GK. Gọng Viền Nhựa Titan",
      price: 1600000,
      colors: ["#d4af37", "#000000"],
      img: "path-to-image-1",
    },
    {
      id: 2,
      name: "GK. Gọng Cấu Kim Loại",
      price: 1600000,
      colors: ["#008000", "#A52A2A"],
      img: "path-to-image-2",
    },
    {
      id: 3,
      name: "GK. Gọng Nhựa Cứng",
      price: 800000,
      colors: ["#000000", "#FFFFFF"],
      img: "path-to-image-3",
    },
  ];

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="glasses-page">
      <div className="filter-section">
        <div className="filter">
          <h3>Màu sắc</h3>
          <ul>
            <li><input type="checkbox" /> Cam</li>
            <li><input type="checkbox" /> Đen</li>
            <li><input type="checkbox" /> Xanh lá</li>
            <li><input type="checkbox" /> Nâu</li>
            <li><input type="checkbox" /> Đỏ</li>
            <li><input type="checkbox" /> Ghi</li>
            <li><input type="checkbox" /> Vàng</li>
          </ul>
        </div>

        <div className="filter">
          <h3>Chất liệu</h3>
          <ul>
            <li><input type="checkbox" /> Acetate</li>
            <li><input type="checkbox" /> Kim loại</li>
            <li><input type="checkbox" /> Nhựa</li>
            <li><input type="checkbox" /> Nhựa dẻo</li>
            <li><input type="checkbox" /> Titan</li>
          </ul>
        </div>

        <div className="filter">
          <h3>Hình dáng</h3>
          <ul>
            <li><input type="checkbox" /> Browline</li>
            <li><input type="checkbox" /> Chữ nhật</li>
            <li><input type="checkbox" /> Oval</li>
            <li><input type="checkbox" /> Hình tròn</li>
            <li><input type="checkbox" /> Hình vuông</li>
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
          <label>Sort By</label>
          <select value={sortBy} onChange={handleSort}>
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

export default GlassesFramePage;
