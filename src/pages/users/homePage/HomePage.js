import React from "react";
import { Link } from "react-router-dom";
import Card from "component/card/card";
import SwiperComponent from "../../../component/swiper/swiper";
import "./HomePage.scss";

const HomePage = () => {
  const bestSellers = [
    <SwiperComponent key="swiper" /> 
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
          {bestSellers.map((product, index) => (
            <div key={index} className="product-card">
              {product}
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
          {newestCollection.map((item) => (
            <Card
            image={item.imgSrc || "default-image.jpg"} 
            title={item.name || "Unknown Product"}
            price={item.price || 0}
            colors={item.colors || []} 
            features={item.features || []} 
            code={item.code || ""}
          />
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
