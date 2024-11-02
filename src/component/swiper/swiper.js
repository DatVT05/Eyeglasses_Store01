import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper.scss';

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
  {
      id: 5,
      name: "KÍNH NHỰA LILY LM169",
      price: "400.000 ₫",
      imgSrc: "path-to-image5.jpg",
      colors: ["#e0c598", "#000", "#fff", "#f3c5ca", "#999"]
    },
];

const SwiperComponent = () => {
    return (
      <div className="best-seller-list">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20} 
          slidesPerView={4} 
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {bestSellers.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="best-seller-item">
                <img src={item.imgSrc} alt={item.name} className="product-image" />
                <h3 className="product-name">{item.name}</h3>
                <p className="product-price">{item.price}</p>
                <button className="buy-btn">Xem thêm</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
}

export default SwiperComponent;
