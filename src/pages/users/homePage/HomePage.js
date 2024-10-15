import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  const bestSellers = [
    {
      id: 1,
      name: "GK. Gọng Nhựa ANB221303",
      price: 350000,
      img: "/path/to/image1.jpg",
    },
    {
      id: 2,
      name: "GK. Gọng Nhựa Cứng AN0845",
      price: 800000,
      img: "/path/to/image2.jpg",
    },
    {
      id: 3,
      name: "GK. Gọng Cốt Kim Loại AN226817",
      price: 550000,
      img: "/path/to/image3.jpg",
    },
    {
      id: 4,
      name: "GK. Gọng Kim Loại AN221434",
      price: 400000,
      img: "/path/to/image4.jpg",
    },
  ];

  const newestCollection = [
    {
      id: 1,
      name: "GK. Gọng Viền Nhựa Titan",
      price: 1600000,
      img: "/path/to/image5.jpg",
    },
    {
      id: 2,
      name: "GK. Gọng Nhựa Cứng",
      price: 1600000,
      img: "/path/to/image6.jpg",
    },
    {
      id: 3,
      name: "GK. Gọng Viền Nhựa Titan",
      price: 1600000,
      img: "/path/to/image7.jpg",
    },
    {
      id: 4,
      name: "GK. Gọng Cấu Kim Loại Titan",
      price: 1600000,
      img: "/path/to/image8.jpg",
    },
  ];

  return (
    <div className="home-page">
      <section className="best-sellers">
        <h2>BÁN CHẠY NHẤT</h2>
        <div className="products-row">
          {bestSellers.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price.toLocaleString()}₫</p>
              <Link to={`/product/${product.id}`} className="buy-btn">
                Xem thêm
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="new-collection">
        <h2>BỘ SƯU TẬP MỚI NHẤT</h2>
        <div className="tabs">
          <Link to="#" className="active">
            Gọng kính
          </Link>
          <Link to="#">Tròng kính</Link>
          <Link to="#">Kính râm</Link>
          <Link to="#">Kính áp tròng</Link>
        </div>
        <div className="products-row">
          {newestCollection.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price.toLocaleString()}₫</p>
              <Link to={`/product/${product.id}`} className="buy-btn">
                Xem thêm
              </Link>
            </div>
          ))}
        </div>

        <Link to="/products/glasses" className="see-more-btn">
          XEM THÊM GỌNG KÍNH
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
