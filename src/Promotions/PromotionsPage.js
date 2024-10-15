import React from 'react';
import { promotions } from './PromotionData'; 
import { Link } from 'react-router-dom';
import './PromotionsPage.scss';

const PromotionsPage = () => {
  return (
    <div className="promotions-page">
      <h1>Ưu Đãi Đặc Biệt</h1>
      <div className="promotions-grid">
        {promotions.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="promotion-card">
            <div className="product-image-wrapper">
              <img src={product.img} alt={product.name} className="product-image" />
            </div>
            <h2>{product.name}</h2>
            <div className="price-section">
              <p className="old-price">{product.oldPrice.toLocaleString()} ₫</p>
              <p className="new-price">{product.newPrice.toLocaleString()} ₫</p>
            </div>
            <div className="color-options">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="color-dot"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  );
};

export default PromotionsPage;
