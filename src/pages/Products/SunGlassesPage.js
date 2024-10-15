import React, { useState } from "react";
import "./SunGlassesPage.scss";

const SunGlassesPage = () => {
  const [sortBy, setSortBy] = useState("default");
  const products = [
    {
      id: 1,
      name: "GK. Gọng Viền Nhựa Titan",
      price: 1600000,
      colors: ["#d4af37", "#000000"],
      img: "path-to-image",
    },
    {
      id: 2,
      name: "GK. Gọng Cấu Kim Loại",
      price: 1600000,
      colors: ["#008000", "#A52A2A"],
      img: "path-to-image",
    },
    {
        id: 1,
        name: "GK. Gọng Viền Nhựa Titan",
        price: 1600000,
        colors: ["#d4af37", "#000000"],
        img: "path-to-image",
      },
      {
        id: 2,
        name: "GK. Gọng Cấu Kim Loại",
        price: 1600000,
        colors: ["#008000", "#A52A2A"],
        img: "path-to-image",
      },
      {
        id: 1,
        name: "GK. Gọng Viền Nhựa Titan",
        price: 1600000,
        colors: ["#d4af37", "#000000"],
        img: "path-to-image",
      },
      {
        id: 2,
        name: "GK. Gọng Cấu Kim Loại",
        price: 1600000,
        colors: ["#008000", "#A52A2A"],
        img: "path-to-image",
      },
      {
        id: 1,
        name: "GK. Gọng Viền Nhựa Titan",
        price: 1600000,
        colors: ["#d4af37", "#000000"],
        img: "path-to-image",
      },
      {
        id: 2,
        name: "GK. Gọng Cấu Kim Loại",
        price: 1600000,
        colors: ["#008000", "#A52A2A"],
        img: "path-to-image",
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
            <li><input type="checkbox" /> xanh lá</li>
            <li><input type="checkbox" /> Xanh dương</li>
            <li><input type="checkbox" /> Nâu</li>
            <li><input type="checkbox" /> Đỏ</li>
            <li><input type="checkbox" /> Xanh</li>
            <li><input type="checkbox" /> Ghi</li>
            <li><input type="checkbox" /> Vàng</li>
            <li><input type="checkbox" /> Hồng</li>
            <li><input type="checkbox" /> Rêu</li>
            <li><input type="checkbox" /> Sữa</li>
            <li><input type="checkbox" /> Vân đá</li>
          </ul>
        </div>

        <div className="filter">
          <h3>Chất liệu</h3>
          <ul>
            <li><input type="checkbox" /> Acetate</li>
            <li><input type="checkbox" /> Kim loại</li>
            <li><input type="checkbox" /> Nhựa</li>
            <li><input type="checkbox" /> Nhựa dẻo</li>
            <li><input type="checkbox" /> Nhựa pha kim loại</li>
            <li><input type="checkbox" /> Titan</li>
          </ul>
        </div>

        <div className="filter">
          <h3>Hình dáng</h3>
          <ul>
            <li><input type="checkbox" /> Browline</li>
            <li><input type="checkbox" /> Chữ nhật</li>
            <li><input type="checkbox" /> Đa giác</li>
            <li><input type="checkbox" /> Hình Oval</li>
            <li><input type="checkbox" /> Hình tròn</li>
            <li><input type="checkbox" /> Hình vuông</li>
            <li><input type="checkbox" /> Mắt mèo</li>
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
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price.toLocaleString()}đ</p>
              <div className="color-options">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    style={{ backgroundColor: color }}
                    className="color-dot"
                  ></span>
                ))}
              </div>
              <button className="buy-btn">Mua Ngay</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SunGlassesPage;
