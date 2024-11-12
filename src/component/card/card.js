import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({
  image,
  title,
  price,
  colors,
  features = [],
  code,
  productId,
}) => {
  return (
    <Link to={`/product/${productId}`} className="card">
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
      </div>

      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">{price.toLocaleString()} ₫</p>
      </div>
    </Link>
  );
};

export default Card;
