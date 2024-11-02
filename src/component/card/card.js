import React from 'react';
import './card.scss';

const Card = ({ image, title, price, colors, features = [], code }) => { 
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
        
        <div className="card-features">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <span className="feature-icon">🔵</span>
              <span className="feature-text">{feature}</span>
            </div>
          ))}
        </div>
        
        <span className="card-code">{code}</span>
      </div>

      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">{price.toLocaleString()} ₫</p>
        
        <div className="color-options">
          {colors.map((color, index) => (
            <span
              key={index}
              className="color-dot"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
