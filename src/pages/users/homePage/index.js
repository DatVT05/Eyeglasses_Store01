import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

const bestSellers = [
  {
    id: 1,
    name: "KÍNH NHỰA LILY 21027",
    price: "220.000 ₫",
    imgSrc: "path-to-image1.jpg",
    colors: ["#000", "#e0c598", "#ffcc00", "#fff", "#f3c5ca"]
  },
  {
    id: 2,
    name: "KÍNH NHỰA CÀNG TITAN LILY 95032",
    price: "690.000 ₫",
    imgSrc: "path-to-image2.jpg",
    colors: ["#999", "#f3c5ca", "#ffcc00", "#e0c598"]
  },
  {
    id: 3,
    name: "KÍNH RÂM LILY P20329",
    price: "220.000 ₫",
    imgSrc: "path-to-image3.jpg",
    colors: ["#f3c5ca", "#fff", "#000", "#330000"]
  },
  {
    id: 4,
    name: "KÍNH NHỰA LILY LM122",
    price: "380.000 ₫",
    imgSrc: "path-to-image4.jpg",
    colors: ["#e0c598", "#000", "#fff", "#f3c5ca", "#999"]
  },
];

const BestSeller = () => {
  return (
    <section className="best-seller">
      <h2 className="section-title">Best Seller</h2>
      <div className="best-seller-list">
        {bestSellers.map((item) => (
          <div key={item.id} className="best-seller-item">
            <img src={item.imgSrc} alt={item.name} className="product-image" />
            <h3 className="product-name">{item.name}</h3>
            <p className="product-price">{item.price}</p>
            <div className="color-options">
              {item.colors.map((color, index) => (
                <span
                  key={index}
                  className="color-dot"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="view-all">
        <button className="view-all-button">Xem tất cả &raquo;</button>
      </div>
    </section>
  );
};

export default BestSeller;

