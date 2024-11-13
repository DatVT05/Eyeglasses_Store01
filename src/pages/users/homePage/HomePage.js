import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "component/card/card";
import SwiperComponent from "../../../component/swiper/swiper";
import "./HomePage.scss";

const HomePage = () => {
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

  const [tab, setTab] = useState(0);

  const handleTabChange = (index) => {
    setTab(index);
  };

  const tabs = [
    { label: "Gọng kính", content: "Các sản phẩm Gọng kính" },
    { label: "Tròng kính", content: "Các sản phẩm Tròng kính" },
    { label: "Kính râm", content: "Các sản phẩm Kính râm" },
    { label: "Kính áp tròng", content: "Các sản phẩm Kính áp tròng" },
  ];

  return (
    <div className="home-page">
      <section className="best-sellers">
        <h2>BÁN CHẠY NHẤT</h2>
        <SwiperComponent />
      </section>

      <section className="new-collection">
        <h2>BỘ SƯU TẬP MỚI NHẤT</h2>
        <div className="tabs">
          {tabs.map((tabItem, index) => (
            <div key={index} onClick={() => handleTabChange(index)}>
              {tabItem.label}
            </div>
          ))}
        </div>

        <div>{tabs[tab].content}</div>

        <Link to="/products/glasses" className="see-more-btn">
          XEM THÊM GỌNG KÍNH
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
